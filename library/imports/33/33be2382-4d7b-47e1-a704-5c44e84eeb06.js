"use strict";
cc._RF.push(module, '33be2OCTXtH4acEXEToTusG', 'bubble');
// script/scene1/bubble.ts

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
        _this.bubble_type = 0;
        _this.isclick = false; //气泡只能点击一次
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    //点击气泡后的提示
    /**
 * 生成范围随机数
 * @Min 最小值
 * @Max 最大值
 */
    NewClass.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    NewClass.prototype.bubble_ui = function (ui_name) {
        var bubble_touch = new cc.Node();
        var tishi = bubble_touch.addComponent(cc.Label); //增加label组件并赋给丹药数量
        if (this.bubble_type == 0) {
            bubble_touch.color = cc.color(0, 0, 0); //将字体改为白色
        }
        else if (this.bubble_type == 1) {
            bubble_touch.color = cc.color(147, 9, 247); //将字体改为橙色
        }
        else if (this.bubble_type == 2) {
            bubble_touch.color = cc.color(234, 139, 28); //将字体改为橙色
        }
        else if (this.bubble_type == 3) {
            bubble_touch.color = cc.color(39, 103, 208); //将字体改为蓝色
        }
        else if (this.bubble_type == 4) {
            bubble_touch.color = cc.color(247, 233, 10); //将字体改为黄色
        }
        else {
            bubble_touch.color = cc.color(241, 19, 23); //将字体改为红色
        }
        //设置文本大小
        tishi.fontSize = 30;
        tishi.lineHeight = 30;
        bubble_touch.setParent(this.node); //父节点是this.node才能出来
        bubble_touch.x = 0; //相对于父节点的横坐标位置不变
        bubble_touch.y = 60; //相对于父节点的纵坐标在下面一点的位置
        tishi.string = ui_name;
        //延时最后的时间为ms,延时1秒销毁，如果在上面的schedule函数还没执行完就销毁，会报错
        setTimeout(function () {
            bubble_touch.destroy();
        }, 800);
    };
    NewClass.prototype.bubble_effect = function () {
        var persist = cc.find('persist_node').getComponent('persist_node'); //获取常驻节点
        switch (this.bubble_type) {
            case 0:
                this.bubble_ui("无事发生");
                break;
            case 1:
                //点击增加精力值
                persist.changeEnergy(Math.abs(persist.max_energy()) / 10); //一个气泡恢复2%的精力条
                this.bubble_ui("精力增长~");
                break;
            case 2:
                var jingyan = this.GetRandomNum(5, 20); //随机提升一部分比例经验
                persist.exp_gain(persist.exp_required() / jingyan);
                this.bubble_ui("经验增长~");
                break;
            case 3:
                var att_id = this.GetRandomNum(0, 8); //随机提升某一项属性
                var att_name = persist.attribute_name[att_id]; //获得相应的属性名称
                persist.change_attr(att_name, 50); //改变对应的属性，增加一点
                this.bubble_ui(att_name + "+50");
                break;
            case 4:
                var item = this.GetRandomNum(0, 7); //随机获取一个物品
                persist.setitem(item, 1);
                this.bubble_ui("+1");
                break;
            case 5:
                //红色气泡惩罚(不会掉落物品)
                var x = this.GetRandomNum(0, 2); //控制随机试取疲劳值还是经验值或是属性,会出现0,1,2随机数
                if (x == 0) {
                    persist.changeEnergy(-1 * persist.max_energy() / 10); //一个气泡恢复2%的精力条
                    this.bubble_ui("精力降低ono");
                }
                else if (x == 1) {
                    var jingyan_1 = this.GetRandomNum(5, 20); //随机提升一部分比例经验
                    persist.exp_gain(-1 * persist.exp_required() / jingyan_1);
                    this.bubble_ui("经验下降ono");
                }
                else {
                    var att_id_1 = this.GetRandomNum(0, 8); //随机提升某一项属性
                    var att_name_1 = persist.attribute_name[att_id_1]; //获得相应的属性名
                    if (persist.get_attr(att_name_1) == 0) {
                        persist.change_attr(att_name_1, 0); //改变对应的属性，增加一点
                        this.bubble_ui(att_name_1 + "已减为0");
                    }
                    else {
                        persist.change_attr(att_name_1, -50); //改变对应的属性，增加一点
                        this.bubble_ui(att_name_1 + "-50");
                    }
                }
                break;
            default:
                break;
        }
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.isclick == false) {
                cc.loader.loadRes("气泡", cc.AudioClip, function (res, clip) {
                    //播放音乐
                    var audioID = cc.audioEngine.playEffect(clip, false);
                    cc.audioEngine.setVolume(audioID, 0.3);
                    //停止播放音乐
                    //cc.audioEngine.stop(audioID);
                });
                var player = cc.find('player').getComponent('player'); //点击气泡增加人物年龄
                if (player.click_bubble < 4) {
                    player.click_bubble += 1;
                }
                else {
                    player.click_bubble = 0;
                    cc.find('persist_node').getComponent('persist_node').addAge(1); //点击五次增加一岁
                }
                _this.bubble_effect(); //触发气泡效果
                _this.isclick = true;
                setTimeout(function () {
                    _this.node.active = false; //延时500ms消失,用destroy会导致schedule报错
                }, 500);
            }
        });
    };
    __decorate([
        property
    ], NewClass.prototype, "bubble_type", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();