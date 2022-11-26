// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

        //属性面板预制体，需要再cocos中将预制体拖入
        @property(cc.Node)
        shuoming_panel: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            cc.loader.loadRes("菜单", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });

            if (cc.find('persist_node').getComponent('persist_node').focus == null)  
            {
                this.shuoming_panel.active = true;
                cc.find('persist_node').getComponent('persist_node').focus = this.shuoming_panel
            }
            
        
        });
    }

    // update (dt) {}
}
