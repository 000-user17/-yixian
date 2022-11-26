"use strict";
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