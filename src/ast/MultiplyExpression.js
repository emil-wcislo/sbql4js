import BinaryExpression from './BinaryExpression';

export default class MultiplyExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitMultiplyExpression(this);
    }
}