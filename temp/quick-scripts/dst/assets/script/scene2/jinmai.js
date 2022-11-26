
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/jinmai.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fe5dzuNR1FeqnNB7k34if/', 'jinmai');
// script/scene2/jinmai.ts

"use strict";
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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
/*
该脚本存放在突破场景中，必须要从主场景中切换过来才能正常运行

*/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var jinmai = /** @class */ (function (_super) {
    __extends(jinmai, _super);
    function jinmai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jinmai_index = 0; //表示不同的筋脉，在cocos面板中调整，使得不同的筋脉节点可以使用同一个脚本
        _this.attribute = 0; //暂存本节点筋脉对应的人物属性
        _this.is_click = false; //控制筋脉消失前只能点击一次筋脉
        _this.sort_attr = []; //获取排序后属性索引的数组
        _this.random1 = 0; //随机数的产生，产生于start时，用于控制属性对丹田量的影响；丹药撤回操作将重置改随机数，而观察下一个突破经脉的值的丹药，是不会改变该随机数。从而区分不同【丹药】的效果
        _this.random2 = 0; //第二种情况的随机数，即当前丹田值大于110
        _this.jinmai_loc = []; //记录当前筋脉位置
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    jinmai.prototype.onLoad = function () {
        this.attributes_get(); //预载时就加载获取属性
    };
    //获取人物八项属性到数组中
    jinmai.prototype.attributes_get = function () {
        var persist = cc.find('persist_node').getComponent('persist_node');
        var att_name = persist.attribute_name; //获取属性名称
        this.attribute = persist.get_attr(att_name[this.jinmai_index]); //获取对应索引属性名称的属性值
    };
    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     * 给予不同节点相同的脚本，每个节点都会分别执行一次改脚本的start等方法
     */
    jinmai.prototype.GetRandomNum = function (Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    };
    jinmai.prototype.jinmai = function () {
        cc.loader.loadRes("突破", cc.AudioClip, function (res, clip) {
            //播放音乐
            var audioID = cc.audioEngine.playEffect(clip, false);
            cc.audioEngine.setVolume(audioID, 0.1);
            //停止播放音乐
            //cc.audioEngine.stop(audioID);
        });
        var att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        var double_effect = cc.find('danyao2').getComponent('danyao').get_double_effect(); //丹药2的效益为双倍效果，所以检测danyao2下脚本的double_effect组件
        var dantian_now = cc.find('dantian').getComponent('dantian').dantian_now;
        //将人物属性值和人物突破该筋脉带来的收益结合
        var dantian_add = 0; //突破该条筋脉的丹田增加量
        if (dantian_now <= 110) {
            dantian_add = (100 - att_order * 10) + this.random1;
        }
        else {
            dantian_add = (210 - dantian_now) + this.random2;
        }
        //用于【丹药2】效果
        if (double_effect) {
            dantian_add *= 2;
            cc.find('danyao2').getComponent('danyao').double_effect = false; //只能双倍一次
        }
        if (cc.find('danyao4').getComponent('danyao').get_yuce_effect()) { //【丹药4】效果，如果服用丹药，开启了预测效果
            this.jinmai_tishi('丹田量增加' + String(dantian_add)); //增加的ui显示，只显示，而不进行丹田量的增加
            cc.find('danyao4').getComponent('danyao').set_yuce_effect(false); //只能预测一次，重新设置为负数
            return; //预测完毕就直接返回，不执行下面的语句了
        }
        var pre_num = cc.find('dantian').getComponent('dantian').explosion + cc.find('dantian').getComponent('dantian').dantian_now; //操作前丹田和丹田爆炸的数值,【用于丹药3的效果】
        cc.find('dantian').getComponent('dantian').dantian_gain(dantian_add); //增加丹田量
        cc.find('dantian').getComponent('dantian').tupo_num += 1; //突破筋脉，突破筋脉数量+1
        this.jinmai_tishi('丹田量增加' + String(dantian_add)); //增加的ui显示
        cc.find('danyao3').getComponent('danyao').push_chehui_jinmai(this.node.name); //【用于丹药3效果的入栈】入栈突破的筋脉名字
        //【用于丹药3的效果】start
        var change_num = cc.find('dantian').getComponent('dantian').explosion + cc.find('dantian').getComponent('dantian').dantian_now - pre_num; //操作后丹田和丹田超出值的该变量，由于explosion只会再dantian_now满时增加，所以可以将该值放入danyao_3的栈中
        cc.find('danyao3').getComponent('danyao').push_chehui_effect(change_num);
        //另外一个栈的进入操作写在筋脉处
        //【用于丹药3的效果】end
    };
    //控制经脉消失
    jinmai.prototype.disappear = function () {
        var sp = this.node.getComponent(cc.Sprite);
        this.schedule(function () {
            sp.fillRange -= (1 / 10);
        }, 1 / 100, 10);
    };
    //控制经脉出现,用于【丹药2】的撤回操作
    jinmai.prototype.appear = function () {
        //撤回之后重置两种情况的随机数
        this.random1 = this.GetRandomNum(-10, 10);
        var att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        this.random2 = this.GetRandomNum((9 - att_order) * (-10), (9 - att_order) * 10);
        cc.find('dantian').getComponent('dantian').tupo_num -= 1; //撤回筋脉，突破数量减一
        var sp = this.node.getComponent(cc.Sprite);
        this.schedule(function () {
            sp.fillRange += (1 / 10);
        }, 1 / 100, 10);
    };
    //点击筋脉的提示效果
    jinmai.prototype.jinmai_tishi = function (name) {
        var jinmaitupo = new cc.Node();
        var tishi = jinmaitupo.addComponent(cc.Label); //增加label组件并赋给丹药数量
        jinmaitupo.color = cc.color(255, 255, 255); //将字体改为白色
        //设置文本大小
        tishi.fontSize = 40;
        tishi.lineHeight = 40;
        jinmaitupo.setParent(this.node); //父节点是this.node才能出来
        jinmaitupo.x = 0; //相对于父节点的横坐标位置不变
        jinmaitupo.y = 0; //相对于父节点的纵坐标在下面一点的位置
        tishi.string = name;
        this.schedule(function () {
            jinmaitupo.y += 5; //增加5和减少0.01都可以增快提示速度
        }, 0.01, 20);
        //延时最后的时间为ms,延时1秒销毁，如果在上面的schedule函数还没执行完就销毁，会报错
        setTimeout(function () {
            jinmaitupo.destroy();
        }, 1000);
    };
    jinmai.prototype.start = function () {
        var _this = this;
        this.jinmai_loc = [this.node.x, this.node.y]; //获取筋脉初始位置
        this.sort_attr = cc.find('persist_node').getComponent('persist_node').sort_attr(); //获取排序后属性索引的数组
        var att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        //根据排序改变颜色
        //this.node.color = cc.color(att_order*20,30,80);
        this.random1 = this.GetRandomNum(-10, 10); //获取-10到10的随机数
        this.random2 = this.GetRandomNum((9 - att_order) * (-10), (9 - att_order) * 10); //获取第二个随机数
        //只能点击一次静脉
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            //【丹药4】的效果，预测完毕直接返回
            if (cc.find('danyao4').getComponent('danyao').get_yuce_effect()) {
                _this.jinmai();
                return;
            }
            if (!_this.is_click) { //确保只能突破一次静脉，即点击一次还没消失时就不能点了
                _this.jinmai();
                _this.is_click = true;
            }
            _this.disappear();
        });
    };
    jinmai.prototype.move = function () {
        var att_order = this.sort_attr.indexOf(this.jinmai_index); //获得本属性的排序位置
        var random_loc_x = this.GetRandomNum(-1 * (9 - att_order), 9 - att_order); //排名越靠前的筋脉越不稳定
        var random_loc_y = this.GetRandomNum(-1 * (9 - att_order), 9 - att_order);
        if (this.node.x - this.jinmai_loc[0] < -4) {
            random_loc_x = 2;
        }
        else if (this.node.x - this.jinmai_loc[0] > 4) {
            random_loc_x = -2;
        }
        if (this.node.y - this.jinmai_loc[1] < -4) {
            random_loc_y = 2;
        }
        else if (this.node.y - this.jinmai_loc[1] > 4) {
            random_loc_y = -2;
        }
        this.node.x += random_loc_x;
        this.node.y += random_loc_y;
    };
    jinmai.prototype.update = function (dt) {
        this.move();
    };
    __decorate([
        property
    ], jinmai.prototype, "jinmai_index", void 0);
    __decorate([
        property
    ], jinmai.prototype, "is_click", void 0);
    jinmai = __decorate([
        ccclass
    ], jinmai);
    return jinmai;
}(cc.Component));
exports.default = jinmai;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGppbm1haS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRjs7O0VBR0U7QUFDSSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTZPQztRQTFPRyxrQkFBWSxHQUFVLENBQUMsQ0FBQyxDQUFJLHdDQUF3QztRQUVwRSxlQUFTLEdBQVUsQ0FBQyxDQUFDLENBQU0sZ0JBQWdCO1FBSzNDLGNBQVEsR0FBVyxLQUFLLENBQUMsQ0FBRSxpQkFBaUI7UUFFNUMsZUFBUyxHQUFZLEVBQUUsQ0FBQyxDQUFBLGNBQWM7UUFHOUIsYUFBTyxHQUFVLENBQUMsQ0FBQyxDQUFDLHNGQUFzRjtRQUUxRyxhQUFPLEdBQVUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBRW5ELGdCQUFVLEdBQVksRUFBRSxDQUFDLENBQUMsVUFBVTs7SUEwTnhDLENBQUM7SUF2Tkcsd0JBQXdCO0lBRXhCLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBRSxZQUFZO0lBRXhDLENBQUM7SUFJRCxjQUFjO0lBQ2QsK0JBQWMsR0FBZDtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25FLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRO1FBRS9DLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVks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OlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vKlxyXG7or6XohJrmnKzlrZjmlL7lnKjnqoHnoLTlnLrmma/kuK3vvIzlv4XpobvopoHku47kuLvlnLrmma/kuK3liIfmjaLov4fmnaXmiY3og73mraPluLjov5DooYxcclxuXHJcbiovIFxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGppbm1haSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBqaW5tYWlfaW5kZXg6bnVtYmVyID0gMDsgICAgLy/ooajnpLrkuI3lkIznmoTnrYvohInvvIzlnKhjb2Nvc+mdouadv+S4reiwg+aVtO+8jOS9v+W+l+S4jeWQjOeahOeti+iEieiKgueCueWPr+S7peS9v+eUqOWQjOS4gOS4quiEmuacrFxyXG5cclxuICAgIGF0dHJpYnV0ZTpudW1iZXIgPSAwOyAgICAgIC8v5pqC5a2Y5pys6IqC54K5562L6ISJ5a+55bqU55qE5Lq654mp5bGe5oCnXHJcblxyXG5cclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGlzX2NsaWNrOmJvb2xlYW4gPSBmYWxzZTsgIC8v5o6n5Yi2562L6ISJ5raI5aSx5YmN5Y+q6IO954K55Ye75LiA5qyh562L6ISJXHJcblxyXG4gICAgc29ydF9hdHRyOm51bWJlcltdID0gW107Ly/ojrflj5bmjpLluo/lkI7lsZ7mgKfntKLlvJXnmoTmlbDnu4RcclxuXHJcblxyXG4gICAgcHJpdmF0ZSByYW5kb20xOm51bWJlciA9IDA7IC8v6ZqP5py65pWw55qE5Lqn55Sf77yM5Lqn55Sf5LqOc3RhcnTml7bvvIznlKjkuo7mjqfliLblsZ7mgKflr7nkuLnnlLDph4/nmoTlvbHlk43vvJvkuLnoja/mkqTlm57mk43kvZzlsIbph43nva7mlLnpmo/mnLrmlbDvvIzogIzop4Llr5/kuIvkuIDkuKrnqoHnoLTnu4/ohInnmoTlgLznmoTkuLnoja/vvIzmmK/kuI3kvJrmlLnlj5jor6Xpmo/mnLrmlbDjgILku47ogIzljLrliIbkuI3lkIzjgJDkuLnoja/jgJHnmoTmlYjmnpxcclxuICAgIFxyXG4gICAgcHJpdmF0ZSByYW5kb20yOm51bWJlciA9IDA7IC8v56ys5LqM56eN5oOF5Ya155qE6ZqP5py65pWw77yM5Y2z5b2T5YmN5Li555Sw5YC85aSn5LqOMTEwXHJcblxyXG4gICAgamlubWFpX2xvYzpudW1iZXJbXSA9IFtdOyAvL+iusOW9leW9k+WJjeeti+iEieS9jee9rlxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlc19nZXQoKTsgIC8v6aKE6L295pe25bCx5Yqg6L296I635Y+W5bGe5oCnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8v6I635Y+W5Lq654mp5YWr6aG55bGe5oCn5Yiw5pWw57uE5LitXHJcbiAgICBhdHRyaWJ1dGVzX2dldCgpeyAgXHJcbiAgICAgICAgbGV0IHBlcnNpc3QgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpO1xyXG4gICAgICAgIGxldCBhdHRfbmFtZSA9IHBlcnNpc3QuYXR0cmlidXRlX25hbWU7IC8v6I635Y+W5bGe5oCn5ZCN56ewXHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0gcGVyc2lzdC5nZXRfYXR0cihhdHRfbmFtZVt0aGlzLmppbm1haV9pbmRleF0pOyAvL+iOt+WPluWvueW6lOe0ouW8leWxnuaAp+WQjeensOeahOWxnuaAp+WAvFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG5cdCAqIOeUn+aIkOiMg+WbtOmaj+acuuaVsFxyXG5cdCAqIEBNaW4g5pyA5bCP5YC8XHJcblx0ICogQE1heCDmnIDlpKflgLxcclxuICAgICAqIOe7meS6iOS4jeWQjOiKgueCueebuOWQjOeahOiEmuacrO+8jOavj+S4quiKgueCuemDveS8muWIhuWIq+aJp+ihjOS4gOasoeaUueiEmuacrOeahHN0YXJ0562J5pa55rOVXHJcblx0ICovXHJcblx0cHVibGljIEdldFJhbmRvbU51bShNaW4sIE1heCk6bnVtYmVyIHtcclxuXHRcdHZhciBSYW5nZSA9IE1heCAtIE1pbjtcclxuXHRcdHZhciBSYW5kID0gTWF0aC5yYW5kb20oKTtcclxuXHRcdHJldHVybiAoTWluICsgTWF0aC5yb3VuZChSYW5kICogUmFuZ2UpKTtcclxuXHR9XHJcblxyXG5cclxuICAgIGppbm1haSgpe1xyXG5cclxuXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCLnqoHnoLRcIiwgY2MuQXVkaW9DbGlwLCAocmVzLGNsaXApPT57XHJcbiAgICAgICAgICAgIC8v5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgIGxldCBhdWRpb0lEOiBudW1iZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIDAuMSk7XHJcbiAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgICAgIC8vY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGF0dF9vcmRlciA9IHRoaXMuc29ydF9hdHRyLmluZGV4T2YodGhpcy5qaW5tYWlfaW5kZXgpOyAvL+iOt+W+l+acrOWxnuaAp+eahOaOkuW6j+S9jee9rlxyXG5cclxuICAgICAgICBsZXQgZG91YmxlX2VmZmVjdCA9IGNjLmZpbmQoJ2RhbnlhbzInKS5nZXRDb21wb25lbnQoJ2RhbnlhbycpLmdldF9kb3VibGVfZWZmZWN0KCk7ICAvL+S4ueiNrzLnmoTmlYjnm4rkuLrlj4zlgI3mlYjmnpzvvIzmiYDku6Xmo4DmtYtkYW55YW8y5LiL6ISa5pys55qEZG91YmxlX2VmZmVjdOe7hOS7tlxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkYW50aWFuX25vdyA9IGNjLmZpbmQoJ2RhbnRpYW4nKS5nZXRDb21wb25lbnQoJ2RhbnRpYW4nKS5kYW50aWFuX25vdztcclxuICAgICAgICAvL+WwhuS6uueJqeWxnuaAp+WAvOWSjOS6uueJqeeqgeegtOivpeeti+iEieW4puadpeeahOaUtuebiue7k+WQiFxyXG5cclxuICAgICAgICBsZXQgZGFudGlhbl9hZGQgPSAwOy8v56qB56C06K+l5p2h562L6ISJ55qE5Li555Sw5aKe5Yqg6YePXHJcbiAgICAgICAgaWYoZGFudGlhbl9ub3cgPD0gMTEwKXtcclxuICAgICAgICAgICAgZGFudGlhbl9hZGQgPSAoMTAwLWF0dF9vcmRlcioxMCkgKyB0aGlzLnJhbmRvbTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGRhbnRpYW5fYWRkID0gKDIxMC1kYW50aWFuX25vdykrdGhpcy5yYW5kb20yO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL+eUqOS6juOAkOS4ueiNrzLjgJHmlYjmnpxcclxuICAgICAgICBpZihkb3VibGVfZWZmZWN0KXtcclxuICAgICAgICAgICAgZGFudGlhbl9hZGQgKj0gMjtcclxuICAgICAgICAgICAgY2MuZmluZCgnZGFueWFvMicpLmdldENvbXBvbmVudCgnZGFueWFvJykuZG91YmxlX2VmZmVjdCA9IGZhbHNlOyAvL+WPquiDveWPjOWAjeS4gOasoVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmKGNjLmZpbmQoJ2RhbnlhbzQnKS5nZXRDb21wb25lbnQoJ2RhbnlhbycpLmdldF95dWNlX2VmZmVjdCgpKXsgIC8v44CQ5Li56I2vNOOAkeaViOaenO+8jOWmguaenOacjeeUqOS4ueiNr++8jOW8gOWQr+S6humihOa1i+aViOaenFxyXG5cclxuICAgICAgICAgICAgdGhpcy5qaW5tYWlfdGlzaGkoJ+S4ueeUsOmHj+WinuWKoCcrU3RyaW5nKGRhbnRpYW5fYWRkKSk7IC8v5aKe5Yqg55qEdWnmmL7npLrvvIzlj6rmmL7npLrvvIzogIzkuI3ov5vooYzkuLnnlLDph4/nmoTlop7liqBcclxuICAgICAgICAgICAgY2MuZmluZCgnZGFueWFvNCcpLmdldENvbXBvbmVudCgnZGFueWFvJykuc2V0X3l1Y2VfZWZmZWN0KGZhbHNlKTsgLy/lj6rog73pooTmtYvkuIDmrKHvvIzph43mlrDorr7nva7kuLrotJ/mlbBcclxuICAgICAgICAgICAgcmV0dXJuIDsgLy/pooTmtYvlrozmr5XlsLHnm7TmjqXov5Tlm57vvIzkuI3miafooYzkuIvpnaLnmoTor63lj6XkuoZcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHByZV9udW0gPSBjYy5maW5kKCdkYW50aWFuJykuZ2V0Q29tcG9uZW50KCdkYW50aWFuJykuZXhwbG9zaW9uICsgY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLmRhbnRpYW5fbm93OyAgLy/mk43kvZzliY3kuLnnlLDlkozkuLnnlLDniIbngrjnmoTmlbDlgLws44CQ55So5LqO5Li56I2vM+eahOaViOaenOOAkVxyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLmRhbnRpYW5fZ2FpbihkYW50aWFuX2FkZCk7Ly/lop7liqDkuLnnlLDph49cclxuXHJcbiAgICAgICAgY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLnR1cG9fbnVtICs9IDE7Ly/nqoHnoLTnrYvohInvvIznqoHnoLTnrYvohInmlbDph48rMVxyXG5cclxuICAgICAgICB0aGlzLmppbm1haV90aXNoaSgn5Li555Sw6YeP5aKe5YqgJytTdHJpbmcoZGFudGlhbl9hZGQpKTsgLy/lop7liqDnmoR1aeaYvuekulxyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZCgnZGFueWFvMycpLmdldENvbXBvbmVudCgnZGFueWFvJykucHVzaF9jaGVodWlfamlubWFpKHRoaXMubm9kZS5uYW1lKTsvL+OAkOeUqOS6juS4ueiNrzPmlYjmnpznmoTlhaXmoIjjgJHlhaXmoIjnqoHnoLTnmoTnrYvohInlkI3lrZdcclxuICAgICAgICAvL+OAkOeUqOS6juS4ueiNrzPnmoTmlYjmnpzjgJFzdGFydFxyXG4gICAgICAgIGxldCBjaGFuZ2VfbnVtID0gY2MuZmluZCgnZGFudGlhbicpLmdldENvbXBvbmVudCgnZGFudGlhbicpLmV4cGxvc2lvbiArIGNjLmZpbmQoJ2RhbnRpYW4nKS5nZXRDb21wb25lbnQoJ2RhbnRpYW4nKS5kYW50aWFuX25vdyAtIHByZV9udW07IC8v5pON5L2c5ZCO5Li555Sw5ZKM5Li555Sw6LaF5Ye65YC855qE6K+l5Y+Y6YeP77yM55Sx5LqOZXhwbG9zaW9u5Y+q5Lya5YaNZGFudGlhbl9ub3fmu6Hml7blop7liqDvvIzmiYDku6Xlj6/ku6XlsIbor6XlgLzmlL7lhaVkYW55YW9fM+eahOagiOS4rVxyXG4gICAgICAgIGNjLmZpbmQoJ2RhbnlhbzMnKS5nZXRDb21wb25lbnQoJ2RhbnlhbycpLnB1c2hfY2hlaHVpX2VmZmVjdChjaGFuZ2VfbnVtKTsgXHJcbiAgICAgICAgLy/lj6blpJbkuIDkuKrmoIjnmoTov5vlhaXmk43kvZzlhpnlnKjnrYvohInlpIRcclxuICAgICAgICAvL+OAkOeUqOS6juS4ueiNrzPnmoTmlYjmnpzjgJFlbmRcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/mjqfliLbnu4/ohInmtojlpLFcclxuICAgIGRpc2FwcGVhcigpe1xyXG4gICAgICAgIGxldCBzcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57ICAgICAgICAgIC8v5Yqo5oCB5raI5aSxXHJcbiAgICAgICAgICAgIHNwLmZpbGxSYW5nZSAtPSAoMS8xMClcclxuICAgICAgICB9LCAxLzEwMCwgMTApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+aOp+WItue7j+iEieWHuueOsCznlKjkuo7jgJDkuLnoja8y44CR55qE5pKk5Zue5pON5L2cXHJcbiAgICBhcHBlYXIoKXtcclxuICAgICAgICAvL+aSpOWbnuS5i+WQjumHjee9ruS4pOenjeaDheWGteeahOmaj+acuuaVsFxyXG4gICAgICAgIHRoaXMucmFuZG9tMSA9IHRoaXMuR2V0UmFuZG9tTnVtKC0xMCwxMCk7XHJcbiAgICAgICAgbGV0IGF0dF9vcmRlciA9IHRoaXMuc29ydF9hdHRyLmluZGV4T2YodGhpcy5qaW5tYWlfaW5kZXgpOyAvL+iOt+W+l+acrOWxnuaAp+eahOaOkuW6j+S9jee9rlxyXG4gICAgICAgIHRoaXMucmFuZG9tMiA9IHRoaXMuR2V0UmFuZG9tTnVtKCg5LWF0dF9vcmRlcikqKC0xMCksICg5LWF0dF9vcmRlcikqMTApO1xyXG5cclxuICAgICAgICBjYy5maW5kKCdkYW50aWFuJykuZ2V0Q29tcG9uZW50KCdkYW50aWFuJykudHVwb19udW0gLT0gMTsgLy/mkqTlm57nrYvohInvvIznqoHnoLTmlbDph4/lh4/kuIBcclxuXHJcbiAgICAgICAgbGV0IHNwID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PnsgICAgICAgICAgLy/liqjmgIHlh7rnjrBcclxuICAgICAgICAgICAgc3AuZmlsbFJhbmdlICs9ICgxLzEwKVxyXG4gICAgICAgIH0sIDEvMTAwLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ngrnlh7vnrYvohInnmoTmj5DnpLrmlYjmnpxcclxuICAgIGppbm1haV90aXNoaShuYW1lOnN0cmluZyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGppbm1haXR1cG8gPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIHZhciB0aXNoaSA9IGppbm1haXR1cG8uYWRkQ29tcG9uZW50KGNjLkxhYmVsKTsgLy/lop7liqBsYWJlbOe7hOS7tuW5tui1i+e7meS4ueiNr+aVsOmHj1xyXG4gICAgICAgIGppbm1haXR1cG8uY29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7IC8v5bCG5a2X5L2T5pS55Li655m96ImyXHJcbiAgICAgICAgLy/orr7nva7mlofmnKzlpKflsI9cclxuICAgICAgICB0aXNoaS5mb250U2l6ZSA9IDQwO1xyXG4gICAgICAgIHRpc2hpLmxpbmVIZWlnaHQgPSA0MDtcclxuIFxyXG4gICAgICAgIGppbm1haXR1cG8uc2V0UGFyZW50KHRoaXMubm9kZSk7ICAvL+eItuiKgueCueaYr3RoaXMubm9kZeaJjeiDveWHuuadpVxyXG4gICAgICAgIGppbm1haXR1cG8ueCA9IDA7IC8v55u45a+55LqO54i26IqC54K555qE5qiq5Z2Q5qCH5L2N572u5LiN5Y+YXHJcbiAgICAgICAgamlubWFpdHVwby55ID0gMDsvL+ebuOWvueS6jueItuiKgueCueeahOe6teWdkOagh+WcqOS4i+mdouS4gOeCueeahOS9jee9rlxyXG4gICAgICAgIHRpc2hpLnN0cmluZyA9IG5hbWU7ICBcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgamlubWFpdHVwby55ICs9IDU7ICAgIC8v5aKe5YqgNeWSjOWHj+WwkTAuMDHpg73lj6/ku6Xlop7lv6vmj5DnpLrpgJ/luqZcclxuICAgICAgICB9LCAwLjAxLCAyMCk7XHJcblxyXG4gICAgICAgIC8v5bu25pe25pyA5ZCO55qE5pe26Ze05Li6bXMs5bu25pe2MeenkumUgOavge+8jOWmguaenOWcqOS4iumdoueahHNjaGVkdWxl5Ye95pWw6L+Y5rKh5omn6KGM5a6M5bCx6ZSA5q+B77yM5Lya5oql6ZSZXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBqaW5tYWl0dXBvLmRlc3Ryb3koKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuamlubWFpX2xvYyA9IFt0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnldOyAvL+iOt+WPlueti+iEieWIneWni+S9jee9rlxyXG4gICAgICAgIHRoaXMuc29ydF9hdHRyID0gY2MuZmluZCgncGVyc2lzdF9ub2RlJykuZ2V0Q29tcG9uZW50KCdwZXJzaXN0X25vZGUnKS5zb3J0X2F0dHIoKTsgLy/ojrflj5bmjpLluo/lkI7lsZ7mgKfntKLlvJXnmoTmlbDnu4RcclxuICAgICAgICBsZXQgYXR0X29yZGVyID0gdGhpcy5zb3J0X2F0dHIuaW5kZXhPZih0aGlzLmppbm1haV9pbmRleCk7IC8v6I635b6X5pys5bGe5oCn55qE5o6S5bqP5L2N572uXHJcblxyXG4gICAgICAgIC8v5qC55o2u5o6S5bqP5pS55Y+Y6aKc6ImyXHJcbiAgICAgICAgLy90aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcihhdHRfb3JkZXIqMjAsMzAsODApO1xyXG5cclxuICAgICAgICB0aGlzLnJhbmRvbTEgPSB0aGlzLkdldFJhbmRvbU51bSgtMTAsMTApOyAvL+iOt+WPli0xMOWIsDEw55qE6ZqP5py65pWwXHJcbiAgICAgICAgdGhpcy5yYW5kb20yID0gdGhpcy5HZXRSYW5kb21OdW0oKDktYXR0X29yZGVyKSooLTEwKSwgKDktYXR0X29yZGVyKSoxMCk7Ly/ojrflj5bnrKzkuozkuKrpmo/mnLrmlbBcclxuXHJcbiAgICAgICAgLy/lj6rog73ngrnlh7vkuIDmrKHpnZnohIlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCk9PntcclxuXHJcbiAgICAgICAgICAgIC8v44CQ5Li56I2vNOOAkeeahOaViOaenO+8jOmihOa1i+WujOavleebtOaOpei/lOWbnlxyXG4gICAgICAgICAgICBpZihjYy5maW5kKCdkYW55YW80JykuZ2V0Q29tcG9uZW50KCdkYW55YW8nKS5nZXRfeXVjZV9lZmZlY3QoKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppbm1haSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzX2NsaWNrKXsgLy/noa7kv53lj6rog73nqoHnoLTkuIDmrKHpnZnohInvvIzljbPngrnlh7vkuIDmrKHov5jmsqHmtojlpLHml7blsLHkuI3og73ngrnkuoZcclxuICAgICAgICAgICAgICAgIHRoaXMuamlubWFpKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2NsaWNrID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmRpc2FwcGVhcigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIG1vdmUoKXtcclxuXHJcbiAgICAgICAgbGV0IGF0dF9vcmRlciA9IHRoaXMuc29ydF9hdHRyLmluZGV4T2YodGhpcy5qaW5tYWlfaW5kZXgpOyAvL+iOt+W+l+acrOWxnuaAp+eahOaOkuW6j+S9jee9rlxyXG5cclxuICAgICAgICBsZXQgcmFuZG9tX2xvY194ID0gdGhpcy5HZXRSYW5kb21OdW0oLTEqKDktYXR0X29yZGVyKSwgOS1hdHRfb3JkZXIpOyAgLy/mjpLlkI3otorpnaDliY3nmoTnrYvohInotorkuI3nqLPlrppcclxuICAgICAgICBsZXQgcmFuZG9tX2xvY195ID0gdGhpcy5HZXRSYW5kb21OdW0oLTEqKDktYXR0X29yZGVyKSw5LWF0dF9vcmRlcik7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubm9kZS54IC10aGlzLmppbm1haV9sb2NbMF0gPCAtNCl7XHJcbiAgICAgICAgICAgIHJhbmRvbV9sb2NfeCA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS54IC10aGlzLmppbm1haV9sb2NbMF0gPiA0KXtcclxuICAgICAgICAgICAgcmFuZG9tX2xvY194ID0gLTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMubm9kZS55IC10aGlzLmppbm1haV9sb2NbMV0gPCAtNCl7XHJcbiAgICAgICAgICAgIHJhbmRvbV9sb2NfeSA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS55IC10aGlzLmppbm1haV9sb2NbMV0gPiA0KXtcclxuICAgICAgICAgICAgcmFuZG9tX2xvY195ID0gLTI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS54Kz1yYW5kb21fbG9jX3g7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkrPXJhbmRvbV9sb2NfeTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=