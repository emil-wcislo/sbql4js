import BinaryExpression from '../BinaryExpression';

export default class EqualsExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitEqualsExpression(this);
    }
}