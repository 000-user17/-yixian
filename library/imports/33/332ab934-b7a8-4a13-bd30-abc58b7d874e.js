"use strict";
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