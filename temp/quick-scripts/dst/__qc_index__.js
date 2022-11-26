
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/event_scripts/awakener');
require('./assets/script/event_scripts/bar');
require('./assets/script/event_scripts/event');
require('./assets/script/event_scripts/event_controller');
require('./assets/script/event_scripts/event_prompt');
require('./assets/script/event_scripts/exausted_prompt');
require('./assets/script/event_scripts/over');
require('./assets/script/music');
require('./assets/script/persist_node');
require('./assets/script/scene1/age');
require('./assets/script/scene1/attribute');
require('./assets/script/scene1/attribute_panel');
require('./assets/script/scene1/bag');
require('./assets/script/scene1/bag_panel');
require('./assets/script/scene1/beijing1');
require('./assets/script/scene1/bubble');
require('./assets/script/scene1/dazuo');
require('./assets/script/scene1/energy');
require('./assets/script/scene1/exit');
require('./assets/script/scene1/exp');
require('./assets/script/scene1/log');
require('./assets/script/scene1/log_panel');
require('./assets/script/scene1/player');
require('./assets/script/scene1/setup');
require('./assets/script/scene1/setup_panel');
require('./assets/script/scene1/shuoming');
require('./assets/script/scene1/upgrade');
require('./assets/script/scene1/xiuxian');
require('./assets/script/scene2/beijing2');
require('./assets/script/scene2/dantian');
require('./assets/script/scene2/danyao');
require('./assets/script/scene2/fanhui');
require('./assets/script/scene2/jinluo');
require('./assets/script/scene2/jinmai');
require('./assets/script/scene2/yichu');
require('./assets/script/start/start');
require('./assets/sdkhub/js-sdkhub');

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