"use strict";
cc._RF.push(module, '0c28eu67u9MVpWnau1ZfGx8', 'persist_node');
// script/persist_node.ts

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
var persist_node = /** @class */ (function (_super) {
    __extends(persist_node, _super);
    function persist_node() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.beibao = null;
        _this.attribute_panel = null;
        _this.exp = null;
        _this.exp_inf = [0, 0];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    persist_node.prototype.exp_inf_message = function () {
        return this.exp_inf;
    };
    persist_node.prototype.onLoad = function () {
    };
    persist_node.prototype.start = function () {
        this.auto_save_time = 3; //设置自动保存时间
        cc.game.addPersistRootNode(this.node);
    };
    persist_node.prototype.update = function (dt) {
        //主场景中保存,先获取当前运行的场景名称
        if (cc.director.getScene().name == 'main') {
            this.exp = cc.find('exp');
            this.exp_inf = this.exp.getComponent('exp').exp_information();
            if (this.auto_save_time <= 0) {
                this.auto_save_time = 3;
                console.debug("自动保存");
                //自动得到并保存经验值
                this.exp_inf = this.exp.getComponent('exp').exp_information();
                console.debug(this.exp_inf_message());
            }
            else {
                this.auto_save_time -= dt;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], persist_node.prototype, "beibao", void 0);
    __decorate([
        property(cc.Node)
    ], persist_node.prototype, "attribute_panel", void 0);
    __decorate([
        property(cc.Node)
    ], persist_node.prototype, "exp", void 0);
    __decorate([
        property
    ], persist_node.prototype, "auto_save_time", void 0);
    __decorate([
        property
    ], persist_node.prototype, "exp_inf", void 0);
    persist_node = __decorate([
        ccclass
    ], persist_node);
    return persist_node;
}(cc.Component));
exports.default = persist_node;

cc._RF.pop();