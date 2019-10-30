import BinaryExpression from '../BinaryExpression';

export default class GreaterOrEqualExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitGreaterOrEqualExpression(this);
    }
}