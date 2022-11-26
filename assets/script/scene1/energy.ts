// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    fatigue:number = 500;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        let src = this.fatigue
        this.fatigue = cc.find('persist_node').getComponent('persist_node').getEnergy()
        this.fatigue = this.fatigue < 0 ? 0 : this.fatigue //filtering
        
        this.schedule(()=>{
            this.node.getComponent(cc.ProgressBar).progress += 1
        }, dt*10, 5)

    }
}
