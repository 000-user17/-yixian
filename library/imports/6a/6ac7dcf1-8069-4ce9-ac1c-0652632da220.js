"use strict";
cc._RF.push(module, '6ac7dzxgGlM6awcBlJjLaIg', 'beijing1');
// script/scene1/beijing1.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp = [];
        _this.toward = 1;
        _this.yunduo_time = 4;
        _this.speed = 2;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    NewClass.prototype.start = function () {
        cc.loader.loadRes("风", cc.AudioClip, function (res, clip) {
            //播放音乐
            var audioID = cc.audioEngine.playEffect(clip, true);
            cc.audioEngine.setVolume(audioID, 1); //设置音量
        });
    };
    NewClass.prototype.update = function (dt) {
        //移动
        //遍历子物体
        /*
        for(let bgNode of this.node.children){
            //移动 帧 -> 秒
            bgNode.x += 200*dt*this.toward; //每秒向下移动100
            if(bgNode.x > 268 || bgNode.x < -448){  //如果都走出了界面，那么循环
                this.toward *= -1;
            }
        }*/
        var _this = this;
        if (this.yunduo_time <= 0) {
            var random1 = this.GetRandomNum(0, 4);
            var yunduo_1 = cc.instantiate(this.sp[random1]);
            yunduo_1.setParent(cc.find('player'));
            setTimeout(function () {
                yunduo_1.active = false;
            }, 6000);
            var random_x = this.GetRandomNum(-500, -300);
            var random_y = this.GetRandomNum(-100, 400);
            yunduo_1.x = random_x;
            yunduo_1.y = random_y;
            this.schedule(function () {
                yunduo_1.x += _this.speed; //云朵移动速度  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
            }, 0.01, 1000);
            this.yunduo_time = 4;
        }
        else {
            this.yunduo_time -= dt;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "sp", void 0);
    __decorate([
        property
    ], NewClass.prototype, "speed", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();