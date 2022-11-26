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
     @property(cc.Node)
     setup_panel: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //触摸设置出现设置面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            
        cc.loader.loadRes("菜单", cc.AudioClip, (res,clip)=>{
            //播放音乐
            let audioID: number = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.3);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });

        this.setup_panel.active = true;

        let persist = cc.find('persist_node').getComponent('persist_node');
        persist.is_create_bubble = false; //点击关闭产生气泡
        /*
            let setup_panel = cc.instantiate(this.setup_panel);
            setup_panel.setParent(cc.director.getScene());  //初始化根节点为场景
            //设置到屏幕中央
            setup_panel.x = 240;
            setup_panel.y = 478;
            */
        
        });

    }

    // update (dt) {}
}
