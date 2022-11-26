// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class music extends cc.Component {

    @property
    scene:number = 0;

    @property
    audioID:number = 0;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {


        //要先在node添加audiosource组件
        let player:cc.AudioSource = this.getComponent(cc.AudioSource); //获取音乐组件

        if(this.scene == 0){
            cc.loader.loadRes("main", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playMusic(clip, true);
                this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.6);
                //停止播放音乐
            });
        }
        
        else if(this.scene == 1){


            cc.loader.loadRes("scene2", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playMusic(clip, true);
                this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.4)
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
        }

        else {
            cc.loader.loadRes("start", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playMusic(clip, true);
                this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.6);
                //停止播放音乐
            });
        }
        
    }

    update (dt) {
 
        
    }
}
