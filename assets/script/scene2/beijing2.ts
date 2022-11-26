// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    sp:cc.Prefab[] = [];

    toward:number = 1;

    shandian_time:number = 3;

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    public GetRandomNum(Min, Max):number {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}

    start () {
    }

    update (dt) {
        //移动
        //遍历子物体
        for(let bgNode of this.node.children){
            //移动 帧 -> 秒
            bgNode.x += 500*dt*this.toward; //每秒移动100
            if(bgNode.x > 1300 || bgNode.x < -1300){  //如果都走出了界面，那么循环
                this.toward *= -1;
            }
        }


        if(this.shandian_time <= 0){
            let random1 = this.GetRandomNum(0,4);
            let shandian = cc.instantiate(this.sp[random1]);
            shandian.setParent(cc.director.getScene());

            setTimeout(()=>{
                shandian.destroy();
            }, 3000);

            cc.loader.loadRes("下雨打雷", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 1); //设置音量

                setTimeout(()=>{
                    cc.audioEngine.stop(audioID);
                }, 2000);
                
            });

            let random_x1 = this.GetRandomNum(0,400);
            let random_x2 = this.GetRandomNum(800, 1400)
            let random_y = this.GetRandomNum(1000,2500);

            let random2 = this.GetRandomNum(0,1);
            if(random2 == 0){
                shandian.x = random_x1;
            }
            else{
                shandian.x = random_x2;
            }
            
            shandian.y = random_y;

            this.shandian_time = 2;


        }

        else{
            this.shandian_time-=dt;
        }


    }
}
