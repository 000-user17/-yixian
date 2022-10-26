// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class setup extends cc.Component {

     //设置面板预制体，需要再cocos中将预制体拖入
     @property(cc.Prefab)
     setup_panel: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //触摸设置出现设置面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            let setup_panel = cc.instantiate(this.setup_panel);
            setup_panel.setParent(cc.director.getScene());  //初始化根节点为场景
            //设置到屏幕中央
            setup_panel.x = 240;
            setup_panel.y = 478;
        
        });

    }

    // update (dt) {}
}
