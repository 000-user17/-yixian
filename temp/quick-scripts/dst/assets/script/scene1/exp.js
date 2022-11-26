
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
        _this.level = 0;
        _this.exp_now = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    exp.prototype.start = function () {
        var _a;
        _a = cc.find('persist_node').getComponent('persist_node').exp_init(), this.level = _a[0], this.exp_now = _a[1]; //初始化已经保存的经验条
        //cc.find('persist_node').getComponent('persist_node').exp_gain(1000);  //测试时候用的，一开始就填满经验条 【供测试】
        //触摸经验条面板，测试经验条增加，【供测试】
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            //cc.find('persist_node').getComponent('persist_node').exp_gain(200);
            //cc.find('persist_node').getComponent('persist_node').log_write("经验值增加了~");
        });
    };
    exp.prototype.update = function (dt) {
        var _a;
        _a = cc.find('persist_node').getComponent('persist_node').exp_inf(), this.level = _a[0], this.exp_now = _a[1];
        var sub_level = cc.find('persist_node').getComponent('persist_node').get_sublevel();
        this.node.getComponentInChildren(cc.Label).string = Math.round(this.exp_now).toString() + '/' +
            Math.round(cc.find('persist_node').getComponent('persist_node').exp_required()).toString();
        //如果经验值满，则可以进入修仙界面
        if (this.exp_now >= cc.find('persist_node').getComponent('persist_node').exp_required() &&
            this.node.getComponent(cc.Sprite).fillRange >= 1) {
            if (sub_level == '后期') {
                this.node.getParent().getChildByName('upgrade').getComponent(cc.Button).interactable = true;
                this.node.getParent().getChildByName('upgrade').getChildByName('Background').color = cc.Color.GREEN;
            }
            else {
                cc.find('persist_node').getComponent('persist_node').exp_init();
                cc.find('persist_node').getComponent('persist_node').up_sublevel();
                //突破动画
            }
        }
        /*
        if(this.exp_now == cc.find('persist_node').getComponent('persist_node').exp_required() && this.node.getComponent(cc.Sprite).fillRange >= 1){
            this.xiuxian.active=true;

        }
        else{
            this.xiuxian.active=false;
        }
        */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGV4cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQXFFQztRQWxFRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFdBQUssR0FBVSxDQUFDLENBQUM7UUFHakIsYUFBTyxHQUFVLENBQUMsQ0FBQzs7SUE0RHZCLENBQUM7SUExREcsd0JBQXdCO0lBSXpCLGVBQWU7SUFHZCxtQkFBSyxHQUFMOztRQUVJLEtBQTZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUEzRixJQUFJLENBQUMsS0FBSyxRQUFBLEVBQUUsSUFBSSxDQUFDLE9BQU8sUUFBQSxDQUFvRSxDQUFFLGFBQWE7UUFFNUcsZ0dBQWdHO1FBRWhHLHVCQUF1QjtRQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLO1lBQzlDLHFFQUFxRTtZQUNyRSw0RUFBNEU7UUFFaEYsQ0FBQyxDQUFDLENBQUM7SUFHUCxDQUFDO0lBRUEsb0JBQU0sR0FBTixVQUFRLEVBQUU7O1FBQ1AsS0FBNkIsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQTFGLElBQUksQ0FBQyxLQUFLLFFBQUEsRUFBRSxJQUFJLENBQUMsT0FBTyxRQUFBLENBQW1FO1FBQzVGLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHO1lBQ3hGLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUUvRixrQkFBa0I7UUFDbEIsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksRUFBRTtZQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsRUFDcEQ7WUFDSSxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQ3JCO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtnQkFDM0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTthQUN0RztpQkFFRDtnQkFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDL0QsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQ2xFLE1BQU07YUFDVDtTQUNKO1FBQ0Q7Ozs7Ozs7O1VBUUU7SUFHTCxDQUFDO0lBakVGO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ007SUFHeEI7UUFEQyxRQUFRO3NDQUNRO0lBR2pCO1FBREMsUUFBUTt3Q0FDVTtJQVRGLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FxRXZCO0lBQUQsVUFBQztDQXJFRCxBQXFFQyxDQXJFZ0MsRUFBRSxDQUFDLFNBQVMsR0FxRTVDO2tCQXJFb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXhwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHhpdXhpYW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgbGV2ZWw6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGV4cF9ub3c6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblxyXG5cclxuICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG5cclxuICAgIHN0YXJ0ICgpIHsgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFt0aGlzLmxldmVsLCB0aGlzLmV4cF9ub3ddID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5leHBfaW5pdCgpOyAgLy/liJ3lp4vljJblt7Lnu4/kv53lrZjnmoTnu4/pqozmnaFcclxuXHJcbiAgICAgICAgLy9jYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9nYWluKDEwMDApOyAgLy/mtYvor5Xml7blgJnnlKjnmoTvvIzkuIDlvIDlp4vlsLHloavmu6Hnu4/pqozmnaEg44CQ5L6b5rWL6K+V44CRXHJcblxyXG4gICAgICAgIC8v6Kem5pG457uP6aqM5p2h6Z2i5p2/77yM5rWL6K+V57uP6aqM5p2h5aKe5Yqg77yM44CQ5L6b5rWL6K+V44CRXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIC8vY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5leHBfZ2FpbigyMDApO1xyXG4gICAgICAgICAgICAvL2NjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykubG9nX3dyaXRlKFwi57uP6aqM5YC85aKe5Yqg5LqGflwiKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBbdGhpcy5sZXZlbCwgdGhpcy5leHBfbm93XSA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZXhwX2luZigpO1xyXG4gICAgICAgIGxldCBzdWJfbGV2ZWwgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldF9zdWJsZXZlbCgpXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5leHBfbm93KS50b1N0cmluZygpICsgJy8nICtcclxuICAgICAgICAgICAgIE1hdGgucm91bmQoY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5leHBfcmVxdWlyZWQoKSkudG9TdHJpbmcoKVxyXG5cclxuICAgICAgICAvL+WmguaenOe7j+mqjOWAvOa7oe+8jOWImeWPr+S7pei/m+WFpeS/ruS7meeVjOmdolxyXG4gICAgICAgIGlmKHRoaXMuZXhwX25vdyA+PSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV4cF9yZXF1aXJlZCgpICYmIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID49IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoc3ViX2xldmVsID09ICflkI7mnJ8nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoJ3VwZ3JhZGUnKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q2hpbGRCeU5hbWUoJ3VwZ3JhZGUnKS5nZXRDaGlsZEJ5TmFtZSgnQmFja2dyb3VuZCcpLmNvbG9yID0gY2MuQ29sb3IuR1JFRU5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZXhwX2luaXQoKVxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS51cF9zdWJsZXZlbCgpXHJcbiAgICAgICAgICAgICAgICAvL+eqgeegtOWKqOeUu1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgaWYodGhpcy5leHBfbm93ID09IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZXhwX3JlcXVpcmVkKCkgJiYgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA+PSAxKXtcclxuICAgICAgICAgICAgdGhpcy54aXV4aWFuLmFjdGl2ZT10cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy54aXV4aWFuLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKi9cclxuXHJcblxyXG4gICAgIH1cclxufVxyXG4iXX0=