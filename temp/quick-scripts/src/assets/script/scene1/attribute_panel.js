"use strict";
cc._RF.push(module, '73517Bhkx1GnJhWUm8OaZJf', 'attribute_panel');
// script/scene1/attribute_panel.ts

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
var attribute_panel = /** @class */ (function (_super) {
    __extends(attribute_panel, _super);
    function attribute_panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板8个label
        _this.a0 = null;
        _this.a1 = null;
        _this.a2 = null;
        _this.a3 = null;
        _this.a4 = null;
        _this.a5 = null;
        _this.a6 = null;
        _this.a7 = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    attribute_panel.prototype.start = function () {
        //触摸面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.find('player').getComponent('player').setattribute(1, 30); //测试是否能实时增加
        });
    };
    attribute_panel.prototype.update = function (dt) {
        //获取player属性值
        var attribute_array = cc.find('player').getComponent("player").getattribute(); //由于player脚本初始化该节点父节点为cc.director.getScene()，所以用cc.find顺着根目录查找到player节点
        //将属性值投射到属性值面板上
        this.a0 = this.node.getChildByName("a0").getComponent(cc.Label);
        this.a0.getComponent(cc.Label).string = " " + attribute_array[0];
        this.a1 = this.node.getChildByName("a1").getComponent(cc.Label);
        this.a1.getComponent(cc.Label).string = " " + attribute_array[1];
        this.a2 = this.node.getChildByName("a2").getComponent(cc.Label);
        this.a2.getComponent(cc.Label).string = " " + attribute_array[2];
        this.a3 = this.node.getChildByName("a3").getComponent(cc.Label);
        this.a3.getComponent(cc.Label).string = " " + attribute_array[3];
        this.a4 = this.node.getChildByName("a4").getComponent(cc.Label);
        this.a4.getComponent(cc.Label).string = " " + attribute_array[4];
        this.a5 = this.node.getChildByName("a5").getComponent(cc.Label);
        this.a5.getComponent(cc.Label).string = " " + attribute_array[5];
        this.a6 = this.node.getChildByName("a6").getComponent(cc.Label);
        this.a6.getComponent(cc.Label).string = " " + attribute_array[6];
        this.a7 = this.node.getChildByName("a7").getComponent(cc.Label);
        this.a7.getComponent(cc.Label).string = " " + attribute_array[7];
    };
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a0", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a1", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a2", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a3", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a4", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a5", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a6", void 0);
    __decorate([
        property(cc.Label)
    ], attribute_panel.prototype, "a7", void 0);
    attribute_panel = __decorate([
        ccclass
    ], attribute_panel);
    return attribute_panel;
}(cc.Component));
exports.default = attribute_panel;

cc._RF.pop();