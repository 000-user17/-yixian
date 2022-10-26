// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

//关闭面板的脚本
const {ccclass, property} = cc._decorator;

@ccclass
export default class exit extends cc.Component {

    @property(cc.Prefab)
    shut_button: cc.Prefab = null;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        //触摸关闭按钮关闭面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            let panel = this.node.getParent();
            
            panel.active = false;
            
        
        });

    }

    // update (dt) {}
}
