// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class danyao extends cc.Component {

    @property
    danyao_index:number = 0;      //丹药类型,与persist_node里面的丹药顺序一一对应,需要在cocos界面更改不同丹药的索引,并且该变量使得不同丹药能够使用同一脚本

    @property
    danyao_num:number = 0;       //当前丹药数量

    @property
    danyao_label:cc.Node = null; //用于表示丹药数量的label，用于动态生成


    double_effect:boolean;//服务于丹药2，如果使用丹药2则开启双倍效益


    yuce_effect:boolean; //服务于【丹药4】 点击要预测的筋脉即可显示其对丹田的影响


    //下面两个变量用于【丹药3】的撤回操作
    chehui_effect:number[] = []; //用于保存之前的丹田值和超出值得变化栈
    chehui_jinmai:string[] = [];//用于保存筋脉操作顺序的栈

    //入栈方法，在突破筋脉时执行，保存筋脉的explosion+this.danmai的变化用于撤回数值操作
    push_chehui_effect(num:number){
        this.chehui_effect.push(num);
    }
    //在突破时执行，用于保存筋脉的名称，用于将经脉再显示出来
    push_chehui_jinmai(jinmai:string){
        this.chehui_jinmai.push(jinmai);
    }

    // LIFE-CYCLE CALLBACKS:

    get_double_effect(){ //获取是否双倍效益方法
        return this.double_effect;
    }

    get_yuce_effect(){  //获取是否能预测的方法
        return this.yuce_effect;
    }

    set_yuce_effect(bool:boolean){
        this.yuce_effect = bool;
    }

    onLoad () {  
        this.double_effect = false; //初始化为false，即无双倍影响

        this.yuce_effect = false; //初始化是否能预测为false，即不能预测

        cc.find('persist_node').getComponent('persist_node').setitem(this.danyao_index,9); //测试丹药效果，增加丹药【供测试】

        this.get_danyao_num(); //预载时获取对应丹药数量

        this.danyao_label = new cc.Node();

    }

    //获取对应的丹药数量
    get_danyao_num(){
        this.danyao_num = cc.find('persist_node').getComponent('persist_node').getitem()[this.danyao_index]; //获取对应顺序的丹药数
    }

    //丹药效果为增加100点丹田值
    danyao_effect0(){
        let dantian = cc.find('dantian').getComponent('dantian')
        dantian.dantian_gain(dantian.dantian_max()/2);
    }

    //丹药效果为减少100点丹田值
    danyao_effect1(){
        let dantian = cc.find('dantian').getComponent('dantian')
        dantian.dantian_gain(-dantian.dantian_max()/2);

    }

    //丹药效果，使得下次突破筋脉的作用效果翻倍
    danyao_effect2(){
        this.double_effect = true;
    }

    //丹药效果，撤回上一次筋脉突破的效果,只能撤回筋脉突破的效果
    danyao_effect3(){

        //console.debug(this.chehui_effect);
        //console.debug(this.chehui_jinmai);

        if(this.chehui_effect.length == this.chehui_jinmai.length && this.chehui_effect.length!=0){ //当两个栈同时放入进去之后并且不为空，才能执行撤回操作
            let len = this.chehui_effect.length

            cc.find('jinmai').getChildByName(this.chehui_jinmai[len-1]).getComponent('jinmai').appear();
            cc.find('jinmai').getChildByName(this.chehui_jinmai[len-1]).getComponent('jinmai').is_click = false; //重置经脉的可点击性
            cc.find('dantian').getComponent('dantian').dantian_gain(-1*this.chehui_effect.pop()); //撤回丹田的操作
            this.chehui_jinmai.pop();


        }
        else{
            

        }

    }

    //丹药效果，显示下一条要突破筋脉的信息
    danyao_effect4(){
        this.yuce_effect = true;
    }

    
    //丹药效果，重置界面，重新开始突破
    danyao_effect5(){
        cc.director.loadScene('scene2');
    }


    //丹药6效果，增加精力值
    danyao_effect6(){
        cc.find('persist_node').getComponent('persist_node').changeEnergy(200);
    }

    //丹药7效果，增加经验值
    danyao_effect7(){
        let persist = cc.find('persist_node').getComponent('persist_node');
        persist.exp_gain(persist.exp_required()/3);

    }

    

    //丹药使用的提示效果
    danyao_tishi(name:string){
        
        let danyaohaojin = new cc.Node();
        var tishi = danyaohaojin.addComponent(cc.Label); //增加label组件并赋给丹药数量
        danyaohaojin.color = cc.color(255,255,255); //将字体改为白色
        //设置文本大小
        tishi.fontSize = 40;
        tishi.lineHeight = 40;
 
        danyaohaojin.setParent(this.node);  //父节点是this.node才能出来
        danyaohaojin.x = 0; //相对于父节点的横坐标位置不变
        danyaohaojin.y = 0;//相对于父节点的纵坐标在下面一点的位置
        tishi.string = name;  


        this.schedule(()=>{
            danyaohaojin.y += 5;    //增加5和减少0.01都可以增快提示速度
        }, 0.01, 20);

        //延时最后的时间为ms,延时1秒销毁，如果在上面的schedule函数还没执行完就销毁，会报错
        setTimeout(()=>{
            danyaohaojin.destroy();
        }, 1000);


        
    }

    
    //丹药使用时的方法选择
    danyao_use(){
        switch (this.danyao_index) {   //保证不同的丹药执行不同的使用效果方法
            case 0:
                if(this.danyao_num > 0){  //判断丹药数量
                    this.danyao_effect0();
                    this.danyao_tishi('增加一半的丹田值'); //提示丹药使用成功
         
                    
                }

                else{
                    this.danyao_tishi('丹药已耗尽');  //提示丹药耗尽
                    
                }
                
                break;
            
            case 1:
                if(this.danyao_num > 0){
                    this.danyao_effect1();
                    this.danyao_tishi('减少一半的丹田值');
                  
              
                }

                else{
                    this.danyao_tishi('丹药已耗尽');  //提示丹药耗尽

                }
                break;
            
            case 2:
                if(this.danyao_num > 0){
                    this.danyao_effect2();
                    this.danyao_tishi('下一条要突破的筋脉双倍效果');
               
                    
                }

                else{
                    this.danyao_tishi('丹药已耗尽');  //提示丹药耗尽

                }
                
                break;
            
            case 3:
                if(this.danyao_num > 0){
                    this.danyao_effect3();
                    this.danyao_tishi('撤回上一条筋脉突破效果');
               
                    
                }

                else{
                    this.danyao_tishi('丹药已耗尽');  //提示丹药耗尽

                }
                
                break;
            
            
            case 4:
                if(this.danyao_num > 0){
                    this.danyao_effect4();
                    this.danyao_tishi('预测下一条突破筋脉的数值');
               
                    
                }

                else{
                    this.danyao_tishi('丹药已耗尽');  //提示丹药耗尽

                }
                
                break;

            case 5:
                if(this.danyao_num > 0){
                    this.danyao_effect5();
                    this.danyao_tishi('已重置突破');
               
                    
                }

                else{
                    this.danyao_tishi('丹药已耗尽');  //提示丹药耗尽

                }
                
                break;

            case 6:
                if(this.danyao_num > 0){
                    this.danyao_effect6();
                    this.danyao_tishi('精力值增加');
               
                    
                }

                else{
                    this.danyao_tishi('丹药已耗尽');  //提示丹药耗尽

                }
                
                break;
            
            case 7:
                if(this.danyao_num > 0){
                    this.danyao_effect7();
                    this.danyao_tishi('经验值增加');
               
                    
                }

                else{
                    this.danyao_tishi('丹药已耗尽');  //提示丹药耗尽

                }
                
                break;

            
            default:

                break;
        }

        cc.loader.loadRes("使用物品", cc.AudioClip, (res,clip)=>{
            //播放音乐
            let audioID: number = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.05);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });
        
        cc.find('persist_node').getComponent('persist_node').setitem(this.danyao_index, -1); //人物背包丹药数目减少1
        this.get_danyao_num();//实时回传到本界面节点的丹药数量
        this.danyao_ui(); //保证实时更新使用后的丹药数量

    }

    //用于在当前界面实时更新并显示丹药数量
    danyao_ui(){

        var danyao_num = this.danyao_label.addComponent(cc.Label); //增加label组件并赋给丹药数量
        this.danyao_label.color = cc.color(255,255,255); //将字体改为白色
        //设置文本大小
        danyao_num.fontSize = 40;
        danyao_num.lineHeight = 40;
 
        this.danyao_label.setParent(this.node);  //父节点是this.node才能出来
        this.danyao_label.x = 0; //相对于父节点的横坐标位置不变
        this.danyao_label.y = -80;//相对于父节点的纵坐标在下面一点的位置
        danyao_num.string = 'X'+String(this.danyao_num);  
    }

    

    start () {

        this.danyao_ui();
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            //触碰丹药后的效果
            this.danyao_use();


        })

    }

     update (dt) {
        


    }
}
