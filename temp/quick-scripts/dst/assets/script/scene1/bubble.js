
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene1/bubble.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33be2OCTXtH4acEXEToTusG', 'bubble');
// script/scene1/bubble.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubble_type = 0;
        _this.isclick = false; //气泡只能点击一次
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    //点击气泡后的提示
    /**
 * 生成范围随机数
 * @Min 最小值
 * @Max 最大值
 */
    NewClass.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    NewClass.prototype.bubble_ui = function (ui_name) {
        var bubble_touch = new cc.Node();
        var tishi = bubble_touch.addComponent(cc.Label); //增加label组件并赋给丹药数量
        if (this.bubble_type == 0) {
            bubble_touch.color = cc.color(0, 0, 0); //将字体改为白色
        }
        else if (this.bubble_type == 1) {
            bubble_touch.color = cc.color(147, 9, 247); //将字体改为橙色
        }
        else if (this.bubble_type == 2) {
            bubble_touch.color = cc.color(234, 139, 28); //将字体改为橙色
        }
        else if (this.bubble_type == 3) {
            bubble_touch.color = cc.color(39, 103, 208); //将字体改为蓝色
        }
        else if (this.bubble_type == 4) {
            bubble_touch.color = cc.color(247, 233, 10); //将字体改为黄色
        }
        else {
            bubble_touch.color = cc.color(241, 19, 23); //将字体改为红色
        }
        //设置文本大小
        tishi.fontSize = 30;
        tishi.lineHeight = 30;
        bubble_touch.setParent(this.node); //父节点是this.node才能出来
        bubble_touch.x = 0; //相对于父节点的横坐标位置不变
        bubble_touch.y = 60; //相对于父节点的纵坐标在下面一点的位置
        tishi.string = ui_name;
        //延时最后的时间为ms,延时1秒销毁，如果在上面的schedule函数还没执行完就销毁，会报错
        setTimeout(function () {
            bubble_touch.destroy();
        }, 800);
    };
    NewClass.prototype.bubble_effect = function () {
        var persist = cc.find('persist_node').getComponent('persist_node'); //获取常驻节点
        switch (this.bubble_type) {
            case 0:
                this.bubble_ui("无事发生");
                break;
            case 1:
                //点击增加精力值
                persist.changeEnergy(Math.abs(persist.max_energy()) / 10); //一个气泡恢复2%的精力条
                this.bubble_ui("精力增长~");
                break;
            case 2:
                var jingyan = this.GetRandomNum(5, 20); //随机提升一部分比例经验
                persist.exp_gain(persist.exp_required() / jingyan);
                this.bubble_ui("经验增长~");
                break;
            case 3:
                var att_id = this.GetRandomNum(0, 8); //随机提升某一项属性
                var att_name = persist.attribute_name[att_id]; //获得相应的属性名称
                persist.change_attr(att_name, 50); //改变对应的属性，增加一点
                this.bubble_ui(att_name + "+50");
                break;
            case 4:
                var item = this.GetRandomNum(0, 7); //随机获取一个物品
                persist.setitem(item, 1);
                this.bubble_ui("+1");
                break;
            case 5:
                //红色气泡惩罚(不会掉落物品)
                var x = this.GetRandomNum(0, 2); //控制随机试取疲劳值还是经验值或是属性,会出现0,1,2随机数
                if (x == 0) {
                    persist.changeEnergy(-1 * persist.max_energy() / 10); //一个气泡恢复2%的精力条
                    this.bubble_ui("精力降低ono");
                }
                else if (x == 1) {
                    var jingyan_1 = this.GetRandomNum(5, 20); //随机提升一部分比例经验
                    persist.exp_gain(-1 * persist.exp_required() / jingyan_1);
                    this.bubble_ui("经验下降ono");
                }
                else {
                    var att_id_1 = this.GetRandomNum(0, 8); //随机提升某一项属性
                    var att_name_1 = persist.attribute_name[att_id_1]; //获得相应的属性名
                    if (persist.get_attr(att_name_1) == 0) {
                        persist.change_attr(att_name_1, 0); //改变对应的属性，增加一点
                        this.bubble_ui(att_name_1 + "已减为0");
                    }
                    else {
                        persist.change_attr(att_name_1, -50); //改变对应的属性，增加一点
                        this.bubble_ui(att_name_1 + "-50");
                    }
                }
                break;
            default:
                break;
        }
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.isclick == false) {
                cc.loader.loadRes("气泡", cc.AudioClip, function (res, clip) {
                    //播放音乐
                    var audioID = cc.audioEngine.playEffect(clip, false);
                    cc.audioEngine.setVolume(audioID, 0.3);
                    //停止播放音乐
                    //cc.audioEngine.stop(audioID);
                });
                var player = cc.find('player').getComponent('player'); //点击气泡增加人物年龄
                if (player.click_bubble < 4) {
                    player.click_bubble += 1;
                }
                else {
                    player.click_bubble = 0;
                    cc.find('persist_node').getComponent('persist_node').addAge(1); //点击五次增加一岁
                }
                _this.bubble_effect(); //触发气泡效果
                _this.isclick = true;
                setTimeout(function () {
                    _this.node.active = false; //延时500ms消失,用destroy会导致schedule报错
                }, 500);
            }
        });
    };
    __decorate([
        property
    ], NewClass.prototype, "bubble_type", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTFcXGJ1YmJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXdMQztRQXJMRyxpQkFBVyxHQUFVLENBQUMsQ0FBQztRQUV2QixhQUFPLEdBQVcsS0FBSyxDQUFDLENBQUMsVUFBVTs7UUFrTG5DLGlCQUFpQjtJQUNyQixDQUFDO0lBakxHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsVUFBVTtJQUVOOzs7O0dBSUo7SUFDSSwrQkFBWSxHQUFuQixVQUFvQixHQUFHLEVBQUUsR0FBRztRQUMzQixJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdFLDRCQUFTLEdBQVQsVUFBVSxPQUFjO1FBR3BCLElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1FBQ25FLElBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUM7WUFDckIsWUFBWSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFB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Q0FBQyxDQUFDO2dCQUVILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUUsWUFBWTtnQkFDbkUsSUFBRyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBQztvQkFDdkIsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7aUJBQzVCO3FCQUNHO29CQUNBLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxVQUFVO2lCQUM5RTtnQkFHRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBRSxRQUFRO2dCQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFFcEIsVUFBVSxDQUFDO29CQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFFLGlDQUFpQztnQkFDaEUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7UUFJTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFsTEQ7UUFEQyxRQUFRO2lEQUNjO0lBSE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdMNUI7SUFBRCxlQUFDO0NBeExELEFBd0xDLENBeExxQyxFQUFFLENBQUMsU0FBUyxHQXdMakQ7a0JBeExvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBidWJibGVfdHlwZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIGlzY2xpY2s6Ym9vbGVhbiA9IGZhbHNlOyAvL+awlOazoeWPquiDveeCueWHu+S4gOasoVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIC8v54K55Ye75rCU5rOh5ZCO55qE5o+Q56S6XHJcblxyXG4gICAgICAgIC8qKlxyXG5cdCAqIOeUn+aIkOiMg+WbtOmaj+acuuaVsFxyXG5cdCAqIEBNaW4g5pyA5bCP5YC8XHJcblx0ICogQE1heCDmnIDlpKflgLxcclxuXHQgKi9cclxuXHRwdWJsaWMgR2V0UmFuZG9tTnVtKE1pbiwgTWF4KTpudW1iZXIge1xyXG5cdFx0dmFyIFJhbmdlID0gTWF4IC0gTWluO1xyXG5cdFx0dmFyIFJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0cmV0dXJuIChNaW4gKyBNYXRoLnJvdW5kKFJhbmQgKiBSYW5nZSkpO1xyXG5cdH1cclxuXHJcblxyXG4gICAgYnViYmxlX3VpKHVpX25hbWU6c3RyaW5nKXtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYnViYmxlX3RvdWNoID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICB2YXIgdGlzaGkgPSBidWJibGVfdG91Y2guYWRkQ29tcG9uZW50KGNjLkxhYmVsKTsgLy/lop7liqBsYWJlbOe7hOS7tuW5tui1i+e7meS4ueiNr+aVsOmHj1xyXG4gICAgICAgIGlmKHRoaXMuYnViYmxlX3R5cGUgPT0gMCl7XHJcbiAgICAgICAgICAgIGJ1YmJsZV90b3VjaC5jb2xvciA9IGNjLmNvbG9yKDAsMCwwKTsgLy/lsIblrZfkvZPmlLnkuLrnmb3oibJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmJ1YmJsZV90eXBlID09IDEpe1xyXG4gICAgICAgICAgICBidWJibGVfdG91Y2guY29sb3IgPSBjYy5jb2xvcigxNDcsOSwyNDcpOyAvL+WwhuWtl+S9k+aUueS4uuapmeiJslxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuYnViYmxlX3R5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIGJ1YmJsZV90b3VjaC5jb2xvciA9IGNjLmNvbG9yKDIzNCwxMzksMjgpOyAvL+WwhuWtl+S9k+aUueS4uuapmeiJslxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuYnViYmxlX3R5cGUgPT0gMyl7XHJcbiAgICAgICAgICAgIGJ1YmJsZV90b3VjaC5jb2xvciA9IGNjLmNvbG9yKDM5LDEwMywyMDgpOyAvL+WwhuWtl+S9k+aUueS4uuiTneiJslxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuYnViYmxlX3R5cGUgPT0gNCl7XHJcbiAgICAgICAgICAgIGJ1YmJsZV90b3VjaC5jb2xvciA9IGNjLmNvbG9yKDI0NywyMzMsMTApOyAvL+WwhuWtl+S9k+aUueS4uum7hOiJslxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYnViYmxlX3RvdWNoLmNvbG9yID0gY2MuY29sb3IoMjQxLDE5LDIzKTsgLy/lsIblrZfkvZPmlLnkuLrnuqLoibJcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+iuvue9ruaWh+acrOWkp+Wwj1xyXG4gICAgICAgIHRpc2hpLmZvbnRTaXplID0gMzA7XHJcbiAgICAgICAgdGlzaGkubGluZUhlaWdodCA9IDMwO1xyXG4gICAgIFxyXG4gICAgICAgIGJ1YmJsZV90b3VjaC5zZXRQYXJlbnQodGhpcy5ub2RlKTsgIC8v54i26IqC54K55pivdGhpcy5ub2Rl5omN6IO95Ye65p2lXHJcbiAgICAgICAgYnViYmxlX3RvdWNoLnggPSAwOyAvL+ebuOWvueS6jueItuiKgueCueeahOaoquWdkOagh+S9jee9ruS4jeWPmFxyXG4gICAgICAgIGJ1YmJsZV90b3VjaC55ID0gNjA7Ly/nm7jlr7nkuo7niLboioLngrnnmoTnurXlnZDmoIflnKjkuIvpnaLkuIDngrnnmoTkvY3nva5cclxuICAgICAgICB0aXNoaS5zdHJpbmcgPSB1aV9uYW1lOyAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIC8v5bu25pe25pyA5ZCO55qE5pe26Ze05Li6bXMs5bu25pe2MeenkumUgOavge+8jOWmguaenOWcqOS4iumdoueahHNjaGVkdWxl5Ye95pWw6L+Y5rKh5omn6KGM5a6M5bCx6ZSA5q+B77yM5Lya5oql6ZSZXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBidWJibGVfdG91Y2guZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBidWJibGVfZWZmZWN0KCl7XHJcblxyXG4gICAgICAgIGxldCBwZXJzaXN0ID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKTsgLy/ojrflj5bluLjpqbvoioLngrlcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmJ1YmJsZV90eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX3VpKFwi5peg5LqL5Y+R55SfXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgLy/ngrnlh7vlop7liqDnsr7lipvlgLxcclxuICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlRW5lcmd5KE1hdGguYWJzKHBlcnNpc3QubWF4X2VuZXJneSgpKS8xMCk7Ly/kuIDkuKrmsJTms6HmgaLlpI0yJeeahOeyvuWKm+adoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVfdWkoXCLnsr7lipvlop7plb9+XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgbGV0IGppbmd5YW4gPSB0aGlzLkdldFJhbmRvbU51bSg1LDIwKTsgLy/pmo/mnLrmj5DljYfkuIDpg6jliIbmr5Tkvovnu4/pqoxcclxuICAgICAgICAgICAgICAgIHBlcnNpc3QuZXhwX2dhaW4ocGVyc2lzdC5leHBfcmVxdWlyZWQoKS9qaW5neWFuKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX3VpKFwi57uP6aqM5aKe6ZW/flwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGxldCBhdHRfaWQgPSB0aGlzLkdldFJhbmRvbU51bSgwLDgpOyAvL+maj+acuuaPkOWNh+afkOS4gOmhueWxnuaAp1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dF9uYW1lID0gcGVyc2lzdC5hdHRyaWJ1dGVfbmFtZVthdHRfaWRdOyAgLy/ojrflvpfnm7jlupTnmoTlsZ7mgKflkI3np7BcclxuICAgICAgICAgICAgICAgIHBlcnNpc3QuY2hhbmdlX2F0dHIoYXR0X25hbWUsIDUwKTsgLy/mlLnlj5jlr7nlupTnmoTlsZ7mgKfvvIzlop7liqDkuIDngrlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZV91aShhdHRfbmFtZStcIis1MFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5HZXRSYW5kb21OdW0oMCw3KTsgLy/pmo/mnLrojrflj5bkuIDkuKrnianlk4FcclxuICAgICAgICAgICAgICAgIHBlcnNpc3Quc2V0aXRlbShpdGVtLDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVfdWkoXCIrMVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIC8v57qi6Imy5rCU5rOh5oOp572aKOS4jeS8muaOieiQveeJqeWTgSlcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gdGhpcy5HZXRSYW5kb21OdW0oMCwyKTsgLy/mjqfliLbpmo/mnLror5Xlj5bnlrLlirPlgLzov5jmmK/nu4/pqozlgLzmiJbmmK/lsZ7mgKcs5Lya5Ye6546wMCwxLDLpmo/mnLrmlbBcclxuXHJcbiAgICAgICAgICAgICAgICBpZih4PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmNoYW5nZUVuZXJneSgtMSpwZXJzaXN0Lm1heF9lbmVyZ3koKS8xMCk7Ly/kuIDkuKrmsJTms6HmgaLlpI0yJeeahOeyvuWKm+adoVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX3VpKFwi57K+5Yqb6ZmN5L2Ob25vXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoeD09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGppbmd5YW4gPSB0aGlzLkdldFJhbmRvbU51bSg1LDIwKTsgLy/pmo/mnLrmj5DljYfkuIDpg6jliIbmr5Tkvovnu4/pqoxcclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmV4cF9nYWluKC0xKnBlcnNpc3QuZXhwX3JlcXVpcmVkKCkvamluZ3lhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWJibGVfdWkoXCLnu4/pqozkuIvpmY1vbm9cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0X2lkID0gdGhpcy5HZXRSYW5kb21OdW0oMCw4KTsgLy/pmo/mnLrmj5DljYfmn5DkuIDpobnlsZ7mgKdcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXR0X25hbWUgPSBwZXJzaXN0LmF0dHJpYnV0ZV9uYW1lW2F0dF9pZF07ICAvL+iOt+W+l+ebuOW6lOeahOWxnuaAp+WQjVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBlcnNpc3QuZ2V0X2F0dHIoYXR0X25hbWUpID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmNoYW5nZV9hdHRyKGF0dF9uYW1lLCAwKTsgLy/mlLnlj5jlr7nlupTnmoTlsZ7mgKfvvIzlop7liqDkuIDngrlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWJibGVfdWkoYXR0X25hbWUrXCLlt7Llh4/kuLowXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzaXN0LmNoYW5nZV9hdHRyKGF0dF9uYW1lLCAtNTApOyAvL+aUueWPmOWvueW6lOeahOWxnuaAp++8jOWinuWKoOS4gOeCuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZV91aShhdHRfbmFtZStcIi01MFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5pc2NsaWNrID09IGZhbHNlKXtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcIuawlOazoVwiLCBjYy5BdWRpb0NsaXAsIChyZXMsY2xpcCk9PntcclxuICAgICAgICAgICAgICAgICAgICAvL+aSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoYXVkaW9JRCwgMC4zKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvumfs+S5kFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBjYy5maW5kKCdwbGF5ZXInKS5nZXRDb21wb25lbnQoJ3BsYXllcicpICAvL+eCueWHu+awlOazoeWinuWKoOS6uueJqeW5tOm+hFxyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmNsaWNrX2J1YmJsZSA8IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5jbGlja19idWJibGUgKz0gMTtcclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2xpY2tfYnViYmxlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmFkZEFnZSgxKTsgIC8v54K55Ye75LqU5qyh5aKe5Yqg5LiA5bKBXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlX2VmZmVjdCgpOyAgLy/op6blj5HmsJTms6HmlYjmnpxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNjbGljayA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8v5bu25pe2NTAwbXPmtojlpLEs55SoZGVzdHJveeS8muWvvOiHtHNjaGVkdWxl5oql6ZSZXHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=