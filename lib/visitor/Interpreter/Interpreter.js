'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonStringifySafe = require('json-stringify-safe');

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

var _sbql4js = require('../../../parser/sbql4js');

var _importParserDeps = require('../../utils/importParserDeps');

var _importParserDeps2 = _interopRequireDefault(_importParserDeps);

var _ASTVisitor2 = require('../ASTVisitor');

var _ASTVisitor3 = _interopRequireDefault(_ASTVisitor2);

var _ENVS = require('./ENVS');

var _ENVS2 = _interopRequireDefault(_ENVS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interpreter = function (_ASTVisitor) {
    _inherits(Interpreter, _ASTVisitor);

    function Interpreter(db) {
        _classCallCheck(this, Interpreter);

        var _this = _possibleConstructorReturn(this, (Interpreter.__proto__ || Object.getPrototypeOf(Interpreter)).call(this));

        _this.qres = [];
        _this.envs = new _ENVS2.default(db);
        return _this;
    }

    _createClass(Interpreter, [{
        key: 'query',
        value: function query(queryString) {
            var queryAst = (0, _sbql4js.parse)(queryString, _importParserDeps2.default);
            queryAst.accept(this);
            var result = this.qres.pop();
            return result;
        }
    }, {
        key: 'coertionToBag',
        value: function coertionToBag(val) {
            if (Array.isArray(val)) {
                return val;
            } else {
                return [val];
            }
        }
    }, {
        key: 'coertionToSingle',
        value: function coertionToSingle(val) {
            if (Array.isArray(val)) {
                return val[0];
            } else {
                return val;
            }
        }
    }, {
        key: 'visitLeftRightExpr',
        value: function visitLeftRightExpr(expr) {

            expr.leftExpr.accept(this);
            expr.rightExpr.accept(this);
            var n1 = this.qres.pop();
            var n2 = this.qres.pop();
            return {
                leftRes: n2,
                rightRes: n1
            };
        }
    }, {
        key: 'visitConstExpression',
        value: function visitConstExpression(constExpr) {
            this.qres.push(constExpr.value);
        }
    }, {
        key: 'visitNameExpression',
        value: function visitNameExpression(expr) {
            var name = expr.name;
            var res = this.envs.bind(name);
            // const resJSON = stringify(res, null, 2);
            // console.log(`visitNameExpression, res: ${resJSON}`);
            this.qres.push(res);
        }
    }, {
        key: 'visitPlusExpression',
        value: function visitPlusExpression(expr) {
            // plusExpr.leftExpr.accept(this);
            // plusExpr.rightExpr.accept(this);
            // const n1 = this.qres.pop();
            // const n2 = this.qres.pop();
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes + r.rightRes;
            this.qres.push(res);
            console.log(r.leftRes + ' + ' + r.rightRes);
        }
    }, {
        key: 'visitMinusExpression',
        value: function visitMinusExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes - r.rightRes;
            this.qres.push(res);
            // console.log(expr.type);
            console.log(r.leftRes + ' - ' + r.rightRes);
        }
    }, {
        key: 'visitMultiplyExpression',
        value: function visitMultiplyExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes * r.rightRes;
            this.qres.push(res);
            // console.log(expr.type);
            console.log(r.leftRes + ' * ' + r.rightRes);
        }
    }, {
        key: 'visitDivideExpression',
        value: function visitDivideExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes / r.rightRes;
            this.qres.push(res);
            // console.log(expr.type);
            console.log(r.leftRes + ' / ' + r.rightRes);
        }
    }, {
        key: 'visitEqualsExpression',
        value: function visitEqualsExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes == r.rightRes;
            this.qres.push(res);
        }
    }, {
        key: 'visitNotEqualsExpression',
        value: function visitNotEqualsExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes != r.rightRes;
            this.qres.push(res);
        }
    }, {
        key: 'visitGreaterThanExpression',
        value: function visitGreaterThanExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes > r.rightRes;
            this.qres.push(res);
        }
    }, {
        key: 'visitLessThanExpression',
        value: function visitLessThanExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes < r.rightRes;
            this.qres.push(res);
        }
    }, {
        key: 'visitGreaterOrEqualExpression',
        value: function visitGreaterOrEqualExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes >= r.rightRes;
            this.qres.push(res);
        }
    }, {
        key: 'visitLessOrEqualExpression',
        value: function visitLessOrEqualExpression(expr) {
            var r = this.visitLeftRightExpr(expr);
            var res = r.leftRes <= r.rightRes;
            this.qres.push(res);
        }
    }, {
        key: 'visitDotExpression',
        value: function visitDotExpression(expr) {
            var _this2 = this;

            expr.leftExpr.accept(this);
            var leftVal = this.coertionToBag(this.qres.pop());
            var res = [];
            leftVal.forEach(function (el) {
                _this2.envs.nested(el);
                expr.rightExpr.accept(_this2);
                var rightVal = _this2.coertionToBag(_this2.qres.pop());
                // console.log(`dot right: ${JSON.stringify(rightVal, null, 2)}`);
                res.push.apply(res, _toConsumableArray(rightVal));
                _this2.envs.pop();
            });
            this.qres.push(res);
        }
    }, {
        key: 'visitWhereExpression',
        value: function visitWhereExpression(expr) {
            var _this3 = this;

            expr.leftExpr.accept(this);
            var leftVal = this.coertionToBag(this.qres.pop());
            var res = [];
            leftVal.forEach(function (el) {
                _this3.envs.nested(el);
                expr.rightExpr.accept(_this3);
                var rightVal = _this3.coertionToSingle(_this3.qres.pop());
                if (rightVal && rightVal === true) {
                    res.push(el);
                }
                _this3.envs.pop();
            });
            this.qres.push(res);
        }
    }]);

    return Interpreter;
}(_ASTVisitor3.default);

exports.default = Interpreter;