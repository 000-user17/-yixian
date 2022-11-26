// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class setup_panel extends cc.Component {

    isplay:boolean = true;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

	//播放音乐


    start () {
         //触摸打开和关闭声音
         this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            if(this.isplay){
                cc.audioEngine.pauseAll();
                this.isplay = false;
                
            }
            else{
                cc.audioEngine.resumeAll();
                this.isplay = true;
            }
            
            
            });
    }

    update (dt) {


    }
}
