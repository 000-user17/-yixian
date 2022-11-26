// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            cc.loader.loadRes("start1", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.5);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });

            
            //延时进入主场景
            setTimeout(()=>{
                cc.director.loadScene("main");
            }, 1000);

        })

    // update (dt) {}
    }
}
