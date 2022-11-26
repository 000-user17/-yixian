"use strict";
cc._RF.push(module, '1f284kMB1hGgbCqWDtcgNQb', 'bag');
// script/scene1/bag.ts

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
var bag = /** @class */ (function (_super) {
    __extends(bag, _super);
    function bag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板节点，需要再cocos中将预制体拖入
        _this.item_panel = null;
        //各类物品
        _this.item0 = 0;
        _this.item1 = 0;
        _this.item2 = 0;
        _this.item3 = 0;
        _this.item4 = 0;
        _this.item5 = 0;
        _this.item6 = 0;
        _this.item7 = 0;
        return _this;
        // update (dt) {}
    }
    //设置属性的数值，选中要更改的属性，然后设置数值
    bag.prototype.setitem = function (itemID, itemnum) {
        switch (itemID) {
            case itemID = 0:
                this.item0 += itemnum;
                break;
            case itemID = 1:
                this.item1 += itemnum;
                break;
            case itemID = 2:
                this.item2 += itemnum;
                break;
            case itemID = 3:
                this.item3 += itemnum;
                break;
            case itemID = 4:
                this.item4 += itemnum;
                break;
            case itemID = 5:
                this.item5 += itemnum;
                break;
            case itemID = 6:
                this.item6 += itemnum;
                break;
            case itemID = 7:
                this.item7 += itemnum;
                break;
            default:
                break;
        }
        console.debug("属性值设置成功" + String(this.item7));
    };
    //获取属性值，返回属性值数组
    bag.prototype.getitem = function () {
        var itemarray = [this.item0, this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7];
        //console.debug("属性值获取成功"+ String(itemarray));
        return itemarray;
    };
    // onLoad () {}
    bag.prototype.start = function () {
        var _this = this;
        //set属性方法测试
        this.setitem(0, 10);
        //get属性方法测试
        //this.getitem();
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.item_panel.active = true;
        });
    };
    __decorate([
        property(cc.Node)
    ], bag.prototype, "item_panel", void 0);
    __decorate([
        property
    ], bag.prototype, "item0", void 0);
    __decorate([
        property
    ], bag.prototype, "item1", void 0);
    __decorate([
        property
    ], bag.prototype, "item2", void 0);
    __decorate([
        property
    ], bag.prototype, "item3", void 0);
    __decorate([
        property
    ], bag.prototype, "item4", void 0);
    __decorate([
        property
    ], bag.prototype, "item5", void 0);
    __decorate([
        property
    ], bag.prototype, "item6", void 0);
    __decorate([
        property
    ], bag.prototype, "item7", void 0);
    bag = __decorate([
        ccclass
    ], bag);
    return bag;
}(cc.Component));
exports.default = bag;

cc._RF.pop();