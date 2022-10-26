// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class bag extends cc.Component {

    //属性面板节点，需要再cocos中将预制体拖入
    @property(cc.Node)
    item_panel: cc.Node = null;

    //各类物品
    @property
    private item0: number = 0;
    @property
    private item1: number = 0;
    @property
    private item2: number = 0;
    @property
    private item3: number = 0;
    @property
    private item4: number = 0;
    @property
    private item5: number = 0;
    @property
    private item6: number = 0;
    @property
    private item7: number = 0;

    //设置属性的数值，选中要更改的属性，然后设置数值
    setitem(itemID:number, itemnum:number){
        
        switch (itemID) {
            case itemID=0:
                this.item0 += itemnum;
                break;
            case itemID=1:
                this.item1 += itemnum;
                break;
            case itemID=2:
                this.item2 += itemnum;
                break;
            case itemID=3:
                this.item3 += itemnum;
                break;
            case itemID=4:
                this.item4 += itemnum;
                break;
            case itemID=5:
                this.item5 += itemnum;
                break;
            case itemID=6:
                this.item6 += itemnum;
                break;
            case itemID=7:
                this.item7 += itemnum;
                break;
            default:
                break;
        }
        console.debug("属性值设置成功"+String(this.item7));
    }
    
    //获取属性值，返回属性值数组
    public getitem(){
        let itemarray: number[] = [this.item0, this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7];
        //console.debug("属性值获取成功"+ String(itemarray));
        return itemarray;
    }

    // onLoad () {}

    start () {
        //set属性方法测试
        this.setitem(0, 10);
        //get属性方法测试
        //this.getitem();
        
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{

            this.item_panel.active=true;
        
        });

    }

    // update (dt) {}
}
