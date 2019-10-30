"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonStringifySafe = require("json-stringify-safe");

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ENVS = function () {
    function ENVS(db) {
        _classCallCheck(this, ENVS);

        this.stack = [];
        if (db) {
            this.initDB(db);
            // this.stack.push(initEnv);
        }
    }

    _createClass(ENVS, [{
        key: "initDB",
        value: function initDB(db) {
            var env = [];
            for (var propName in db) {
                var propVal = db[propName];
                if (Array.isArray(propVal)) {
                    for (var el in propVal) {
                        env.push({
                            name: propName,
                            value: propVal[el]
                        });
                    }
                } else {
                    env.push({
                        name: propName,
                        value: propVal
                    });
                }
                var binder = { name: propName };
            }
            //console.log(`initDB, env: ${stringify(env, null, 2)}`);
            this.stack.push(env);
        }
    }, {
        key: "pop",
        value: function pop() {
            return this.stack.pop();
        }
    }, {
        key: "bind",
        value: function bind(name) {
            var res = [];
            for (var i = this.stack.length - 1; i > -1; i--) {
                var env = this.stack[i];
                env.forEach(function (binder) {
                    if (binder.name == name) {
                        res.push(binder.value);
                        //console.log(`bind: ${binder.name}`);
                    }
                });
                if (res.length > 0) {
                    return res;
                }
            }
            return res;
        }
    }, {
        key: "nested",
        value: function nested(val) {
            var res = [];
            if (Array.isArray(val)) {
                return res;
            }
            var valType = typeof val === "undefined" ? "undefined" : _typeof(val);
            switch (valType) {
                case "string":
                case "number":
                    return res;
            }
            for (var propName in val) {
                var propVal = val[propName];
                res.push({
                    name: propName,
                    value: propVal
                });
            }
            this.stack.push(res);
            //console.log(`nested: ${stringify(this.stack, null, 2)}`);
            return res;
        }
    }]);

    return ENVS;
}();

exports.default = ENVS;