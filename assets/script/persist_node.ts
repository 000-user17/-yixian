// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class persist_node extends cc.Component {
    gaussian_random(mean=0, sigma=1, n=12) // 0-1上高斯分布
    {
        let ret = 0.
        for (let i = 0; i < n; ++i)
        {
            ret += Math.random()
        }
        return mean + (ret-(n/2)) * sigma
    }


    is_create_bubble:boolean = false;  //是否要产生气泡，或者说是否打坐修炼


    @property(cc.Node)
    beibao: cc.Node = null;

    @property(cc.Node)
    attribute_panel:cc.Node = null;

    @property(cc.Node)
    exp:cc.Node=null;

    @property(Object)
    event_lib: Object = null

    @property
    focus = null


    //lxt:精力条api
    @property
    energy: number = 500

    @property
    event_permitted: boolean = true

    @property
    energy_recover: boolean = true

    max_energy()
    {
        return 500
    }

    setEnergy(e: number)
    {
        this.energy = e
    }

    changeEnergy(e: number)  //改变精力值
    {
        this.energy = this.energy + e <= this.max_energy() ? this.energy + e : this.max_energy()
        //console.debug(this.energy)
    }

    getEnergy()  //返回当前的精力值
    {
        return this.energy
    }
    
    //寿命
    @property
    age: number = 18

    @property
    age_limited: number = 0

    addAge(n = 5) // 每次选择事件经过X年
    {
        this.age = this.age + n <= this.age_limited ? this.age + n : this.age_limited
    }

    getAge()
    {
        return this.age 
    }

    initAge()
    {
        this.age_limited = Math.round(100 + this.gaussian_random(-20,10)) 
    }

    //事件
    @property
    event_grade_map = null
    
    @property
    grade_map = null

    dispatch_event_without_requirement(group: number) //分组内发下一个没有要求的事件（非常驻，常驻都是没有要求的
    {
        //先进行事件类型判断，类型为 1_2[_3], 123是不同属性名称， 1决定事件是否出现，2决定分支和收益系数，3决定事件是否只出现一次
        let group_name = Object.keys(this.event_lib)[group]
        let inconst_events = this.event_lib[group_name]['events'][1]
        let inconst_names = Object.keys(inconst_events)
        //console.debug(inconst_names)
        let t = new Array()
        let ret = []
        for (let name of inconst_names)
        {
            let types = inconst_events[name][0].toString().split('，')
            //console.debug(types[0].trim())
            if (types[0].trim()=='0' || types[0].trim()=='_') t.push(name.trim())
        }
        //console.debug('detect:')
        //console.debug(t)
        t.sort(()=>{
            return 0.5-Math.random()
        })
        ret.push(t[0])
        ret.push(inconst_events[t[0]][0])
        ret.push(inconst_events[t[0]][1])
        ret.push(inconst_events[t[0]][2])
        //console.debug('return: ')
        //console.debug(t[0])
        //console.debug(ret)
        return ret
    }

    dispatch_event(group: number, num_0: number=2, num_1: number=3) 
    // group: 0-凡世；1-坊市；2-宗门；3-魔地；4-海外, 
    // num_0, num_1: 分别是常驻和非常驻需要分发的个数
    // function:从对应group中随机出若干个事件发下,并处理部分前置逻辑关系
    {
        let ret = new Array()
        let group_name = Object.keys(this.event_lib)[group]
        let const_events = this.event_lib[group_name]['events'][0]
        let inconst_events = this.event_lib[group_name]['events'][1]
        let const_names = Object.keys(const_events)
        let inconst_names = Object.keys(inconst_events)
        const_names.sort(()=>{
            return 0.5-Math.random()
        })
        inconst_names.sort(()=>{
            return 0.5-Math.random()
        })
         // 分发的事件为一个数组[[title, type, reward, description], [title, type, reward, description]...]
         
        for (let i = 0; i < num_0; ++i) 
        {
            let t = new Array(4)
            t[0] = const_names[i]
            t[1] = const_events[const_names[i]][0]
            t[2] = const_events[const_names[i]][1]
            t[3] = const_events[const_names[i]][2]
            //console.debug(t)
            ret.push(t)
        }
        for (let i = 0; i < num_1; ++i) 
        {
            let t = new Array(4)
            t[0] = inconst_names[i]
            t[1] = inconst_events[inconst_names[i]][0]
            t[2] = inconst_events[inconst_names[i]][1]
            t[3] = inconst_events[inconst_names[i]][2]
            //console.debug(t)
            ret.push(t)
            
        }
        //console.debug(ret)
        return ret
        //console.debug(typeof(const_names))
        //console.debug(Object.keys(const_events))
        //console.debug(Object.keys(inconst_events))
    }

    match_event_grade() 
    // 将各组事件与其各种收益和消耗基本绑定（不算扰动）
    // 最终一个title对应一个长度为12的数组，对应各组数值
    {
        //假设21点抽牌概率是均匀的，每张牌的期望消耗应该是7*500/21=167，
        //范围应该是1*500/21=24~13*500/21=310，牌的张数根据这个期望均匀分布
        let num_groups = Object.keys(this.event_lib).length
        //console.debug(num_groups)
        this.grade_map = new Map()
        for (let i = 0; i < num_groups; ++i)
        {
            this.event_grade_map.set(i, new Map<string, number>()) //为每个组都分配一个grade map,每个组的每个事件对应一个值(精力消耗)
            this.grade_map.set(i, new Map<string, number>())
            let const_events = this.event_lib[Object.keys(this.event_lib)[i]]['events'][0]
            let inconst_events = this.event_lib[Object.keys(this.event_lib)[i]]['events'][1]
            let const_titles = Object.keys(const_events)
            let inconst_titles = Object.keys(inconst_events)
            
            //console.debug(const_titles)
            //console.debug(inconst_titles)
            const_titles.sort(()=>{
                return 0.5-Math.random()
            })
            inconst_titles.sort(()=>{
                return 0.5-Math.random()
            })
            let interval_const = const_titles.length < 13 ? (310-24)/(const_titles.length-1) : (310-24)/13
            let interval_inconst = inconst_titles.length < 13 ? (310-24)/(inconst_titles.length-1) : (310-24)/13

            let upper = const_titles.length <= 13 ? const_titles.length : 13
            for (let j = 0; j < upper; ++j) 
            {
                this.event_grade_map.get(i).set(const_titles[j], 24+j*interval_const)
                this.grade_map.get(i).set(const_titles[j], j)
            }
            for (let j = upper; j < const_titles.length; ++j)
            {
                let grade = Math.round(Math.random()*13)
                this.event_grade_map.get(i).set(const_titles[j], 24+grade*interval_const)
                this.grade_map.get(i).set(const_titles[j], grade)
            } 

            upper = inconst_titles.length <= 13 ? inconst_titles.length : 13
            for (let j = 0; j < upper; ++j)
            {   
                this.event_grade_map.get(i).set(inconst_titles[j], 24+j*interval_inconst)
                this.grade_map.get(i).set(inconst_titles[j], j)
            }
            
            for (let j = upper; j < inconst_titles.length; ++j) 
            {
                let grade = Math.round(Math.random()*13)
                this.event_grade_map.get(i).set(inconst_titles[j], 24+grade*interval_inconst)
                this.grade_map.get(i).set(inconst_titles[j], grade)
            }
        }

    }

    get_event_energy(group_idx: number, event_title)
    {
        return this.event_grade_map.get(group_idx).get(event_title) + this.gaussian_random(0,10)
    }

    get_event_grade(group_idx: number, event_title)
    {
        return this.grade_map.get(group_idx).get(event_title)
    }

    // lxt:属性
    @property
    attribute_name:string[] = []; //记录属性的名称

    @property
    private attributes = null

    rec_gaussian(mean=0.5, sigma=0.2, lower=0.2, upper=1.0)
    {
        let a = cc.find('persist_node').getComponent('persist_node').gaussian_random(mean, sigma)
        if (a <= lower) return lower
        else if (a >= upper) return upper
        return a
    }

    set_attr(attr_name, attr_value)
    {
        this.attributes.set(attr_name, attr_value)
    }

    change_attr(attr_name, attr_value)
    {
        if (this.attributes.has(attr_name) && attr_value + this.attributes.get(attr_name) < 0) this.attributes.set(attr_name, 0)
        else if (this.attributes.has(attr_name)) this.attributes.set(attr_name, attr_value)
        else this.attributes.set(attr_name, attr_value + this.attributes.get(attr_name))
    }

    get_attr(attr_name)
    {
        if (!this.attributes.get(attr_name)) this.attributes.set(attr_name, Math.round(this.rec_gaussian()*100))
        return this.attributes.get(attr_name)
    }

    get_avg_attr()
    {
        //console.debug('getavg')
        let sum = 0
        let attr = Array.from(this.attributes)
        //console.debug('attr')
        //console.debug(attr.length)
        for (let i = 0; i < attr.length; ++i)
        {
            sum += attr[i][1]
            //console.debug(sum.toString())
        }
         //sum += attr[i][1]
        return sum/attr.length
    }

    init_attr()
    {
        for (let i = 0; i < this.attribute_name.length; ++i)
        {
            let val = Math.round(this.rec_gaussian()*100)
            this.set_attr(this.attribute_name[i], val)
            //console.debug(this.attribute_name[i])
            //console.debug('value: '+val.toString())
        }
    }

    sort_attr(){  //用于给属性值大小排序，并且获得['战力','心境','元神','福源','灵根','悟性','善','恶','特殊']次序的从小到大排序数组
        let attr_value_array:number[] = [];
        let index:number[] = [];
        for(let i =0 ; i<this.attribute_name.length ; ++i){
            attr_value_array.push(this.get_attr(this.attribute_name[i]));
            index.push(i); //保存下标，跟着快排一起排序
        }
        
        this.quick_sort(attr_value_array, index, 0, attr_value_array.length-1); //进行排序
    
        return index;  //index最后保存各个元素下标所在的位置，比如index[3] = 5，即第5号属性排第3+1=4位

    }

    //以下为快排函数*********
    quick_sort(input:number[], index:number[], start:number,end:number){
        if(start>=end){
            return
        }
        let pivotIndex=this.partition(input, index, start, end) // 1.
        this.quick_sort(input,index,start,pivotIndex-1) // 2.
        this.quick_sort(input,index,pivotIndex+1,end)
    }

    partition(input:number[], index:number[], start:number,end:number):number {
        let pivot = input[start] // 1.
        let pivot_idx = index[start];

        let left = start // 2.
        let right = end // 3.
        while (left != right) {
            while(left<right&&input[right]>pivot){ // 4.
                right--
            }
            while(left<right&&input[left]<=pivot){ // 5.
                left++
            }
            if(left<right){ // 6.
                let tmp=input[left]
                input[left]=input[right]
                input[right]=tmp

                let idx=index[left];
                index[left]=index[right];
                index[right]=idx;
            }
        }
        input[start] = input[left] // 7.
        input[left] = pivot

        index[start]=index[left];
        index[left]=pivot_idx


        return left
    }
    //以上为快排函数****************


    //以下是背包属性
    //各类物品
    @property
    private item0: number = 0;
    @property
    private item1: number = 0;
    @property
    private item2: number = 0;
    @property
    private item3: number = 0;
    @property
    private item4: number = 0;
    @property
    private item5: number = 0;
    @property
    private item6: number = 0;
    @property
    private item7: number = 0;

    @property
    item_name:string[] = [];

    //设置属性的数值，选中要更改的属性，然后设置数值
    setitem(itemID:number, itemnum:number){
        let a = this.getitem();
        if(a[itemID] + itemnum < 0){
          //防止小于0的情况
        }

        else{
            switch (itemID) {
                case itemID=0:
                    this.item0 += itemnum;
                    break;
                case itemID=1:
                    this.item1 += itemnum;
                    break;
                case itemID=2:
                    this.item2 += itemnum;
                    break;
                case itemID=3:
                     this.item3 += itemnum;
                    break;
                case itemID=4:
                    this.item4 += itemnum;
                    break;
                case itemID=5:
                    this.item5 += itemnum;
                    break;
                case itemID=6:
                    this.item6 += itemnum;
                    break;
                case itemID=7:
                    this.item7 += itemnum;
                    break;
                default:
                    break;
            }
        }
    }

    //获取属性值，返回属性值数组
    public getitem(){
        let itemarray: number[] = [this.item0, this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7];
        //console.debug("属性值获取成功"+ String(itemarray));
        return itemarray;
    }

    //人物成长属性
    //人物等级
    @property
    level: number = 0;

    @property
    sub_level: number = 0

    get_level()
    {
        let level_name = ['练气','筑基','金丹','元婴']
        return level_name[this.level%4]
    }

    up_level()
    {
        this.level += 1
        this.sub_level = 0
        this.age_limited *= 2.5
        this.age_limited -= this.gaussian_random(0,(this.level+1)*10)
    }

    get_sublevel()
    {
        let level_name = ['初期','中期','后期']
        return level_name[this.sub_level]
    }

    up_sublevel()
    {
        this.sub_level += 1
    }

    //人物当前经验值
    @property
    exp_now: number = 0;

    exp_inf(){
        return [this.level, this.exp_now];
    }

    //用于exp节点初始化经验值条，以及返回等级和经验值，【lxt】：是不是初始化不太需要进度慢慢爬，直接显示经验值就好，否则怪怪的感觉
    exp_init(){
        let exp = cc.find('exp').getComponent(cc.Sprite);
        /*
        this.schedule(()=>{
            exp.fillRange+= (1/this.exp_required());  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1/this.exp_required()/25, this.exp_now);
        */
        exp.fillRange = 0;
        let exp_now = this.exp_now;

        this.exp_now = 0;
        //this.exp_gain(-exp_now);   //【陈晟】修改了一个bug，每次初始化时需要重新执行一次exp_gain()方法，让经验重新上涨，直接改变fillRange不管用


        return [this.level, this.exp_now]; 
    }

    //不同等级的所需经验
    exp_required():number{
        return (2**(this.sub_level+1))*100*(10**this.level);  //可以设置其他单调递增函数
    }

    /*
    //判断经验值是否溢出
    exp_filled(exp_now:number, exp_add:number){
        //如果经验值增长超过最大经验值，则设置为当前等级的最大经验值，否则直接相加作为当前经验值
        if((exp_now+exp_add) <= this.exp_required()){
            this.exp_now += exp_add;
        }
        else{
            this.exp_now = this.exp_required();
        }
    }
    */

    //增长经验条的方法
    exp_gain(event_exp:number, option=true){// 此方法只在Scene Main使用
        //【刘鑫涛】：此处是否不在方法内判别事件类型呢，将此方法只作为操作数据之目的，要增加多少经验由外部逻辑指定，然后由此方法将经验条加到那个位置
        //【陈晟】涛哥这里改的挺好，控制增长时间为1秒
        // 即level1满值200经验，传入参数代表增加经验值
        //延时函数让经验条可以延时连续上涨

        let toward = event_exp / Math.abs(event_exp)

        if(event_exp == 0){ //【陈晟】这里修复了一个bug，即toward不能0/0无限大，不然fillRange会直接满
            toward=0;
        }


        let end = this.exp_now + event_exp
        if (end > this.exp_required()) end = this.exp_required()
        else if (end < 0) end = 0
        let gap = Math.abs(end - this.exp_now)
        //let toward = this.exp_now - begin > 0 ? 1 : -1 //如果经验正在减少
        this.exp_now = end 
        let exp = cc.find('exp').getComponent(cc.Sprite)
        if (option)
        this.schedule(()=>{
            exp.fillRange+= ((gap/30)/this.exp_required()*toward);  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, (gap/30)/this.exp_required(), 30);  //这里连续增长的gap要等于1/this.exp_required()*toward的倒数才能增长到，并且gap越小，前面的间隔时间也越小，则增长速度越快
        
    }


    //日志系统
    @property(cc.Vec2)
    log_loc:cc.Vec2 = new cc.Vec2(0,0);

    @property
    log_freq:number = 1;

    @property
    event_all:string[] = [];   //存放所有的日志，日志节点初始化时写入

    @property
    event_add:string[] = [];   //存放新增加的日志，如果有新的，则日志节点被点开时写入

    //日志初始化并写入, isadd代表是不是再打开日志面板时写入新日志，如果是则一边写一边清空新增加的事件，防止重复写入
    log_init(isadd:boolean=true){
        if(isadd == true){
            for(var i:number=0 ; i<this.event_add.length ; i++ ){

                this.log_add(this.event_add[i]);
            }
            let len = this.event_add.length //必须先得到长度，不然会少pop一个
            for(var i:number=0 ; i<len ; i++ ){

                this.event_add.pop();
            }
            
        }

        else{
            this.log_loc.y = -200;//重新写的时候 要初始化写入文本的y轴位置
            for(var i:number=0 ; i<this.event_all.length ; i++ ){
                this.log_add(this.event_all[i]);
            }

            let len = this.event_add.length   //如果初始化日志节点时新增事件中有事件，也要pop出去
            for(var i:number=0 ; i<len ; i++ ){

                this.event_add.pop();
            }

        }
        
    }

    //保存日志内容
    log_write(event:string){

        var len = this.event_all.push(event);
        var len = this.event_add.push(event);
        
    }

    //日志初始化写入方阿飞
    log_add(event:string){
        //写入日志的准备
        let content = cc.find('log_panel').getChildByName('log_ScrollView').getChildByName("view").getChildByName("content"); //找到要保存日志的父节点
        let new_content = new cc.Node();  //初始化新节点为实例化的一个节点
        var log_text = new_content.addComponent(cc.Label); //增加label组件并赋给log_text
        new_content.color = cc.color(0,0,0); //将字体改为黑色
        //设置文本大小
        log_text.fontSize = 50;
        log_text.lineHeight=50;
        log_text.enableBold = true;
 
        new_content.setParent(content);  //设置根节点为content
        new_content.x = this.log_loc.x;
        new_content.y = this.log_loc.y;


   
        //将超过长度的字符串加上换行符
        let event_copy = [];
        let count_row = 1;
        for(var i :number=0 ; i<event.length ; i++){
           var len = event_copy.push(event[i]);
           if(i%16 == 0 && i!=0){                    //每16个字符加一个换行符
            count_row += 1;
            var len = event_copy.push('\n');
            var len = event_copy.push('\n');
            }
        }
        
         

        this.log_loc.y -= (150*count_row+80); //下一次记录位置往下移动
        this.log_freq += 1; //记录日志数量+1
        content.setContentSize(900, 400*this.log_freq)//日志高度增加

        log_text.string = event_copy.join('');  //属性改变

    }



    onLoad () {
        cc.game.addPersistRootNode(this.node);  //设置本节点为常驻节点
        this.log_loc.y = -200;
        this.attribute_name = ['战力','心境','元神','福源','灵根','悟性','善','恶','特殊'];
        this.item_name = [];
        this.attributes = new Map<string, number>()
        this.init_attr()
        this.initAge()
    }

    start () {
        //console.debug(this.gaussian_random(0,20,100))
        cc.loader.loadRes('events.json', (err, obj)=>{
            //console.debug('flag...')
            if (err){
                //console.debug('err')
                console.debug(err)
                return
            }
            console.debug('read...')
            this.event_lib = obj.json
            this.event_grade_map = new Map()
        })

    }


     update (dt) {



     }
}





