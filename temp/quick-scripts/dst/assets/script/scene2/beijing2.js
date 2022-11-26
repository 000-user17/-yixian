
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/beijing2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGJlaWppbmcyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUZDO1FBOUVHLFFBQUUsR0FBZSxFQUFFLENBQUM7UUFFcEIsWUFBTSxHQUFVLENBQUMsQ0FBQztRQUVsQixtQkFBYSxHQUFVLENBQUMsQ0FBQzs7SUEwRTdCLENBQUM7SUF0RUcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFUiwrQkFBWSxHQUFuQixVQUFvQixHQUFHLEVBQUUsR0FBRztRQUM5QixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVFLHdCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJO1FBQ0osT0FBTztRQUNQLEtBQWtCLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUM7WUFBakMsSUFBSSxNQUFNLFNBQUE7WUFDVixXQUFXO1lBQ1gsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTO1lBQ3pDLElBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxFQUFHLGVBQWU7Z0JBQ3JELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDckI7U0FDSjtRQUdELElBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUM7WUFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxVQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEQsVUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFM0MsVUFBVSxDQUFDO2dCQUNQLFVBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFVCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUM3QyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtnQkFFNUMsVUFBVSxDQUFDO29CQUNQLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFYixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQzVDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUcsT0FBTyxJQUFJLENBQUMsRUFBQztnQkFDWixVQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUMxQjtpQkFDRztnQkFDQSxVQUFRLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUMxQjtZQUVELFVBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBRXRCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBRzFCO2FBRUc7WUFDQSxJQUFJLENBQUMsYUFBYSxJQUFFLEVBQUUsQ0FBQztTQUMxQjtJQUdMLENBQUM7SUE3RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDQTtJQUhILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRjVCO0lBQUQsZUFBQztDQWpGRCxBQWlGQyxDQWpGcUMsRUFBRSxDQUFDLFNBQVMsR0FpRmpEO2tCQWpGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBzcDpjYy5QcmVmYWJbXSA9IFtdO1xyXG5cclxuICAgIHRvd2FyZDpudW1iZXIgPSAxO1xyXG5cclxuICAgIHNoYW5kaWFuX3RpbWU6bnVtYmVyID0gMztcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBwdWJsaWMgR2V0UmFuZG9tTnVtKE1pbiwgTWF4KTpudW1iZXIge1xyXG5cdFx0dmFyIFJhbmdlID0gTWF4IC0gTWluO1xyXG5cdFx0dmFyIFJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0cmV0dXJuIChNaW4gKyBNYXRoLnJvdW5kKFJhbmQgKiBSYW5nZSkpO1xyXG5cdH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIC8v56e75YqoXHJcbiAgICAgICAgLy/pgY3ljoblrZDniankvZNcclxuICAgICAgICBmb3IobGV0IGJnTm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAvL+enu+WKqCDluKcgLT4g56eSXHJcbiAgICAgICAgICAgIGJnTm9kZS54ICs9IDUwMCpkdCp0aGlzLnRvd2FyZDsgLy/mr4/np5Lnp7vliqgxMDBcclxuICAgICAgICAgICAgaWYoYmdOb2RlLnggPiAxMzAwIHx8IGJnTm9kZS54IDwgLTEzMDApeyAgLy/lpoLmnpzpg73otbDlh7rkuobnlYzpnaLvvIzpgqPkuYjlvqrnjq9cclxuICAgICAgICAgICAgICAgIHRoaXMudG93YXJkICo9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5zaGFuZGlhbl90aW1lIDw9IDApe1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tMSA9IHRoaXMuR2V0UmFuZG9tTnVtKDAsNCk7XHJcbiAgICAgICAgICAgIGxldCBzaGFuZGlhbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3BbcmFuZG9tMV0pO1xyXG4gICAgICAgICAgICBzaGFuZGlhbi5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICBzaGFuZGlhbi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLkuIvpm6jmiZPpm7dcIiwgY2MuQXVkaW9DbGlwLCAocmVzLGNsaXApPT57XHJcbiAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDEpOyAvL+iuvue9rumfs+mHj1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3gxID0gdGhpcy5HZXRSYW5kb21OdW0oMCw0MDApO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3gyID0gdGhpcy5HZXRSYW5kb21OdW0oODAwLCAxNDAwKVxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3kgPSB0aGlzLkdldFJhbmRvbU51bSgxMDAwLDI1MDApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJhbmRvbTIgPSB0aGlzLkdldFJhbmRvbU51bSgwLDEpO1xyXG4gICAgICAgICAgICBpZihyYW5kb20yID09IDApe1xyXG4gICAgICAgICAgICAgICAgc2hhbmRpYW4ueCA9IHJhbmRvbV94MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2hhbmRpYW4ueCA9IHJhbmRvbV94MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2hhbmRpYW4ueSA9IHJhbmRvbV95O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaGFuZGlhbl90aW1lID0gMjtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaGFuZGlhbl90aW1lLT1kdDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=