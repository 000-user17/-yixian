"use strict";
cc._RF.push(module, 'ef216jlb7FGPptx4T74N4sn', 'music');
// script/music.ts

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
var music = /** @class */ (function (_super) {
    __extends(music, _super);
    function music() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scene = 0;
        _this.audioID = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    music.prototype.start = function () {
        var _this = this;
        //要先在node添加audiosource组件
        var player = this.getComponent(cc.AudioSource); //获取音乐组件
        if (this.scene == 0) {
            cc.loader.loadRes("main", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playMusic(clip, true);
                _this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.6);
                //停止播放音乐
            });
        }
        else if (this.scene == 1) {
            cc.loader.loadRes("scene2", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playMusic(clip, true);
                _this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.4);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
        }
        else {
            cc.loader.loadRes("start", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playMusic(clip, true);
                _this.audioID = audioID;
                cc.audioEngine.setVolume(audioID, 0.6);
                //停止播放音乐
            });
        }
    };
    music.prototype.update = function (dt) {
    };
    __decorate([
        property
    ], music.prototype, "scene", void 0);
    __decorate([
        property
    ], music.prototype, "audioID", void 0);
    music = __decorate([
        ccclass
    ], music);
    return music;
}(cc.Component));
exports.default = music;

cc._RF.pop();