// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    gameover()
    {

    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        let data_node = cc.find('persist_node').getComponent('persist_node')
        
        if (data_node.getAge() > data_node.age_limited) this.gameover()
        this.node.setPosition(cc.find('player').position.x, cc.find('player').position.y + 150)
        this.node.getChildByName('age_num').getComponent(cc.Label).string =  
            Math.round(cc.find('persist_node').getComponent('persist_node').getAge()).toString() + '岁 / ' + 
            Math.round(cc.find('persist_node').getComponent('persist_node').age_limited).toString() + '岁 ' +
            '[' + cc.find('persist_node').getComponent('persist_node').get_level() + 
            cc.find('persist_node').getComponent('persist_node').get_sublevel() + '] '
    }
}
