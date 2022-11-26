
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/bag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f284kMB1hGgbCqWDtcgNQb', 'bag');
// script/scene1/bag.ts

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
var bag = /** @class */ (function (_super) {
    __extends(bag, _super);
    function bag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板节点，需要再cocos中将预制体拖入
        _this.item_panel = null;
        //各类物品
        _this.item0 = 0;
        _this.item1 = 0;
        _this.item2 = 0;
        _this.item3 = 0;
        _this.item4 = 0;
        _this.item5 = 0;
        _this.item6 = 0;
        _this.item7 = 0;
        return _this;
        // update (dt) {}
    }
    //设置属性的数值，选中要更改的属性，然后设置数值
    bag.prototype.setitem = function (itemID, itemnum) {
        switch (itemID) {
            case itemID = 0:
                this.item0 += itemnum;
                break;
            case itemID = 1:
                this.item1 += itemnum;
                break;
            case itemID = 2:
                this.item2 += itemnum;
                break;
            case itemID = 3:
                this.item3 += itemnum;
                break;
            case itemID = 4:
                this.item4 += itemnum;
                break;
            case itemID = 5:
                this.item5 += itemnum;
                break;
            case itemID = 6:
                this.item6 += itemnum;
                break;
            case itemID = 7:
                this.item7 += itemnum;
                break;
            default:
                break;
        }
        console.debug("属性值设置成功" + String(this.item7));
    };
    //获取属性值，返回属性值数组
    bag.prototype.getitem = function () {
        var itemarray = [this.item0, this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7];
        //console.debug("属性值获取成功"+ String(itemarray));
        return itemarray;
    };
    // onLoad () {}
    bag.prototype.start = function () {
        var _this = this;
        //set属性方法测试
        this.setitem(0, 10);
        //get属性方法测试
        //this.getitem();
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.item_panel.active = true;
        });
    };
    __decorate([
        property(cc.Node)
    ], bag.prototype, "item_panel", void 0);
    __decorate([
        property
    ], bag.prototype, "item0", void 0);
    __decorate([
        property
    ], bag.prototype, "item1", void 0);
    __decorate([
        property
    ], bag.prototype, "item2", void 0);
    __decorate([
        property
    ], bag.prototype, "item3", void 0);
    __decorate([
        property
    ], bag.prototype, "item4", void 0);
    __decorate([
        property
    ], bag.prototype, "item5", void 0);
    __decorate([
        property
    ], bag.prototype, "item6", void 0);
    __decorate([
        property
    ], bag.prototype, "item7", void 0);
    bag = __decorate([
        ccclass
    ], bag);
    return bag;
}(cc.Component));
exports.default = bag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQW1GQztRQWpGRyx3QkFBd0I7UUFFeEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsTUFBTTtRQUVFLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7UUE0RDFCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0RHLHlCQUF5QjtJQUN6QixxQkFBTyxHQUFQLFVBQVEsTUFBYSxFQUFFLE9BQWM7UUFFakMsUUFBUSxNQUFNLEVBQUU7WUFDWixLQUFLLE1BQU0sR0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxNQUFNLEdBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssTUFBTSxHQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLE1BQU0sR0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxNQUFNLEdBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztnQkFDdEIsTUFBTTtZQUNWLEtBQUssTUFBTSxHQUFDLENBQUM7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLE1BQU0sR0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO2dCQUN0QixNQUFNO1lBQ1YsS0FBSyxNQUFNLEdBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztnQkFDdEIsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZUFBZTtJQUNSLHFCQUFPLEdBQWQ7UUFDSSxJQUFJLFNBQVMsR0FBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNILDhDQUE4QztRQUM5QyxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsZUFBZTtJQUVmLG1CQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpHLFdBQVc7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwQixXQUFXO1FBQ1gsaUJBQWlCO1FBRWpCLGNBQWM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLO1lBRTlDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUVoQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUztJQUkzQjtRQURDLFFBQVE7c0NBQ2lCO0lBRTFCO1FBREMsUUFBUTtzQ0FDaUI7SUFFMUI7UUFEQyxRQUFRO3NDQUNpQjtJQUUxQjtRQURDLFFBQVE7c0NBQ2lCO0lBRTFCO1FBREMsUUFBUTtzQ0FDaUI7SUFFMUI7UUFEQyxRQUFRO3NDQUNpQjtJQUUxQjtRQURDLFFBQVE7c0NBQ2lCO0lBRTFCO1FBREMsUUFBUTtzQ0FDaUI7SUF0QlQsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQW1GdkI7SUFBRCxVQUFDO0NBbkZELEFBbUZDLENBbkZnQyxFQUFFLENBQUMsU0FBUyxHQW1GNUM7a0JBbkZvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYWcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8v5bGe5oCn6Z2i5p2/6IqC54K577yM6ZyA6KaB5YaNY29jb3PkuK3lsIbpooTliLbkvZPmi5blhaVcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgaXRlbV9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy/lkITnsbvnianlk4FcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMzogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNzogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvL+iuvue9ruWxnuaAp+eahOaVsOWAvO+8jOmAieS4reimgeabtOaUueeahOWxnuaAp++8jOeEtuWQjuiuvue9ruaVsOWAvFxyXG4gICAgc2V0aXRlbShpdGVtSUQ6bnVtYmVyLCBpdGVtbnVtOm51bWJlcil7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoIChpdGVtSUQpIHtcclxuICAgICAgICAgICAgY2FzZSBpdGVtSUQ9MDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbTAgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGl0ZW1JRD0xOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtMSArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgaXRlbUlEPTI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW0yICs9IGl0ZW1udW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBpdGVtSUQ9MzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbTMgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGl0ZW1JRD00OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtNCArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgaXRlbUlEPTU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW01ICs9IGl0ZW1udW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBpdGVtSUQ9NjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbTYgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGl0ZW1JRD03OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtNyArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIuWxnuaAp+WAvOiuvue9ruaIkOWKn1wiK1N0cmluZyh0aGlzLml0ZW03KSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8v6I635Y+W5bGe5oCn5YC877yM6L+U5Zue5bGe5oCn5YC85pWw57uEXHJcbiAgICBwdWJsaWMgZ2V0aXRlbSgpe1xyXG4gICAgICAgIGxldCBpdGVtYXJyYXk6IG51bWJlcltdID0gW3RoaXMuaXRlbTAsIHRoaXMuaXRlbTEsIHRoaXMuaXRlbTIsIHRoaXMuaXRlbTMsIHRoaXMuaXRlbTQsIHRoaXMuaXRlbTUsIHRoaXMuaXRlbTYsIHRoaXMuaXRlbTddO1xyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhcIuWxnuaAp+WAvOiOt+WPluaIkOWKn1wiKyBTdHJpbmcoaXRlbWFycmF5KSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1hcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9zZXTlsZ7mgKfmlrnms5XmtYvor5VcclxuICAgICAgICB0aGlzLnNldGl0ZW0oMCwgMTApO1xyXG4gICAgICAgIC8vZ2V05bGe5oCn5pa55rOV5rWL6K+VXHJcbiAgICAgICAgLy90aGlzLmdldGl0ZW0oKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+inpuaRuOS6uueJqeWHuueOsOS6uueJqeWxnuaAp+mdouadv1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtX3BhbmVsLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==