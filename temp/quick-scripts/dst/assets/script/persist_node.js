
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/persist_node.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwZXJzaXN0X25vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUEwREM7UUF2REcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFXLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQVMsSUFBSSxDQUFDO1FBTWpCLGFBQU8sR0FBYSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7SUEyQzlCLENBQUM7SUF4Q0csd0JBQXdCO0lBRXhCLHNDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVBLDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUYsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUVsQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQyxDQUFDO0lBRUEsNkJBQU0sR0FBTixVQUFRLEVBQUU7UUFFUCxxQkFBcUI7UUFDckIsSUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUM7WUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFOUQsSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBQztnQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXRCLFlBQVk7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDOUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUV6QztpQkFDRztnQkFDQSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQzthQUM3QjtTQUNKO0lBR0osQ0FBQztJQXRERjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDRDtJQUdqQjtRQURDLFFBQVE7d0RBQ2U7SUFHeEI7UUFEQyxRQUFRO2lEQUNpQjtJQWZULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EwRGhDO0lBQUQsbUJBQUM7Q0ExREQsQUEwREMsQ0ExRHlDLEVBQUUsQ0FBQyxTQUFTLEdBMERyRDtrQkExRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBlcnNpc3Rfbm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZWliYW86IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYXR0cmlidXRlX3BhbmVsOmNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZXhwOmNjLk5vZGU9bnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGF1dG9fc2F2ZV90aW1lIDogbnVtYmVyO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZXhwX2luZjogbnVtYmVyW10gPSBbMCwwXTtcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgZXhwX2luZl9tZXNzYWdlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwX2luZjtcclxuICAgIH1cclxuXHJcbiAgICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmF1dG9fc2F2ZV90aW1lID0gMzsvL+iuvue9ruiHquWKqOS/neWtmOaXtumXtFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICAgICAgLy/kuLvlnLrmma/kuK3kv53lrZgs5YWI6I635Y+W5b2T5YmN6L+Q6KGM55qE5Zy65pmv5ZCN56ewXHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lID09ICdtYWluJyl7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwID0gY2MuZmluZCgnZXhwJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwX2luZiA9IHRoaXMuZXhwLmdldENvbXBvbmVudCgnZXhwJykuZXhwX2luZm9ybWF0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmF1dG9fc2F2ZV90aW1lIDw9IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvX3NhdmVfdGltZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwi6Ieq5Yqo5L+d5a2YXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAvL+iHquWKqOW+l+WIsOW5tuS/neWtmOe7j+mqjOWAvFxyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBfaW5mID0gdGhpcy5leHAuZ2V0Q29tcG9uZW50KCdleHAnKS5leHBfaW5mb3JtYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5leHBfaW5mX21lc3NhZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRvX3NhdmVfdGltZSAtPSBkdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgIH1cclxufVxyXG4iXX0=