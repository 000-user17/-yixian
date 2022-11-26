"use strict";
cc._RF.push(module, '369cdMMibVCwr/TZ6/t+7Bu', 'beijing2');
// script/scene2/beijing2.ts

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
        _this.shandian_time = 3;
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
    };
    NewClass.prototype.update = function (dt) {
        //移动
        //遍历子物体
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bgNode = _a[_i];
            //移动 帧 -> 秒
            bgNode.x += 500 * dt * this.toward; //每秒移动100
            if (bgNode.x > 1300 || bgNode.x < -1300) { //如果都走出了界面，那么循环
                this.toward *= -1;
            }
        }
        if (this.shandian_time <= 0) {
            var random1 = this.GetRandomNum(0, 4);
            var shandian_1 = cc.instantiate(this.sp[random1]);
            shandian_1.setParent(cc.director.getScene());
            setTimeout(function () {
                shandian_1.destroy();
            }, 3000);
            cc.loader.loadRes("下雨打雷", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 1); //设置音量
                setTimeout(function () {
                    cc.audioEngine.stop(audioID);
                }, 2000);
            });
            var random_x1 = this.GetRandomNum(0, 400);
            var random_x2 = this.GetRandomNum(800, 1400);
            var random_y = this.GetRandomNum(1000, 2500);
            var random2 = this.GetRandomNum(0, 1);
            if (random2 == 0) {
                shandian_1.x = random_x1;
            }
            else {
                shandian_1.x = random_x2;
            }
            shandian_1.y = random_y;
            this.shandian_time = 2;
        }
        else {
            this.shandian_time -= dt;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "sp", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();