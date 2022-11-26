"use strict";
cc._RF.push(module, '0628b/zpR5FMb5lZYs9YAdB', 'player');
// script/scene1/player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var player = /** @class */ (function (_super) {
    __extends(player, _super);
    function player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_inteval = 0; //产生气泡的时间间隔
        _this.bubble_time = 0; //计算气泡产生的时间
        _this.bubble_set = [null];
        _this.click_bubble = 0; //点击气泡的次数，点击五次增加1年寿命
        _this.frames = []; //或者 frames: cc.SpriteFrame[] = new Array();
        _this.sprite = null;
        _this.index = 1;
        _this.interval = 0.01;
        return _this;
    }
    player.prototype.set_bubble_time = function () {
        var persist = cc.find('persist_node').getComponent('persist_node');
        var num = persist.getEnergy() / persist.max_energy() + 0.6; //最快也是2秒产生一个气泡
        this.bubble_inteval = num;
        return this.bubble_inteval;
    };
    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     */
    player.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    //bubble_id:要产生哪种气泡，0，1，2，3，4，5分别代表，无用气泡，增加精力值气泡，增加经验修为气泡，增加属性气泡，增加物品气泡，心魔气泡
    player.prototype.bubble_loc = function (bubble_id, speed, exist_time) {
        var _this = this;
        var x_loc = this.GetRandomNum(-400, 700); //气泡产生的x轴位置，需要结合cocos面板进行调整，生成在人物两端
        //while(x_loc>-40 && x_loc<50){
        //    let x_loc = this.GetRandomNum(-100, 150);
        //}
        var y_loc = this.GetRandomNum(-600, 0); //气泡产生的y轴位置
        var bubble = cc.instantiate(this.bubble_set[bubble_id]);
        bubble.setParent(cc.director.getScene()); //把子弹放到当前节点的子节点上
        bubble.x = this.node.x + x_loc;
        bubble.y = this.node.y + y_loc;
        var x_change = 0;
        this.schedule(function () {
            if (x_loc < -200) { //靠左的时候向右边移动的多
                x_change = _this.GetRandomNum(0, 3);
            }
            else if (x_loc > 400) { //靠左的时候向右边移动的多
                x_change = _this.GetRandomNum(-3, 0);
            }
            else {
                x_change = _this.GetRandomNum(-1, 1);
            }
            bubble.x += x_change;
            bubble.y += speed; //气泡上升的速度
        }, 0.01, 600);
        setTimeout(function () {
            bubble.active = false; //延时500ms消失,用destroy会导致schedule报错
        }, exist_time);
    };
    player.prototype.bubble_create = function (min, max) {
        var x = this.GetRandomNum(min, max); //用于计算气泡出现的概率,因为产生的随机数值是离散的，所以需要扩大范围
        var y = this.GetRandomNum(0, 1400); //用于控制产生哪种气泡的概率
        //获取当前疲劳值所占总疲劳值的比例,目的是让疲劳值越空时，产生越多的气泡
        var persist = cc.find('persist_node').getComponent('persist_node');
        var exau_ratio = persist.getEnergy() / persist.max_energy(); //当前疲劳值占比，如果精力值为0，必定会产生气泡
        if (x > (min - max) * exau_ratio) { //产生气泡
            if (y < 600) { //产生收益气泡
                if (y < 300) {
                    //产生消除疲劳气泡
                    this.bubble_loc(1, 5, 4000);
                }
                else if (y < 450 && y >= 300) {
                    //产生经验值气泡
                    this.bubble_loc(2, 7, 3000);
                }
                else if (y < 550 && y >= 450) {
                    //产生属性气泡
                    this.bubble_loc(3, 8, 2000);
                }
                else {
                    //产生天才地宝
                    this.bubble_loc(4, 10, 1000);
                }
            }
            else if (y < 900 && y >= 600) {
                //产生无用气泡
                this.bubble_loc(0, 3, 6000);
            }
            else {
                //产生有害气泡
                this.bubble_loc(5, 2, 8000);
            }
        }
    };
    player.prototype.onLoad = function () {
        this.sprite = this.node.getComponent(cc.Sprite);
    };
    player.prototype.onTimer = function () {
        if (this.frames.length == 0)
            return;
        this.sprite.spriteFrame = this.frames[this.index];
        this.index++;
        if (this.index >= this.frames.length) //这里不适用取余，数字在不断增大超出表示范围
            this.index = 0;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    player.prototype.start = function () {
        this.schedule(this.onTimer, this.interval); //动态加载图片
        cc.find('persist_node').getComponent('persist_node').is_create_bubble = false; //每次返回到主页面时，都会让打坐修行关闭，从而不产生气泡
        this.set_bubble_time(); //计算新的气泡产生间隔时间
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
        });
    };
    player.prototype.update = function (dt) {
        var persist = cc.find('persist_node').getComponent('persist_node');
        if (this.bubble_time < this.bubble_inteval) {
            this.bubble_time += dt;
        }
        else {
            this.set_bubble_time(); //在气泡产生完毕后开始重新计算新的气泡产生间隔时间
            this.bubble_time = 0;
            if (persist.is_create_bubble) { //如果进行打坐修炼
                this.bubble_create(0, 100); //这里不用schedule函数产生，用update动态生成
            }
        }
    };
    __decorate([
        property
    ], player.prototype, "bubble_inteval", void 0);
    __decorate([
        property
    ], player.prototype, "bubble_time", void 0);
    __decorate([
        property(cc.Prefab) //存储不同的气泡类型
    ], player.prototype, "bubble_set", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], player.prototype, "frames", void 0);
    player = __decorate([
        ccclass
    ], player);
    return player;
}(cc.Component));
exports.default = player;

cc._RF.pop();