// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class player extends cc.Component {


    @property
    bubble_inteval:number = 0;  //产生气泡的时间间隔

    @property
    bubble_time:number=0;      //计算气泡产生的时间

    @property(cc.Prefab)           //存储不同的气泡类型
    bubble_set:cc.Prefab[]=[null];

    click_bubble:number = 0  //点击气泡的次数，点击五次增加1年寿命


    set_bubble_time(){  //设置生成气泡的时间，会随着精力值的下降而上升
        let persist = cc.find('persist_node').getComponent('persist_node');
        let num = persist.getEnergy()/persist.max_energy() + 0.6; //最快也是2秒产生一个气泡

        this.bubble_inteval = num;
        return this.bubble_inteval;
    }


    /**
	 * 生成范围随机数
	 * @Min 最小值
	 * @Max 最大值
	 */
	public GetRandomNum(Min, Max):number {
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}


    //bubble_id:要产生哪种气泡，0，1，2，3，4，5分别代表，无用气泡，增加精力值气泡，增加经验修为气泡，增加属性气泡，增加物品气泡，心魔气泡
    bubble_loc(bubble_id:number, speed:number, exist_time:number){   //控制气泡产生的随机位置

        let x_loc = this.GetRandomNum(-400, 700);  //气泡产生的x轴位置，需要结合cocos面板进行调整，生成在人物两端
        //while(x_loc>-40 && x_loc<50){
        //    let x_loc = this.GetRandomNum(-100, 150);
        //}
        let y_loc = this.GetRandomNum(-600, 0);  //气泡产生的y轴位置

        let bubble = cc.instantiate(this.bubble_set[bubble_id]);
        bubble.setParent(cc.director.getScene()); //把子弹放到当前节点的子节点上
        bubble.x = this.node.x+x_loc;
        bubble.y = this.node.y+y_loc;

        let x_change = 0
        this.schedule(()=>{

            if(x_loc < -200){//靠左的时候向右边移动的多
                x_change = this.GetRandomNum(0, 3);
            }
        
            else if(x_loc > 400){//靠左的时候向右边移动的多
                x_change = this.GetRandomNum(-3, 0);
            }
        
            else{
                x_change = this.GetRandomNum(-1, 1);
            }
        
            bubble.x+=x_change;
            bubble.y+=speed;   //气泡上升的速度
            
        }, 0.01, 600);

        setTimeout(()=>{
            bubble.active = false;  //延时500ms消失,用destroy会导致schedule报错
        }, exist_time);
        


    }


    bubble_create(min:number, max:number){
        let x = this.GetRandomNum(min,max); //用于计算气泡出现的概率,因为产生的随机数值是离散的，所以需要扩大范围

        let y = this.GetRandomNum(0,1400); //用于控制产生哪种气泡的概率

        //获取当前疲劳值所占总疲劳值的比例,目的是让疲劳值越空时，产生越多的气泡
        let persist = cc.find('persist_node').getComponent('persist_node');
        let exau_ratio = persist.getEnergy()/persist.max_energy();//当前疲劳值占比，如果精力值为0，必定会产生气泡

        if(x>(min-max)*exau_ratio){  //产生气泡

            if(y<600){   //产生收益气泡
                if(y<300){
                    //产生消除疲劳气泡
                    this.bubble_loc(1,5,4000);
                   

                }
                else if(y<450 && y>=300){
                    //产生经验值气泡
                    this.bubble_loc(2,7,3000);
                    
                }
                else if(y<550 && y>=450 ){
                    //产生属性气泡
                    this.bubble_loc(3,8,2000);
                    
                }
                else{
                    //产生天才地宝
                    this.bubble_loc(4,10,1000);
                   
                }
            }
            else if(y<900 && y>=600){
                //产生无用气泡
                this.bubble_loc(0,3,6000);
             
            }
            else{
                //产生有害气泡
                this.bubble_loc(5,2,8000);
               
            }

        }
        

    }


    @property( [cc.SpriteFrame] )
    frames: cc.SpriteFrame[] = [];//或者 frames: cc.SpriteFrame[] = new Array();
    sprite:cc.Sprite=null;
    index:number=1;
    interval:number=0.01;

  

    onLoad () {
      this.sprite=this.node.getComponent(cc.Sprite);
    }


    onTimer(){
    if(this.frames.length==0)return;

    this.sprite.spriteFrame =this.frames[this.index];
    this.index++;
    if(this.index >= this.frames.length)//这里不适用取余，数字在不断增大超出表示范围
    this.index = 0;
    }


    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        this.schedule(this.onTimer,this.interval) //动态加载图片

        cc.find('persist_node').getComponent('persist_node').is_create_bubble = false; //每次返回到主页面时，都会让打坐修行关闭，从而不产生气泡

        this.set_bubble_time();  //计算新的气泡产生间隔时间
        
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=>{
    
        
        });

    }

    update (dt) {
        let persist = cc.find('persist_node').getComponent('persist_node');

        if(this.bubble_time < this.bubble_inteval){  
            this.bubble_time+=dt;
        }

        else{
            this.set_bubble_time();  //在气泡产生完毕后开始重新计算新的气泡产生间隔时间
            this.bubble_time = 0;

            if(persist.is_create_bubble){   //如果进行打坐修炼
                this.bubble_create(0, 100);        //这里不用schedule函数产生，用update动态生成
            }

        }


    }
}
