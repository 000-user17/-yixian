// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class xiuxian extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //触摸修仙按钮
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            cc.director.loadScene("scene2");
        
        });

    }

    // update (dt) {}
}
