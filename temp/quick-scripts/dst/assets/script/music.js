
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/music.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxtdXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTBEQztRQXZERyxXQUFLLEdBQVUsQ0FBQyxDQUFDO1FBR2pCLGFBQU8sR0FBVSxDQUFDLENBQUM7O0lBb0R2QixDQUFDO0lBakRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYscUJBQUssR0FBTDtRQUFBLGlCQXVDQztRQXBDRyx3QkFBd0I7UUFDeEIsSUFBSSxNQUFNLEdBQWtCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUV2RSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFDO1lBQ2YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUMsSUFBSTtnQkFDN0MsTUFBTTtnQkFDTixJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVE7WUFDWixDQUFDLENBQUMsQ0FBQztTQUNOO2FBRUksSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBQztZQUdwQixFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMvQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQTtnQkFDdEMsUUFBUTtnQkFDUiwrQkFBK0I7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUVJO1lBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUMsSUFBSTtnQkFDOUMsTUFBTTtnQkFDTixJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLFFBQVE7WUFDWixDQUFDLENBQUMsQ0FBQztTQUNOO0lBRUwsQ0FBQztJQUVELHNCQUFNLEdBQU4sVUFBUSxFQUFFO0lBR1YsQ0FBQztJQXRERDtRQURDLFFBQVE7d0NBQ1E7SUFHakI7UUFEQyxRQUFROzBDQUNVO0lBTkYsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTBEekI7SUFBRCxZQUFDO0NBMURELEFBMERDLENBMURrQyxFQUFFLENBQUMsU0FBUyxHQTBEOUM7a0JBMURvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtdXNpYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBzY2VuZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYXVkaW9JRDpudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG5cclxuICAgICAgICAvL+imgeWFiOWcqG5vZGXmt7vliqBhdWRpb3NvdXJjZee7hOS7tlxyXG4gICAgICAgIGxldCBwbGF5ZXI6Y2MuQXVkaW9Tb3VyY2UgPSB0aGlzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7IC8v6I635Y+W6Z+z5LmQ57uE5Lu2XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2NlbmUgPT0gMCl7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibWFpblwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gYXVkaW9JRDtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjYpO1xyXG4gICAgICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5zY2VuZSA9PSAxKXtcclxuXHJcblxyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInNjZW5lMlwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gYXVkaW9JRDtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjQpXHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgLy9jYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcInN0YXJ0XCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvSUQgPSBhdWRpb0lEO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19