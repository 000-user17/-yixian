// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class log extends cc.Component {

    //设置面板预制体，需要再cocos中将预制体拖入
    @property(cc.Node)
    log_panel: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        //触摸设置出现设置面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            this.log_panel.active=true;
        });

    }

    // update (dt) {}
}
