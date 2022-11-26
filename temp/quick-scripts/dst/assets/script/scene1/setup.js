
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/setup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '069c4tboNJEF6Xd0gWptiNK', 'setup');
// script/scene1/setup.ts

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
var setup = /** @class */ (function (_super) {
    __extends(setup, _super);
    function setup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //设置面板预制体，需要再cocos中将预制体拖入
        _this.setup_panel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    setup.prototype.start = function () {
        var _this = this;
        //触摸设置出现设置面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            cc.loader.loadRes("菜单", cc.AudioClip, function (res, clip) {
                //播放音乐
                var audioID = cc.audioEngine.playEffect(clip, false);
                cc.audioEngine.setVolume(audioID, 0.3);
                //停止播放音乐
                //cc.audioEngine.stop(audioID);
            });
            _this.setup_panel.active = true;
            var persist = cc.find('persist_node').getComponent('persist_node');
            persist.is_create_bubble = false; //点击关闭产生气泡
            /*
                let setup_panel = cc.instantiate(this.setup_panel);
                setup_panel.setParent(cc.director.getScene());  //初始化根节点为场景
                //设置到屏幕中央
                setup_panel.x = 240;
                setup_panel.y = 478;
                */
        });
    };
    __decorate([
        property(cc.Node)
    ], setup.prototype, "setup_panel", void 0);
    setup = __decorate([
        ccclass
    ], setup);
    return setup;
}(cc.Component));
exports.default = setup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHNldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBd0NDO1FBdENJLHlCQUF5QjtRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQzs7UUFtQzdCLGlCQUFpQjtJQUNyQixDQUFDO0lBbENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYscUJBQUssR0FBTDtRQUFBLGlCQTJCQztRQTFCRyxZQUFZO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUdsRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxJQUFJO2dCQUMzQyxNQUFNO2dCQUNOLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxRQUFRO2dCQUNSLCtCQUErQjtZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUUvQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRSxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsVUFBVTtZQUM1Qzs7Ozs7O2tCQU1NO1FBRU4sQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBakNBO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1U7SUFKWixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBd0N6QjtJQUFELFlBQUM7Q0F4Q0QsQUF3Q0MsQ0F4Q2tDLEVBQUUsQ0FBQyxTQUFTLEdBd0M5QztrQkF4Q29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNldHVwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICAgLy/orr7nva7pnaLmnb/pooTliLbkvZPvvIzpnIDopoHlho1jb2Nvc+S4reWwhumihOWItuS9k+aLluWFpVxyXG4gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgIHNldHVwX3BhbmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy/op6bmkbjorr7nva7lh7rnjrDorr7nva7pnaLmnb9cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6I+c5Y2VXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICBsZXQgYXVkaW9JRDogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjMpO1xyXG4gICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBfcGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHBlcnNpc3QgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpO1xyXG4gICAgICAgIHBlcnNpc3QuaXNfY3JlYXRlX2J1YmJsZSA9IGZhbHNlOyAvL+eCueWHu+WFs+mXreS6p+eUn+awlOazoVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIGxldCBzZXR1cF9wYW5lbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2V0dXBfcGFuZWwpO1xyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7ICAvL+WIneWni+WMluagueiKgueCueS4uuWcuuaZr1xyXG4gICAgICAgICAgICAvL+iuvue9ruWIsOWxj+W5leS4reWkrlxyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC54ID0gMjQwO1xyXG4gICAgICAgICAgICBzZXR1cF9wYW5lbC55ID0gNDc4O1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==