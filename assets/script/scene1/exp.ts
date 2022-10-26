// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class exp extends cc.Component {

    @property(cc.Node)
    xiuxian: cc.Node = null;

    //人物等级
    @property
    level: number = 0;

    //人物当前经验值
    @property
    exp_now: number = 0;

    // LIFE-CYCLE CALLBACKS:

    exp_init(){
        this.level = 0;
        this.exp_now = 0;
    }

    //用于自动保存节点获取当前的exp信息
    exp_information(){
        return [this.level, this.exp_now];
    }

    //获取自动保存的exp信息
    exp_auto_save(autosave:number[]){
        [this.level, this.exp_now] = autosave;

        //拿到了自动保存的数值，再修改经验值进度条
        let exp = this.node.getComponent(cc.Sprite);
        this.schedule((as=exp)=>{
            exp.fillRange+= (1/this.exp_required());  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1/this.exp_required()/25, this.exp_now);

    }

    //不同等级的所需经验
    exp_required():number{
        return (this.level+1)*200;  //可以设置其他单调递增函数
    }

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


    //增长经验条的方法
    exp_gain(event_ID:number, event_exp:number){
        //获取到exp属性
        let exp = this.node.getComponent(cc.Sprite);

        //根据不同的事件获取不同的经验值
        switch (event_ID) {
            case event_ID=0:
                //延时函数让经验条可以连续上涨
                this.schedule((as=exp)=>{
                    exp.fillRange+= (1/this.exp_required());  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
                }, 1/this.exp_required()/25, event_exp);
                
                this.exp_filled(this.exp_now, event_exp);  //当前经验值数值增长
                
                break;
        
            default:
                break;
        }

    }


    onLoad () {
        this.exp_init(); //初始化为exp各项属性值

    }


    start () {  

        //获取persisit_node中自动保存的经验值
        this.exp_auto_save(cc.find('persist_node').getComponent('persist_node').exp_inf_message());
        
        
        

        //触摸经验条面板，测试经验条增加
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            this.exp_gain(0,100);

        });
        
    }

     update (dt) {



        //如果经验值满，则可以进入修仙界面
        if(this.exp_now == this.exp_required()){
            this.xiuxian.active=true;

        }
        else{
            this.xiuxian.active=false;
        }


     }
}
