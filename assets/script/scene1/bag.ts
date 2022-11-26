// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class bag extends cc.Component {

    //属性面板节点，需要再cocos中将预制体拖入
    @property(cc.Node)
    item_panel: cc.Node = null;


    // onLoad () {}

    start () {
        
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            cc.loader.loadRes("菜单", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });


            let persist = cc.find('persist_node').getComponent('persist_node');

            if (persist.focus == null)
            {
                persist.is_create_bubble = false; //点击关闭产生气泡

                this.item_panel.active=true;
                persist.focus = this.item_panel
            }
        });

    }

    // update (dt) {}
}
