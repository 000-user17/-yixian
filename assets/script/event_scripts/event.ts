// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class event extends cc.Component {
    @property
    ent = null

    //@property(cc.Prefab)
    //description: cc.Prefab = null

    //_random_price: number = 0
    //_exp_gaining: number = 0

    player: cc.Animation = null

    @property
    benefit_total: number = 0

    show_event()
    {
        
    }


    open()
    {
        //打开事件之动画逻辑
    }

    diminish(tar: cc.Vec2)
    {
        let mv_action = cc.moveTo(0.5, tar)
        let sc_action = cc.scaleTo(0.5, 0, 0)
        
        this.node.runAction(mv_action)
        this.node.runAction(sc_action)
        //this.node.destroy()
        
    }

    clear()
    {
        this.destroy()
    }

    onLoad () {
        //this._random_price = Math.random() * 400
        //this._exp_gaining = Math.random() * 50 // 此处用这个随机数指代事件类型
        //this.player = this.node.getComponent(cc.Animation)
    }


    start () {
        /* dispatch one event to this node */
        this.ent = this.node.getParent().getComponent('event_controller').dispatch_event()
        let p_node = cc.find('persist_node').getComponent('persist_node')
        //console.debug('pop finished')
        //console.debug(this.ent)
        this.node.getComponentInChildren(cc.Label).string = p_node.get_event_grade(0, this.ent[0]) + ':' + this.ent[0]
        this.node.getChildByName('title').color = cc.Color.BLUE
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{

            cc.loader.loadRes("翻牌", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            
            if (p_node.event_permitted)
            {
                //console.debug(this.ent[0]+'map to '+p_node.get_event_energy(this.ent[0]).toString())
                //console.debug(this.ent)
                let price = Math.round(p_node.get_event_energy(0, this.ent[0]))
                //this.ent[0] = 'GRADE: ' + p_node.get_event_grade(0, this.ent[0]) + this.ent[0]
                //console.debug('touch the event : '+price.toString())
                p_node.changeEnergy(-price)
                if (p_node.getEnergy() <= 0) // 点下去爆了精力条，不需要进行事件逻辑判断
                {
                    //console.debug('exausted: '+String(cc.find('persist_node').getComponent('persist_node').getEnergy()))
                    //this.getComponent(cc.ProgressBar) 变红一下：换个材质或红框的图
                    cc.find('event_controller').emit('exausted')
                }
                else
                {
                    //先进行事件类型判断，类型为 1_2[_3], 123是不同属性名称， 1决定事件是否出现，2决定分支和收益系数，3决定事件是否只出现一次
                    //this.show_event()
                    /*
                    console.debug('show this event:')
                    console.debug(this.ent[0])
                    console.debug(this.ent[1])
                    console.debug(this.ent[2])
                    console.debug(this.ent[3])
                    console.debug('========end show========')
                    */
                    let type = this.ent[1].split('，')
                    let settle_desc = ''
                    if (type.length >= 2 && type[1]!='_')//需要进行分支判断和收益放缩
                    {
                        let branchs = this.ent[3].split('#')
                        let threld = p_node.get_avg_attr()*(1-p_node.rec_gaussian(-0.1, 0.1, -0.3, 0.1))
                        //console.debug(threld)
                        //console.debug(threld.toString())
                        if (p_node.get_attr(type[1]) >= threld)
                        {
                            //===>通过门槛, 事件总收益和price比例类近
                            console.debug('pass the threld')
                            this.ent[3] = branchs[0]+branchs[1]
                            let scale = p_node.get_attr(type[1])/threld
                            let rewards = this.ent[2].split('，')
                            this.benefit_total = (price + p_node.gaussian_random(0, 5))*rewards.length*scale
                            price = price*(1-(p_node.get_attr('灵根')-50)/100) // 代价需要跟着灵根有一定的浮动
                            let remain_por = 1
                            for (let i = 0; i < rewards.length; ++i)
                            {
                                if (rewards[i].split('：')[0]=='特殊')
                                {
                                    this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], 1)
                                    settle_desc += '\n得到'+rewards[i].split('：')[1]+'。'
                                }
                                else
                                {
                                    let por = remain_por*p_node.rec_gaussian(0.4, 0.1, 0.2, 0.6)
                                    let reward = Math.round(this.benefit_total*por/500*p_node.exp_required()/(2**p_node.level))
                                    let cat = '+'
                                    if (type[0] == '1')
                                    {
                                        cat = ''
                                        reward = -reward
                                    } 
                                    if (!this.node.getParent().getComponent('event_controller').benefit.has(rewards[i]))
                                            this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], reward)
                                    else this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], 
                                            this.node.getParent().getComponent('event_controller').benefit.get(rewards[i])+reward)
                                    //因为寿命是指数级增加的，所以每个级别需要消耗的精力管数也是指数增加，而其他属性因为判定总是用均值所以无关紧要
                                    settle_desc += '\n'+rewards[i]+cat+' '+reward.toString()
                                    remain_por -= por
                                }
                            }
                        }
                        else
                        {
                            console.debug('not pass the threld')
                            this.ent[3] = branchs[0]+branchs[2]
                        }
                    }
                    else//无分支的事件
                    {
                        console.debug('no branch')
                        let rewards = this.ent[2].split('，')
                        this.benefit_total = (price + p_node.gaussian_random(0, 5))*rewards.length
                        let norm = p_node.get_attr('灵根')
                        price = price*(1-(norm-50)/100) // 代价需要跟着灵根有一定的浮动
                        let remain_por = 1
                        for (let i = 0; i < rewards.length; ++i)
                        {
                            if (rewards[i].split('：')[0]=='特殊')
                            {
                                this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], 1) 
                                settle_desc += '\n得到'+rewards[i].split('：')[1]+'。'
                            }
                            else if (i < rewards.length - 1)
                            {
                                let por = remain_por*p_node.rec_gaussian(0.5, 0.1, 0.2, 0.8)
                                let cat = '+'
                                let reward = Math.round(this.benefit_total*por/500*p_node.exp_required()/(2**p_node.level))
                                if (type[0] == '1')
                                {
                                    cat = ''
                                    reward = -reward
                                } 
                                if (!this.node.getParent().getComponent('event_controller').benefit.has(rewards[i]))
                                            this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], reward)
                                    else this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], 
                                            this.node.getParent().getComponent('event_controller').benefit.get(rewards[i])+reward)
                                settle_desc += '\n'+rewards[i]+cat+' '+reward.toString()
                                remain_por -= por
                            }
                            else
                            {
                                let cat = '+'
                                let reward = Math.round(this.benefit_total*remain_por/500*p_node.exp_required()/(2**p_node.level))
                                if (type[0] == '1')
                                {
                                    cat = ''
                                    reward = -reward
                                } 
                                if (!this.node.getParent().getComponent('event_controller').benefit.has(rewards[i]))
                                            this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], reward)
                                    else this.node.getParent().getComponent('event_controller').benefit.set(rewards[i], 
                                            this.node.getParent().getComponent('event_controller').benefit.get(rewards[i])+reward)
                                settle_desc += '\n'+rewards[i]+cat+' '+reward.toString()
                            }
                        }
                    }
                    console.debug(settle_desc)
                    this.node.getParent().getComponent('event_controller').event_describe(this.ent[3]+settle_desc)
                    //console.debug(price)
                    //console.debug(this.benefit_total*(p_node.exp_required()/500))
                    p_node.getComponent('persist_node').log_write(this.ent[3])
                }
                this.diminish(new cc.Vec2(cc.find('energyBar').getComponent(cc.ProgressBar).progress*500-580, 210))
                //console.debug(this.node.getPosition().x, this.node.getPosition().y)
            }
            else console.debug('been exausted!')
        })

    }

    update (dt) {
        
        
    }
}
