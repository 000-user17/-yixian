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
        //属性面板预制体，需要再cocos中将预制体拖入
        _this.attribute_panel = null;
        _this.label = null;
        //人物的八种属性
        _this.attribute0 = 0;
        _this.attribute1 = 0;
        _this.attribute2 = 0;
        _this.attribute3 = 0;
        _this.attribute4 = 0;
        _this.attribute5 = 0;
        _this.attribute6 = 0;
        _this.attribute7 = 0;
        return _this;
        // update (dt) {}
    }
    //设置属性的数值，选中要更改的属性，然后设置数值
    player.prototype.setattribute = function (attID, attnum) {
        //写入日志的准备
        var content = cc.find('log_panel').getChildByName('log_ScrollView').getChildByName("view").getChildByName("content"); //找到要保存日志的父节点
        var new_content = new cc.Node('item' + attID); //初始化新节点为实例化的一个节点
        var log_text = new_content.addComponent(cc.Label); //增加label组件并赋给log_text
        new_content.color = cc.color(0, 0, 0); //将字体改为黑色
        //设置文本大小
        log_text.fontSize = 16;
        log_text.lineHeight = 20;
        new_content.setParent(content); //设置根节点为content
        new_content.x = -100;
        new_content.y = -50;
        switch (attID) {
            case attID = 0:
                this.attribute0 += attnum;
                log_text.string = "属性" + String(attID) + "得到改变" + String(attnum); //属性改变
                break;
            case attID = 1:
                this.attribute1 += attnum;
                break;
            case attID = 2:
                this.attribute2 += attnum;
                break;
            case attID = 3:
                this.attribute3 += attnum;
                break;
            case attID = 4:
                this.attribute4 += attnum;
                break;
            case attID = 5:
                this.attribute5 += attnum;
                break;
            case attID = 6:
                this.attribute6 += attnum;
                break;
            case attID = 7:
                this.attribute7 += attnum;
                break;
            default:
                break;
        }
        console.debug("属性值设置成功" + String(this.attribute0));
    };
    //获取属性值，返回属性值数组
    player.prototype.getattribute = function () {
        var attarray = [this.attribute0, this.attribute1, this.attribute2, this.attribute3, this.attribute4, this.attribute5, this.attribute6, this.attribute7];
        //console.debug("属性值获取成功"+ String(attarray));
        return attarray;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    player.prototype.start = function () {
        var _this = this;
        //set属性方法测试
        this.setattribute(0, 10);
        //get属性方法测试
        //this.getattribute();
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.attribute_panel.active = true;
        });
    };
    __decorate([
        property(cc.Node)
    ], player.prototype, "attribute_panel", void 0);
    __decorate([
        property(cc.Label)
    ], player.prototype, "label", void 0);
    __decorate([
        property
    ], player.prototype, "attribute0", void 0);
    __decorate([
        property
    ], player.prototype, "attribute1", void 0);
    __decorate([
        property
    ], player.prototype, "attribute2", void 0);
    __decorate([
        property
    ], player.prototype, "attribute3", void 0);
    __decorate([
        property
    ], player.prototype, "attribute4", void 0);
    __decorate([
        property
    ], player.prototype, "attribute5", void 0);
    __decorate([
        property
    ], player.prototype, "attribute6", void 0);
    __decorate([
        property
    ], player.prototype, "attribute7", void 0);
    player = __decorate([
        ccclass
    ], player);
    return player;
}(cc.Component));
exports.default = player;

cc._RF.pop();