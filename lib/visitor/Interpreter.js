'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ASTVisitor2 = require('./ASTVisitor');

var _ASTVisitor3 = _interopRequireDefault(_ASTVisitor2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interpreter = function (_ASTVisitor) {
    _inherits(Interpreter, _ASTVisitor);

    function Interpreter() {
        _classCallCheck(this, Interpreter);

        var _this = _possibleConstructorReturn(this, (Interpreter.__proto__ || Object.getPrototypeOf(Interpreter)).call(this));

        _this.qres = [];
        return _this;
    }

    _createClass(Interpreter, [{
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
    }]);

    return Interpreter;
}(_ASTVisitor3.default);

exports.default = Interpreter;