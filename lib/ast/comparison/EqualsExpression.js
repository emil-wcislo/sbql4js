'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BinaryExpression2 = require('../BinaryExpression');

var _BinaryExpression3 = _interopRequireDefault(_BinaryExpression2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EqualsExpression = function (_BinaryExpression) {
    _inherits(EqualsExpression, _BinaryExpression);

    function EqualsExpression(leftExpr, rightExpr) {
        _classCallCheck(this, EqualsExpression);

        return _possibleConstructorReturn(this, (EqualsExpression.__proto__ || Object.getPrototypeOf(EqualsExpression)).call(this, leftExpr, rightExpr));
    }

    _createClass(EqualsExpression, [{
        key: 'accept',
        value: function accept(astVisitor) {
            astVisitor.visitEqualsExpression(this);
        }
    }]);

    return EqualsExpression;
}(_BinaryExpression3.default);

exports.default = EqualsExpression;