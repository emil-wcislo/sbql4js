import BinaryExpression from './BinaryExpression';

export default class DivideExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitDivideExpression(this);
    }
}