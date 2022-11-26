
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/scene2/dantian.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69dfbl7AdFA45f9E8Wvb4Gq', 'dantian');
// script/scene2/dantian.ts

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
var dantian = /** @class */ (function (_super) {
    __extends(dantian, _super);
    function dantian() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dantian_now = 0;
        _this.explosion = 0;
        _this.yichu = null;
        _this.tupo_num = 0; //突破的筋脉数量,突破筋脉时增加
        _this.dantian_label = new cc.Node(); //这里等于null会报错
        _this.yichu_label = new cc.Node();
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    dantian.prototype.get_dantian = function () {
        return this.dantian_now;
    };
    //丹田满时的数值
    dantian.prototype.dantian_max = function () {
        return 210;
    };
    dantian.prototype.dantian_ui = function () {
        var dantian_num = this.dantian_label.addComponent(cc.Label); //增加label组件并赋给丹药数量
        this.dantian_label.color = cc.color(255, 255, 255); //将字体改为白色
        //设置文本大小
        dantian_num.fontSize = 50;
        dantian_num.lineHeight = 50;
        this.dantian_label.setParent(this.node); //父节点是this.node才能出来
        this.dantian_label.x = 0; //相对于父节点的横坐标位置不变
        this.dantian_label.y = 0; //相对于父节点的纵坐标在下面一点的位置
        dantian_num.string = '丹田值: ' + String(this.get_dantian()) + '/' + String(this.dantian_max());
    };
    dantian.prototype.yichu_ui = function () {
        var yichu_num = this.yichu_label.addComponent(cc.Label); //增加label组件并赋给丹药数量
        this.yichu_label.color = cc.color(200, 0, 0); //将字体改为白色
        //设置文本大小
        yichu_num.fontSize = 50;
        yichu_num.lineHeight = 50;
        this.yichu_label.setParent(this.node); //父节点是this.node才能出来
        this.yichu_label.x = 0; //相对于父节点的横坐标位置不变
        this.yichu_label.y = 100; //相对于父节点的纵坐标在下面一点的位置
        yichu_num.string = '丹田溢出值: ' + String(this.explosion);
    };
    dantian.prototype.dantian_gain = function (dantian_add) {
        //延时函数让丹田条可以延时连续上涨
        var _this = this;
        var toward = dantian_add / Math.abs(dantian_add); //丹田增长的方向，可以是负增长
        if (dantian_add == 0) { //防止toward为0/0变成无限大，会有bug
            toward = 0;
        }
        if (this.explosion == 0 && this.dantian_now + dantian_add > this.dantian_max()) {
            this.explosion = this.dantian_now + dantian_add - this.dantian_max();
        }
        else if (this.explosion > 0) {
            if (toward > 0) {
                this.explosion += dantian_add;
            }
            else {
                if (this.explosion + dantian_add <= 0) { //如果丹田减少的比explosion当前数值更多
                    dantian_add += this.explosion;
                    this.explosion = 0;
                }
                else { //反之
                    this.explosion += dantian_add;
                    dantian_add = 0;
                }
            }
        }
        //丹田正常增长情况
        var end = this.dantian_now + dantian_add;
        if (end > this.dantian_max()) { //如果丹田爆了
            end = this.dantian_max();
        }
        else if (end < 0)
            end = 0; //如果减少到小于0的情况
        var gap = Math.abs(end - this.dantian_now); //改变的总量
        this.dantian_now = end;
        var dt = this.node.getComponent(cc.Sprite);
        this.schedule(function () {
            dt.fillRange += (1 / _this.dantian_max() * toward); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1 / this.dantian_max(), gap);
        if (this.explosion > 0) { //丹田爆满后的反应
            var yichu = cc.instantiate(this.yichu);
            yichu.setParent(cc.director.getScene()); //这里的溢出提示体用的animation和prefab实现的，所以设置坐标不管用，都会在预制体设置好的位置产生，修改位置直接拖动assets中yichu预制体位置，并修改动画
            if (this.explosion <= 255) { //保证丹田爆满不反复变化
                this.node.color = cc.color(255, 255 - this.explosion, 255 - this.explosion);
            }
        }
        else {
            this.node.color = cc.color(255, 255, 255);
        }
        //显示溢出值和丹田值
        this.dantian_ui();
        this.yichu_ui();
    };
    /*
    //丹田增加
    dantian_gain(dantian_add:number){// 此方法只在突破场景使用
        // 即level1满值200经验，传入参数代表增加经验值
        //延时函数让经验条可以延时连续上涨
        //dantian.get_dantian()返回当前丹田值 ， dantian.add_dantian(number)改变当前丹田值
        if(this.dantian_now) >

        let toward = dantian_add / Math.abs(dantian_add)  //丹田增长的方向，可以是负增长
        let end = this.dantian_now + dantian_add;
        let dantian_now = this.dantian_now; //存储改变前的丹田值，用于增长

        //保证丹田值不为负
        this.dantian_now = end>=0?end:0;
        let explosion = this.dantian_now - this.dantian_max(); //丹田超过的量
        

        if (end > this.dantian_max()) {  //如果丹田爆了
            end = this.dantian_max()
        
        }
        else if (end < 0) end = 0  //如果减少到小于0的情况
        let gap = Math.abs(end - dantian_now)  //改变的总量
        
        let dt = this.node.getComponent(cc.Sprite)
        this.schedule(()=>{
            dt.fillRange+= (1/this.dantian_max()*toward);  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1/this.dantian_max(), gap);


        //如果丹田爆炸了
        if(explosion>0){
            let yichu = cc.instantiate(this.yichu);
            yichu.setParent(cc.director.getScene());    //这里的溢出提示体用的animation和prefab实现的，所以设置坐标不管用，都会在预制体设置好的位置产生，修改位置直接拖动assets中yichu预制体位置，并修改动画

            let r_num = explosion>255?0:explosion;
            this.node.color = cc.color(255, 255-explosion, 255-explosion);
                
        }
        else{
            this.node.color = cc.color(255, 255, 255); //如果丹田恢复正常，则恢复本来的颜色
        }

    
    }
    */
    dantian.prototype.start = function () {
        //显示溢出值和丹田值
        this.dantian_ui();
        this.yichu_ui();
    };
    dantian.prototype.update = function (dt) {
    };
    __decorate([
        property
    ], dantian.prototype, "dantian_now", void 0);
    __decorate([
        property
    ], dantian.prototype, "explosion", void 0);
    __decorate([
        property(cc.Prefab)
    ], dantian.prototype, "yichu", void 0);
    dantian = __decorate([
        ccclass
    ], dantian);
    return dantian;
}(cc.Component));
exports.default = dantian;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxzY2VuZTJcXGRhbnRpYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUE4TEM7UUEzTFcsaUJBQVcsR0FBVSxDQUFDLENBQUM7UUFHdkIsZUFBUyxHQUFVLENBQUMsQ0FBQztRQUc3QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBVSxDQUFDLENBQUEsQ0FBQyxpQkFBaUI7UUFFckMsbUJBQWEsR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFFLGFBQWE7UUFDckQsaUJBQVcsR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7SUFnTHhDLENBQUM7SUE5S0csd0JBQXdCO0lBRXhCLGVBQWU7SUFHZiw2QkFBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFHRCxTQUFTO0lBQ1QsNkJBQVcsR0FBWDtRQUNJLE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUVELDRCQUFVLEdBQVY7UUFFSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7UUFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUMzRCxRQUFRO1FBQ1IsV0FBVyxD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Q0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QztRQUVELFdBQVc7UUFDWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBR3BCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BNkNFO0lBR0YsdUJBQUssR0FBTDtRQUNJLFdBQVc7UUFDWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUExTEQ7UUFEQyxRQUFRO2dEQUNzQjtJQUcvQjtRQURDLFFBQVE7OENBQ29CO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFUTixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBOEwzQjtJQUFELGNBQUM7Q0E5TEQsQUE4TEMsQ0E5TG9DLEVBQUUsQ0FBQyxTQUFTLEdBOExoRDtrQkE5TG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhbnRpYW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBkYW50aWFuX25vdzpudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBleHBsb3Npb246bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgeWljaHU6Y2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICB0dXBvX251bTpudW1iZXIgPSAwIC8v56qB56C055qE562L6ISJ5pWw6YePLOeqgeegtOeti+iEieaXtuWinuWKoFxyXG5cclxuICAgIGRhbnRpYW5fbGFiZWw6Y2MuTm9kZSA9IG5ldyBjYy5Ob2RlKCk7ICAvL+i/memHjOetieS6jm51bGzkvJrmiqXplJlcclxuICAgIHlpY2h1X2xhYmVsOmNjLk5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuIFxyXG4gICAgZ2V0X2RhbnRpYW4oKXsgLy/ojrflj5blvZPliY3kuLnnlLDlgLxcclxuICAgICAgICByZXR1cm4gdGhpcy5kYW50aWFuX25vdztcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8v5Li555Sw5ruh5pe255qE5pWw5YC8XHJcbiAgICBkYW50aWFuX21heCgpe1xyXG4gICAgICAgIHJldHVybiAyMTA7XHJcbiBcclxuICAgIH1cclxuXHJcbiAgICBkYW50aWFuX3VpKCl7ICAvL+aYvuekuuW9k+WJjeeahOS4ueeUsOWAvFxyXG5cclxuICAgICAgICB2YXIgZGFudGlhbl9udW0gPSB0aGlzLmRhbnRpYW5fbGFiZWwuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTsgLy/lop7liqBsYWJlbOe7hOS7tuW5tui1i+e7meS4ueiNr+aVsOmHj1xyXG4gICAgICAgIHRoaXMuZGFudGlhbl9sYWJlbC5jb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTsgLy/lsIblrZfkvZPmlLnkuLrnmb3oibJcclxuICAgICAgICAvL+iuvue9ruaWh+acrOWkp+Wwj1xyXG4gICAgICAgIGRhbnRpYW5fbnVtLmZvbnRTaXplID0gNTA7XHJcbiAgICAgICAgZGFudGlhbl9udW0ubGluZUhlaWdodCA9IDUwO1xyXG4gXHJcbiAgICAgICAgdGhpcy5kYW50aWFuX2xhYmVsLnNldFBhcmVudCh0aGlzLm5vZGUpOyAgLy/niLboioLngrnmmK90aGlzLm5vZGXmiY3og73lh7rmnaVcclxuICAgICAgICB0aGlzLmRhbnRpYW5fbGFiZWwueCA9IDA7IC8v55u45a+55LqO54i26IqC54K555qE5qiq5Z2Q5qCH5L2N572u5LiN5Y+YXHJcbiAgICAgICAgdGhpcy5kYW50aWFuX2xhYmVsLnkgPSAwOy8v55u45a+55LqO54i26IqC54K555qE57q15Z2Q5qCH5Zyo5LiL6Z2i5LiA54K555qE5L2N572uXHJcbiAgICAgICAgZGFudGlhbl9udW0uc3RyaW5nID0gJ+S4ueeUsOWAvDogJytTdHJpbmcodGhpcy5nZXRfZGFudGlhbigpKSsnLycrU3RyaW5nKHRoaXMuZGFudGlhbl9tYXgoKSk7ICBcclxuICAgIH1cclxuXHJcbiAgICB5aWNodV91aSgpeyAgLy/mmL7npLrlvZPliY3muqLlh7rnmoTkuLnnlLDlgLxcclxuXHJcblxyXG4gICAgICAgIHZhciB5aWNodV9udW0gPSB0aGlzLnlpY2h1X2xhYmVsLmFkZENvbXBvbmVudChjYy5MYWJlbCk7IC8v5aKe5YqgbGFiZWznu4Tku7blubbotYvnu5nkuLnoja/mlbDph49cclxuICAgICAgICB0aGlzLnlpY2h1X2xhYmVsLmNvbG9yID0gY2MuY29sb3IoMjAwLDAsMCk7IC8v5bCG5a2X5L2T5pS55Li655m96ImyXHJcbiAgICAgICAgLy/orr7nva7mlofmnKzlpKflsI9cclxuICAgICAgICB5aWNodV9udW0uZm9udFNpemUgPSA1MDtcclxuICAgICAgICB5aWNodV9udW0ubGluZUhlaWdodCA9IDUwO1xyXG4gXHJcbiAgICAgICAgdGhpcy55aWNodV9sYWJlbC5zZXRQYXJlbnQodGhpcy5ub2RlKTsgIC8v54i26IqC54K55pivdGhpcy5ub2Rl5omN6IO95Ye65p2lXHJcbiAgICAgICAgdGhpcy55aWNodV9sYWJlbC54ID0gMDsgLy/nm7jlr7nkuo7niLboioLngrnnmoTmqKrlnZDmoIfkvY3nva7kuI3lj5hcclxuICAgICAgICB0aGlzLnlpY2h1X2xhYmVsLnkgPSAxMDA7Ly/nm7jlr7nkuo7niLboioLngrnnmoTnurXlnZDmoIflnKjkuIvpnaLkuIDngrnnmoTkvY3nva5cclxuICAgICAgICB5aWNodV9udW0uc3RyaW5nID0gJ+S4ueeUsOa6ouWHuuWAvDogJytTdHJpbmcodGhpcy5leHBsb3Npb24pOyAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRhbnRpYW5fZ2FpbihkYW50aWFuX2FkZDpudW1iZXIpey8vIOatpOaWueazleWPquWcqOeqgeegtOWcuuaZr+S9v+eUqFxyXG4gICAgICAgIC8v5bu25pe25Ye95pWw6K6p5Li555Sw5p2h5Y+v5Lul5bu25pe26L+e57ut5LiK5raoXHJcblxyXG4gICAgICAgIGxldCB0b3dhcmQgPSBkYW50aWFuX2FkZCAvIE1hdGguYWJzKGRhbnRpYW5fYWRkKSAgLy/kuLnnlLDlop7plb/nmoTmlrnlkJHvvIzlj6/ku6XmmK/otJ/lop7plb9cclxuICAgICAgICBpZihkYW50aWFuX2FkZCA9PSAwKXsgIC8v6Ziy5q2idG93YXJk5Li6MC8w5Y+Y5oiQ5peg6ZmQ5aSn77yM5Lya5pyJYnVnXHJcbiAgICAgICAgICAgIHRvd2FyZCA9MCA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmV4cGxvc2lvbiA9PSAwICYmIHRoaXMuZGFudGlhbl9ub3cgKyBkYW50aWFuX2FkZCA+IHRoaXMuZGFudGlhbl9tYXgoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uID0gdGhpcy5kYW50aWFuX25vdyArIGRhbnRpYW5fYWRkIC0gdGhpcy5kYW50aWFuX21heCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5leHBsb3Npb24gPiAwKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRvd2FyZCA+IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb24gKz0gZGFudGlhbl9hZGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZXhwbG9zaW9uICsgZGFudGlhbl9hZGQgPD0gMCl7ICAvL+WmguaenOS4ueeUsOWHj+WwkeeahOavlGV4cGxvc2lvbuW9k+WJjeaVsOWAvOabtOWkmlxyXG4gICAgICAgICAgICAgICAgICAgIGRhbnRpYW5fYWRkICs9IHRoaXMuZXhwbG9zaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Y+N5LmLXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb3Npb24gKz0gZGFudGlhbl9hZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGFudGlhbl9hZGQgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgXHJcblxyXG4gICAgICAgIC8v5Li555Sw5q2j5bi45aKe6ZW/5oOF5Ya1XHJcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuZGFudGlhbl9ub3cgKyBkYW50aWFuX2FkZDtcclxuICAgICAgICBpZiAoZW5kID4gdGhpcy5kYW50aWFuX21heCgpKSB7ICAvL+WmguaenOS4ueeUsOeIhuS6hlxyXG4gICAgICAgICAgICBlbmQgPSB0aGlzLmRhbnRpYW5fbWF4KClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVuZCA8IDApIGVuZCA9IDAgIC8v5aaC5p6c5YeP5bCR5Yiw5bCP5LqOMOeahOaDheWGtVxyXG4gICAgICAgIGxldCBnYXAgPSBNYXRoLmFicyhlbmQgLSB0aGlzLmRhbnRpYW5fbm93KSAgLy/mlLnlj5jnmoTmgLvph49cclxuICAgICAgICB0aGlzLmRhbnRpYW5fbm93ID0gZW5kO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZHQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIGR0LmZpbGxSYW5nZSs9ICgxL3RoaXMuZGFudGlhbl9tYXgoKSp0b3dhcmQpOyAgLy/nu4/pqoxleHAuZmlsbFJhbmdl5YiwMeihqOekuue7j+mqjOa7oe+8jOe7j+mqjOWAvOWinumVv+eahOWPr+inhuWMluaoquadoe+8jDEvdGhpcy5leHBfcmVxdWlyZWQoKeihqOekuuavj+mXtOmalOS4gOWumuaXtumXtOWinuWKoOi/meS5iOWkmueahOe7j+mqjOadoeaYvuekuu+8jOWunueOsOWKqOaAgeWinumVv1xyXG4gICAgICAgIH0sIDEvdGhpcy5kYW50aWFuX21heCgpLCBnYXApO1xyXG5cclxuXHJcbiAgICAgICAgaWYodGhpcy5leHBsb3Npb24gPiAwKXsgIC8v5Li555Sw54iG5ruh5ZCO55qE5Y+N5bqUXHJcbiAgICAgICAgICAgIGxldCB5aWNodSA9IGNjLmluc3RhbnRpYXRlKHRoaXMueWljaHUpO1xyXG4gICAgICAgICAgICB5aWNodS5zZXRQYXJlbnQoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKSk7ICAgIC8v6L+Z6YeM55qE5rqi5Ye65o+Q56S65L2T55So55qEYW5pbWF0aW9u5ZKMcHJlZmFi5a6e546w55qE77yM5omA5Lul6K6+572u5Z2Q5qCH5LiN566h55So77yM6YO95Lya5Zyo6aKE5Yi25L2T6K6+572u5aW955qE5L2N572u5Lqn55Sf77yM5L+u5pS55L2N572u55u05o6l5ouW5YqoYXNzZXRz5LiteWljaHXpooTliLbkvZPkvY3nva7vvIzlubbkv67mlLnliqjnlLtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZXhwbG9zaW9uIDw9IDI1NSl7Ly/kv53or4HkuLnnlLDniIbmu6HkuI3lj43lpI3lj5jljJZcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LXRoaXMuZXhwbG9zaW9uLCAyNTUtdGhpcy5leHBsb3Npb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5pi+56S65rqi5Ye65YC85ZKM5Li555Sw5YC8XHJcbiAgICAgICAgdGhpcy5kYW50aWFuX3VpKCk7ICBcclxuICAgICAgICB0aGlzLnlpY2h1X3VpKCk7XHJcblxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIC8v5Li555Sw5aKe5YqgXHJcbiAgICBkYW50aWFuX2dhaW4oZGFudGlhbl9hZGQ6bnVtYmVyKXsvLyDmraTmlrnms5Xlj6rlnKjnqoHnoLTlnLrmma/kvb/nlKhcclxuICAgICAgICAvLyDljbNsZXZlbDHmu6HlgLwyMDDnu4/pqozvvIzkvKDlhaXlj4LmlbDku6Pooajlop7liqDnu4/pqozlgLxcclxuICAgICAgICAvL+W7tuaXtuWHveaVsOiuqee7j+mqjOadoeWPr+S7peW7tuaXtui/nue7reS4iua2qFxyXG4gICAgICAgIC8vZGFudGlhbi5nZXRfZGFudGlhbigp6L+U5Zue5b2T5YmN5Li555Sw5YC8IO+8jCBkYW50aWFuLmFkZF9kYW50aWFuKG51bWJlcinmlLnlj5jlvZPliY3kuLnnlLDlgLxcclxuICAgICAgICBpZih0aGlzLmRhbnRpYW5fbm93KSA+IFxyXG5cclxuICAgICAgICBsZXQgdG93YXJkID0gZGFudGlhbl9hZGQgLyBNYXRoLmFicyhkYW50aWFuX2FkZCkgIC8v5Li555Sw5aKe6ZW/55qE5pa55ZCR77yM5Y+v5Lul5piv6LSf5aKe6ZW/XHJcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuZGFudGlhbl9ub3cgKyBkYW50aWFuX2FkZDtcclxuICAgICAgICBsZXQgZGFudGlhbl9ub3cgPSB0aGlzLmRhbnRpYW5fbm93OyAvL+WtmOWCqOaUueWPmOWJjeeahOS4ueeUsOWAvO+8jOeUqOS6juWinumVv1xyXG5cclxuICAgICAgICAvL+S/neivgeS4ueeUsOWAvOS4jeS4uui0n1xyXG4gICAgICAgIHRoaXMuZGFudGlhbl9ub3cgPSBlbmQ+PTA/ZW5kOjA7XHJcbiAgICAgICAgbGV0IGV4cGxvc2lvbiA9IHRoaXMuZGFudGlhbl9ub3cgLSB0aGlzLmRhbnRpYW5fbWF4KCk7IC8v5Li555Sw6LaF6L+H55qE6YePXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLmRhbnRpYW5fbWF4KCkpIHsgIC8v5aaC5p6c5Li555Sw54iG5LqGXHJcbiAgICAgICAgICAgIGVuZCA9IHRoaXMuZGFudGlhbl9tYXgoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbmQgPCAwKSBlbmQgPSAwICAvL+WmguaenOWHj+WwkeWIsOWwj+S6jjDnmoTmg4XlhrVcclxuICAgICAgICBsZXQgZ2FwID0gTWF0aC5hYnMoZW5kIC0gZGFudGlhbl9ub3cpICAvL+aUueWPmOeahOaAu+mHj1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkdCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgZHQuZmlsbFJhbmdlKz0gKDEvdGhpcy5kYW50aWFuX21heCgpKnRvd2FyZCk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgfSwgMS90aGlzLmRhbnRpYW5fbWF4KCksIGdhcCk7XHJcblxyXG5cclxuICAgICAgICAvL+WmguaenOS4ueeUsOeIhueCuOS6hlxyXG4gICAgICAgIGlmKGV4cGxvc2lvbj4wKXtcclxuICAgICAgICAgICAgbGV0IHlpY2h1ID0gY2MuaW5zdGFudGlhdGUodGhpcy55aWNodSk7XHJcbiAgICAgICAgICAgIHlpY2h1LnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTsgICAgLy/ov5nph4znmoTmuqLlh7rmj5DnpLrkvZPnlKjnmoRhbmltYXRpb27lkoxwcmVmYWLlrp7njrDnmoTvvIzmiYDku6Xorr7nva7lnZDmoIfkuI3nrqHnlKjvvIzpg73kvJrlnKjpooTliLbkvZPorr7nva7lpb3nmoTkvY3nva7kuqfnlJ/vvIzkv67mlLnkvY3nva7nm7TmjqXmi5bliqhhc3NldHPkuK15aWNodemihOWItuS9k+S9jee9ru+8jOW5tuS/ruaUueWKqOeUu1xyXG5cclxuICAgICAgICAgICAgbGV0IHJfbnVtID0gZXhwbG9zaW9uPjI1NT8wOmV4cGxvc2lvbjsgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LWV4cGxvc2lvbiwgMjU1LWV4cGxvc2lvbik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSk7IC8v5aaC5p6c5Li555Sw5oGi5aSN5q2j5bi477yM5YiZ5oGi5aSN5pys5p2l55qE6aKc6ImyXHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8v5pi+56S65rqi5Ye65YC85ZKM5Li555Sw5YC8XHJcbiAgICAgICAgdGhpcy5kYW50aWFuX3VpKCk7ICBcclxuICAgICAgICB0aGlzLnlpY2h1X3VpKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==