// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class player extends cc.Component {
    
    //属性面板预制体，需要再cocos中将预制体拖入
    @property(cc.Node)
    attribute_panel: cc.Node = null;


    @property(cc.Label)
    label: cc.Label = null;
    
    //人物的八种属性
    @property
    private attribute0: number = 0;
    @property
    private attribute1: number = 0;
    @property
    private attribute2: number = 0;
    @property
    private attribute3: number = 0;
    @property
    private attribute4: number = 0;
    @property
    private attribute5: number = 0;
    @property
    private attribute6: number = 0;
    @property
    private attribute7: number = 0;

    
    //设置属性的数值，选中要更改的属性，然后设置数值
    setattribute(attID:number, attnum:number){
        
        //写入日志的准备
        let content = cc.find('log_panel').getChildByName('log_ScrollView').getChildByName("view").getChildByName("content"); //找到要保存日志的父节点
        let new_content = new cc.Node('item'+attID);  //初始化新节点为实例化的一个节点
        var log_text = new_content.addComponent(cc.Label); //增加label组件并赋给log_text
        new_content.color = cc.color(0,0,0); //将字体改为黑色
        //设置文本大小
        log_text.fontSize = 16;
        log_text.lineHeight=20;

        new_content.setParent(content);  //设置根节点为content
        new_content.x = -100;
        new_content.y = -50;
        
        

        switch (attID) {
            case attID=0:
                this.attribute0 += attnum;
            
                log_text.string = "属性"+String(attID)+"得到改变"+String(attnum);  //属性改变
                
                

                break;
            case attID=1:
                this.attribute1 += attnum;
                break;
            case attID=2:
                this.attribute2 += attnum;
                break;
            case attID=3:
                this.attribute3 += attnum;
                break;
            case attID=4:
                this.attribute4 += attnum;
                break;
            case attID=5:
                this.attribute5 += attnum;
                break;
            case attID=6:
                this.attribute6 += attnum;
                break;
            case attID=7:
                this.attribute7 += attnum;
                break;
            default:
                break;
        }
        console.debug("属性值设置成功"+String(this.attribute0));
    }
    
    //获取属性值，返回属性值数组
    public getattribute(){
        let attarray: number[] = [this.attribute0, this.attribute1, this.attribute2, this.attribute3, this.attribute4, this.attribute5, this.attribute6, this.attribute7];
        //console.debug("属性值获取成功"+ String(attarray));
        return attarray;
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //set属性方法测试
        this.setattribute(0, 10);
        //get属性方法测试
        //this.getattribute();
        
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
            this.attribute_panel.active = true;
        
        });




    }

    // update (dt) {}
}
