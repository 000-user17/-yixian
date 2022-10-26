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
    


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        //触摸面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            cc.find('player').getComponent('player').setattribute(1,30); //测试是否能实时增加

        
        });

        
        

    }

     update (dt) {

        //获取player属性值
        let attribute_array = cc.find('player').getComponent("player").getattribute(); //由于player脚本初始化该节点父节点为cc.director.getScene()，所以用cc.find顺着根目录查找到player节点
        
        //将属性值投射到属性值面板上
        this.a0 = this.node.getChildByName("a0").getComponent(cc.Label);
        this.a0.getComponent(cc.Label).string = " " + attribute_array[0];

        this.a1 = this.node.getChildByName("a1").getComponent(cc.Label);
        this.a1.getComponent(cc.Label).string = " " + attribute_array[1];

        this.a2 = this.node.getChildByName("a2").getComponent(cc.Label);
        this.a2.getComponent(cc.Label).string = " " + attribute_array[2];

        this.a3 = this.node.getChildByName("a3").getComponent(cc.Label);
        this.a3.getComponent(cc.Label).string = " " + attribute_array[3];

        this.a4 = this.node.getChildByName("a4").getComponent(cc.Label);
        this.a4.getComponent(cc.Label).string = " " + attribute_array[4];

        this.a5 = this.node.getChildByName("a5").getComponent(cc.Label);
        this.a5.getComponent(cc.Label).string = " " + attribute_array[5];

        this.a6 = this.node.getChildByName("a6").getComponent(cc.Label);
        this.a6.getComponent(cc.Label).string = " " + attribute_array[6];

        this.a7 = this.node.getChildByName("a7").getComponent(cc.Label);
        this.a7.getComponent(cc.Label).string = " " + attribute_array[7];

     }
}
