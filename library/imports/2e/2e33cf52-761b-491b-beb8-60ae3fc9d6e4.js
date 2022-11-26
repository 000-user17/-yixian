"use strict";
cc._RF.push(module, '2e33c9SdhtJG764YK4/ydbk', 'over');
// script/event_scripts/over.ts

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
var over = /** @class */ (function (_super) {
    __extends(over, _super);
    function over() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.events = null;
        return _this;
        // update (dt) {}
    }
    //q_ents: cc.NodePool = null;
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    over.prototype.next = function () {
        cc.loader.loadRes("关闭", cc.AudioClip, function (res, clip) {
            //播放音乐
            var audioID = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.3);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });
        this.node.dispatchEvent(new cc.Event.EventCustom("over", true));
        cc.find('persist_node').getComponent('persist_node').focus = null;
    };
    __decorate([
        property(cc.Label)
    ], over.prototype, "label", void 0);
    __decorate([
        property
    ], over.prototype, "text", void 0);
    __decorate([
        property(cc.Prefab)
    ], over.prototype, "events", void 0);
    over = __decorate([
        ccclass
    ], over);
    return over;
}(cc.Component));
exports.default = over;

cc._RF.pop();