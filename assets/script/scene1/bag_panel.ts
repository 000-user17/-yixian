// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class bag_panel extends cc.Component {

    
    //属性面板8个label
    @property(cc.Label)
    it0: cc.Label = null;
    @property(cc.Label)
    it1: cc.Label = null;
    @property(cc.Label)
    it2: cc.Label = null;
    @property(cc.Label)
    it3: cc.Label = null;
    @property(cc.Label)
    it4: cc.Label = null;
    @property(cc.Label)
    it5: cc.Label = null;
    @property(cc.Label)
    it6: cc.Label = null;
    @property(cc.Label)
    it7: cc.Label = null;
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {


        //触摸背包
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event)=>{  //拖动属性面板
            var delta = event.touch.getDelta();   //获得鼠标的位置变化坐标
            this.node.x += delta.x;
            this.node.y += delta.y;

        });

    }

     update (dt) {

        //获取bag物品数量,实时更新
        let item_array = cc.find('persist_node').getComponent("persist_node").getitem(); //由于player脚本初始化该节点父节点为cc.director.getScene()，所以用cc.find顺着根目录查找到player节点
        
        //将属性值投射到属性值面板上
        this.it0 = this.node.getChildByName("item0").getComponent(cc.Label);
        this.it0.getComponent(cc.Label).string = " " + item_array[0];

        this.it1 = this.node.getChildByName("item1").getComponent(cc.Label);
        this.it1.getComponent(cc.Label).string = " " + item_array[1];

        this.it2 = this.node.getChildByName("item2").getComponent(cc.Label);
        this.it2.getComponent(cc.Label).string = " " + item_array[2];

        this.it3 = this.node.getChildByName("item3").getComponent(cc.Label);
        this.it3.getComponent(cc.Label).string = " " + item_array[3];

        this.it4 = this.node.getChildByName("item4").getComponent(cc.Label);
        this.it4.getComponent(cc.Label).string = " " + item_array[4];

        this.it5 = this.node.getChildByName("item5").getComponent(cc.Label);
        this.it5.getComponent(cc.Label).string = " " + item_array[5];

        this.it6 = this.node.getChildByName("item6").getComponent(cc.Label);
        this.it6.getComponent(cc.Label).string = " " + item_array[6];

        this.it7 = this.node.getChildByName("item7").getComponent(cc.Label);
        this.it7.getComponent(cc.Label).string = " " + item_array[7];

     }
}
