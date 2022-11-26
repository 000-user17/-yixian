// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class over extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Prefab)
    events: cc.Prefab = null;

    //q_ents: cc.NodePool = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    next()
    {

        cc.loader.loadRes("关闭", cc.AudioClip, (res,clip)=>{
            //播放音乐
            let audioID: number = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.3);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });

        this.node.dispatchEvent(new cc.Event.EventCustom("over", true))
        cc.find('persist_node').getComponent('persist_node').focus = null
    }

    // update (dt) {}
}
