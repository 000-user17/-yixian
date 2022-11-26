
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
        _this.is_create_bubble = false; //是否要产生气泡，或者说是否打坐修炼
        _this.beibao = null;
        _this.attribute_panel = null;
        _this.exp = null;
        _this.event_lib = null;
        _this.focus = null;
        //lxt:精力条api
        _this.energy = 500;
        _this.event_permitted = true;
        _this.energy_recover = true;
        //寿命
        _this.age = 18;
        _this.age_limited = 0;
        //事件
        _this.event_grade_map = null;
        _this.grade_map = null;
        // lxt:属性
        _this.attribute_name = []; //记录属性的名称
        _this.attributes = null;
        //以上为快排函数****************
        //以下是背包属性
        //各类物品
        _this.item0 = 0;
        _this.item1 = 0;
        _this.item2 = 0;
        _this.item3 = 0;
        _this.item4 = 0;
        _this.item5 = 0;
        _this.item6 = 0;
        _this.item7 = 0;
        _this.item_name = [];
        //人物成长属性
        //人物等级
        _this.level = 0;
        _this.sub_level = 0;
        //人物当前经验值
        _this.exp_now = 0;
        //日志系统
        _this.log_loc = new cc.Vec2(0, 0);
        _this.log_freq = 1;
        _this.event_all = []; //存放所有的日志，日志节点初始化时写入
        _this.event_add = []; //存放新增加的日志，如果有新的，则日志节点被点开时写入
        return _this;
    }
    persist_node.prototype.gaussian_random = function (mean, sigma, n) {
        if (mean === void 0) { mean = 0; }
        if (sigma === void 0) { sigma = 1; }
        if (n === void 0) { n = 12; }
        var ret = 0.;
        for (var i = 0; i < n; ++i) {
            ret += Math.random();
        }
        return mean + (ret - (n / 2)) * sigma;
    };
    persist_node.prototype.max_energy = function () {
        return 500;
    };
    persist_node.prototype.setEnergy = function (e) {
        this.energy = e;
    };
    persist_node.prototype.changeEnergy = function (e) {
        this.energy = this.energy + e <= this.max_energy() ? this.energy + e : this.max_energy();
        //console.debug(this.energy)
    };
    persist_node.prototype.getEnergy = function () {
        return this.energy;
    };
    persist_node.prototype.addAge = function (n) {
        if (n === void 0) { n = 5; }
        this.age = this.age + n <= this.age_limited ? this.age + n : this.age_limited;
    };
    persist_node.prototype.getAge = function () {
        return this.age;
    };
    persist_node.prototype.initAge = function () {
        this.age_limited = Math.round(100 + this.gaussian_random(-20, 10));
    };
    persist_node.prototype.dispatch_event_without_requirement = function (group) {
        //先进行事件类型判断，类型为 1_2[_3], 123是不同属性名称， 1决定事件是否出现，2决定分支和收益系数，3决定事件是否只出现一次
        var group_name = Object.keys(this.event_lib)[group];
        var inconst_events = this.event_lib[group_name]['events'][1];
        var inconst_names = Object.keys(inconst_events);
        //console.debug(inconst_names)
        var t = new Array();
        var ret = [];
        for (var _i = 0, inconst_names_1 = inconst_names; _i < inconst_names_1.length; _i++) {
            var name = inconst_names_1[_i];
            var types = inconst_events[name][0].toString().split('，');
            //console.debug(types[0].trim())
            if (types[0].trim() == '0' || types[0].trim() == '_')
                t.push(name.trim());
        }
        //console.debug('detect:')
        //console.debug(t)
        t.sort(function () {
            return 0.5 - Math.random();
        });
        ret.push(t[0]);
        ret.push(inconst_events[t[0]][0]);
        ret.push(inconst_events[t[0]][1]);
        ret.push(inconst_events[t[0]][2]);
        //console.debug('return: ')
        //console.debug(t[0])
        //console.debug(ret)
        return ret;
    };
    persist_node.prototype.dispatch_event = function (group, num_0, num_1) {
        if (num_0 === void 0) { num_0 = 2; }
        if (num_1 === void 0) { num_1 = 3; }
        var ret = new Array();
        var group_name = Object.keys(this.event_lib)[group];
        var const_events = this.event_lib[group_name]['events'][0];
        var inconst_events = this.event_lib[group_name]['events'][1];
        var const_names = Object.keys(const_events);
        var inconst_names = Object.keys(inconst_events);
        const_names.sort(function () {
            return 0.5 - Math.random();
        });
        inconst_names.sort(function () {
            return 0.5 - Math.random();
        });
        // 分发的事件为一个数组[[title, type, reward, description], [title, type, reward, description]...]
        for (var i = 0; i < num_0; ++i) {
            var t = new Array(4);
            t[0] = const_names[i];
            t[1] = const_events[const_names[i]][0];
            t[2] = const_events[const_names[i]][1];
            t[3] = const_events[const_names[i]][2];
            //console.debug(t)
            ret.push(t);
        }
        for (var i = 0; i < num_1; ++i) {
            var t = new Array(4);
            t[0] = inconst_names[i];
            t[1] = inconst_events[inconst_names[i]][0];
            t[2] = inconst_events[inconst_names[i]][1];
            t[3] = inconst_events[inconst_names[i]][2];
            //console.debug(t)
            ret.push(t);
        }
        //console.debug(ret)
        return ret;
        //console.debug(typeof(const_names))
        //console.debug(Object.keys(const_events))
        //console.debug(Object.keys(inconst_events))
    };
    persist_node.prototype.match_event_grade = function () {
        //假设21点抽牌概率是均匀的，每张牌的期望消耗应该是7*500/21=167，
        //范围应该是1*500/21=24~13*500/21=310，牌的张数根据这个期望均匀分布
        var num_groups = Object.keys(this.event_lib).length;
        //console.debug(num_groups)
        this.grade_map = new Map();
        for (var i = 0; i < num_groups; ++i) {
            this.event_grade_map.set(i, new Map()); //为每个组都分配一个grade map,每个组的每个事件对应一个值(精力消耗)
            this.grade_map.set(i, new Map());
            var const_events = this.event_lib[Object.keys(this.event_lib)[i]]['events'][0];
            var inconst_events = this.event_lib[Object.keys(this.event_lib)[i]]['events'][1];
            var const_titles = Object.keys(const_events);
            var inconst_titles = Object.keys(inconst_events);
            //console.debug(const_titles)
            //console.debug(inconst_titles)
            const_titles.sort(function () {
                return 0.5 - Math.random();
            });
            inconst_titles.sort(function () {
                return 0.5 - Math.random();
            });
            var interval_const = const_titles.length < 13 ? (310 - 24) / (const_titles.length - 1) : (310 - 24) / 13;
            var interval_inconst = inconst_titles.length < 13 ? (310 - 24) / (inconst_titles.length - 1) : (310 - 24) / 13;
            var upper = const_titles.length <= 13 ? const_titles.length : 13;
            for (var j = 0; j < upper; ++j) {
                this.event_grade_map.get(i).set(const_titles[j], 24 + j * interval_const);
                this.grade_map.get(i).set(const_titles[j], j);
            }
            for (var j = upper; j < const_titles.length; ++j) {
                var grade = Math.round(Math.random() * 13);
                this.event_grade_map.get(i).set(const_titles[j], 24 + grade * interval_const);
                this.grade_map.get(i).set(const_titles[j], grade);
            }
            upper = inconst_titles.length <= 13 ? inconst_titles.length : 13;
            for (var j = 0; j < upper; ++j) {
                this.event_grade_map.get(i).set(inconst_titles[j], 24 + j * interval_inconst);
                this.grade_map.get(i).set(inconst_titles[j], j);
            }
            for (var j = upper; j < inconst_titles.length; ++j) {
                var grade = Math.round(Math.random() * 13);
                this.event_grade_map.get(i).set(inconst_titles[j], 24 + grade * interval_inconst);
                this.grade_map.get(i).set(inconst_titles[j], grade);
            }
        }
    };
    persist_node.prototype.get_event_energy = function (group_idx, event_title) {
        return this.event_grade_map.get(group_idx).get(event_title) + this.gaussian_random(0, 10);
    };
    persist_node.prototype.get_event_grade = function (group_idx, event_title) {
        return this.grade_map.get(group_idx).get(event_title);
    };
    persist_node.prototype.rec_gaussian = function (mean, sigma, lower, upper) {
        if (mean === void 0) { mean = 0.5; }
        if (sigma === void 0) { sigma = 0.2; }
        if (lower === void 0) { lower = 0.2; }
        if (upper === void 0) { upper = 1.0; }
        var a = cc.find('persist_node').getComponent('persist_node').gaussian_random(mean, sigma);
        if (a <= lower)
            return lower;
        else if (a >= upper)
            return upper;
        return a;
    };
    persist_node.prototype.set_attr = function (attr_name, attr_value) {
        this.attributes.set(attr_name, attr_value);
    };
    persist_node.prototype.change_attr = function (attr_name, attr_value) {
        if (this.attributes.has(attr_name) && attr_value + this.attributes.get(attr_name) < 0)
            this.attributes.set(attr_name, 0);
        else if (this.attributes.has(attr_name))
            this.attributes.set(attr_name, attr_value);
        else
            this.attributes.set(attr_name, attr_value + this.attributes.get(attr_name));
    };
    persist_node.prototype.get_attr = function (attr_name) {
        if (!this.attributes.get(attr_name))
            this.attributes.set(attr_name, Math.round(this.rec_gaussian() * 100));
        return this.attributes.get(attr_name);
    };
    persist_node.prototype.get_avg_attr = function () {
        //console.debug('getavg')
        var sum = 0;
        var attr = Array.from(this.attributes);
        //console.debug('attr')
        //console.debug(attr.length)
        for (var i = 0; i < attr.length; ++i) {
            sum += attr[i][1];
            //console.debug(sum.toString())
        }
        //sum += attr[i][1]
        return sum / attr.length;
    };
    persist_node.prototype.init_attr = function () {
        for (var i = 0; i < this.attribute_name.length; ++i) {
            var val = Math.round(this.rec_gaussian() * 100);
            this.set_attr(this.attribute_name[i], val);
            //console.debug(this.attribute_name[i])
            //console.debug('value: '+val.toString())
        }
    };
    persist_node.prototype.sort_attr = function () {
        var attr_value_array = [];
        var index = [];
        for (var i = 0; i < this.attribute_name.length; ++i) {
            attr_value_array.push(this.get_attr(this.attribute_name[i]));
            index.push(i); //保存下标，跟着快排一起排序
        }
        this.quick_sort(attr_value_array, index, 0, attr_value_array.length - 1); //进行排序
        return index; //index最后保存各个元素下标所在的位置，比如index[3] = 5，即第5号属性排第3+1=4位
    };
    //以下为快排函数*********
    persist_node.prototype.quick_sort = function (input, index, start, end) {
        if (start >= end) {
            return;
        }
        var pivotIndex = this.partition(input, index, start, end); // 1.
        this.quick_sort(input, index, start, pivotIndex - 1); // 2.
        this.quick_sort(input, index, pivotIndex + 1, end);
    };
    persist_node.prototype.partition = function (input, index, start, end) {
        var pivot = input[start]; // 1.
        var pivot_idx = index[start];
        var left = start; // 2.
        var right = end; // 3.
        while (left != right) {
            while (left < right && input[right] > pivot) { // 4.
                right--;
            }
            while (left < right && input[left] <= pivot) { // 5.
                left++;
            }
            if (left < right) { // 6.
                var tmp = input[left];
                input[left] = input[right];
                input[right] = tmp;
                var idx = index[left];
                index[left] = index[right];
                index[right] = idx;
            }
        }
        input[start] = input[left]; // 7.
        input[left] = pivot;
        index[start] = index[left];
        index[left] = pivot_idx;
        return left;
    };
    //设置属性的数值，选中要更改的属性，然后设置数值
    persist_node.prototype.setitem = function (itemID, itemnum) {
        var a = this.getitem();
        if (a[itemID] + itemnum < 0) {
            //防止小于0的情况
        }
        else {
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
        }
    };
    //获取属性值，返回属性值数组
    persist_node.prototype.getitem = function () {
        var itemarray = [this.item0, this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7];
        //console.debug("属性值获取成功"+ String(itemarray));
        return itemarray;
    };
    persist_node.prototype.get_level = function () {
        var level_name = ['练气', '筑基', '金丹', '元婴'];
        return level_name[this.level % 4];
    };
    persist_node.prototype.up_level = function () {
        this.level += 1;
        this.sub_level = 0;
        this.age_limited *= 2.5;
        this.age_limited -= this.gaussian_random(0, (this.level + 1) * 10);
    };
    persist_node.prototype.get_sublevel = function () {
        var level_name = ['初期', '中期', '后期'];
        return level_name[this.sub_level];
    };
    persist_node.prototype.up_sublevel = function () {
        this.sub_level += 1;
    };
    persist_node.prototype.exp_inf = function () {
        return [this.level, this.exp_now];
    };
    //用于exp节点初始化经验值条，以及返回等级和经验值，【lxt】：是不是初始化不太需要进度慢慢爬，直接显示经验值就好，否则怪怪的感觉
    persist_node.prototype.exp_init = function () {
        var exp = cc.find('exp').getComponent(cc.Sprite);
        /*
        this.schedule(()=>{
            exp.fillRange+= (1/this.exp_required());  //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
        }, 1/this.exp_required()/25, this.exp_now);
        */
        exp.fillRange = 0;
        var exp_now = this.exp_now;
        this.exp_now = 0;
        //this.exp_gain(-exp_now);   //【陈晟】修改了一个bug，每次初始化时需要重新执行一次exp_gain()方法，让经验重新上涨，直接改变fillRange不管用
        return [this.level, this.exp_now];
    };
    //不同等级的所需经验
    persist_node.prototype.exp_required = function () {
        return (Math.pow(2, (this.sub_level + 1))) * 100 * (Math.pow(10, this.level)); //可以设置其他单调递增函数
    };
    /*
    //判断经验值是否溢出
    exp_filled(exp_now:number, exp_add:number){
        //如果经验值增长超过最大经验值，则设置为当前等级的最大经验值，否则直接相加作为当前经验值
        if((exp_now+exp_add) <= this.exp_required()){
            this.exp_now += exp_add;
        }
        else{
            this.exp_now = this.exp_required();
        }
    }
    */
    //增长经验条的方法
    persist_node.prototype.exp_gain = function (event_exp, option) {
        //【刘鑫涛】：此处是否不在方法内判别事件类型呢，将此方法只作为操作数据之目的，要增加多少经验由外部逻辑指定，然后由此方法将经验条加到那个位置
        //【陈晟】涛哥这里改的挺好，控制增长时间为1秒
        // 即level1满值200经验，传入参数代表增加经验值
        //延时函数让经验条可以延时连续上涨
        var _this = this;
        if (option === void 0) { option = true; }
        var toward = event_exp / Math.abs(event_exp);
        if (event_exp == 0) { //【陈晟】这里修复了一个bug，即toward不能0/0无限大，不然fillRange会直接满
            toward = 0;
        }
        var end = this.exp_now + event_exp;
        if (end > this.exp_required())
            end = this.exp_required();
        else if (end < 0)
            end = 0;
        var gap = Math.abs(end - this.exp_now);
        //let toward = this.exp_now - begin > 0 ? 1 : -1 //如果经验正在减少
        this.exp_now = end;
        var exp = cc.find('exp').getComponent(cc.Sprite);
        if (option)
            this.schedule(function () {
                exp.fillRange += ((gap / 30) / _this.exp_required() * toward); //经验exp.fillRange到1表示经验满，经验值增长的可视化横条，1/this.exp_required()表示每间隔一定时间增加这么多的经验条显示，实现动态增长
            }, (gap / 30) / this.exp_required(), 30); //这里连续增长的gap要等于1/this.exp_required()*toward的倒数才能增长到，并且gap越小，前面的间隔时间也越小，则增长速度越快
    };
    //日志初始化并写入, isadd代表是不是再打开日志面板时写入新日志，如果是则一边写一边清空新增加的事件，防止重复写入
    persist_node.prototype.log_init = function (isadd) {
        if (isadd === void 0) { isadd = true; }
        if (isadd == true) {
            for (var i = 0; i < this.event_add.length; i++) {
                this.log_add(this.event_add[i]);
            }
            var len = this.event_add.length; //必须先得到长度，不然会少pop一个
            for (var i = 0; i < len; i++) {
                this.event_add.pop();
            }
        }
        else {
            this.log_loc.y = -200; //重新写的时候 要初始化写入文本的y轴位置
            for (var i = 0; i < this.event_all.length; i++) {
                this.log_add(this.event_all[i]);
            }
            var len = this.event_add.length; //如果初始化日志节点时新增事件中有事件，也要pop出去
            for (var i = 0; i < len; i++) {
                this.event_add.pop();
            }
        }
    };
    //保存日志内容
    persist_node.prototype.log_write = function (event) {
        var len = this.event_all.push(event);
        var len = this.event_add.push(event);
    };
    //日志初始化写入方阿飞
    persist_node.prototype.log_add = function (event) {
        //写入日志的准备
        var content = cc.find('log_panel').getChildByName('log_ScrollView').getChildByName("view").getChildByName("content"); //找到要保存日志的父节点
        var new_content = new cc.Node(); //初始化新节点为实例化的一个节点
        var log_text = new_content.addComponent(cc.Label); //增加label组件并赋给log_text
        new_content.color = cc.color(0, 0, 0); //将字体改为黑色
        //设置文本大小
        log_text.fontSize = 50;
        log_text.lineHeight = 50;
        log_text.enableBold = true;
        new_content.setParent(content); //设置根节点为content
        new_content.x = this.log_loc.x;
        new_content.y = this.log_loc.y;
        //将超过长度的字符串加上换行符
        var event_copy = [];
        var count_row = 1;
        for (var i = 0; i < event.length; i++) {
            var len = event_copy.push(event[i]);
            if (i % 16 == 0 && i != 0) { //每16个字符加一个换行符
                count_row += 1;
                var len = event_copy.push('\n');
                var len = event_copy.push('\n');
            }
        }
        this.log_loc.y -= (150 * count_row + 80); //下一次记录位置往下移动
        this.log_freq += 1; //记录日志数量+1
        content.setContentSize(900, 400 * this.log_freq); //日志高度增加
        log_text.string = event_copy.join(''); //属性改变
    };
    persist_node.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node); //设置本节点为常驻节点
        this.log_loc.y = -200;
        this.attribute_name = ['战力', '心境', '元神', '福源', '灵根', '悟性', '善', '恶', '特殊'];
        this.item_name = [];
        this.attributes = new Map();
        this.init_attr();
        this.initAge();
    };
    persist_node.prototype.start = function () {
        var _this = this;
        //console.debug(this.gaussian_random(0,20,100))
        cc.loader.loadRes('events.json', function (err, obj) {
            //console.debug('flag...')
            if (err) {
                //console.debug('err')
                console.debug(err);
                return;
            }
            console.debug('read...');
            _this.event_lib = obj.json;
            _this.event_grade_map = new Map();
        });
    };
    persist_node.prototype.update = function (dt) {
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
        property(Object)
    ], persist_node.prototype, "event_lib", void 0);
    __decorate([
        property
    ], persist_node.prototype, "focus", void 0);
    __decorate([
        property
    ], persist_node.prototype, "energy", void 0);
    __decorate([
        property
    ], persist_node.prototype, "event_permitted", void 0);
    __decorate([
        property
    ], persist_node.prototype, "energy_recover", void 0);
    __decorate([
        property
    ], persist_node.prototype, "age", void 0);
    __decorate([
        property
    ], persist_node.prototype, "age_limited", void 0);
    __decorate([
        property
    ], persist_node.prototype, "event_grade_map", void 0);
    __decorate([
        property
    ], persist_node.prototype, "grade_map", void 0);
    __decorate([
        property
    ], persist_node.prototype, "attribute_name", void 0);
    __decorate([
        property
    ], persist_node.prototype, "attributes", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item0", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item1", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item2", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item3", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item4", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item5", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item6", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item7", void 0);
    __decorate([
        property
    ], persist_node.prototype, "item_name", void 0);
    __decorate([
        property
    ], persist_node.prototype, "level", void 0);
    __decorate([
        property
    ], persist_node.prototype, "sub_level", void 0);
    __decorate([
        property
    ], persist_node.prototype, "exp_now", void 0);
    __decorate([
        property(cc.Vec2)
    ], persist_node.prototype, "log_loc", void 0);
    __decorate([
        property
    ], persist_node.prototype, "log_freq", void 0);
    __decorate([
        property
    ], persist_node.prototype, "event_all", void 0);
    __decorate([
        property
    ], persist_node.prototype, "event_add", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwZXJzaXN0X25vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFncEJDO1FBcG9CRyxzQkFBZ0IsR0FBVyxLQUFLLENBQUMsQ0FBRSxtQkFBbUI7UUFJdEQsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixxQkFBZSxHQUFXLElBQUksQ0FBQztRQUcvQixTQUFHLEdBQVMsSUFBSSxDQUFDO1FBR2pCLGVBQVMsR0FBVyxJQUFJLENBQUE7UUFHeEIsV0FBSyxHQUFHLElBQUksQ0FBQTtRQUdaLFlBQVk7UUFFWixZQUFNLEdBQVcsR0FBRyxDQUFBO1FBR3BCLHFCQUFlLEdBQVksSUFBSSxDQUFBO1FBRy9CLG9CQUFjLEdBQVksSUFBSSxDQUFBO1FBdUI5QixJQUFJO1FBRUosU0FBRyxHQUFXLEVBQUUsQ0FBQTtRQUdoQixpQkFBVyxHQUFXLENBQUMsQ0FBQTtRQWlCdkIsSUFBSTtRQUVKLHFCQUFlLEdBQUcsSUFBSSxDQUFBO1FBR3RCLGVBQVMsR0FBRyxJQUFJLENBQUE7UUFvSmhCLFNBQVM7UUFFVCxvQkFBYyxHQUFZLEVBQUUsQ0FBQyxDQUFDLFNBQVM7UUFHL0IsZ0JBQVUsR0FBRyxJQUFJLENBQUE7UUErR3pCLHlCQUF5QjtRQUd6QixTQUFTO1FBQ1QsTUFBTTtRQUVFLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFdBQUssR0FBVyxDQUFDLENB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QURDLFFBQVE7bURBQ2U7SUFHeEI7UUFEQyxRQUFRO21EQUNlO0lBN2hCUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBZ3BCaEM7SUFBRCxtQkFBQztDQWhwQkQsQUFncEJDLENBaHBCeUMsRUFBRSxDQUFDLFNBQVMsR0FncEJyRDtrQkFocEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzaXN0X25vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgZ2F1c3NpYW5fcmFuZG9tKG1lYW49MCwgc2lnbWE9MSwgbj0xMikgLy8gMC0x5LiK6auY5pav5YiG5biDXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJldCA9IDAuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXQgKz0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWVhbiArIChyZXQtKG4vMikpICogc2lnbWFcclxuICAgIH1cclxuXHJcblxyXG4gICAgaXNfY3JlYXRlX2J1YmJsZTpib29sZWFuID0gZmFsc2U7ICAvL+aYr+WQpuimgeS6p+eUn+awlOazoe+8jOaIluiAheivtOaYr+WQpuaJk+WdkOS/rueCvFxyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJlaWJhbzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhdHRyaWJ1dGVfcGFuZWw6Y2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBleHA6Y2MuTm9kZT1udWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShPYmplY3QpXHJcbiAgICBldmVudF9saWI6IE9iamVjdCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGZvY3VzID0gbnVsbFxyXG5cclxuXHJcbiAgICAvL2x4dDrnsr7lipvmnaFhcGlcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZW5lcmd5OiBudW1iZXIgPSA1MDBcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGV2ZW50X3Blcm1pdHRlZDogYm9vbGVhbiA9IHRydWVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGVuZXJneV9yZWNvdmVyOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICAgIG1heF9lbmVyZ3koKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiA1MDBcclxuICAgIH1cclxuXHJcbiAgICBzZXRFbmVyZ3koZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZW5lcmd5ID0gZVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUVuZXJneShlOiBudW1iZXIpICAvL+aUueWPmOeyvuWKm+WAvFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZW5lcmd5ID0gdGhpcy5lbmVyZ3kgKyBlIDw9IHRoaXMubWF4X2VuZXJneSgpID8gdGhpcy5lbmVyZ3kgKyBlIDogdGhpcy5tYXhfZW5lcmd5KClcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcodGhpcy5lbmVyZ3kpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RW5lcmd5KCkgIC8v6L+U5Zue5b2T5YmN55qE57K+5Yqb5YC8XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5lcmd5XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8v5a+/5ZG9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFnZTogbnVtYmVyID0gMThcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGFnZV9saW1pdGVkOiBudW1iZXIgPSAwXHJcblxyXG4gICAgYWRkQWdlKG4gPSA1KSAvLyDmr4/mrKHpgInmi6nkuovku7bnu4/ov4dY5bm0XHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSB0aGlzLmFnZSArIG4gPD0gdGhpcy5hZ2VfbGltaXRlZCA/IHRoaXMuYWdlICsgbiA6IHRoaXMuYWdlX2xpbWl0ZWRcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFnZSBcclxuICAgIH1cclxuXHJcbiAgICBpbml0QWdlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFnZV9saW1pdGVkID0gTWF0aC5yb3VuZCgxMDAgKyB0aGlzLmdhdXNzaWFuX3JhbmRvbSgtMjAsMTApKSBcclxuICAgIH1cclxuXHJcbiAgICAvL+S6i+S7tlxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBldmVudF9ncmFkZV9tYXAgPSBudWxsXHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZ3JhZGVfbWFwID0gbnVsbFxyXG5cclxuICAgIGRpc3BhdGNoX2V2ZW50X3dpdGhvdXRfcmVxdWlyZW1lbnQoZ3JvdXA6IG51bWJlcikgLy/liIbnu4TlhoXlj5HkuIvkuIDkuKrmsqHmnInopoHmsYLnmoTkuovku7bvvIjpnZ7luLjpqbvvvIzluLjpqbvpg73mmK/msqHmnInopoHmsYLnmoRcclxuICAgIHtcclxuICAgICAgICAvL+WFiOi/m+ihjOS6i+S7tuexu+Wei+WIpOaWre+8jOexu+Wei+S4uiAxXzJbXzNdLCAxMjPmmK/kuI3lkIzlsZ7mgKflkI3np7DvvIwgMeWGs+WumuS6i+S7tuaYr+WQpuWHuueOsO+8jDLlhrPlrprliIbmlK/lkozmlLbnm4rns7vmlbDvvIwz5Yaz5a6a5LqL5Lu25piv5ZCm5Y+q5Ye6546w5LiA5qyhXHJcbiAgICAgICAgbGV0IGdyb3VwX25hbWUgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50X2xpYilbZ3JvdXBdXHJcbiAgICAgICAgbGV0IGluY29uc3RfZXZlbnRzID0gdGhpcy5ldmVudF9saWJbZ3JvdXBfbmFtZV1bJ2V2ZW50cyddWzFdXHJcbiAgICAgICAgbGV0IGluY29uc3RfbmFtZXMgPSBPYmplY3Qua2V5cyhpbmNvbnN0X2V2ZW50cylcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoaW5jb25zdF9uYW1lcylcclxuICAgICAgICBsZXQgdCA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgbGV0IHJldCA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBpbmNvbnN0X25hbWVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHR5cGVzID0gaW5jb25zdF9ldmVudHNbbmFtZV1bMF0udG9TdHJpbmcoKS5zcGxpdCgn77yMJylcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHR5cGVzWzBdLnRyaW0oKSlcclxuICAgICAgICAgICAgaWYgKHR5cGVzWzBdLnRyaW0oKT09JzAnIHx8IHR5cGVzWzBdLnRyaW0oKT09J18nKSB0LnB1c2gobmFtZS50cmltKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZygnZGV0ZWN0OicpXHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKHQpXHJcbiAgICAgICAgdC5zb3J0KCgpPT57XHJcbiAgICAgICAgICAgIHJldHVybiAwLjUtTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0LnB1c2godFswXSlcclxuICAgICAgICByZXQucHVzaChpbmNvbnN0X2V2ZW50c1t0WzBdXVswXSlcclxuICAgICAgICByZXQucHVzaChpbmNvbnN0X2V2ZW50c1t0WzBdXVsxXSlcclxuICAgICAgICByZXQucHVzaChpbmNvbnN0X2V2ZW50c1t0WzBdXVsyXSlcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ3JldHVybjogJylcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcodFswXSlcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcocmV0KVxyXG4gICAgICAgIHJldHVybiByZXRcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaF9ldmVudChncm91cDogbnVtYmVyLCBudW1fMDogbnVtYmVyPTIsIG51bV8xOiBudW1iZXI9MykgXHJcbiAgICAvLyBncm91cDogMC3lh6HkuJbvvJsxLeWdiuW4gu+8mzIt5a6X6Zeo77ybMy3prZTlnLDvvJs0Lea1t+WkliwgXHJcbiAgICAvLyBudW1fMCwgbnVtXzE6IOWIhuWIq+aYr+W4uOmpu+WSjOmdnuW4uOmpu+mcgOimgeWIhuWPkeeahOS4quaVsFxyXG4gICAgLy8gZnVuY3Rpb2465LuO5a+55bqUZ3JvdXDkuK3pmo/mnLrlh7roi6XlubLkuKrkuovku7blj5HkuIss5bm25aSE55CG6YOo5YiG5YmN572u6YC76L6R5YWz57O7XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJldCA9IG5ldyBBcnJheSgpXHJcbiAgICAgICAgbGV0IGdyb3VwX25hbWUgPSBPYmplY3Qua2V5cyh0aGlzLmV2ZW50X2xpYilbZ3JvdXBdXHJcbiAgICAgICAgbGV0IGNvbnN0X2V2ZW50cyA9IHRoaXMuZXZlbnRfbGliW2dyb3VwX25hbWVdWydldmVudHMnXVswXVxyXG4gICAgICAgIGxldCBpbmNvbnN0X2V2ZW50cyA9IHRoaXMuZXZlbnRfbGliW2dyb3VwX25hbWVdWydldmVudHMnXVsxXVxyXG4gICAgICAgIGxldCBjb25zdF9uYW1lcyA9IE9iamVjdC5rZXlzKGNvbnN0X2V2ZW50cylcclxuICAgICAgICBsZXQgaW5jb25zdF9uYW1lcyA9IE9iamVjdC5rZXlzKGluY29uc3RfZXZlbnRzKVxyXG4gICAgICAgIGNvbnN0X25hbWVzLnNvcnQoKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDAuNS1NYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpbmNvbnN0X25hbWVzLnNvcnQoKCk9PntcclxuICAgICAgICAgICAgcmV0dXJuIDAuNS1NYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgLy8g5YiG5Y+R55qE5LqL5Lu25Li65LiA5Liq5pWw57uEW1t0aXRsZSwgdHlwZSwgcmV3YXJkLCBkZXNjcmlwdGlvbl0sIFt0aXRsZSwgdHlwZSwgcmV3YXJkLCBkZXNjcmlwdGlvbl0uLi5dXHJcbiAgICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtXzA7ICsraSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdCA9IG5ldyBBcnJheSg0KVxyXG4gICAgICAgICAgICB0WzBdID0gY29uc3RfbmFtZXNbaV1cclxuICAgICAgICAgICAgdFsxXSA9IGNvbnN0X2V2ZW50c1tjb25zdF9uYW1lc1tpXV1bMF1cclxuICAgICAgICAgICAgdFsyXSA9IGNvbnN0X2V2ZW50c1tjb25zdF9uYW1lc1tpXV1bMV1cclxuICAgICAgICAgICAgdFszXSA9IGNvbnN0X2V2ZW50c1tjb25zdF9uYW1lc1tpXV1bMl1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHQpXHJcbiAgICAgICAgICAgIHJldC5wdXNoKHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtXzE7ICsraSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdCA9IG5ldyBBcnJheSg0KVxyXG4gICAgICAgICAgICB0WzBdID0gaW5jb25zdF9uYW1lc1tpXVxyXG4gICAgICAgICAgICB0WzFdID0gaW5jb25zdF9ldmVudHNbaW5jb25zdF9uYW1lc1tpXV1bMF1cclxuICAgICAgICAgICAgdFsyXSA9IGluY29uc3RfZXZlbnRzW2luY29uc3RfbmFtZXNbaV1dWzFdXHJcbiAgICAgICAgICAgIHRbM10gPSBpbmNvbnN0X2V2ZW50c1tpbmNvbnN0X25hbWVzW2ldXVsyXVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcodClcclxuICAgICAgICAgICAgcmV0LnB1c2godClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhyZXQpXHJcbiAgICAgICAgcmV0dXJuIHJldFxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1Zyh0eXBlb2YoY29uc3RfbmFtZXMpKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhPYmplY3Qua2V5cyhjb25zdF9ldmVudHMpKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhPYmplY3Qua2V5cyhpbmNvbnN0X2V2ZW50cykpXHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2hfZXZlbnRfZ3JhZGUoKSBcclxuICAgIC8vIOWwhuWQhOe7hOS6i+S7tuS4juWFtuWQhOenjeaUtuebiuWSjOa2iOiAl+WfuuacrOe7keWumu+8iOS4jeeul+aJsOWKqO+8iVxyXG4gICAgLy8g5pyA57uI5LiA5LiqdGl0bGXlr7nlupTkuIDkuKrplb/luqbkuLoxMueahOaVsOe7hO+8jOWvueW6lOWQhOe7hOaVsOWAvFxyXG4gICAge1xyXG4gICAgICAgIC8v5YGH6K6+MjHngrnmir3niYzmpoLnjofmmK/lnYfljIDnmoTvvIzmr4/lvKDniYznmoTmnJ/mnJvmtojogJflupTor6XmmK83KjUwMC8yMT0xNjfvvIxcclxuICAgICAgICAvL+iMg+WbtOW6lOivpeaYrzEqNTAwLzIxPTI0fjEzKjUwMC8yMT0zMTDvvIzniYznmoTlvKDmlbDmoLnmja7ov5nkuKrmnJ/mnJvlnYfljIDliIbluINcclxuICAgICAgICBsZXQgbnVtX2dyb3VwcyA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnRfbGliKS5sZW5ndGhcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcobnVtX2dyb3VwcylcclxuICAgICAgICB0aGlzLmdyYWRlX21hcCA9IG5ldyBNYXAoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtX2dyb3VwczsgKytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudF9ncmFkZV9tYXAuc2V0KGksIG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCkpIC8v5Li65q+P5Liq57uE6YO95YiG6YWN5LiA5LiqZ3JhZGUgbWFwLOavj+S4que7hOeahOavj+S4quS6i+S7tuWvueW6lOS4gOS4quWAvCjnsr7lipvmtojogJcpXHJcbiAgICAgICAgICAgIHRoaXMuZ3JhZGVfbWFwLnNldChpLCBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpKVxyXG4gICAgICAgICAgICBsZXQgY29uc3RfZXZlbnRzID0gdGhpcy5ldmVudF9saWJbT2JqZWN0LmtleXModGhpcy5ldmVudF9saWIpW2ldXVsnZXZlbnRzJ11bMF1cclxuICAgICAgICAgICAgbGV0IGluY29uc3RfZXZlbnRzID0gdGhpcy5ldmVudF9saWJbT2JqZWN0LmtleXModGhpcy5ldmVudF9saWIpW2ldXVsnZXZlbnRzJ11bMV1cclxuICAgICAgICAgICAgbGV0IGNvbnN0X3RpdGxlcyA9IE9iamVjdC5rZXlzKGNvbnN0X2V2ZW50cylcclxuICAgICAgICAgICAgbGV0IGluY29uc3RfdGl0bGVzID0gT2JqZWN0LmtleXMoaW5jb25zdF9ldmVudHMpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoY29uc3RfdGl0bGVzKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoaW5jb25zdF90aXRsZXMpXHJcbiAgICAgICAgICAgIGNvbnN0X3RpdGxlcy5zb3J0KCgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMC41LU1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaW5jb25zdF90aXRsZXMuc29ydCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDAuNS1NYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbF9jb25zdCA9IGNvbnN0X3RpdGxlcy5sZW5ndGggPCAxMyA/ICgzMTAtMjQpLyhjb25zdF90aXRsZXMubGVuZ3RoLTEpIDogKDMxMC0yNCkvMTNcclxuICAgICAgICAgICAgbGV0IGludGVydmFsX2luY29uc3QgPSBpbmNvbnN0X3RpdGxlcy5sZW5ndGggPCAxMyA/ICgzMTAtMjQpLyhpbmNvbnN0X3RpdGxlcy5sZW5ndGgtMSkgOiAoMzEwLTI0KS8xM1xyXG5cclxuICAgICAgICAgICAgbGV0IHVwcGVyID0gY29uc3RfdGl0bGVzLmxlbmd0aCA8PSAxMyA/IGNvbnN0X3RpdGxlcy5sZW5ndGggOiAxM1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVwcGVyOyArK2opIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50X2dyYWRlX21hcC5nZXQoaSkuc2V0KGNvbnN0X3RpdGxlc1tqXSwgMjQraippbnRlcnZhbF9jb25zdClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGVfbWFwLmdldChpKS5zZXQoY29uc3RfdGl0bGVzW2pdLCBqKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSB1cHBlcjsgaiA8IGNvbnN0X3RpdGxlcy5sZW5ndGg7ICsrailcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYWRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudF9ncmFkZV9tYXAuZ2V0KGkpLnNldChjb25zdF90aXRsZXNbal0sIDI0K2dyYWRlKmludGVydmFsX2NvbnN0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFkZV9tYXAuZ2V0KGkpLnNldChjb25zdF90aXRsZXNbal0sIGdyYWRlKVxyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgdXBwZXIgPSBpbmNvbnN0X3RpdGxlcy5sZW5ndGggPD0gMTMgPyBpbmNvbnN0X3RpdGxlcy5sZW5ndGggOiAxM1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVwcGVyOyArK2opXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRfZ3JhZGVfbWFwLmdldChpKS5zZXQoaW5jb25zdF90aXRsZXNbal0sIDI0K2oqaW50ZXJ2YWxfaW5jb25zdClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGVfbWFwLmdldChpKS5zZXQoaW5jb25zdF90aXRsZXNbal0sIGopXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSB1cHBlcjsgaiA8IGluY29uc3RfdGl0bGVzLmxlbmd0aDsgKytqKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYWRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjEzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudF9ncmFkZV9tYXAuZ2V0KGkpLnNldChpbmNvbnN0X3RpdGxlc1tqXSwgMjQrZ3JhZGUqaW50ZXJ2YWxfaW5jb25zdClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhZGVfbWFwLmdldChpKS5zZXQoaW5jb25zdF90aXRsZXNbal0sIGdyYWRlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRfZXZlbnRfZW5lcmd5KGdyb3VwX2lkeDogbnVtYmVyLCBldmVudF90aXRsZSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmVudF9ncmFkZV9tYXAuZ2V0KGdyb3VwX2lkeCkuZ2V0KGV2ZW50X3RpdGxlKSArIHRoaXMuZ2F1c3NpYW5fcmFuZG9tKDAsMTApXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0X2V2ZW50X2dyYWRlKGdyb3VwX2lkeDogbnVtYmVyLCBldmVudF90aXRsZSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmFkZV9tYXAuZ2V0KGdyb3VwX2lkeCkuZ2V0KGV2ZW50X3RpdGxlKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGx4dDrlsZ7mgKdcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgYXR0cmlidXRlX25hbWU6c3RyaW5nW10gPSBbXTsgLy/orrDlvZXlsZ7mgKfnmoTlkI3np7BcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgYXR0cmlidXRlcyA9IG51bGxcclxuXHJcbiAgICByZWNfZ2F1c3NpYW4obWVhbj0wLjUsIHNpZ21hPTAuMiwgbG93ZXI9MC4yLCB1cHBlcj0xLjApXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGEgPSBjYy5maW5kKCdwZXJzaXN0X25vZGUnKS5nZXRDb21wb25lbnQoJ3BlcnNpc3Rfbm9kZScpLmdhdXNzaWFuX3JhbmRvbShtZWFuLCBzaWdtYSlcclxuICAgICAgICBpZiAoYSA8PSBsb3dlcikgcmV0dXJuIGxvd2VyXHJcbiAgICAgICAgZWxzZSBpZiAoYSA+PSB1cHBlcikgcmV0dXJuIHVwcGVyXHJcbiAgICAgICAgcmV0dXJuIGFcclxuICAgIH1cclxuXHJcbiAgICBzZXRfYXR0cihhdHRyX25hbWUsIGF0dHJfdmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnNldChhdHRyX25hbWUsIGF0dHJfdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlX2F0dHIoYXR0cl9uYW1lLCBhdHRyX3ZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXMuaGFzKGF0dHJfbmFtZSkgJiYgYXR0cl92YWx1ZSArIHRoaXMuYXR0cmlidXRlcy5nZXQoYXR0cl9uYW1lKSA8IDApIHRoaXMuYXR0cmlidXRlcy5zZXQoYXR0cl9uYW1lLCAwKVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXR0cmlidXRlcy5oYXMoYXR0cl9uYW1lKSkgdGhpcy5hdHRyaWJ1dGVzLnNldChhdHRyX25hbWUsIGF0dHJfdmFsdWUpXHJcbiAgICAgICAgZWxzZSB0aGlzLmF0dHJpYnV0ZXMuc2V0KGF0dHJfbmFtZSwgYXR0cl92YWx1ZSArIHRoaXMuYXR0cmlidXRlcy5nZXQoYXR0cl9uYW1lKSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRfYXR0cihhdHRyX25hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF0dHJpYnV0ZXMuZ2V0KGF0dHJfbmFtZSkpIHRoaXMuYXR0cmlidXRlcy5zZXQoYXR0cl9uYW1lLCBNYXRoLnJvdW5kKHRoaXMucmVjX2dhdXNzaWFuKCkqMTAwKSlcclxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldChhdHRyX25hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0X2F2Z19hdHRyKClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ2dldGF2ZycpXHJcbiAgICAgICAgbGV0IHN1bSA9IDBcclxuICAgICAgICBsZXQgYXR0ciA9IEFycmF5LmZyb20odGhpcy5hdHRyaWJ1dGVzKVxyXG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZygnYXR0cicpXHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKGF0dHIubGVuZ3RoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0ci5sZW5ndGg7ICsraSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1bSArPSBhdHRyW2ldWzFdXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZyhzdW0udG9TdHJpbmcoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgIC8vc3VtICs9IGF0dHJbaV1bMV1cclxuICAgICAgICByZXR1cm4gc3VtL2F0dHIubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdF9hdHRyKClcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXR0cmlidXRlX25hbWUubGVuZ3RoOyArK2kpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gTWF0aC5yb3VuZCh0aGlzLnJlY19nYXVzc2lhbigpKjEwMClcclxuICAgICAgICAgICAgdGhpcy5zZXRfYXR0cih0aGlzLmF0dHJpYnV0ZV9uYW1lW2ldLCB2YWwpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zyh0aGlzLmF0dHJpYnV0ZV9uYW1lW2ldKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ3ZhbHVlOiAnK3ZhbC50b1N0cmluZygpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzb3J0X2F0dHIoKXsgIC8v55So5LqO57uZ5bGe5oCn5YC85aSn5bCP5o6S5bqP77yM5bm25LiU6I635b6XWyfmiJjlipsnLCflv4PlooMnLCflhYPnpZ4nLCfnpo/mupAnLCfngbXmoLknLCfmgp/mgKcnLCflloQnLCfmgbYnLCfnibnmroonXeasoeW6j+eahOS7juWwj+WIsOWkp+aOkuW6j+aVsOe7hFxyXG4gICAgICAgIGxldCBhdHRyX3ZhbHVlX2FycmF5Om51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IGluZGV4Om51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaTx0aGlzLmF0dHJpYnV0ZV9uYW1lLmxlbmd0aCA7ICsraSl7XHJcbiAgICAgICAgICAgIGF0dHJfdmFsdWVfYXJyYXkucHVzaCh0aGlzLmdldF9hdHRyKHRoaXMuYXR0cmlidXRlX25hbWVbaV0pKTtcclxuICAgICAgICAgICAgaW5kZXgucHVzaChpKTsgLy/kv53lrZjkuIvmoIfvvIzot5/nnYDlv6vmjpLkuIDotbfmjpLluo9cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5xdWlja19zb3J0KGF0dHJfdmFsdWVfYXJyYXksIGluZGV4LCAwLCBhdHRyX3ZhbHVlX2FycmF5Lmxlbmd0aC0xKTsgLy/ov5vooYzmjpLluo9cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBpbmRleDsgIC8vaW5kZXjmnIDlkI7kv53lrZjlkITkuKrlhYPntKDkuIvmoIfmiYDlnKjnmoTkvY3nva7vvIzmr5TlpoJpbmRleFszXSA9IDXvvIzljbPnrKw15Y+35bGe5oCn5o6S56ysMysxPTTkvY1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/ku6XkuIvkuLrlv6vmjpLlh73mlbAqKioqKioqKipcclxuICAgIHF1aWNrX3NvcnQoaW5wdXQ6bnVtYmVyW10sIGluZGV4Om51bWJlcltdLCBzdGFydDpudW1iZXIsZW5kOm51bWJlcil7XHJcbiAgICAgICAgaWYoc3RhcnQ+PWVuZCl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGl2b3RJbmRleD10aGlzLnBhcnRpdGlvbihpbnB1dCwgaW5kZXgsIHN0YXJ0LCBlbmQpIC8vIDEuXHJcbiAgICAgICAgdGhpcy5xdWlja19zb3J0KGlucHV0LGluZGV4LHN0YXJ0LHBpdm90SW5kZXgtMSkgLy8gMi5cclxuICAgICAgICB0aGlzLnF1aWNrX3NvcnQoaW5wdXQsaW5kZXgscGl2b3RJbmRleCsxLGVuZClcclxuICAgIH1cclxuXHJcbiAgICBwYXJ0aXRpb24oaW5wdXQ6bnVtYmVyW10sIGluZGV4Om51bWJlcltdLCBzdGFydDpudW1iZXIsZW5kOm51bWJlcik6bnVtYmVyIHtcclxuICAgICAgICBsZXQgcGl2b3QgPSBpbnB1dFtzdGFydF0gLy8gMS5cclxuICAgICAgICBsZXQgcGl2b3RfaWR4ID0gaW5kZXhbc3RhcnRdO1xyXG5cclxuICAgICAgICBsZXQgbGVmdCA9IHN0YXJ0IC8vIDIuXHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gZW5kIC8vIDMuXHJcbiAgICAgICAgd2hpbGUgKGxlZnQgIT0gcmlnaHQpIHtcclxuICAgICAgICAgICAgd2hpbGUobGVmdDxyaWdodCYmaW5wdXRbcmlnaHRdPnBpdm90KXsgLy8gNC5cclxuICAgICAgICAgICAgICAgIHJpZ2h0LS1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZShsZWZ0PHJpZ2h0JiZpbnB1dFtsZWZ0XTw9cGl2b3QpeyAvLyA1LlxyXG4gICAgICAgICAgICAgICAgbGVmdCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobGVmdDxyaWdodCl7IC8vIDYuXHJcbiAgICAgICAgICAgICAgICBsZXQgdG1wPWlucHV0W2xlZnRdXHJcbiAgICAgICAgICAgICAgICBpbnB1dFtsZWZ0XT1pbnB1dFtyaWdodF1cclxuICAgICAgICAgICAgICAgIGlucHV0W3JpZ2h0XT10bXBcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4PWluZGV4W2xlZnRdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXhbbGVmdF09aW5kZXhbcmlnaHRdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXhbcmlnaHRdPWlkeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFtzdGFydF0gPSBpbnB1dFtsZWZ0XSAvLyA3LlxyXG4gICAgICAgIGlucHV0W2xlZnRdID0gcGl2b3RcclxuXHJcbiAgICAgICAgaW5kZXhbc3RhcnRdPWluZGV4W2xlZnRdO1xyXG4gICAgICAgIGluZGV4W2xlZnRdPXBpdm90X2lkeFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGxlZnRcclxuICAgIH1cclxuICAgIC8v5Lul5LiK5Li65b+r5o6S5Ye95pWwKioqKioqKioqKioqKioqKlxyXG5cclxuXHJcbiAgICAvL+S7peS4i+aYr+iDjOWMheWxnuaAp1xyXG4gICAgLy/lkITnsbvnianlk4FcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtMzogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNTogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNjogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBpdGVtNzogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGl0ZW1fbmFtZTpzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIC8v6K6+572u5bGe5oCn55qE5pWw5YC877yM6YCJ5Lit6KaB5pu05pS555qE5bGe5oCn77yM54S25ZCO6K6+572u5pWw5YC8XHJcbiAgICBzZXRpdGVtKGl0ZW1JRDpudW1iZXIsIGl0ZW1udW06bnVtYmVyKXtcclxuICAgICAgICBsZXQgYSA9IHRoaXMuZ2V0aXRlbSgpO1xyXG4gICAgICAgIGlmKGFbaXRlbUlEXSArIGl0ZW1udW0gPCAwKXtcclxuICAgICAgICAgIC8v6Ziy5q2i5bCP5LqOMOeahOaDheWGtVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc3dpdGNoIChpdGVtSUQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgaXRlbUlEPTA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtMCArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBpdGVtSUQ9MTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0xICs9IGl0ZW1udW07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGl0ZW1JRD0yOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbTIgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgaXRlbUlEPTM6XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbTMgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgaXRlbUlEPTQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtNCArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBpdGVtSUQ9NTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW01ICs9IGl0ZW1udW07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGl0ZW1JRD02OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbTYgKz0gaXRlbW51bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgaXRlbUlEPTc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtNyArPSBpdGVtbnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+iOt+WPluWxnuaAp+WAvO+8jOi/lOWbnuWxnuaAp+WAvOaVsOe7hFxyXG4gICAgcHVibGljIGdldGl0ZW0oKXtcclxuICAgICAgICBsZXQgaXRlbWFycmF5OiBudW1iZXJbXSA9IFt0aGlzLml0ZW0wLCB0aGlzLml0ZW0xLCB0aGlzLml0ZW0yLCB0aGlzLml0ZW0zLCB0aGlzLml0ZW00LCB0aGlzLml0ZW01LCB0aGlzLml0ZW02LCB0aGlzLml0ZW03XTtcclxuICAgICAgICAvL2NvbnNvbGUuZGVidWcoXCLlsZ7mgKflgLzojrflj5bmiJDlip9cIisgU3RyaW5nKGl0ZW1hcnJheSkpO1xyXG4gICAgICAgIHJldHVybiBpdGVtYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kurrnianmiJDplb/lsZ7mgKdcclxuICAgIC8v5Lq654mp562J57qnXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGxldmVsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3ViX2xldmVsOiBudW1iZXIgPSAwXHJcblxyXG4gICAgZ2V0X2xldmVsKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbGV2ZWxfbmFtZSA9IFsn57uD5rCUJywn562R5Z+6Jywn6YeR5Li5Jywn5YWD5am0J11cclxuICAgICAgICByZXR1cm4gbGV2ZWxfbmFtZVt0aGlzLmxldmVsJTRdXHJcbiAgICB9XHJcblxyXG4gICAgdXBfbGV2ZWwoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgKz0gMVxyXG4gICAgICAgIHRoaXMuc3ViX2xldmVsID0gMFxyXG4gICAgICAgIHRoaXMuYWdlX2xpbWl0ZWQgKj0gMi41XHJcbiAgICAgICAgdGhpcy5hZ2VfbGltaXRlZCAtPSB0aGlzLmdhdXNzaWFuX3JhbmRvbSgwLCh0aGlzLmxldmVsKzEpKjEwKVxyXG4gICAgfVxyXG5cclxuICAgIGdldF9zdWJsZXZlbCgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxldmVsX25hbWUgPSBbJ+WIneacnycsJ+S4reacnycsJ+WQjuacnyddXHJcbiAgICAgICAgcmV0dXJuIGxldmVsX25hbWVbdGhpcy5zdWJfbGV2ZWxdXHJcbiAgICB9XHJcblxyXG4gICAgdXBfc3VibGV2ZWwoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3ViX2xldmVsICs9IDFcclxuICAgIH1cclxuXHJcbiAgICAvL+S6uueJqeW9k+WJjee7j+mqjOWAvFxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBleHBfbm93OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGV4cF9pbmYoKXtcclxuICAgICAgICByZXR1cm4gW3RoaXMubGV2ZWwsIHRoaXMuZXhwX25vd107XHJcbiAgICB9XHJcblxyXG4gICAgLy/nlKjkuo5leHDoioLngrnliJ3lp4vljJbnu4/pqozlgLzmnaHvvIzku6Xlj4rov5Tlm57nrYnnuqflkoznu4/pqozlgLzvvIzjgJBseHTjgJHvvJrmmK/kuI3mmK/liJ3lp4vljJbkuI3lpKrpnIDopoHov5vluqbmhaLmhaLniKzvvIznm7TmjqXmmL7npLrnu4/pqozlgLzlsLHlpb3vvIzlkKbliJnmgKrmgKrnmoTmhJ/op4lcclxuICAgIGV4cF9pbml0KCl7XHJcbiAgICAgICAgbGV0IGV4cCA9IGNjLmZpbmQoJ2V4cCcpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICBleHAuZmlsbFJhbmdlKz0gKDEvdGhpcy5leHBfcmVxdWlyZWQoKSk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgfSwgMS90aGlzLmV4cF9yZXF1aXJlZCgpLzI1LCB0aGlzLmV4cF9ub3cpO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZXhwLmZpbGxSYW5nZSA9IDA7XHJcbiAgICAgICAgbGV0IGV4cF9ub3cgPSB0aGlzLmV4cF9ub3c7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwX25vdyA9IDA7XHJcbiAgICAgICAgLy90aGlzLmV4cF9nYWluKC1leHBfbm93KTsgICAvL+OAkOmZiOaZn+OAkeS/ruaUueS6huS4gOS4qmJ1Z++8jOavj+asoeWIneWni+WMluaXtumcgOimgemHjeaWsOaJp+ihjOS4gOasoWV4cF9nYWluKCnmlrnms5XvvIzorqnnu4/pqozph43mlrDkuIrmtqjvvIznm7TmjqXmlLnlj5hmaWxsUmFuZ2XkuI3nrqHnlKhcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy5sZXZlbCwgdGhpcy5leHBfbm93XTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy/kuI3lkIznrYnnuqfnmoTmiYDpnIDnu4/pqoxcclxuICAgIGV4cF9yZXF1aXJlZCgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gKDIqKih0aGlzLnN1Yl9sZXZlbCsxKSkqMTAwKigxMCoqdGhpcy5sZXZlbCk7ICAvL+WPr+S7peiuvue9ruWFtuS7luWNleiwg+mAkuWinuWHveaVsFxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAvL+WIpOaWree7j+mqjOWAvOaYr+WQpua6ouWHulxyXG4gICAgZXhwX2ZpbGxlZChleHBfbm93Om51bWJlciwgZXhwX2FkZDpudW1iZXIpe1xyXG4gICAgICAgIC8v5aaC5p6c57uP6aqM5YC85aKe6ZW/6LaF6L+H5pyA5aSn57uP6aqM5YC877yM5YiZ6K6+572u5Li65b2T5YmN562J57qn55qE5pyA5aSn57uP6aqM5YC877yM5ZCm5YiZ55u05o6l55u45Yqg5L2c5Li65b2T5YmN57uP6aqM5YC8XHJcbiAgICAgICAgaWYoKGV4cF9ub3crZXhwX2FkZCkgPD0gdGhpcy5leHBfcmVxdWlyZWQoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwX25vdyArPSBleHBfYWRkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmV4cF9ub3cgPSB0aGlzLmV4cF9yZXF1aXJlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICovXHJcblxyXG4gICAgLy/lop7plb/nu4/pqozmnaHnmoTmlrnms5VcclxuICAgIGV4cF9nYWluKGV2ZW50X2V4cDpudW1iZXIsIG9wdGlvbj10cnVlKXsvLyDmraTmlrnms5Xlj6rlnKhTY2VuZSBNYWlu5L2/55SoXHJcbiAgICAgICAgLy/jgJDliJjpkavmtpvjgJHvvJrmraTlpITmmK/lkKbkuI3lnKjmlrnms5XlhoXliKTliKvkuovku7bnsbvlnovlkaLvvIzlsIbmraTmlrnms5Xlj6rkvZzkuLrmk43kvZzmlbDmja7kuYvnm67nmoTvvIzopoHlop7liqDlpJrlsJHnu4/pqoznlLHlpJbpg6jpgLvovpHmjIflrprvvIznhLblkI7nlLHmraTmlrnms5XlsIbnu4/pqozmnaHliqDliLDpgqPkuKrkvY3nva5cclxuICAgICAgICAvL+OAkOmZiOaZn+OAkea2m+WTpei/memHjOaUueeahOaMuuWlve+8jOaOp+WItuWinumVv+aXtumXtOS4ujHnp5JcclxuICAgICAgICAvLyDljbNsZXZlbDHmu6HlgLwyMDDnu4/pqozvvIzkvKDlhaXlj4LmlbDku6Pooajlop7liqDnu4/pqozlgLxcclxuICAgICAgICAvL+W7tuaXtuWHveaVsOiuqee7j+mqjOadoeWPr+S7peW7tuaXtui/nue7reS4iua2qFxyXG5cclxuICAgICAgICBsZXQgdG93YXJkID0gZXZlbnRfZXhwIC8gTWF0aC5hYnMoZXZlbnRfZXhwKVxyXG5cclxuICAgICAgICBpZihldmVudF9leHAgPT0gMCl7IC8v44CQ6ZmI5pmf44CR6L+Z6YeM5L+u5aSN5LqG5LiA5LiqYnVn77yM5Y2zdG93YXJk5LiN6IO9MC8w5peg6ZmQ5aSn77yM5LiN54S2ZmlsbFJhbmdl5Lya55u05o6l5ruhXHJcbiAgICAgICAgICAgIHRvd2FyZD0wO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBlbmQgPSB0aGlzLmV4cF9ub3cgKyBldmVudF9leHBcclxuICAgICAgICBpZiAoZW5kID4gdGhpcy5leHBfcmVxdWlyZWQoKSkgZW5kID0gdGhpcy5leHBfcmVxdWlyZWQoKVxyXG4gICAgICAgIGVsc2UgaWYgKGVuZCA8IDApIGVuZCA9IDBcclxuICAgICAgICBsZXQgZ2FwID0gTWF0aC5hYnMoZW5kIC0gdGhpcy5leHBfbm93KVxyXG4gICAgICAgIC8vbGV0IHRvd2FyZCA9IHRoaXMuZXhwX25vdyAtIGJlZ2luID4gMCA/IDEgOiAtMSAvL+WmguaenOe7j+mqjOato+WcqOWHj+WwkVxyXG4gICAgICAgIHRoaXMuZXhwX25vdyA9IGVuZCBcclxuICAgICAgICBsZXQgZXhwID0gY2MuZmluZCgnZXhwJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSlcclxuICAgICAgICBpZiAob3B0aW9uKVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcclxuICAgICAgICAgICAgZXhwLmZpbGxSYW5nZSs9ICgoZ2FwLzMwKS90aGlzLmV4cF9yZXF1aXJlZCgpKnRvd2FyZCk7ICAvL+e7j+mqjGV4cC5maWxsUmFuZ2XliLAx6KGo56S657uP6aqM5ruh77yM57uP6aqM5YC85aKe6ZW/55qE5Y+v6KeG5YyW5qiq5p2h77yMMS90aGlzLmV4cF9yZXF1aXJlZCgp6KGo56S65q+P6Ze06ZqU5LiA5a6a5pe26Ze05aKe5Yqg6L+Z5LmI5aSa55qE57uP6aqM5p2h5pi+56S677yM5a6e546w5Yqo5oCB5aKe6ZW/XHJcbiAgICAgICAgfSwgKGdhcC8zMCkvdGhpcy5leHBfcmVxdWlyZWQoKSwgMzApOyAgLy/ov5nph4zov57nu63lop7plb/nmoRnYXDopoHnrYnkuo4xL3RoaXMuZXhwX3JlcXVpcmVkKCkqdG93YXJk55qE5YCS5pWw5omN6IO95aKe6ZW/5Yiw77yM5bm25LiUZ2Fw6LaK5bCP77yM5YmN6Z2i55qE6Ze06ZqU5pe26Ze05Lmf6LaK5bCP77yM5YiZ5aKe6ZW/6YCf5bqm6LaK5b+rXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5pel5b+X57O757ufXHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIGxvZ19sb2M6Y2MuVmVjMiA9IG5ldyBjYy5WZWMyKDAsMCk7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBsb2dfZnJlcTpudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZXZlbnRfYWxsOnN0cmluZ1tdID0gW107ICAgLy/lrZjmlL7miYDmnInnmoTml6Xlv5fvvIzml6Xlv5foioLngrnliJ3lp4vljJbml7blhpnlhaVcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGV2ZW50X2FkZDpzdHJpbmdbXSA9IFtdOyAgIC8v5a2Y5pS+5paw5aKe5Yqg55qE5pel5b+X77yM5aaC5p6c5pyJ5paw55qE77yM5YiZ5pel5b+X6IqC54K56KKr54K55byA5pe25YaZ5YWlXHJcblxyXG4gICAgLy/ml6Xlv5fliJ3lp4vljJblubblhpnlhaUsIGlzYWRk5Luj6KGo5piv5LiN5piv5YaN5omT5byA5pel5b+X6Z2i5p2/5pe25YaZ5YWl5paw5pel5b+X77yM5aaC5p6c5piv5YiZ5LiA6L655YaZ5LiA6L655riF56m65paw5aKe5Yqg55qE5LqL5Lu277yM6Ziy5q2i6YeN5aSN5YaZ5YWlXHJcbiAgICBsb2dfaW5pdChpc2FkZDpib29sZWFuPXRydWUpe1xyXG4gICAgICAgIGlmKGlzYWRkID09IHRydWUpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyPTAgOyBpPHRoaXMuZXZlbnRfYWRkLmxlbmd0aCA7IGkrKyApe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubG9nX2FkZCh0aGlzLmV2ZW50X2FkZFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMuZXZlbnRfYWRkLmxlbmd0aCAvL+W/hemhu+WFiOW+l+WIsOmVv+W6pu+8jOS4jeeEtuS8muWwkXBvcOS4gOS4qlxyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyPTAgOyBpPGxlbiA7IGkrKyApe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRfYWRkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sb2dfbG9jLnkgPSAtMjAwOy8v6YeN5paw5YaZ55qE5pe25YCZIOimgeWIneWni+WMluWGmeWFpeaWh+acrOeahHnovbTkvY3nva5cclxuICAgICAgICAgICAgZm9yKHZhciBpOm51bWJlcj0wIDsgaTx0aGlzLmV2ZW50X2FsbC5sZW5ndGggOyBpKysgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nX2FkZCh0aGlzLmV2ZW50X2FsbFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLmV2ZW50X2FkZC5sZW5ndGggICAvL+WmguaenOWIneWni+WMluaXpeW/l+iKgueCueaXtuaWsOWinuS6i+S7tuS4reacieS6i+S7tu+8jOS5n+imgXBvcOWHuuWOu1xyXG4gICAgICAgICAgICBmb3IodmFyIGk6bnVtYmVyPTAgOyBpPGxlbiA7IGkrKyApe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRfYWRkLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+S/neWtmOaXpeW/l+WGheWuuVxyXG4gICAgbG9nX3dyaXRlKGV2ZW50OnN0cmluZyl7XHJcblxyXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmV2ZW50X2FsbC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5ldmVudF9hZGQucHVzaChldmVudCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/ml6Xlv5fliJ3lp4vljJblhpnlhaXmlrnpmL/po55cclxuICAgIGxvZ19hZGQoZXZlbnQ6c3RyaW5nKXtcclxuICAgICAgICAvL+WGmeWFpeaXpeW/l+eahOWHhuWkh1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gY2MuZmluZCgnbG9nX3BhbmVsJykuZ2V0Q2hpbGRCeU5hbWUoJ2xvZ19TY3JvbGxWaWV3JykuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTsgLy/mib7liLDopoHkv53lrZjml6Xlv5fnmoTniLboioLngrlcclxuICAgICAgICBsZXQgbmV3X2NvbnRlbnQgPSBuZXcgY2MuTm9kZSgpOyAgLy/liJ3lp4vljJbmlrDoioLngrnkuLrlrp7kvovljJbnmoTkuIDkuKroioLngrlcclxuICAgICAgICB2YXIgbG9nX3RleHQgPSBuZXdfY29udGVudC5hZGRDb21wb25lbnQoY2MuTGFiZWwpOyAvL+WinuWKoGxhYmVs57uE5Lu25bm26LWL57uZbG9nX3RleHRcclxuICAgICAgICBuZXdfY29udGVudC5jb2xvciA9IGNjLmNvbG9yKDAsMCwwKTsgLy/lsIblrZfkvZPmlLnkuLrpu5HoibJcclxuICAgICAgICAvL+iuvue9ruaWh+acrOWkp+Wwj1xyXG4gICAgICAgIGxvZ190ZXh0LmZvbnRTaXplID0gNTA7XHJcbiAgICAgICAgbG9nX3RleHQubGluZUhlaWdodD01MDtcclxuICAgICAgICBsb2dfdGV4dC5lbmFibGVCb2xkID0gdHJ1ZTtcclxuIFxyXG4gICAgICAgIG5ld19jb250ZW50LnNldFBhcmVudChjb250ZW50KTsgIC8v6K6+572u5qC56IqC54K55Li6Y29udGVudFxyXG4gICAgICAgIG5ld19jb250ZW50LnggPSB0aGlzLmxvZ19sb2MueDtcclxuICAgICAgICBuZXdfY29udGVudC55ID0gdGhpcy5sb2dfbG9jLnk7XHJcblxyXG5cclxuICAgXHJcbiAgICAgICAgLy/lsIbotoXov4fplb/luqbnmoTlrZfnrKbkuLLliqDkuIrmjaLooYznrKZcclxuICAgICAgICBsZXQgZXZlbnRfY29weSA9IFtdO1xyXG4gICAgICAgIGxldCBjb3VudF9yb3cgPSAxO1xyXG4gICAgICAgIGZvcih2YXIgaSA6bnVtYmVyPTAgOyBpPGV2ZW50Lmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgICAgICAgdmFyIGxlbiA9IGV2ZW50X2NvcHkucHVzaChldmVudFtpXSk7XHJcbiAgICAgICAgICAgaWYoaSUxNiA9PSAwICYmIGkhPTApeyAgICAgICAgICAgICAgICAgICAgLy/mr48xNuS4quWtl+espuWKoOS4gOS4quaNouihjOesplxyXG4gICAgICAgICAgICBjb3VudF9yb3cgKz0gMTtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IGV2ZW50X2NvcHkucHVzaCgnXFxuJyk7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSBldmVudF9jb3B5LnB1c2goJ1xcbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5sb2dfbG9jLnkgLT0gKDE1MCpjb3VudF9yb3crODApOyAvL+S4i+S4gOasoeiusOW9leS9jee9ruW+gOS4i+enu+WKqFxyXG4gICAgICAgIHRoaXMubG9nX2ZyZXEgKz0gMTsgLy/orrDlvZXml6Xlv5fmlbDph48rMVxyXG4gICAgICAgIGNvbnRlbnQuc2V0Q29udGVudFNpemUoOTAwLCA0MDAqdGhpcy5sb2dfZnJlcSkvL+aXpeW/l+mrmOW6puWinuWKoFxyXG5cclxuICAgICAgICBsb2dfdGV4dC5zdHJpbmcgPSBldmVudF9jb3B5LmpvaW4oJycpOyAgLy/lsZ7mgKfmlLnlj5hcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7ICAvL+iuvue9ruacrOiKgueCueS4uuW4uOmpu+iKgueCuVxyXG4gICAgICAgIHRoaXMubG9nX2xvYy55ID0gLTIwMDtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZV9uYW1lID0gWyfmiJjlipsnLCflv4PlooMnLCflhYPnpZ4nLCfnpo/mupAnLCfngbXmoLknLCfmgp/mgKcnLCflloQnLCfmgbYnLCfnibnmroonXTtcclxuICAgICAgICB0aGlzLml0ZW1fbmFtZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KClcclxuICAgICAgICB0aGlzLmluaXRfYXR0cigpXHJcbiAgICAgICAgdGhpcy5pbml0QWdlKClcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRoaXMuZ2F1c3NpYW5fcmFuZG9tKDAsMjAsMTAwKSlcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnZXZlbnRzLmpzb24nLCAoZXJyLCBvYmopPT57XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZygnZmxhZy4uLicpXHJcbiAgICAgICAgICAgIGlmIChlcnIpe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKCdlcnInKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhlcnIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdyZWFkLi4uJylcclxuICAgICAgICAgICAgdGhpcy5ldmVudF9saWIgPSBvYmouanNvblxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50X2dyYWRlX21hcCA9IG5ldyBNYXAoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAgdXBkYXRlIChkdCkge1xyXG5cclxuXHJcblxyXG4gICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==