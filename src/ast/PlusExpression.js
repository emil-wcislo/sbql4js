import BinaryExpression from './BinaryExpression';

export default class PlusExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitPlusExpression(this);
    }
}