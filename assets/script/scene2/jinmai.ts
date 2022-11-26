// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
/*
该脚本存放在突破场景中，必须要从主场景中切换过来才能正常运行

*/ 
const {ccclass, property} = cc._decorator;

@ccclass
export default class jinmai extends cc.Component {

    @property
    jinmai_index:number = 0;    //表示不同的筋脉，在cocos面板中调整，使得不同的筋脉节点可以使用同一个脚本

    attribute:number = 0;      //暂存本节点筋脉对应的人物属性



    @property
    is_click:boolean = false;  //控制筋脉消失前只能点击一次筋脉

    sort_attr:number[] = [];//获取排序后属性索引的数组


    private random1:number = 0; //随机数的产生，产生于start时，用于控制属性对丹田量的影响；丹药撤回操作将重置改随机数，而观察下一个突破经脉的值的丹药，是不会改变该随机数。从而区分不同【丹药】的效果
    
    private random2:number = 0; //第二种情况的随机数，即当前丹田值大于110

    jinmai_loc:number[] = []; //记录当前筋脉位置


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.attributes_get();  //预载时就加载获取属性

    }

    

    //获取人物八项属性到数组中
    attributes_get(){  
        let persist = cc.find('persist_node').getComponent('persist_node');
        let att_name = persist.attribute_name; //获取属性名称

        this.attribute = persist.get_attr(att_name[this.jinmai_index]); //获取对应索引属性名称的属性值
        
    }

    /**
	 * 生成范围随机数
	 * @Min 最小值
	 * @Max 最大值
     * 给予不同节点相同的脚本，每个节点都会分别执行一次改脚本的start等方法
	 */
	public GetRandomNum(Min, Max):number {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}


    jinmai(){


        cc.loader.loadRes("突破", cc.AudioClip, (res,clip)=>{
            //播放音乐
            let audioID: number = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.1);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });

        
        let att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置

        let double_effect = cc.find('danyao2').getComponent('danyao').get_double_effect();  //丹药2的效益为双倍效果，所以检测danyao2下脚本的double_effect组件
        
        let dantian_now = cc.find('dantian').getComponent('dantian').dantian_now;
        //将人物属性值和人物突破该筋脉带来的收益结合

        let dantian_add = 0;//突破该条筋脉的丹田增加量
        if(dantian_now <= 110){
            dantian_add = (100-att_order*10) + this.random1;
        }
        else{
            dantian_add = (210-dantian_now)+this.random2;

        }


        //用于【丹药2】效果
        if(double_effect){
            dantian_add *= 2;
            cc.find('danyao2').getComponent('danyao').double_effect = false; //只能双倍一次
        }


        if(cc.find('danyao4').getComponent('danyao').get_yuce_effect()){  //【丹药4】效果，如果服用丹药，开启了预测效果

            this.jinmai_tishi('丹田量增加'+String(dantian_add)); //增加的ui显示，只显示，而不进行丹田量的增加
            cc.find('danyao4').getComponent('danyao').set_yuce_effect(false); //只能预测一次，重新设置为负数
            return ; //预测完毕就直接返回，不执行下面的语句了

        }


        let pre_num = cc.find('dantian').getComponent('dantian').explosion + cc.find('dantian').getComponent('dantian').dantian_now;  //操作前丹田和丹田爆炸的数值,【用于丹药3的效果】


        cc.find('dantian').getComponent('dantian').dantian_gain(dantian_add);//增加丹田量

        cc.find('dantian').getComponent('dantian').tupo_num += 1;//突破筋脉，突破筋脉数量+1

        this.jinmai_tishi('丹田量增加'+String(dantian_add)); //增加的ui显示


        cc.find('danyao3').getComponent('danyao').push_chehui_jinmai(this.node.name);//【用于丹药3效果的入栈】入栈突破的筋脉名字
        //【用于丹药3的效果】start
        let change_num = cc.find('dantian').getComponent('dantian').explosion + cc.find('dantian').getComponent('dantian').dantian_now - pre_num; //操作后丹田和丹田超出值的该变量，由于explosion只会再dantian_now满时增加，所以可以将该值放入danyao_3的栈中
        cc.find('danyao3').getComponent('danyao').push_chehui_effect(change_num); 
        //另外一个栈的进入操作写在筋脉处
        //【用于丹药3的效果】end

    }

    //控制经脉消失
    disappear(){
        let sp = this.node.getComponent(cc.Sprite);
        this.schedule(()=>{          //动态消失
            sp.fillRange -= (1/10)
        }, 1/100, 10);

    }

    //控制经脉出现,用于【丹药2】的撤回操作
    appear(){
        //撤回之后重置两种情况的随机数
        this.random1 = this.GetRandomNum(-10,10);
        let att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        this.random2 = this.GetRandomNum((9-att_order)*(-10), (9-att_order)*10);

        cc.find('dantian').getComponent('dantian').tupo_num -= 1; //撤回筋脉，突破数量减一

        let sp = this.node.getComponent(cc.Sprite);
        this.schedule(()=>{          //动态出现
            sp.fillRange += (1/10)
        }, 1/100, 10);
    }

    //点击筋脉的提示效果
    jinmai_tishi(name:string){
        
        let jinmaitupo = new cc.Node();
        var tishi = jinmaitupo.addComponent(cc.Label); //增加label组件并赋给丹药数量
        jinmaitupo.color = cc.color(255,255,255); //将字体改为白色
        //设置文本大小
        tishi.fontSize = 40;
        tishi.lineHeight = 40;
 
        jinmaitupo.setParent(this.node);  //父节点是this.node才能出来
        jinmaitupo.x = 0; //相对于父节点的横坐标位置不变
        jinmaitupo.y = 0;//相对于父节点的纵坐标在下面一点的位置
        tishi.string = name;  


        this.schedule(()=>{
            jinmaitupo.y += 5;    //增加5和减少0.01都可以增快提示速度
        }, 0.01, 20);

        //延时最后的时间为ms,延时1秒销毁，如果在上面的schedule函数还没执行完就销毁，会报错
        setTimeout(()=>{
            jinmaitupo.destroy();
        }, 1000);


        
    }



    start () {
        this.jinmai_loc = [this.node.x, this.node.y]; //获取筋脉初始位置
        this.sort_attr = cc.find('persist_node').getComponent('persist_node').sort_attr(); //获取排序后属性索引的数组
        let att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置

        //根据排序改变颜色
        //this.node.color = cc.color(att_order*20,30,80);

        this.random1 = this.GetRandomNum(-10,10); //获取-10到10的随机数
        this.random2 = this.GetRandomNum((9-att_order)*(-10), (9-att_order)*10);//获取第二个随机数

        //只能点击一次静脉
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            //【丹药4】的效果，预测完毕直接返回
            if(cc.find('danyao4').getComponent('danyao').get_yuce_effect()){
                this.jinmai();
                return ;

            }

            if(!this.is_click){ //确保只能突破一次静脉，即点击一次还没消失时就不能点了
                this.jinmai();
                this.is_click = true; 
            }
                
            this.disappear();
                
            });

        }


    move(){

        let att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置

        let random_loc_x = this.GetRandomNum(-1*(9-att_order), 9-att_order);  //排名越靠前的筋脉越不稳定
        let random_loc_y = this.GetRandomNum(-1*(9-att_order),9-att_order);

        if(this.node.x -this.jinmai_loc[0] < -4){
            random_loc_x = 2;
        }

        else if(this.node.x -this.jinmai_loc[0] > 4){
            random_loc_x = -2;
        }
        
        if(this.node.y -this.jinmai_loc[1] < -4){
            random_loc_y = 2;
        }

        else if(this.node.y -this.jinmai_loc[1] > 4){
            random_loc_y = -2;
        }
        
        this.node.x+=random_loc_x;
        this.node.y+=random_loc_y;


    }
    update (dt) {
        this.move();

    }
}
