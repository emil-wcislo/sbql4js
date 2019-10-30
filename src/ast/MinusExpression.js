import BinaryExpression from './BinaryExpression';

export default class MinusExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitMinusExpression(this);
    }
}