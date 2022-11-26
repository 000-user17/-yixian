// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import player from "./player";

const {ccclass, property} = cc._decorator;

@ccclass
export default class attribute_panel extends cc.Component {

    //属性面板8个label
    @property(cc.Label)
    a0: cc.Label = null;
    @property(cc.Label)
    a1: cc.Label = null;
    @property(cc.Label)
    a2: cc.Label = null;
    @property(cc.Label)
    a3: cc.Label = null;
    @property(cc.Label)
    a4: cc.Label = null;
    @property(cc.Label)
    a5: cc.Label = null;
    @property(cc.Label)
    a6: cc.Label = null;
    @property(cc.Label)
    a7: cc.Label = null;
    @property(cc.Label)
    a8: cc.Label = null;
    
    @property
    attr = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.attr = [this.a0 ,this.a1, this.a2, this.a3, this.a4, this.a5, this.a6, this.a7, this.a8]
        
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event)=>{  //拖动属性面板
            var delta = event.touch.getDelta();   //获得鼠标的位置变化坐标
            this.node.x += delta.x;
            this.node.y += delta.y;

        });
    }

     update (dt) {
        let p_node = cc.find('persist_node').getComponent("persist_node")
        //获取player属性值
        for (let i = 0; i < this.attr.length; ++i)
        {
            this.attr[i].string = p_node.attribute_name[i]+': '+p_node.get_attr(p_node.attribute_name[i])
        }
     }
}
