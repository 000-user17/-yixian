
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/exp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06db1Wsni1Cg5l5EETGGqXs', 'exp');
// script/scene1/exp.ts

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
var exp = /** @class */ (function (_super) {
    __extends(exp, _super);
    function exp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xiuxian = null;
        //人物等级
        _this.level = 0;
        //人物当前经验值
        _this.exp_now = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    exp.prototype.exp_init = function () {
        this.level = 0;
        this.exp_now = 0;
    };
    //用于自动保存节点获取当前的exp信息
    exp.prototype.exp_information = function () {
        return [this.level, this.exp_now];
    };
    //获取自动保存的exp信息
    exp.prototype.exp_auto_save = function (autosave) {
        var _this = this;
        this.level = autosave[0], this.exp_now = autosave[1];
        //拿到了自动保存的数值，再修改经验值进度条
        var exp = this.node.getComponent(cc.Sprite);
        this.schedule(function (as) {
            if (as === void 0) { as = exp; }
            exp.fillRange += (1 / _this.exp_required()); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1 / this.exp_required() / 25, this.exp_now);
    };
    //不同等级的所需经验
    exp.prototype.exp_required = function () {
        return (this.level + 1) * 200; //可以设置其他单调递增函数
    };
    //判断经验值是否溢出
    exp.prototype.exp_filled = function (exp_now, exp_add) {
        //如果经验值增长超过最大经验值，则设置为当前等级的最大经验值，否则直接相加作为当前经验值
        if ((exp_now + exp_add) <= this.exp_required()) {
            this.exp_now += exp_add;
        }
        else {
            this.exp_now = this.exp_required();
        }
    };
    //增长经验条的方法
    exp.prototype.exp_gain = function (event_ID, event_exp) {
        var _this = this;
        //获取到exp属性
        var exp = this.node.getComponent(cc.Sprite);
        //根据不同的事件获取不同的经验值
        switch (event_ID) {
            case event_ID = 0:
                //延时函数让经验条可以连续上涨
                this.schedule(function (as) {
                    if (as === void 0) { as = exp; }
                    exp.fillRange += (1 / _this.exp_required()); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
                }, 1 / this.exp_required() / 25, event_exp);
                this.exp_filled(this.exp_now, event_exp); //当前经验值数值增长
                break;
            default:
                break;
        }
    };
    exp.prototype.onLoad = function () {
        this.exp_init(); //初始化为exp各项属性值
    };
    exp.prototype.start = function () {
        var _this = this;
        //获取persisit_node中自动保存的经验值
        this.exp_auto_save(cc.find('persist_node').getComponent('persist_node').exp_inf_message());
        //触摸经验条面板，测试经验条增加
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.exp_gain(0, 100);
        });
    };
    exp.prototype.update = function (dt) {
        //如果经验值满，则可以进入修仙界面
        if (this.exp_now == this.exp_required()) {
            this.xiuxian.active = true;
        }
        else {
            this.xiuxian.active = false;
        }
    };
    __decorate([
        property(cc.Node)
    ], exp.prototype, "xiuxian", void 0);
    __decorate([
        property
    ], exp.prototype, "level", void 0);
    __decorate([
        property
    ], exp.prototype, "exp_now", void 0);
    exp = __decorate([
        ccclass
    ], exp);
    return exp;
}(cc.Component));
exports.default = exp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGV4cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQW9IQztRQWpIRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLE1BQU07UUFFTixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFNBQVM7UUFFVCxhQUFPLEdBQVcsQ0FBQyxDQUFDOztJQXlHeEIsQ0FBQztJQXZHRyx3QkFBd0I7SUFFeEIsc0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELG9CQUFvQjtJQUNwQiw2QkFBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxjQUFjO0lBQ2QsMkJBQWEsR0FBYixVQUFjLFFBQWlCO1FBQS9CLGlCQVNDO1FBUkksSUFBSSxDQUFDLEtBQUssR0FBa0IsUUFBUSxHQUExQixFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUksUUFBUSxHQUFaLENBQWE7UUFFdEMsc0JBQXNCO1FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQUMsRUFBTTtZQUFOLG1CQUFBLEVBQUEsUUFBTTtZQUNqQixH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b0h2QjtJQUFELFVBQUM7Q0FwSEQsQUFvSEMsQ0FwSGdDLEVBQUUsQ0FBQyxTQUFTLEdBb0g1QztrQkFwSG9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4cCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB4aXV4aWFuOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvL+S6uueJqeetiee6p1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBsZXZlbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvL+S6uueJqeW9k+WJjee7j+mqjOWAvFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBleHBfbm93OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGV4cF9pbml0KCl7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5leHBfbm93ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvL+eUqOS6juiHquWKqOS/neWtmOiKgueCueiOt+WPluW9k+WJjeeahGV4cOS/oeaBr1xyXG4gICAgZXhwX2luZm9ybWF0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLmxldmVsLCB0aGlzLmV4cF9ub3ddO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6I635Y+W6Ieq5Yqo5L+d5a2Y55qEZXhw5L+h5oGvXHJcbiAgICBleHBfYXV0b19zYXZlKGF1dG9zYXZlOm51bWJlcltdKXtcclxuICAgICAgICBbdGhpcy5sZXZlbCwgdGhpcy5leHBfbm93XSA9IGF1dG9zYXZlO1xyXG5cclxuICAgICAgICAvL+aLv+WIsOS6huiHquWKqOS/neWtmOeahOaVsOWAvO+8jOWGjeS/ruaUuee7j+mqjOWAvOi/m+W6puadoVxyXG4gICAgICAgIGxldCBleHAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoYXM9ZXhwKT0+e1xyXG4gICAgICAgICAgICBleHAuZmlsbFJhbmdlKz0gKDEvdGhpcy5leHBfcmVxdWlyZWQoKSk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgfSwgMS90aGlzLmV4cF9yZXF1aXJlZCgpLzI1LCB0aGlzLmV4cF9ub3cpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+S4jeWQjOetiee6p+eahOaJgOmcgOe7j+mqjFxyXG4gICAgZXhwX3JlcXVpcmVkKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiAodGhpcy5sZXZlbCsxKSoyMDA7ICAvL+WPr+S7peiuvue9ruWFtuS7luWNleiwg+mAkuWinuWHveaVsFxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yik5pat57uP6aqM5YC85piv5ZCm5rqi5Ye6XHJcbiAgICBleHBfZmlsbGVkKGV4cF9ub3c6bnVtYmVyLCBleHBfYWRkOm51bWJlcil7XHJcbiAgICAgICAgLy/lpoLmnpznu4/pqozlgLzlop7plb/otoXov4fmnIDlpKfnu4/pqozlgLzvvIzliJnorr7nva7kuLrlvZPliY3nrYnnuqfnmoTmnIDlpKfnu4/pqozlgLzvvIzlkKbliJnnm7TmjqXnm7jliqDkvZzkuLrlvZPliY3nu4/pqozlgLxcclxuICAgICAgICBpZigoZXhwX25vdytleHBfYWRkKSA8PSB0aGlzLmV4cF9yZXF1aXJlZCgpKXtcclxuICAgICAgICAgICAgdGhpcy5leHBfbm93ICs9IGV4cF9hZGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwX25vdyA9IHRoaXMuZXhwX3JlcXVpcmVkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/lop7plb/nu4/pqozmnaHnmoTmlrnms5VcclxuICAgIGV4cF9nYWluKGV2ZW50X0lEOm51bWJlciwgZXZlbnRfZXhwOm51bWJlcil7XHJcbiAgICAgICAgLy/ojrflj5bliLBleHDlsZ7mgKdcclxuICAgICAgICBsZXQgZXhwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cclxuICAgICAgICAvL+agueaNruS4jeWQjOeahOS6i+S7tuiOt+WPluS4jeWQjOeahOe7j+mqjOWAvFxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnRfSUQpIHtcclxuICAgICAgICAgICAgY2FzZSBldmVudF9JRD0wOlxyXG4gICAgICAgICAgICAgICAgLy/lu7bml7blh73mlbDorqnnu4/pqozmnaHlj6/ku6Xov57nu63kuIrmtqhcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKGFzPWV4cCk9PntcclxuICAgICAgICAgICAgICAgICAgICBleHAuZmlsbFJhbmdlKz0gKDEvdGhpcy5leHBfcmVxdWlyZWQoKSk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgICAgICAgICB9LCAxL3RoaXMuZXhwX3JlcXVpcmVkKCkvMjUsIGV2ZW50X2V4cCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwX2ZpbGxlZCh0aGlzLmV4cF9ub3csIGV2ZW50X2V4cCk7ICAvL+W9k+WJjee7j+mqjOWAvOaVsOWAvOWinumVv1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5leHBfaW5pdCgpOyAvL+WIneWni+WMluS4umV4cOWQhOmhueWxnuaAp+WAvFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQgKCkgeyAgXHJcblxyXG4gICAgICAgIC8v6I635Y+WcGVyc2lzaXRfbm9kZeS4reiHquWKqOS/neWtmOeahOe7j+mqjOWAvFxyXG4gICAgICAgIHRoaXMuZXhwX2F1dG9fc2F2ZShjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9pbmZfbWVzc2FnZSgpKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy/op6bmkbjnu4/pqozmnaHpnaLmnb/vvIzmtYvor5Xnu4/pqozmnaHlop7liqBcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5leHBfZ2FpbigwLDEwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy/lpoLmnpznu4/pqozlgLzmu6HvvIzliJnlj6/ku6Xov5vlhaXkv67ku5nnlYzpnaJcclxuICAgICAgICBpZih0aGlzLmV4cF9ub3cgPT0gdGhpcy5leHBfcmVxdWlyZWQoKSl7XHJcbiAgICAgICAgICAgIHRoaXMueGl1eGlhbi5hY3RpdmU9dHJ1ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMueGl1eGlhbi5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfVxyXG59XHJcbiJdfQ==