"use strict";
cc._RF.push(module, '3c4239f9exLQ7U2YaUfZolY', 'log_panel');
// script/scene1/log_panel.ts

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
var log_panel = /** @class */ (function (_super) {
    __extends(log_panel, _super);
    function log_panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    log_panel.prototype.onLoad = function () {
    };
    log_panel.prototype.start = function () {
        var _this = this;
        cc.find('persist_node').getComponent('persist_node').log_init(false); //新建立该节点时，将保存节点中的所有日志记录写入日志，分为两种情况，第一是初始化场景，第二是切换场景销毁了该节点，然后重新创建时
        //触摸日志
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.touch.getDelta(); //获得鼠标的位置变化坐标
            _this.node.x += delta.x;
            _this.node.y += delta.y;
        });
    };
    log_panel.prototype.update = function (dt) {
    };
    log_panel = __decorate([
        ccclass
    ], log_panel);
    return log_panel;
}(cc.Component));
exports.default = log_panel;

cc._RF.pop();