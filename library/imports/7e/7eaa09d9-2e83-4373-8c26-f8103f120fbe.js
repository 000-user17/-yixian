"use strict";
cc._RF.push(module, '7eaa0nZLoNDc4wm+BA/Eg++', 'awakener');
// script/event_scripts/awakener.ts

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
var awakener = /** @class */ (function (_super) {
    __extends(awakener, _super);
    function awakener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.event_controller = null;
        _this.event_group = 0;
        return _this;
        // update (dt) {}
    }
    awakener.prototype.awake = function () {
        var node = cc.instantiate(this.event_controller);
        node.setParent(this.node.getParent());
        node.setPosition(new cc.Vec2(880, 570));
        node.setScale(new cc.Vec2(1, 1));
        //console.debug(node.getPosition().x)
        //node.getComponent('event_controller').awake()
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    awakener.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            var p_node = cc.find('persist_node').getComponent('persist_node');
            if (p_node.event_permitted && p_node.focus == null) {
                p_node.focus = _this.node;
                _this.awake();
                p_node.match_event_grade();
                //p_node.addAge() 改为退出卡牌选择的时候加岁数
                //p_node.changeEnergy(200)
                _this.node.active = false;
            }
        });
    };
    __decorate([
        property(cc.Label)
    ], awakener.prototype, "label", void 0);
    __decorate([
        property
    ], awakener.prototype, "text", void 0);
    __decorate([
        property(cc.Prefab)
    ], awakener.prototype, "event_controller", void 0);
    __decorate([
        property
    ], awakener.prototype, "event_group", void 0);
    awakener = __decorate([
        ccclass
    ], awakener);
    return awakener;
}(cc.Component));
exports.default = awakener;

cc._RF.pop();