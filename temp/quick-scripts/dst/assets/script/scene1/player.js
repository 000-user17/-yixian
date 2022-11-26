
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWlNQztRQTdMRyxvQkFBYyxHQUFVLENBQUMsQ0FBQyxDQUFFLFdBQVc7UUFHdkMsaUJBQVcsR0FBUSxDQUFDLENBQUMsQ0FBTSxXQUFXO1FBR3RDLGdCQUFVLEdBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixrQkFBWSxHQUFVLENBQUMsQ0FBQSxDQUFFLG9CQUFvQjtRQXVIN0MsWUFBTSxHQUFxQixFQUFFLENBQUMsQ0FBQSw0Q0FBNEM7UUFDMUUsWUFBTSxHQUFXLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVEsQ0FBQyxDQUFDO1FBQ2YsY0FBUSxHQUFRLElBQUksQ0FBQzs7SUEyRHpCLENBQUM7SUFsTEcsZ0NBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsY0FBYztRQUV4RSxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUdEOzs7O09BSUE7SUFDSSw2QkFBWSxHQUFuQixVQUFvQixHQUFHLEVBQUUsR0FBRztR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QyxFQUFJLFVBQVU7Z0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQVEsOEJBQThCO2FBQ3BFO1NBRUo7SUFHTCxDQUFDO0lBNUxEO1FBREMsUUFBUTtrREFDaUI7SUFHMUI7UUFEQyxRQUFROytDQUNZO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBVyxXQUFXOzhDQUNaO0lBeUg5QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBRTswQ0FDQztJQW5JYixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaU0xQjtJQUFELGFBQUM7Q0FqTUQsQUFpTUMsQ0FqTW1DLEVBQUUsQ0FBQyxTQUFTLEdBaU0vQztrQkFqTW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYnViYmxlX2ludGV2YWw6bnVtYmVyID0gMDsgIC8v5Lqn55Sf5rCU5rOh55qE5pe26Ze06Ze06ZqUXHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBidWJibGVfdGltZTpudW1iZXI9MDsgICAgICAvL+iuoeeul+awlOazoeS6p+eUn+eahOaXtumXtFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpICAgICAgICAgICAvL+WtmOWCqOS4jeWQjOeahOawlOazoeexu+Wei1xyXG4gICAgYnViYmxlX3NldDpjYy5QcmVmYWJbXT1bbnVsbF07XHJcblxyXG4gICAgY2xpY2tfYnViYmxlOm51bWJlciA9IDAgIC8v54K55Ye75rCU5rOh55qE5qyh5pWw77yM54K55Ye75LqU5qyh5aKe5YqgMeW5tOWvv+WRvVxyXG5cclxuXHJcbiAgICBzZXRfYnViYmxlX3RpbWUoKXsgIC8v6K6+572u55Sf5oiQ5rCU5rOh55qE5pe26Ze077yM5Lya6ZqP552A57K+5Yqb5YC855qE5LiL6ZmN6ICM5LiK5Y2HXHJcbiAgICAgICAgbGV0IHBlcnNpc3QgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpO1xyXG4gICAgICAgIGxldCBudW0gPSBwZXJzaXN0LmdldEVuZXJneSgpL3BlcnNpc3QubWF4X2VuZXJneSgpICsgMC42OyAvL+acgOW/q+S5n+aYrzLnp5LkuqfnlJ/kuIDkuKrmsJTms6FcclxuXHJcbiAgICAgICAgdGhpcy5idWJibGVfaW50ZXZhbCA9IG51bTtcclxuICAgICAgICByZXR1cm4gdGhpcy5idWJibGVfaW50ZXZhbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcblx0ICog55Sf5oiQ6IyD5Zu06ZqP5py65pWwXHJcblx0ICogQE1pbiDmnIDlsI/lgLxcclxuXHQgKiBATWF4IOacgOWkp+WAvFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBHZXRSYW5kb21OdW0oTWluLCBNYXgpOm51bWJlciB7XHJcblx0XHR2YXIgUmFuZ2UgPSBNYXggLSBNaW47XHJcblx0XHR2YXIgUmFuZCA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHRyZXR1cm4gKE1pbiArIE1hdGgucm91bmQoUmFuZCAqIFJhbmdlKSk7XHJcblx0fVxyXG5cclxuXHJcbiAgICAvL2J1YmJsZV9pZDropoHkuqfnlJ/lk6rnp43msJTms6HvvIww77yMMe+8jDLvvIwz77yMNO+8jDXliIbliKvku6PooajvvIzml6DnlKjmsJTms6HvvIzlop7liqDnsr7lipvlgLzmsJTms6HvvIzlop7liqDnu4/pqozkv67kuLrmsJTms6HvvIzlop7liqDlsZ7mgKfmsJTms6HvvIzlop7liqDnianlk4HmsJTms6HvvIzlv4PprZTmsJTms6FcclxuICAgIGJ1YmJsZV9sb2MoYnViYmxlX2lkOm51bWJlciwgc3BlZWQ6bnVtYmVyLCBleGlzdF90aW1lOm51bWJlcil7ICAgLy/mjqfliLbmsJTms6HkuqfnlJ/nmoTpmo/mnLrkvY3nva5cclxuXHJcbiAgICAgICAgbGV0IHhfbG9jID0gdGhpcy5HZXRSYW5kb21OdW0oLTQwMCwgNzAwKTsgIC8v5rCU5rOh5Lqn55Sf55qEeOi9tOS9jee9ru+8jOmcgOimgee7k+WQiGNvY29z6Z2i5p2/6L+b6KGM6LCD5pW077yM55Sf5oiQ5Zyo5Lq654mp5Lik56uvXHJcbiAgICAgICAgLy93aGlsZSh4X2xvYz4tNDAgJiYgeF9sb2M8NTApe1xyXG4gICAgICAgIC8vICAgIGxldCB4X2xvYyA9IHRoaXMuR2V0UmFuZG9tTnVtKC0xMDAsIDE1MCk7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgbGV0IHlfbG9jID0gdGhpcy5HZXRSYW5kb21OdW0oLTYwMCwgMCk7ICAvL+awlOazoeS6p+eUn+eahHnovbTkvY3nva5cclxuXHJcbiAgICAgICAgbGV0IGJ1YmJsZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnViYmxlX3NldFtidWJibGVfaWRdKTtcclxuICAgICAgICBidWJibGUuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpOyAvL+aKiuWtkOW8ueaUvuWIsOW9k+WJjeiKgueCueeahOWtkOiKgueCueS4ilxyXG4gICAgICAgIGJ1YmJsZS54ID0gdGhpcy5ub2RlLngreF9sb2M7XHJcbiAgICAgICAgYnViYmxlLnkgPSB0aGlzLm5vZGUueSt5X2xvYztcclxuXHJcbiAgICAgICAgbGV0IHhfY2hhbmdlID0gMFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuXHJcbiAgICAgICAgICAgIGlmKHhfbG9jIDwgLTIwMCl7Ly/pnaDlt6bnmoTml7blgJnlkJHlj7Povrnnp7vliqjnmoTlpJpcclxuICAgICAgICAgICAgICAgIHhfY2hhbmdlID0gdGhpcy5HZXRSYW5kb21OdW0oMCwgMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgZWxzZSBpZih4X2xvYyA+IDQwMCl7Ly/pnaDlt6bnmoTml7blgJnlkJHlj7Povrnnp7vliqjnmoTlpJpcclxuICAgICAgICAgICAgICAgIHhfY2hhbmdlID0gdGhpcy5HZXRSYW5kb21OdW0oLTMsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB4X2NoYW5nZSA9IHRoaXMuR2V0UmFuZG9tTnVtKC0xLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBidWJibGUueCs9eF9jaGFuZ2U7XHJcbiAgICAgICAgICAgIGJ1YmJsZS55Kz1zcGVlZDsgICAvL+awlOazoeS4iuWNh+eahOmAn+W6plxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LCAwLjAxLCA2MDApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGJ1YmJsZS5hY3RpdmUgPSBmYWxzZTsgIC8v5bu25pe2NTAwbXPmtojlpLEs55SoZGVzdHJveeS8muWvvOiHtHNjaGVkdWxl5oql6ZSZXHJcbiAgICAgICAgfSwgZXhpc3RfdGltZSk7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYnViYmxlX2NyZWF0ZShtaW46bnVtYmVyLCBtYXg6bnVtYmVyKXtcclxuICAgICAgICBsZXQgeCA9IHRoaXMuR2V0UmFuZG9tTnVtKG1pbixtYXgpOyAvL+eUqOS6juiuoeeul+awlOazoeWHuueOsOeahOamgueOhyzlm6DkuLrkuqfnlJ/nmoTpmo/mnLrmlbDlgLzmmK/nprvmlaPnmoTvvIzmiYDku6XpnIDopoHmianlpKfojIPlm7RcclxuXHJcbiAgICAgICAgbGV0IHkgPSB0aGlzLkdldFJhbmRvbU51bSgwLDE0MDApOyAvL+eUqOS6juaOp+WItuS6p+eUn+WTquenjeawlOazoeeahOamgueOh1xyXG5cclxuICAgICAgICAvL+iOt+WPluW9k+WJjeeWsuWKs+WAvOaJgOWNoOaAu+eWsuWKs+WAvOeahOavlOS+iyznm67nmoTmmK/orqnnlrLlirPlgLzotornqbrml7bvvIzkuqfnlJ/otorlpJrnmoTmsJTms6FcclxuICAgICAgICBsZXQgcGVyc2lzdCA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJyk7XHJcbiAgICAgICAgbGV0IGV4YXVfcmF0aW8gPSBwZXJzaXN0LmdldEVuZXJneSgpL3BlcnNpc3QubWF4X2VuZXJneSgpOy8v5b2T5YmN55ay5Yqz5YC85Y2g5q+U77yM5aaC5p6c57K+5Yqb5YC85Li6MO+8jOW/heWumuS8muS6p+eUn+awlOazoVxyXG5cclxuICAgICAgICBpZih4PihtaW4tbWF4KSpleGF1X3JhdGlvKXsgIC8v5Lqn55Sf5rCU5rOhXHJcblxyXG4gICAgICAgICAgICBpZih5PDYwMCl7ICAgLy/kuqfnlJ/mlLbnm4rmsJTms6FcclxuICAgICAgICAgICAgICAgIGlmKHk8MzAwKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+S6p+eUn+a2iOmZpOeWsuWKs+awlOazoVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX2xvYygxLDUsNDAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKHk8NDUwICYmIHk+PTMwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/kuqfnlJ/nu4/pqozlgLzmsJTms6FcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZV9sb2MoMiw3LDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih5PDU1MCAmJiB5Pj00NTAgKXtcclxuICAgICAgICAgICAgICAgICAgICAvL+S6p+eUn+WxnuaAp+awlOazoVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX2xvYygzLDgsMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Lqn55Sf5aSp5omN5Zyw5a6dXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWJibGVfbG9jKDQsMTAsMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHk8OTAwICYmIHk+PTYwMCl7XHJcbiAgICAgICAgICAgICAgICAvL+S6p+eUn+aXoOeUqOawlOazoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVfbG9jKDAsMyw2MDAwKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL+S6p+eUn+acieWus+awlOazoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVfbG9jKDUsMiw4MDAwKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KCBbY2MuU3ByaXRlRnJhbWVdIClcclxuICAgIGZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdOy8v5oiW6ICFIGZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgc3ByaXRlOmNjLlNwcml0ZT1udWxsO1xyXG4gICAgaW5kZXg6bnVtYmVyPTE7XHJcbiAgICBpbnRlcnZhbDpudW1iZXI9MC4wMTtcclxuXHJcbiAgXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgdGhpcy5zcHJpdGU9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRpbWVyKCl7XHJcbiAgICBpZih0aGlzLmZyYW1lcy5sZW5ndGg9PTApcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID10aGlzLmZyYW1lc1t0aGlzLmluZGV4XTtcclxuICAgIHRoaXMuaW5kZXgrKztcclxuICAgIGlmKHRoaXMuaW5kZXggPj0gdGhpcy5mcmFtZXMubGVuZ3RoKS8v6L+Z6YeM5LiN6YCC55So5Y+W5L2Z77yM5pWw5a2X5Zyo5LiN5pat5aKe5aSn6LaF5Ye66KGo56S66IyD5Zu0XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5vblRpbWVyLHRoaXMuaW50ZXJ2YWwpIC8v5Yqo5oCB5Yqg6L295Zu+54mHXHJcblxyXG4gICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuaXNfY3JlYXRlX2J1YmJsZSA9IGZhbHNlOyAvL+avj+asoei/lOWbnuWIsOS4u+mhtemdouaXtu+8jOmDveS8muiuqeaJk+WdkOS/ruihjOWFs+mXre+8jOS7juiAjOS4jeS6p+eUn+awlOazoVxyXG5cclxuICAgICAgICB0aGlzLnNldF9idWJibGVfdGltZSgpOyAgLy/orqHnrpfmlrDnmoTmsJTms6HkuqfnlJ/pl7TpmpTml7bpl7RcclxuICAgICAgICBcclxuICAgICAgICAvL+inpuaRuOS6uueJqeWHuueOsOS6uueJqeWxnuaAp+mdouadv1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgcGVyc2lzdCA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYnViYmxlX3RpbWUgPCB0aGlzLmJ1YmJsZV9pbnRldmFsKXsgIFxyXG4gICAgICAgICAgICB0aGlzLmJ1YmJsZV90aW1lKz1kdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0X2J1YmJsZV90aW1lKCk7ICAvL+WcqOawlOazoeS6p+eUn+WujOavleWQjuW8gOWni+mHjeaWsOiuoeeul+aWsOeahOawlOazoeS6p+eUn+mXtOmalOaXtumXtFxyXG4gICAgICAgICAgICB0aGlzLmJ1YmJsZV90aW1lID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmKHBlcnNpc3QuaXNfY3JlYXRlX2J1YmJsZSl7ICAgLy/lpoLmnpzov5vooYzmiZPlnZDkv67ngrxcclxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX2NyZWF0ZSgwLCAxMDApOyAgICAgICAgLy/ov5nph4zkuI3nlKhzY2hlZHVsZeWHveaVsOS6p+eUn++8jOeUqHVwZGF0ZeWKqOaAgeeUn+aIkFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==