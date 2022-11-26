
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/event_scripts/bar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bdd6ia5FBBX7mC10oIrcBt', 'bar');
// script/event_scripts/bar.ts

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
var bar = /** @class */ (function (_super) {
    __extends(bar, _super);
    function bar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fatigue = 500;
        _this.recover_inteval = 3; //精力条每隔3秒恢复一次
        return _this;
    }
    bar.prototype.recover = function () {
        //+动画啥的
        cc.find('persist_node').getComponent('persist_node').event_permitted = true;
        this.node.getChildByName('prompt').color = cc.Color.GREEN;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    bar.prototype.start = function () {
        // for test
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            //cc.find('persist_node').getComponent('persist_node').changeEnergy(100)
        });
    };
    /*
    this.fatigue += val
    console.debug(this.fatigue)
    this.node.getComponent(cc.ProgressBar).progress = this.fatigue/500.
    if (this.fatigue >= 500.)
    {
        // this.settle() //结算再reset
        console.debug('fatigue bomb and BEGIN NEXT ROUND INSTANTLY !!!')
        this.node.dispatchEvent(new cc.Event.EventCustom("exausted", true))
        //this.node.getParent().getChildByName('button')
        // 暂时不进行：this.node.getParent().getChildByName('button').getComponent('next').next()
    }
    */
    //else this.getComponent(cc.ProgressBar).progress = this.fatigue / 500.
    //console.debug('SET')
    bar.prototype.update = function (dt) {
        var _this = this;
        var src = this.fatigue;
        this.fatigue = cc.find('persist_node').getComponent('persist_node').getEnergy();
        this.fatigue = this.fatigue < 0 ? 0 : this.fatigue; //filtering
        if (src != this.fatigue) //pn中的精力值发生了改变
         {
            //console.debug('Bar')
            //console.debug(cc.find('event_controller').getComponent('event_controller').event_permitted)
            //console.debug('target: '+String(this.fatigue))
            this.schedule(function () {
                _this.node.getComponent(cc.ProgressBar).progress += (_this.fatigue - src) / 500 / 5;
            }, dt, 5);
            if (src <= 0 && this.fatigue > 0)
                this.recover();
            /*
            if (this.fatigue <= 0) //energy 变化的结果是让当前值变成<=0
            {
                console.debug('target: '+String(cc.find('persist_node').getComponent('persist_node').getEnergy()))
                //this.getComponent(cc.ProgressBar) 变红一下：换个材质或红框的图
                cc.find('event_controller').emit('exausted')
            }
            else this.recover()//energy 变化的结果是让当前值变成>0
            */
        }
        //精力条随时间恢复
        if (this.recover_inteval >= 0) {
            this.recover_inteval -= dt;
        }
        else {
            cc.find('persist_node').getComponent('persist_node').changeEnergy(1);
            this.recover_inteval = 3;
        }
        //this.node.getChildByName('prompt').getComponent(cc.Label)
        this.getComponentInChildren(cc.Label).string = Math.round(this.fatigue).toString() + ' / 500';
        if (this.fatigue == 0)
            this.node.getChildByName('prompt').color = cc.Color.RED;
    };
    __decorate([
        property
    ], bar.prototype, "fatigue", void 0);
    __decorate([
        property
    ], bar.prototype, "recover_inteval", void 0);
    bar = __decorate([
        ccclass
    ], bar);
    return bar;
}(cc.Component));
exports.default = bar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxldmVudF9zY3JpcHRzXFxiYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUFzRkM7UUFuRkcsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUd0QixxQkFBZSxHQUFVLENBQUMsQ0FBQyxDQUFFLGFBQWE7O0lBZ0Y5QyxDQUFDO0lBN0VHLHFCQUFPLEdBQVA7UUFFSSxPQUFPO1FBQ1AsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDN0QsQ0FBQztJQUdELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsbUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUM7WUFDdkMsd0VBQXdFO1FBQzVFLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7TUFZRTtJQUNFLHVFQUF1RTtJQUN2RSxzQkFBc0I7SUFFMUIsb0JBQU0sR0FBTixVQUFRLEVBQUU7UUFBVixpQkF5Q0M7UUF4Q0csSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQy9FLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQSxDQUFDLFdBQVc7UUFFOUQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxjQUFjO1NBQ3ZDO1lBQ0ksc0JBQXNCO1lBQ3RCLDZGQUE2RjtZQUM3RixnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUMsR0FBQyxHQUFHLEdBQUMsQ0FBQyxDQUFBO1lBQy9FLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDO2dCQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNoRDs7Ozs7Ozs7Y0FRRTtTQUNMO1FBR0QsVUFBVTtRQUNWLElBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLEVBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUE7U0FDN0I7YUFDRztZQUNBLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUlELDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUE7UUFDN0YsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUE7SUFFbEYsQ0FBQztJQWxGRDtRQURDLFFBQVE7d0NBQ2E7SUFHdEI7UUFEQyxRQUFRO2dEQUNrQjtJQU5WLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0FzRnZCO0lBQUQsVUFBQztDQXRGRCxBQXNGQyxDQXRGZ0MsRUFBRSxDQUFDLFNBQVMsR0FzRjVDO2tCQXRGb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZhdGlndWU6IG51bWJlciA9IDUwMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJlY292ZXJfaW50ZXZhbDpudW1iZXIgPSAzOyAgLy/nsr7lipvmnaHmr4/pmpQz56eS5oGi5aSN5LiA5qyhXHJcblxyXG4gICAgXHJcbiAgICByZWNvdmVyKClcclxuICAgIHtcclxuICAgICAgICAvLyvliqjnlLvllaXnmoRcclxuICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmV2ZW50X3Blcm1pdHRlZCA9IHRydWVcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3Byb21wdCcpLmNvbG9yID0gY2MuQ29sb3IuR1JFRU5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBmb3IgdGVzdFxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoKT0+e1xyXG4gICAgICAgICAgICAvL2NjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuY2hhbmdlRW5lcmd5KDEwMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICB0aGlzLmZhdGlndWUgKz0gdmFsXHJcbiAgICBjb25zb2xlLmRlYnVnKHRoaXMuZmF0aWd1ZSlcclxuICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gdGhpcy5mYXRpZ3VlLzUwMC5cclxuICAgIGlmICh0aGlzLmZhdGlndWUgPj0gNTAwLilcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLnNldHRsZSgpIC8v57uT566X5YaNcmVzZXQgXHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZygnZmF0aWd1ZSBib21iIGFuZCBCRUdJTiBORVhUIFJPVU5EIElOU1RBTlRMWSAhISEnKVxyXG4gICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBjYy5FdmVudC5FdmVudEN1c3RvbShcImV4YXVzdGVkXCIsIHRydWUpKVxyXG4gICAgICAgIC8vdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENoaWxkQnlOYW1lKCdidXR0b24nKVxyXG4gICAgICAgIC8vIOaaguaXtuS4jei/m+ihjO+8mnRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDaGlsZEJ5TmFtZSgnYnV0dG9uJykuZ2V0Q29tcG9uZW50KCduZXh0JykubmV4dCgpXHJcbiAgICB9IFxyXG4gICAgKi9cclxuICAgICAgICAvL2Vsc2UgdGhpcy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gdGhpcy5mYXRpZ3VlIC8gNTAwLlxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZygnU0VUJylcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgbGV0IHNyYyA9IHRoaXMuZmF0aWd1ZVxyXG4gICAgICAgIHRoaXMuZmF0aWd1ZSA9IGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuZ2V0RW5lcmd5KClcclxuICAgICAgICB0aGlzLmZhdGlndWUgPSB0aGlzLmZhdGlndWUgPCAwID8gMCA6IHRoaXMuZmF0aWd1ZSAvL2ZpbHRlcmluZ1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzcmMgIT0gdGhpcy5mYXRpZ3VlKSAvL3Bu5Lit55qE57K+5Yqb5YC85Y+R55Sf5LqG5pS55Y+YXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ0JhcicpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZyhjYy5maW5kKCdldmVudF9jb250cm9sbGVyJykuZ2V0Q29tcG9uZW50KCdldmVudF9jb250cm9sbGVyJykuZXZlbnRfcGVybWl0dGVkKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ3RhcmdldDogJytTdHJpbmcodGhpcy5mYXRpZ3VlKSlcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0JhcikucHJvZ3Jlc3MgKz0gKHRoaXMuZmF0aWd1ZS1zcmMpLzUwMC81XHJcbiAgICAgICAgICAgIH0sIGR0LCA1KVxyXG4gICAgICAgICAgICBpZiAoc3JjIDw9IDAgJiYgdGhpcy5mYXRpZ3VlID4gMCkgdGhpcy5yZWNvdmVyKClcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmF0aWd1ZSA8PSAwKSAvL2VuZXJneSDlj5jljJbnmoTnu5PmnpzmmK/orqnlvZPliY3lgLzlj5jmiJA8PTBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygndGFyZ2V0OiAnK1N0cmluZyhjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdldEVuZXJneSgpKSlcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpIOWPmOe6ouS4gOS4i++8muaNouS4quadkOi0qOaIlue6ouahhueahOWbvlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnZXZlbnRfY29udHJvbGxlcicpLmVtaXQoJ2V4YXVzdGVkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHRoaXMucmVjb3ZlcigpLy9lbmVyZ3kg5Y+Y5YyW55qE57uT5p6c5piv6K6p5b2T5YmN5YC85Y+Y5oiQPjBcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v57K+5Yqb5p2h6ZqP5pe26Ze05oGi5aSNXHJcbiAgICAgICAgaWYodGhpcy5yZWNvdmVyX2ludGV2YWwgPj0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3Zlcl9pbnRldmFsIC09IGR0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoJ3BlcnNpc3Rfbm9kZScpLmdldENvbXBvbmVudCgncGVyc2lzdF9ub2RlJykuY2hhbmdlRW5lcmd5KDEpO1xyXG4gICAgICAgICAgICB0aGlzLnJlY292ZXJfaW50ZXZhbCA9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3Byb21wdCcpLmdldENvbXBvbmVudChjYy5MYWJlbClcclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IE1hdGgucm91bmQodGhpcy5mYXRpZ3VlKS50b1N0cmluZygpICsgJyAvIDUwMCdcclxuICAgICAgICBpZiAodGhpcy5mYXRpZ3VlID09IDApIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgncHJvbXB0JykuY29sb3IgPSBjYy5Db2xvci5SRURcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXX0=