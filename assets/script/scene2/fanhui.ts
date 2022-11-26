// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class fanhui extends cc.Component {

    @property(cc.Prefab)
    defeat:cc.Prefab = null;

    @property(cc.Prefab)
    success:cc.Prefab = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    /**
	 * 生成范围随机数
	 * @Min 最小值
	 * @Max 最大值
     * 给予不同节点相同的脚本，每个节点都会分别执行一次改脚本的start等方法
	 */
	public GetRandomNum(Min, Max):number {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}

    //突破分支对应突破不同情况的效果
    tupo(){

        let dantian = cc.find('dantian').getComponent('dantian');

        let persist = cc.find('persist_node').getComponent('persist_node'); //获取常驻节点
        
                //丹田值如果超过了最大丹田量的不良影响
                if(dantian.explosion > 0){
                    cc.find('persist_node').getComponent('persist_node').exp_now = 0 ; //如果丹田值爆满，会有惩罚,扣除一半经验值
                    cc.find('persist_node').getComponent('persist_node').changeEnergy(-200); //扣除200点精力值
                    cc.find('persist_node').getComponent('persist_node').log_write('丹田值爆炸，精力值和经验值都下降')

                    //随机降低2次属性
                    for(let i= 0 ; i<2 ; ++i){
                        let att_id = this.GetRandomNum(0,8); //随机提升某一项属性
                        let att_name = persist.attribute_name[att_id];  //获得相应的属性名
                        if(persist.get_attr(att_name) == 0){
                            persist.change_attr(att_name, 0); //改变对应的属性，增加一点
                        }
                        
                        else{
                            persist.change_attr(att_name, -30); //改变对应的属性，增加一点
                        }
                        
                    }


                    let defeat = cc.instantiate(this.defeat);
                    defeat.setParent(cc.director.getScene());

                    cc.loader.loadRes("失败", cc.AudioClip, (res,clip)=>{
                        //播放音乐
                        let audioID: number = cc.audioEngine.playEffect(clip, false);
                        cc.audioEngine.setVolume(audioID, 0.8);
                        //停止播放音乐
                        //cc.audioEngine.stop(audioID);
                    });



                }
                //如果丹田值没超
                else{
                    let tupo_num  = cc.find('dantian').getComponent('dantian').tupo_num;
                    let levelup_prob = 0.6*(dantian.get_dantian()/dantian.dantian_max()) + 0.4*tupo_num/9 ;  //突破概率

                    let random = this.GetRandomNum(0,10000); //这边的随机值需要更改
                    /*
                    console.debug(random);
                    console.debug(levelup_prob*10000);
                    cc.find('persist_node').getComponent('persist_node').up_level()//突破成功等级加1
                    cc.find('persist_node').getComponent('persist_node').log_write("成功突破,等级加1 !!!");
                    cc.find('persist_node').getComponent('persist_node').exp_now = 0;
                    */
                   //突破成功
                    if(random<=levelup_prob*10000){
                        cc.find('persist_node').getComponent('persist_node').up_level()//突破成功等级加1
                        cc.find('persist_node').getComponent('persist_node').log_write("成功突破,等级加1 !!!");
                        cc.find('persist_node').getComponent('persist_node').exp_now = 0;

                        //所有属性随机增加
                        for(let i= 0 ; i<9 ; ++i){
                            let att_add = this.GetRandomNum(50,100); //随机提升某一项属性
                            let att_name = persist.attribute_name[i];  //获得相应的属性名
                        
                            persist.change_attr(att_name, att_add); //改变对应的属性，增加一点
                        
                        }

                        let success = cc.instantiate(this.success);
                        success.setParent(cc.director.getScene());

                        cc.loader.loadRes("成功", cc.AudioClip, (res,clip)=>{
                            //播放音乐
                            let audioID: number = cc.audioEngine.playEffect(clip, false);
                            cc.audioEngine.setVolume(audioID, 0.8);
                            //停止播放音乐
                            //cc.audioEngine.stop(audioID);
                        });


                    }
                    //突破失败
                    else{
                        cc.find('persist_node').getComponent('persist_node').log_write("突破失败,等级不变 !!!");
                        cc.find('persist_node').getComponent('persist_node').exp_now /= 2 ; //如果丹田值爆满，会有惩罚,扣除一半经验值
                        let defeat = cc.instantiate(this.defeat);
                        defeat.setParent(cc.director.getScene());

                        //随机降低2次属性
                        for(let i= 0 ; i<2 ; ++i){
                            let att_id = this.GetRandomNum(0,8); //随机提升某一项属性
                            let att_name = persist.attribute_name[att_id];  //获得相应的属性名
                            if(persist.get_attr(att_name) == 0){
                                persist.change_attr(att_name, 0); //改变对应的属性，增加一点
                            }
                        
                            else{
                                persist.change_attr(att_name, -30); //改变对应的属性，增加一点
                            }
                        
                        }

                        cc.loader.loadRes("失败", cc.AudioClip, (res,clip)=>{
                            //播放音乐
                            let audioID: number = cc.audioEngine.playEffect(clip, false);
                            cc.audioEngine.setVolume(audioID, 0.8);
                            //停止播放音乐
                            //cc.audioEngine.stop(audioID);
                        });
                    }
                    

                }

    }

    start () {
        //触摸返回主场景，延时0.1秒返回, 可以针对不同的突破效果产生不同的动画，就类似于抽卡动画
            this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
                this.tupo();
                
                //延时进入主场景

                setTimeout(()=>{
                    cc.director.loadScene("main");
                }, 3000);
        
        });

    }

    // update (dt) {}
}
