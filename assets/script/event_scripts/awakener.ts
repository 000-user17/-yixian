// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class awakener extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Prefab)
    event_controller: cc.Prefab = null

    @property
    event_group: number= 0

    awake()
    {
        let node = cc.instantiate(this.event_controller)
        node.setParent(this.node.getParent())
        node.setPosition(new cc.Vec2(880, 570))
        node.setScale(new cc.Vec2(1,1))
        //console.debug(node.getPosition().x)
        //node.getComponent('event_controller').awake()
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            cc.loader.loadRes("菜单", cc.AudioClip, (res,clip)=>{
                //播放音乐
                let audioID: number = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });

            
            let p_node = cc.find('persist_node').getComponent('persist_node')
            if (p_node.event_permitted && p_node.focus==null)
            {
                p_node.focus = this.node
                this.awake()
                p_node.match_event_grade()
                //p_node.addAge() 改为退出卡牌选择的时候加岁数
                //p_node.changeEnergy(200)
                this.node.active = false

            }
        })
    }

    // update (dt) {}
}
