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
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            cc.loader.loadRes("菜单", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });

            let persist = cc.find('persist_node').getComponent('persist_node');
            persist.is_create_bubble = !persist.is_create_bubble; //点击取反是否进行打坐产生气泡
            if (persist.is_create_bubble) persist.focus = this.node
            else persist.focus = null
        })

    }

    // update (dt) {}
}
