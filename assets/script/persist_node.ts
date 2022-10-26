// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class persist_node extends cc.Component {

    @property(cc.Node)
    beibao: cc.Node = null;

    @property(cc.Node)
    attribute_panel:cc.Node = null;

    @property(cc.Node)
    exp:cc.Node=null;

    @property
    auto_save_time : number;

    @property
    exp_inf: number[] = [0,0];


    // LIFE-CYCLE CALLBACKS:

    exp_inf_message(){
        return this.exp_inf;
    }

     onLoad () {

     }

    start () {
        this.auto_save_time = 3;//设置自动保存时间
        
        cc.game.addPersistRootNode(this.node);
        
    }

     update (dt) {

        //主场景中保存,先获取当前运行的场景名称
        if(cc.director.getScene().name == 'main'){
            this.exp = cc.find('exp');
            this.exp_inf = this.exp.getComponent('exp').exp_information();

            if(this.auto_save_time <= 0){
                this.auto_save_time = 3;
                console.debug("自动保存");
    
                //自动得到并保存经验值
                this.exp_inf = this.exp.getComponent('exp').exp_information();
                console.debug(this.exp_inf_message());
                
            }
            else{
                this.auto_save_time -= dt;
            }
        }


     }
}
