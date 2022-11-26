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

    @property
    level:number = 0;

    @property
    exp_now:number = 0;

    // LIFE-CYCLE CALLBACKS:



   // onLoad () {}


    start () {     
        
        [this.level, this.exp_now] = cc.find('persist_node').getComponent('persist_node').exp_init();  //初始化已经保存的经验条

        //cc.find('persist_node').getComponent('persist_node').exp_gain(1000);  //测试时候用的，一开始就填满经验条 【供测试】

        //触摸经验条面板，测试经验条增加，【供测试】
        
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            //cc.find('persist_node').getComponent('persist_node').exp_gain(200);
            //cc.find('persist_node').getComponent('persist_node').log_write("经验值增加了~");

        });
        
        
    }

     update (dt) {
        [this.level, this.exp_now] = cc.find('persist_node').getComponent('persist_node').exp_inf();
        let sub_level = cc.find('persist_node').getComponent('persist_node').get_sublevel()
        this.node.getComponentInChildren(cc.Label).string = Math.round(this.exp_now).toString() + '/' +
             Math.round(cc.find('persist_node').getComponent('persist_node').exp_required()).toString()

        //如果经验值满，则可以进入修仙界面
        if(this.exp_now >= cc.find('persist_node').getComponent('persist_node').exp_required() && 
            this.node.getComponent(cc.Sprite).fillRange >= 1)
        {
            if (sub_level == '后期')
            {
                this.node.getParent().getChildByName('upgrade').getComponent(cc.Button).interactable = true
                this.node.getParent().getChildByName('upgrade').getChildByName('Background').color = cc.Color.GREEN
            }
            else
            {
                cc.find('persist_node').getComponent('persist_node').exp_init()
                cc.find('persist_node').getComponent('persist_node').up_sublevel()
                //突破动画
            }
        }
        /*
        if(this.exp_now == cc.find('persist_node').getComponent('persist_node').exp_required() && this.node.getComponent(cc.Sprite).fillRange >= 1){
            this.xiuxian.active=true;

        }
        else{
            this.xiuxian.active=false;
        }
        */


     }
}
