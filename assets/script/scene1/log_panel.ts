// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class log_panel extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    //游戏操作中日志的保存
    log_add(){

    }

    start () {
        //触摸日志
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            
        
        });

    }

    // update (dt) {}
}
