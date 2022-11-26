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

     onLoad () {
        
     }


    start () {
        cc.find('persist_node').getComponent('persist_node').log_init(false); //新建立该节点时，将保存节点中的所有日志记录写入日志，分为两种情况，第一是初始化场景，第二是切换场景销毁了该节点，然后重新创建时


        //触摸日志
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event)=>{
            var delta = event.touch.getDelta();   //获得鼠标的位置变化坐标
            this.node.x += delta.x;
            this.node.y += delta.y;
        
        });

    }

    update (dt) {
        
    }
}
