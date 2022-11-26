
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/fanhui.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '332abk0t6hKE70wq8WLfYdO', 'fanhui');
// script/scene2/fanhui.ts

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
var fanhui = /** @class */ (function (_super) {
    __extends(fanhui, _super);
    function fanhui() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defeat = null;
        _this.success = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     * 给予不同节点相同的脚本，每个节点都会分别执行一次改脚本的start等方法
     */
    fanhui.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    //突破分支对应突破不同情况的效果
    fanhui.prototype.tupo = function () {
        var dantian = cc.find('dantian').getComponent('dantian');
        var persist = cc.find('persist_node').getComponent('persist_node'); //获取常驻节点
        //丹田值如果超过了最大丹田量的不良影响
        if (dantian.explosion > 0) {
            cc.find('persist_node').getComponent('persist_node').exp_now = 0; //如果丹田值爆满，会有惩罚,扣除一半经验值
            cc.find('persist_node').getComponent('persist_node').changeEnergy(-200); //扣除200点精力值
            cc.find('persist_node').getComponent('persist_node').log_write('丹田值爆炸，精力值和经验值都下降');
            //随机降低2次属性
            for (var i = 0; i < 2; ++i) {
                var att_id = this.GetRandomNum(0, 8); //随机提升某一项属性
                var att_name = persist.attribute_name[att_id]; //获得相应的属性名
                if (persist.get_attr(att_name) == 0) {
                    persist.change_attr(att_name, 0); //改变对应的属性，增加一点
                }
                else {
                    persist.change_attr(att_name, -30); //改变对应的属性，增加一点
                }
            }
            var defeat = cc.instantiate(this.defeat);
            defeat.setParent(cc.director.getScene());
            cc.loader.loadRes("失败", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.8);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
        }
        //如果丹田值没超
        else {
            var tupo_num = cc.find('dantian').getComponent('dantian').tupo_num;
            var levelup_prob = 0.6 * (dantian.get_dantian() / dantian.dantian_max()) + 0.4 * tupo_num / 9; //突破概率
            var random = this.GetRandomNum(0, 10000); //这边的随机值需要更改
            /*
            console.debug(random);
            console.debug(levelup_prob*10000);
            cc.find('persist_node').getComponent('persist_node').up_level()//突破成功等级加1
            cc.find('persist_node').getComponent('persist_node').log_write("成功突破,等级加1 !!!");
            cc.find('persist_node').getComponent('persist_node').exp_now = 0;
            */
            //突破成功
            if (random <= levelup_prob * 10000) {
                cc.find('persist_node').getComponent('persist_node').up_level(); //突破成功等级加1
                cc.find('persist_node').getComponent('persist_node').log_write("成功突破,等级加1 !!!");
                cc.find('persist_node').getComponent('persist_node').exp_now = 0;
                //所有属性随机增加
                for (var i = 0; i < 9; ++i) {
                    var att_add = this.GetRandomNum(50, 100); //随机提升某一项属性
                    var att_name = persist.attribute_name[i]; //获得相应的属性名
                    persist.change_attr(att_name, att_add); //改变对应的属性，增加一点
                }
                var success = cc.instantiate(this.success);
                success.setParent(cc.director.getScene());
                cc.loader.loadRes("成功", cc.AudioClip, function (res, clip) {
                    //播放音乐
                    var audioID = cc.audioEngine.playEffect(clip, false);
                    cc.audioEngine.setVolume(audioID, 0.8);
                    //停止播放音乐
                    //cc.audioEngine.stop(audioID);
                });
            }
            //突破失败
            else {
                cc.find('persist_node').getComponent('persist_node').log_write("突破失败,等级不变 !!!");
                cc.find('persist_node').getComponent('persist_node').exp_now /= 2; //如果丹田值爆满，会有惩罚,扣除一半经验值
                var defeat = cc.instantiate(this.defeat);
                defeat.setParent(cc.director.getScene());
                //随机降低2次属性
                for (var i = 0; i < 2; ++i) {
                    var att_id = this.GetRandomNum(0, 8); //随机提升某一项属性
                    var att_name = persist.attribute_name[att_id]; //获得相应的属性名
                    if (persist.get_attr(att_name) == 0) {
                        persist.change_attr(att_name, 0); //改变对应的属性，增加一点
                    }
                    else {
                        persist.change_attr(att_name, -30); //改变对应的属性，增加一点
                    }
                }
                cc.loader.loadRes("失败", cc.AudioClip, function (res, clip) {
                    //播放音乐
                    var audioID = cc.audioEngine.playEffect(clip, false);
                    cc.audioEngine.setVolume(audioID, 0.8);
                    //停止播放音乐
                    //cc.audioEngine.stop(audioID);
                });
            }
        }
    };
    fanhui.prototype.start = function () {
        var _this = this;
        //触摸返回主场景，延时0.1秒返回, 可以针对不同的突破效果产生不同的动画，就类似于抽卡动画
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.tupo();
            //延时进入主场景
            setTimeout(function () {
                cc.director.loadScene("main");
            }, 3000);
        });
    };
    __decorate([
        property(cc.Prefab)
    ], fanhui.prototype, "defeat", void 0);
    __decorate([
        property(cc.Prefab)
    ], fanhui.prototype, "success", void 0);
    fanhui = __decorate([
        ccclass
    ], fanhui);
    return fanhui;
}(cc.Component));
exports.default = fanhui;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGZhbmh1aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQStKQztRQTVKRyxZQUFNLEdBQWEsSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBYSxJQUFJLENBQUM7O1FBd0p6QixpQkFBaUI7SUFDckIsQ0FBQztJQXRKRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmOzs7OztPQUtBO0lBQ0ksNkJBQVksR0FBbkIsVUFBb0IsR0FBRyxFQUFFLEdBQUc7UUFDM0IsSUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRSxpQkFBaUI7SUFDakIscUJBQUksR0FBSjtRQUVJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUVwRSxvQkFBb0I7UUFDcEIsSUFBRyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQztZQUNyQixFQUFFLENBQUMs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QUEsaUJBYUM7UUFaRywrQ0FBK0M7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUM5QyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFWixTQUFTO1lBRVQsVUFBVSxDQUFDO2dCQUNQLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqQixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUF6SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNLO0lBTlIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStKMUI7SUFBRCxhQUFDO0NBL0pELEFBK0pDLENBL0ptQyxFQUFFLENBQUMsU0FBUyxHQStKL0M7a0JBL0pvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmYW5odWkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBkZWZlYXQ6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgc3VjY2VzczpjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICAvKipcclxuXHQgKiDnlJ/miJDojIPlm7Tpmo/mnLrmlbBcclxuXHQgKiBATWluIOacgOWwj+WAvFxyXG5cdCAqIEBNYXgg5pyA5aSn5YC8XHJcbiAgICAgKiDnu5nkuojkuI3lkIzoioLngrnnm7jlkIznmoTohJrmnKzvvIzmr4/kuKroioLngrnpg73kvJrliIbliKvmiafooYzkuIDmrKHmlLnohJrmnKznmoRzdGFydOetieaWueazlVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBHZXRSYW5kb21OdW0oTWluLCBNYXgpOm51bWJlciB7XHJcblx0XHR2YXIgUmFuZ2UgPSBNYXggLSBNaW47XHJcblx0XHR2YXIgUmFuZCA9IE1hdGgucmFuZG9tKCk7XHJcblx0XHRyZXR1cm4gKE1pbiArIE1hdGgucm91bmQoUmFuZCAqIFJhbmdlKSk7XHJcblx0fVxyXG5cclxuICAgIC8v56qB56C05YiG5pSv5a+55bqU56qB56C05LiN5ZCM5oOF5Ya155qE5pWI5p6cXHJcbiAgICB0dXBvKCl7XHJcblxyXG4gICAgICAgIGxldCBkYW50aWFuID0gY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpO1xyXG5cclxuICAgICAgICBsZXQgcGVyc2lzdCA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJyk7IC8v6I635Y+W5bi46am76IqC54K5XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL+S4ueeUsOWAvOWmguaenOi2hei/h+S6huacgOWkp+S4ueeUsOmHj+eahOS4jeiJr+W9seWTjVxyXG4gICAgICAgICAgICAgICAgaWYoZGFudGlhbi5leHBsb3Npb24gPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9ub3cgPSAwIDsgLy/lpoLmnpzkuLnnlLDlgLzniIbmu6HvvIzkvJrmnInmg6nnvZos5omj6Zmk5LiA5Y2K57uP6aqM5YC8XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5jaGFuZ2VFbmVyZ3koLTIwMCk7IC8v5omj6ZmkMjAw54K557K+5Yqb5YC8XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5sb2dfd3JpdGUoJ+S4ueeUsOWAvOeIhueCuO+8jOeyvuWKm+WAvOWSjOe7j+mqjOWAvOmDveS4i+mZjScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v6ZqP5py66ZmN5L2OMuasoeWxnuaAp1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0gMCA7IGk8MiA7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRfaWQgPSB0aGlzLkdldFJhbmRvbU51bSgwLDgpOyAvL+maj+acuuaPkOWNh+afkOS4gOmhueWxnuaAp1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXR0X25hbWUgPSBwZXJzaXN0LmF0dHJpYnV0ZV9uYW1lW2F0dF9pZF07ICAvL+iOt+W+l+ebuOW6lOeahOWxnuaAp+WQjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwZXJzaXN0LmdldF9hdHRyKGF0dF9uYW1lKSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlX2F0dHIoYXR0X25hbWUsIDApOyAvL+aUueWPmOWvueW6lOeahOWxnuaAp++8jOWinuWKoOS4gOeCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdC5jaGFuZ2VfYXR0cihhdHRfbmFtZSwgLTMwKTsgLy/mlLnlj5jlr7nlupTnmoTlsZ7mgKfvvIzlop7liqDkuIDngrlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVmZWF0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5kZWZlYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVhdC5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi5aSx6LSlXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOS4ueeUsOWAvOayoei2hVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHVwb19udW0gID0gY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLnR1cG9fbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbHVwX3Byb2IgPSAwLjYqKGRhbnRpYW4uZ2V0X2RhbnRpYW4oKS9kYW50aWFuLmRhbnRpYW5fbWF4KCkpICsgMC40KnR1cG9fbnVtLzkgOyAgLy/nqoHnoLTmpoLnjodcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRvbSA9IHRoaXMuR2V0UmFuZG9tTnVtKDAsMTAwMDApOyAvL+i/mei+ueeahOmaj+acuuWAvOmcgOimgeabtOaUuVxyXG4gICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhyYW5kb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcobGV2ZWx1cF9wcm9iKjEwMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLnVwX2xldmVsKCkvL+eqgeegtOaIkOWKn+etiee6p+WKoDFcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmxvZ193cml0ZShcIuaIkOWKn+eqgeegtCznrYnnuqfliqAxICEhIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9ub3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAvL+eqgeegtOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJhbmRvbTw9bGV2ZWx1cF9wcm9iKjEwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS51cF9sZXZlbCgpLy/nqoHnoLTmiJDlip/nrYnnuqfliqAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykubG9nX3dyaXRlKFwi5oiQ5Yqf56qB56C0LOetiee6p+WKoDEgISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9ub3cgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/miYDmnInlsZ7mgKfpmo/mnLrlop7liqBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpPSAwIDsgaTw5IDsgKytpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRfYWRkID0gdGhpcy5HZXRSYW5kb21OdW0oNTAsMTAwKTsgLy/pmo/mnLrmj5DljYfmn5DkuIDpobnlsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRfbmFtZSA9IHBlcnNpc3QuYXR0cmlidXRlX25hbWVbaV07ICAvL+iOt+W+l+ebuOW6lOeahOWxnuaAp+WQjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlX2F0dHIoYXR0X25hbWUsIGF0dF9hZGQpOyAvL+aUueWPmOWvueW6lOeahOWxnuaAp++8jOWinuWKoOS4gOeCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3MgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzLnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi5oiQ5YqfXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy/nqoHnoLTlpLHotKVcclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmxvZ193cml0ZShcIueqgeegtOWksei0pSznrYnnuqfkuI3lj5ggISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9ub3cgLz0gMiA7IC8v5aaC5p6c5Li555Sw5YC854iG5ruh77yM5Lya5pyJ5oOp572aLOaJo+mZpOS4gOWNiue7j+mqjOWAvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVmZWF0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5kZWZlYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlYXQuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/pmo/mnLrpmY3kvY4y5qyh5bGe5oCnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0gMCA7IGk8MiA7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXR0X2lkID0gdGhpcy5HZXRSYW5kb21OdW0oMCw4KTsgLy/pmo/mnLrmj5DljYfmn5DkuIDpobnlsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRfbmFtZSA9IHBlcnNpc3QuYXR0cmlidXRlX25hbWVbYXR0X2lkXTsgIC8v6I635b6X55u45bqU55qE5bGe5oCn5ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwZXJzaXN0LmdldF9hdHRyKGF0dF9uYW1lKSA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmNoYW5nZV9hdHRyKGF0dF9uYW1lLCAwKTsgLy/mlLnlj5jlr7nlupTnmoTlsZ7mgKfvvIzlop7liqDkuIDngrlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlX2F0dHIoYXR0X25hbWUsIC0zMCk7IC8v5pS55Y+Y5a+55bqU55qE5bGe5oCn77yM5aKe5Yqg5LiA54K5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuWksei0pVwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9JRCwgMC44KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL+inpuaRuOi/lOWbnuS4u+WcuuaZr++8jOW7tuaXtjAuMeenkui/lOWbniwg5Y+v5Lul6ZKI5a+55LiN5ZCM55qE56qB56C05pWI5p6c5Lqn55Sf5LiN5ZCM55qE5Yqo55S777yM5bCx57G75Ly85LqO5oq95Y2h5Yqo55S7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXBvKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8v5bu25pe26L+b5YWl5Li75Zy65pmvXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=