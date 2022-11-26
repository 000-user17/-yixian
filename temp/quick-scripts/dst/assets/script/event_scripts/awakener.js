
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/awakener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxhd2FrZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXNEQztRQW5ERyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFHdkIsc0JBQWdCLEdBQWMsSUFBSSxDQUFBO1FBR2xDLGlCQUFXLEdBQVUsQ0FBQyxDQUFBOztRQXlDdEIsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Q0csd0JBQUssR0FBTDtRQUVJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IscUNBQXFDO1FBQ3JDLCtDQUErQztJQUNuRCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFDZix3QkFBSyxHQUFMO1FBQUEsaUJBd0JDO1FBdkJHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFFOUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUMsSUFBSTtnQkFDM0MsTUFBTTtnQkFDTixJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdkMsUUFBUTtnQkFDUiwrQkFBK0I7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFHSCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUNqRSxJQUFJLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLEtBQUssSUFBRSxJQUFJLEVBQ2hEO2dCQUNJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQTtnQkFDeEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFBO2dCQUNaLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO2dCQUMxQixnQ0FBZ0M7Z0JBQ2hDLDBCQUEwQjtnQkFDMUIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO2FBRTNCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBaEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2M7SUFHbEM7UUFEQyxRQUFRO2lEQUNhO0lBWkwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNENUI7SUFBRCxlQUFDO0NBdERELEFBc0RDLENBdERxQyxFQUFFLENBQUMsU0FBUyxHQXNEakQ7a0JBdERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhd2FrZW5lciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGV2ZW50X2NvbnRyb2xsZXI6IGNjLlByZWZhYiA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGV2ZW50X2dyb3VwOiBudW1iZXI9IDBcclxuXHJcbiAgICBhd2FrZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV2ZW50X2NvbnRyb2xsZXIpXHJcbiAgICAgICAgbm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlLmdldFBhcmVudCgpKVxyXG4gICAgICAgIG5vZGUuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIoODgwLCA1NzApKVxyXG4gICAgICAgIG5vZGUuc2V0U2NhbGUobmV3IGNjLlZlYzIoMSwxKSlcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcobm9kZS5nZXRQb3NpdGlvbigpLngpXHJcbiAgICAgICAgLy9ub2RlLmdldENvbXBvbmVudCgnZXZlbnRfY29udHJvbGxlcicpLmF3YWtlKClcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi6I+c5Y2VXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcyxjbGlwKT0+e1xyXG4gICAgICAgICAgICAgICAgLy/mkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lELCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgLy/lgZzmraLmkq3mlL7pn7PkuZBcclxuICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHBfbm9kZSA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJylcclxuICAgICAgICAgICAgaWYgKHBfbm9kZS5ldmVudF9wZXJtaXR0ZWQgJiYgcF9ub2RlLmZvY3VzPT1udWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwX25vZGUuZm9jdXMgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIHRoaXMuYXdha2UoKVxyXG4gICAgICAgICAgICAgICAgcF9ub2RlLm1hdGNoX2V2ZW50X2dyYWRlKClcclxuICAgICAgICAgICAgICAgIC8vcF9ub2RlLmFkZEFnZSgpIOaUueS4uumAgOWHuuWNoeeJjOmAieaLqeeahOaXtuWAmeWKoOWygeaVsFxyXG4gICAgICAgICAgICAgICAgLy9wX25vZGUuY2hhbmdlRW5lcmd5KDIwMClcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=