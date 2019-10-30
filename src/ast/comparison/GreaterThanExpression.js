import BinaryExpression from '../BinaryExpression';

export default class GreaterThanExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitGreaterThanExpression(this);
    }
}