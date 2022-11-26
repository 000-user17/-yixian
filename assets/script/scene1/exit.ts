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

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        //触摸关闭按钮关闭面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            cc.loader.loadRes("关闭", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });

            let panel = this.node.getParent();
            panel.active = false;
            cc.find('persist_node').getComponent('persist_node').focus = null
            
            
        
        });

    }

    // update (dt) {}
}
