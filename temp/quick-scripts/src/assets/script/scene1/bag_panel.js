"use strict";
cc._RF.push(module, 'a0664Gp3gNMXaOeqdI0qBc7', 'bag_panel');
// script/scene1/bag_panel.ts

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
var bag_panel = /** @class */ (function (_super) {
    __extends(bag_panel, _super);
    function bag_panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板8个label
        _this.it0 = null;
        _this.it1 = null;
        _this.it2 = null;
        _this.it3 = null;
        _this.it4 = null;
        _this.it5 = null;
        _this.it6 = null;
        _this.it7 = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    bag_panel.prototype.start = function () {
        var _this = this;
        //触摸背包
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.touch.getDelta(); //获得鼠标的位置变化坐标
            _this.node.x += delta.x;
            _this.node.y += delta.y;
        });
    };
    bag_panel.prototype.update = function (dt) {
        //获取bag物品数量,实时更新
        var item_array = cc.find('persist_node').getComponent("persist_node").getitem(); //由于player脚本初始化该节点父节点为cc.director.getScene()，所以用cc.find顺着根目录查找到player节点
        //将属性值投射到属性值面板上
        this.it0 = this.node.getChildByName("item0").getComponent(cc.Label);
        this.it0.getComponent(cc.Label).string = " " + item_array[0];
        this.it1 = this.node.getChildByName("item1").getComponent(cc.Label);
        this.it1.getComponent(cc.Label).string = " " + item_array[1];
        this.it2 = this.node.getChildByName("item2").getComponent(cc.Label);
        this.it2.getComponent(cc.Label).string = " " + item_array[2];
        this.it3 = this.node.getChildByName("item3").getComponent(cc.Label);
        this.it3.getComponent(cc.Label).string = " " + item_array[3];
        this.it4 = this.node.getChildByName("item4").getComponent(cc.Label);
        this.it4.getComponent(cc.Label).string = " " + item_array[4];
        this.it5 = this.node.getChildByName("item5").getComponent(cc.Label);
        this.it5.getComponent(cc.Label).string = " " + item_array[5];
        this.it6 = this.node.getChildByName("item6").getComponent(cc.Label);
        this.it6.getComponent(cc.Label).string = " " + item_array[6];
        this.it7 = this.node.getChildByName("item7").getComponent(cc.Label);
        this.it7.getComponent(cc.Label).string = " " + item_array[7];
    };
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it0", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it1", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it2", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it3", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it4", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it5", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it6", void 0);
    __decorate([
        property(cc.Label)
    ], bag_panel.prototype, "it7", void 0);
    bag_panel = __decorate([
        ccclass
    ], bag_panel);
    return bag_panel;
}(cc.Component));
exports.default = bag_panel;

cc._RF.pop();