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

    yunduo_time:number = 4;

    @property
    speed:number = 2;

    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    public GetRandomNum(Min, Max):number {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}

    start () {

        cc.loader.loadRes("风", cc.AudioClip, (res,clip)=>{
            //播放音乐
            let audioID: number = cc.audioEngine.playEffect(clip, true);
            cc.audioEngine.setVolume(audioID, 1); //设置音量

            
        });
    }

    update (dt) {
        //移动
        //遍历子物体
        /*
        for(let bgNode of this.node.children){
            //移动 帧 -> 秒
            bgNode.x += 200*dt*this.toward; //每秒向下移动100
            if(bgNode.x > 268 || bgNode.x < -448){  //如果都走出了界面，那么循环
                this.toward *= -1;
            }
        }*/


        if(this.yunduo_time <= 0){
            let random1 = this.GetRandomNum(0,4);
            let yunduo = cc.instantiate(this.sp[random1]);
            yunduo.setParent(cc.find('player'));

            setTimeout(()=>{
                yunduo.active = false;
            }, 6000);


            let random_x = this.GetRandomNum(-500,-300);
            let random_y = this.GetRandomNum(-100,400);

            yunduo.x = random_x;
            yunduo.y = random_y;


            this.schedule(()=>{
                yunduo.x += this.speed; //云朵移动速度  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
            },0.01, 1000);
            

            this.yunduo_time = 4;


        }

        else{
            this.yunduo_time-=dt;
        }
        


    }
}
