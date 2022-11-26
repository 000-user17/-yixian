"use strict";
cc._RF.push(module, '06db1Wsni1Cg5l5EETGGqXs', 'exp');
// script/scene1/exp.ts

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
var exp = /** @class */ (function (_super) {
    __extends(exp, _super);
    function exp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xiuxian = null;
        //人物等级
        _this.level = 0;
        //人物当前经验值
        _this.exp_now = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    exp.prototype.exp_init = function () {
        this.level = 0;
        this.exp_now = 0;
    };
    //用于自动保存节点获取当前的exp信息
    exp.prototype.exp_information = function () {
        return [this.level, this.exp_now];
    };
    //获取自动保存的exp信息
    exp.prototype.exp_auto_save = function (autosave) {
        var _this = this;
        this.level = autosave[0], this.exp_now = autosave[1];
        //拿到了自动保存的数值，再修改经验值进度条
        var exp = this.node.getComponent(cc.Sprite);
        this.schedule(function (as) {
            if (as === void 0) { as = exp; }
            exp.fillRange += (1 / _this.exp_required()); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1 / this.exp_required() / 25, this.exp_now);
    };
    //不同等级的所需经验
    exp.prototype.exp_required = function () {
        return (this.level + 1) * 200; //可以设置其他单调递增函数
    };
    //判断经验值是否溢出
    exp.prototype.exp_filled = function (exp_now, exp_add) {
        //如果经验值增长超过最大经验值，则设置为当前等级的最大经验值，否则直接相加作为当前经验值
        if ((exp_now + exp_add) <= this.exp_required()) {
            this.exp_now += exp_add;
        }
        else {
            this.exp_now = this.exp_required();
        }
    };
    //增长经验条的方法
    exp.prototype.exp_gain = function (event_ID, event_exp) {
        var _this = this;
        //获取到exp属性
        var exp = this.node.getComponent(cc.Sprite);
        //根据不同的事件获取不同的经验值
        switch (event_ID) {
            case event_ID = 0:
                //延时函数让经验条可以连续上涨
                this.schedule(function (as) {
                    if (as === void 0) { as = exp; }
                    exp.fillRange += (1 / _this.exp_required()); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
                }, 1 / this.exp_required() / 25, event_exp);
                this.exp_filled(this.exp_now, event_exp); //当前经验值数值增长
                break;
            default:
                break;
        }
    };
    exp.prototype.onLoad = function () {
        this.exp_init(); //初始化为exp各项属性值
    };
    exp.prototype.start = function () {
        var _this = this;
        //获取persisit_node中自动保存的经验值
        this.exp_auto_save(cc.find('persist_node').getComponent('persist_node').exp_inf_message());
        //触摸经验条面板，测试经验条增加
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.exp_gain(0, 100);
        });
    };
    exp.prototype.update = function (dt) {
        //如果经验值满，则可以进入修仙界面
        if (this.exp_now == this.exp_required()) {
            this.xiuxian.active = true;
        }
        else {
            this.xiuxian.active = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], exp.prototype, "xiuxian", void 0);
    __decorate([
        property
    ], exp.prototype, "level", void 0);
    __decorate([
        property
    ], exp.prototype, "exp_now", void 0);
    exp = __decorate([
        ccclass
    ], exp);
    return exp;
}(cc.Component));
exports.default = exp;

cc._RF.pop();