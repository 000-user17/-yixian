
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0628b/zpR5FMb5lZYs9YAdB', 'player');
// script/scene1/player.ts

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
var player = /** @class */ (function (_super) {
    __extends(player, _super);
    function player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //属性面板预制体，需要再cocos中将预制体拖入
        _this.attribute_panel = null;
        _this.label = null;
        //人物的八种属性
        _this.attribute0 = 0;
        _this.attribute1 = 0;
        _this.attribute2 = 0;
        _this.attribute3 = 0;
        _this.attribute4 = 0;
        _this.attribute5 = 0;
        _this.attribute6 = 0;
        _this.attribute7 = 0;
        return _this;
        // update (dt) {}
    }
    //设置属性的数值，选中要更改的属性，然后设置数值
    player.prototype.setattribute = function (attID, attnum) {
        //写入日志的准备
        var content = cc.find('log_panel').getChildByName('log_ScrollView').getChildByName("view").getChildByName("content"); //找到要保存日志的父节点
        var new_content = new cc.Node('item' + attID); //初始化新节点为实例化的一个节点
        var log_text = new_content.addComponent(cc.Label); //增加label组件并赋给log_text
        new_content.color = cc.color(0, 0, 0); //将字体改为黑色
        //设置文本大小
        log_text.fontSize = 16;
        log_text.lineHeight = 20;
        new_content.setParent(content); //设置根节点为content
        new_content.x = -100;
        new_content.y = -50;
        switch (attID) {
            case attID = 0:
                this.attribute0 += attnum;
                log_text.string = "属性" + String(attID) + "得到改变" + String(attnum); //属性改变
                break;
            case attID = 1:
                this.attribute1 += attnum;
                break;
            case attID = 2:
                this.attribute2 += attnum;
                break;
            case attID = 3:
                this.attribute3 += attnum;
                break;
            case attID = 4:
                this.attribute4 += attnum;
                break;
            case attID = 5:
                this.attribute5 += attnum;
                break;
            case attID = 6:
                this.attribute6 += attnum;
                break;
            case attID = 7:
                this.attribute7 += attnum;
                break;
            default:
                break;
        }
        console.debug("属性值设置成功" + String(this.attribute0));
    };
    //获取属性值，返回属性值数组
    player.prototype.getattribute = function () {
        var attarray = [this.attribute0, this.attribute1, this.attribute2, this.attribute3, this.attribute4, this.attribute5, this.attribute6, this.attribute7];
        //console.debug("属性值获取成功"+ String(attarray));
        return attarray;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    player.prototype.start = function () {
        var _this = this;
        //set属性方法测试
        this.setattribute(0, 10);
        //get属性方法测试
        //this.getattribute();
        //触摸人物出现人物属性面板
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.attribute_panel.active = true;
        });
    };
    __decorate([
        property(cc.Node)
    ], player.prototype, "attribute_panel", void 0);
    __decorate([
        property(cc.Label)
    ], player.prototype, "label", void 0);
    __decorate([
        property
    ], player.prototype, "attribute0", void 0);
    __decorate([
        property
    ], player.prototype, "attribute1", void 0);
    __decorate([
        property
    ], player.prototype, "attribute2", void 0);
    __decorate([
        property
    ], player.prototype, "attribute3", void 0);
    __decorate([
        property
    ], player.prototype, "attribute4", void 0);
    __decorate([
        property
    ], player.prototype, "attribute5", void 0);
    __decorate([
        property
    ], player.prototype, "attribute6", void 0);
    __decorate([
        property
    ], player.prototype, "attribute7", void 0);
    player = __decorate([
        ccclass
    ], player);
    return player;
}(cc.Component));
exports.default = player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXHBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQWdIQztRQTlHRyx5QkFBeUI7UUFFekIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFJaEMsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixTQUFTO1FBRUQsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O1FBcUYvQixpQkFBaUI7SUFDckIsQ0FBQztJQW5GRyx5QkFBeUI7SUFDekIsNkJBQVksR0FBWixVQUFhLEtBQVksRUFBRSxNQUFhO1FBRXBDLFNBQVM7UUFDVCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ25JLElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDLENBQUMsQ0FBRSxpQkFBaUI7UUFDL0QsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDekUsV0FBVyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQzlDLFFBQVE7UUFDUixRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQztRQUV2QixXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUUsZUFBZTtRQUNoRCxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFJcEIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLEtBQUssR0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDO2dCQUUxQixRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksR0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFLE1BQU07Z0JBSW5FLE1BQU07WUFDVixLQUFLLEtBQUssR0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyxLQUFLLEdBQUMsQ0FBQztnQkFDUixJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssS0FBSyxHQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUM7Z0JBQzFCLE1BQU07WUFDVixLQUFLLEtBQUssR0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyxLQUFLLEdBQUMsQ0FBQztnQkFDUixJQUFJLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQztnQkFDMUIsTUFBTTtZQUNWLEtBQUssS0FBSyxHQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUM7Z0JBQzFCLE1BQU07WUFDVixLQUFLLEtBQUssR0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDO2dCQUMxQixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxlQUFlO0lBQ1IsNkJBQVksR0FBbkI7UUFDSSxJQUFJLFFBQVEsR0FBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xLLDZDQUE2QztRQUM3QyxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixzQkFBSyxHQUFMO1FBQUEsaUJBZUM7UUFkRyxXQUFXO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekIsV0FBVztRQUNYLHNCQUFzQjtRQUV0QixjQUFjO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUM5QyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFdkMsQ0FBQyxDQUFDLENBQUM7SUFLUCxDQUFDO0lBekdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ2M7SUFJaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDSTtJQUl2QjtRQURDLFFBQVE7OENBQ3NCO0lBRS9CO1FBREMsUUFBUTs4Q0FDc0I7SUFFL0I7UUFEQyxRQUFROzhDQUNzQjtJQUUvQjtRQURDLFFBQVE7OENBQ3NCO0lBRS9CO1FBREMsUUFBUTs4Q0FDc0I7SUFFL0I7UUFEQyxRQUFROzhDQUNzQjtJQUUvQjtRQURDLFFBQVE7OENBQ3NCO0lBRS9CO1FBREMsUUFBUTs4Q0FDc0I7SUExQmQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWdIMUI7SUFBRCxhQUFDO0NBaEhELEFBZ0hDLENBaEhtQyxFQUFFLENBQUMsU0FBUyxHQWdIL0M7a0JBaEhvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgXHJcbiAgICAvL+WxnuaAp+mdouadv+mihOWItuS9k++8jOmcgOimgeWGjWNvY29z5Lit5bCG6aKE5Yi25L2T5ouW5YWlXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGF0dHJpYnV0ZV9wYW5lbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBcclxuICAgIC8v5Lq654mp55qE5YWr56eN5bGe5oCnXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgYXR0cmlidXRlMDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGUxOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGF0dHJpYnV0ZTI6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgYXR0cmlidXRlMzogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGU0OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGF0dHJpYnV0ZTU6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgYXR0cmlidXRlNjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGU3OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIFxyXG4gICAgLy/orr7nva7lsZ7mgKfnmoTmlbDlgLzvvIzpgInkuK3opoHmm7TmlLnnmoTlsZ7mgKfvvIznhLblkI7orr7nva7mlbDlgLxcclxuICAgIHNldGF0dHJpYnV0ZShhdHRJRDpudW1iZXIsIGF0dG51bTpudW1iZXIpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v5YaZ5YWl5pel5b+X55qE5YeG5aSHXHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBjYy5maW5kKCdsb2dfcGFuZWwnKS5nZXRDaGlsZEJ5TmFtZSgnbG9nX1Njcm9sbFZpZXcnKS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpOyAvL+aJvuWIsOimgeS/neWtmOaXpeW/l+eahOeItuiKgueCuVxyXG4gICAgICAgIGxldCBuZXdfY29udGVudCA9IG5ldyBjYy5Ob2RlKCdpdGVtJythdHRJRCk7ICAvL+WIneWni+WMluaWsOiKgueCueS4uuWunuS+i+WMlueahOS4gOS4quiKgueCuVxyXG4gICAgICAgIHZhciBsb2dfdGV4dCA9IG5ld19jb250ZW50LmFkZENvbXBvbmVudChjYy5MYWJlbCk7IC8v5aKe5YqgbGFiZWznu4Tku7blubbotYvnu5lsb2dfdGV4dFxyXG4gICAgICAgIG5ld19jb250ZW50LmNvbG9yID0gY2MuY29sb3IoMCwwLDApOyAvL+WwhuWtl+S9k+aUueS4uum7keiJslxyXG4gICAgICAgIC8v6K6+572u5paH5pys5aSn5bCPXHJcbiAgICAgICAgbG9nX3RleHQuZm9udFNpemUgPSAxNjtcclxuICAgICAgICBsb2dfdGV4dC5saW5lSGVpZ2h0PTIwO1xyXG5cclxuICAgICAgICBuZXdfY29udGVudC5zZXRQYXJlbnQoY29udGVudCk7ICAvL+iuvue9ruagueiKgueCueS4umNvbnRlbnRcclxuICAgICAgICBuZXdfY29udGVudC54ID0gLTEwMDtcclxuICAgICAgICBuZXdfY29udGVudC55ID0gLTUwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBzd2l0Y2ggKGF0dElEKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYXR0SUQ9MDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlMCArPSBhdHRudW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbG9nX3RleHQuc3RyaW5nID0gXCLlsZ7mgKdcIitTdHJpbmcoYXR0SUQpK1wi5b6X5Yiw5pS55Y+YXCIrU3RyaW5nKGF0dG51bSk7ICAvL+WxnuaAp+aUueWPmFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBhdHRJRD0xOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUxICs9IGF0dG51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGF0dElEPTI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZTIgKz0gYXR0bnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYXR0SUQ9MzpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlMyArPSBhdHRudW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBhdHRJRD00OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGU0ICs9IGF0dG51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGF0dElEPTU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZTUgKz0gYXR0bnVtO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgYXR0SUQ9NjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlNiArPSBhdHRudW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBhdHRJRD03OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGU3ICs9IGF0dG51bTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCLlsZ7mgKflgLzorr7nva7miJDlip9cIitTdHJpbmcodGhpcy5hdHRyaWJ1dGUwKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8v6I635Y+W5bGe5oCn5YC877yM6L+U5Zue5bGe5oCn5YC85pWw57uEXHJcbiAgICBwdWJsaWMgZ2V0YXR0cmlidXRlKCl7XHJcbiAgICAgICAgbGV0IGF0dGFycmF5OiBudW1iZXJbXSA9IFt0aGlzLmF0dHJpYnV0ZTAsIHRoaXMuYXR0cmlidXRlMSwgdGhpcy5hdHRyaWJ1dGUyLCB0aGlzLmF0dHJpYnV0ZTMsIHRoaXMuYXR0cmlidXRlNCwgdGhpcy5hdHRyaWJ1dGU1LCB0aGlzLmF0dHJpYnV0ZTYsIHRoaXMuYXR0cmlidXRlN107XHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKFwi5bGe5oCn5YC86I635Y+W5oiQ5YqfXCIrIFN0cmluZyhhdHRhcnJheSkpO1xyXG4gICAgICAgIHJldHVybiBhdHRhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9zZXTlsZ7mgKfmlrnms5XmtYvor5VcclxuICAgICAgICB0aGlzLnNldGF0dHJpYnV0ZSgwLCAxMCk7XHJcbiAgICAgICAgLy9nZXTlsZ7mgKfmlrnms5XmtYvor5VcclxuICAgICAgICAvL3RoaXMuZ2V0YXR0cmlidXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/op6bmkbjkurrnianlh7rnjrDkurrnianlsZ7mgKfpnaLmnb9cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVfcGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=