
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/beijing1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJlaWppbmcxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0ZDO1FBL0VHLFFBQUUsR0FBZSxFQUFFLENBQUM7UUFFcEIsWUFBTSxHQUFVLENBQUMsQ0FBQztRQUVsQixpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUd2QixXQUFLLEdBQVUsQ0FBQyxDQUFDOztJQXdFckIsQ0FBQztJQXBFRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVSLCtCQUFZLEdBQW5CLFVBQW9CLEdBQUcsRUFBRSxHQUFHO1FBQzlCLElBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUUsd0JBQUssR0FBTDtRQUVJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFDLElBQUk7WUFDMUMsTUFBTTtZQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1RCxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBR2hELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSTtRQUNKLE9BQU87UUFDUDs7Ozs7OztXQU9HO1FBVlAsaUJBOENDO1FBakNHLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUM7WUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxRQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDOUMsUUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFcEMsVUFBVSxDQUFDO2dCQUNQLFFBQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUdULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTNDLFFBQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQ3BCLFFBQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBR3BCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsUUFBTSxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsK0ZBQStGO1lBQzNILENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFHZCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUd4QjthQUVHO1lBQ0EsSUFBSSxDQUFDLFdBQVcsSUFBRSxFQUFFLENBQUM7U0FDeEI7SUFJTCxDQUFDO0lBOUVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0NBQ0E7SUFPcEI7UUFEQyxRQUFROzJDQUNRO0lBVkEsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtGNUI7SUFBRCxlQUFDO0NBbEZELEFBa0ZDLENBbEZxQyxFQUFFLENBQUMsU0FBUyxHQWtGakQ7a0JBbEZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHNwOmNjLlByZWZhYltdID0gW107XHJcblxyXG4gICAgdG93YXJkOm51bWJlciA9IDE7XHJcblxyXG4gICAgeXVuZHVvX3RpbWU6bnVtYmVyID0gNDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOm51bWJlciA9IDI7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgcHVibGljIEdldFJhbmRvbU51bShNaW4sIE1heCk6bnVtYmVyIHtcclxuXHRcdHZhciBSYW5nZSA9IE1heCAtIE1pbjtcclxuXHRcdHZhciBSYW5kID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHJldHVybiAoTWluICsgTWF0aC5yb3VuZChSYW5kICogUmFuZ2UpKTtcclxuXHR9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIumjjlwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgbGV0IGF1ZGlvSUQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAxKTsgLy/orr7nva7pn7Pph49cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvL+enu+WKqFxyXG4gICAgICAgIC8v6YGN5Y6G5a2Q54mp5L2TXHJcbiAgICAgICAgLypcclxuICAgICAgICBmb3IobGV0IGJnTm9kZSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgICAgICAvL+enu+WKqCDluKcgLT4g56eSXHJcbiAgICAgICAgICAgIGJnTm9kZS54ICs9IDIwMCpkdCp0aGlzLnRvd2FyZDsgLy/mr4/np5LlkJHkuIvnp7vliqgxMDBcclxuICAgICAgICAgICAgaWYoYmdOb2RlLnggPiAyNjggfHwgYmdOb2RlLnggPCAtNDQ4KXsgIC8v5aaC5p6c6YO96LWw5Ye65LqG55WM6Z2i77yM6YKj5LmI5b6q546vXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvd2FyZCAqPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0qL1xyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy55dW5kdW9fdGltZSA8PSAwKXtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbTEgPSB0aGlzLkdldFJhbmRvbU51bSgwLDQpO1xyXG4gICAgICAgICAgICBsZXQgeXVuZHVvID0gY2MuaW5zdGFudGlhdGUodGhpcy5zcFtyYW5kb20xXSk7XHJcbiAgICAgICAgICAgIHl1bmR1by5zZXRQYXJlbnQoY2MuZmluZCgncGxheWVyJykpO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgeXVuZHVvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA2MDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3ggPSB0aGlzLkdldFJhbmRvbU51bSgtNTAwLC0zMDApO1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tX3kgPSB0aGlzLkdldFJhbmRvbU51bSgtMTAwLDQwMCk7XHJcblxyXG4gICAgICAgICAgICB5dW5kdW8ueCA9IHJhbmRvbV94O1xyXG4gICAgICAgICAgICB5dW5kdW8ueSA9IHJhbmRvbV95O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgICAgIHl1bmR1by54ICs9IHRoaXMuc3BlZWQ7IC8v5LqR5py156e75Yqo6YCf5bqmICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgICAgIH0sMC4wMSwgMTAwMCk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgdGhpcy55dW5kdW9fdGltZSA9IDQ7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMueXVuZHVvX3RpbWUtPWR0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==