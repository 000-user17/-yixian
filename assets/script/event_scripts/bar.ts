// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class bar extends cc.Component {

    @property
    fatigue: number = 500;

    @property
    recover_inteval:number = 3;  //精力条每隔3秒恢复一次

    
    recover()
    {
        //+动画啥的
        cc.find('persist_node').getComponent('persist_node').event_permitted = true
        this.node.getChildByName('prompt').color = cc.Color.GREEN
    }
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // for test
        this.node.on(cc.Node.EventType.TOUCH_START,()=>{
            //cc.find('persist_node').getComponent('persist_node').changeEnergy(100)
        })
    }

    /*
    this.fatigue += val
    console.debug(this.fatigue)
    this.node.getComponent(cc.ProgressBar).progress = this.fatigue/500.
    if (this.fatigue >= 500.)
    {
        // this.settle() //结算再reset 
        console.debug('fatigue bomb and BEGIN NEXT ROUND INSTANTLY !!!')
        this.node.dispatchEvent(new cc.Event.EventCustom("exausted", true))
        //this.node.getParent().getChildByName('button')
        // 暂时不进行：this.node.getParent().getChildByName('button').getComponent('next').next()
    } 
    */
        //else this.getComponent(cc.ProgressBar).progress = this.fatigue / 500.
        //console.debug('SET')

    update (dt) {
        let src = this.fatigue
        this.fatigue = cc.find('persist_node').getComponent('persist_node').getEnergy()
        this.fatigue = this.fatigue < 0 ? 0 : this.fatigue //filtering
        
        if (src != this.fatigue) //pn中的精力值发生了改变
        {
            //console.debug('Bar')
            //console.debug(cc.find('event_controller').getComponent('event_controller').event_permitted)
            //console.debug('target: '+String(this.fatigue))
            this.schedule(()=>{
                this.node.getComponent(cc.ProgressBar).progress += (this.fatigue-src)/500/5
            }, dt, 5)
            if (src <= 0 && this.fatigue > 0) this.recover()
            /*
            if (this.fatigue <= 0) //energy 变化的结果是让当前值变成<=0
            {
                console.debug('target: '+String(cc.find('persist_node').getComponent('persist_node').getEnergy()))
                //this.getComponent(cc.ProgressBar) 变红一下：换个材质或红框的图
                cc.find('event_controller').emit('exausted')
            }
            else this.recover()//energy 变化的结果是让当前值变成>0
            */
        }

        
        //精力条随时间恢复
        if(this.recover_inteval >= 0){
            this.recover_inteval -= dt
        }
        else{
            cc.find('persist_node').getComponent('persist_node').changeEnergy(1);
            this.recover_inteval = 3;
        }
        


        //this.node.getChildByName('prompt').getComponent(cc.Label)
        this.getComponentInChildren(cc.Label).string = Math.round(this.fatigue).toString() + ' / 500'
        if (this.fatigue == 0) this.node.getChildByName('prompt').color = cc.Color.RED
        
    }
}
