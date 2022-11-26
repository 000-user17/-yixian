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


    breakThrough()
    {
        cc.director.loadScene('scene2')
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.getComponent(cc.Button).interactable = false;
        this.node.getChildByName('Background').color = cc.Color.YELLOW

    }

    update (dt) {

    }
}
