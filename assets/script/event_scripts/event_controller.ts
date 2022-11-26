// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class event_controller extends cc.Component {
    @property(cc.Prefab)
    event: cc.Prefab = null

    //@property(cc.Prefab)
    //bar: cc.Prefab = null

    @property(cc.Prefab)
    button: cc.Prefab = null

    @property(cc.Prefab)
    exausted_prompt: cc.Prefab = null

    @property(cc.Prefab)
    event_description: cc.Prefab = null

    @property
    benefit_exp: number = 0

    @property
    benefit = null

    @property
    limited_event_record = null

    dispatched_events = []
    num_dispatched = 0

    /*
    clear_event()
    {
        for (let i = 0; i < this.ents.length; ++i)
        {
            this.ents[i].destroy()
            console.debug('attempt to del '.concat(String(i)))
        }
    }
    */

    trim_segm(text: string)
    {
        let c = 0;
        for (let i = 1; i < text.length+1; ++i)
        {
            if (text[i-1]=='\n') c = 0
            c++;
            if (c % 12 == 0)
            {
                text = text.slice(0, i) + '\n' + text.slice(i)
            }
        }
        return text+'\n'
    }

    dispatch_event()
    {
        this.num_dispatched += 1
        //console.debug('pop from:')
        //console.debug(this.dispatched_events[this.num_dispatched-1])
        return this.dispatched_events[this.num_dispatched-1]
    }

    event_describe(description: string)
    {

        description = this.trim_segm(description)
        let node = cc.instantiate(this.event_description)
        node.setParent(this.node)
        node.setPosition(new cc.Vec2(-427, 950))
        node.setScale(new cc.Vec2(3,3))
        node.getComponentInChildren(cc.Label).string = description
        //node.getChildByName('event_prompt').color = cc.Color.ORANGE
    }

    exausted()
    {
        //+动画啥的
        let node = cc.instantiate(this.exausted_prompt)
        node.setParent(this.node)
        node.setPosition(new cc.Vec2(-427, 950))
        node.setScale(new cc.Vec2(3,3))
        //console.debug(node.parent.name)
        cc.find('persist_node').getComponent('persist_node').getComponent('persist_node').log_write('在'+
            cc.find('persist_node').getComponent('persist_node').getAge().toString()+
            '岁，你贪功好进，结果精疲力竭，元气大伤，殚精竭虑之事也一件不成。修炼虽好，可不要贪杯哦。')
        this.benefit_exp = 0
        cc.find('persist_node').getComponent('persist_node').event_permitted = false
    }

    init_event()
    {
        //console.debug('Init Events...')
        //let cur = this.node.getPosition()
        let p_node = cc.find('persist_node').getComponent('persist_node')
        let test = p_node.dispatch_event_without_requirement(0)
        
        let pos = [new cc.Vec2(-727, 1180), new cc.Vec2(-427, 1180), new cc.Vec2(-127, 1180), new cc.Vec2(-560, 770), new cc.Vec2(-240, 770)]
        //在controller选定事件,在event选定分支及代价
        let events = p_node.dispatch_event(cc.find('awakener').getComponent('awakener').event_group, 2, 3)

        for (let i = 0; i < 5; ++i) 
        {
            //还可以在此处处理事件前置关系
            let ent = events[i]
            //console.debug(typeof(ent[1]))
            
            let types = ent[1].toString().split('，')
            let threld = p_node.get_avg_attr()*(1-p_node.rec_gaussian(0.2, 0.2, -0.1, 0.5))
            while ((types.length==3 && this.limited_event_record.has(ent[0].trim())) || 
                    (types[0].trim()!='0' && types[0].trim()!='_' && types[0].split('：')[0]!='特殊' && p_node.get_attr(types[0])<=threld) ||
                    (types[0].split('：')[0]=='特殊' && p_node.get_attr(types[0])!=1))
            //如果其为单次出现的事件并且已经出现过，或者其不满足触发门槛
            //先进行事件类型判断，类型为 1_2[_3], 123是不同属性名称，1决定事件是否出现，2决定分支和收益系数，3决定事件是否只出现一次
            {
                console.debug('该事件不满足要求,重新发事件')
                ent = p_node.dispatch_event_without_requirement(cc.find('awakener').getComponent('awakener').event_group)
                //console.debug(ent)
                types = ent[1].toString().split('，')
            }
            
            let node = cc.instantiate(this.event)
            node.setParent(this.node)
            node.setPosition(pos[i])
            node.setScale(new cc.Vec2(1,1))
            //node.getChildByName('title').getComponent(cc.Label).string = ent[0]
            //console.debug('init dispatch:')
            //console.debug([ent[0].toString(), ent[1].toString(), ent[2].toString(), ent[3].toString()])
            this.dispatched_events.push([ent[0].toString(), ent[1].toString(), ent[2].toString(), ent[3].toString()])
            if (ent[1].toString().split('，').length==3) this.limited_event_record.set(ent[0].trim(), true)
            //console.debug(events[i][1])
            //console.debug(node.getContentSize().toString())
            //console.debug(node.getPosition().x)
            //this.ents.push(node)
            /**/
        }

    }


    init_bar_button()
    {
        //console.debug('Init widgets...')
        /*
        let node = cc.instantiate(this.bar)
        node.setParent(this.node)
        node.setPosition(new cc.Vec2(-550, 210))
        node.setScale(new cc.Vec2(1,1))
        */
        let node = cc.instantiate(this.button)
        node.setParent(this.node)
        node.setPosition(new cc.Vec2(-150, 210))
        //node.setPosition()
        node.setScale(new cc.Vec2(1,1))

    }
    /*
    next()
    {
        
        this.node.getChildByName('progressBar').getComponent('bar').reset()
    }
    */

    gameover()
    {
        
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.benefit = new Map()//记录所有事件结算得到的总收益
        this.limited_event_record = new Map()//记录
        this.init_event()
        this.init_bar_button()   
        
    }

    start () {
        this.node.on('over', ()=>{
            //console.debug('over')
            let p_node = cc.find('persist_node').getComponent('persist_node')
            p_node.addAge()
            if (p_node.getAge()==p_node.age_limited) this.gameover()
            if (cc.find('persist_node').getComponent('persist_node').event_permitted) // 并非是在exausted后才点击over按钮
            {
                //结算事件总收益
                if (this.benefit.has('修为')) p_node.exp_gain(this.benefit.get('修为'))
                let attr = Array.from(this.benefit)
                console.debug(attr)
                for (let i = 0; i < attr.length; ++i)
                {
                    if (attr[i][0]!='修为') p_node.change_attr(attr[i][0], attr[i][1])
                }
            }
            
            //放出事件唤醒按钮，回收事件
            p_node.focus = null
            cc.find('awakener').active = true
            this.node.destroy()
        })
        
        this.node.on('exausted', ()=>{
            console.debug('exausted')
            this.exausted()
        })
        /*
        this.node.on('recover', ()=>{
            console.debug('recover')
            this.recover()
        })
        
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            this.awake()
        })
        */
    }
    
    update (dt) {
        //if (cc.find('persist_node').getComponent('persist_node').getEnergy() > 0)
    }
    /*
    destroy(): boolean {
        let paren = this.node.getParent()
        let n = cc.instantiate(cc.find('event_control'))
        n.setParent(paren)
        return true
    }
    */
    
}
