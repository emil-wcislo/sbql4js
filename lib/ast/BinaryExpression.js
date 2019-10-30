'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ASTExpression2 = require('./ASTExpression');

var _ASTExpression3 = _interopRequireDefault(_ASTExpression2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BinaryExpression = function (_ASTExpression) {
    _inherits(BinaryExpression, _ASTExpression);

    function BinaryExpression(leftExpr, rightExpr) {
        _classCallCheck(this, BinaryExpression);

        var _this = _possibleConstructorReturn(this, (BinaryExpression.__proto__ || Object.getPrototypeOf(BinaryExpression)).call(this));

        _this.leftExpr = leftExpr;
        _this.rightExpr = rightExpr;
        return _this;
    }

    // get leftExpr() { return this.leftExpr}
    // private set leftExpr(val) { this.leftExpr = val }
    // get rightExpr() { return this.rightExpr}


    return BinaryExpression;
}(_ASTExpression3.default);

exports.default = BinaryExpression;