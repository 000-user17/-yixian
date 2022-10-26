// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //触摸返回主场景，延时0.1秒返回
            this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            this.schedule(()=>{
                cc.director.loadScene("main");
            },0.5, 0, 0.1);
        
        });

    }

    // update (dt) {}
}
