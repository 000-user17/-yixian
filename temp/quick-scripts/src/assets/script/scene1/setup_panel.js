"use strict";
cc._RF.push(module, 'ad4ba65JG1O5Kni87K101SA', 'setup_panel');
// script/scene1/setup_panel.ts

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
var setup_panel = /** @class */ (function (_super) {
    __extends(setup_panel, _super);
    function setup_panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isplay = true;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    //播放音乐
    setup_panel.prototype.start = function () {
        var _this = this;
        //触摸打开和关闭声音
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.isplay) {
                cc.audioEngine.pauseAll();
                _this.isplay = false;
            }
            else {
                cc.audioEngine.resumeAll();
                _this.isplay = true;
            }
        });
    };
    setup_panel.prototype.update = function (dt) {
    };
    setup_panel = __decorate([
        ccclass
    ], setup_panel);
    return setup_panel;
}(cc.Component));
exports.default = setup_panel;

cc._RF.pop();