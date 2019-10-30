import BinaryExpression from '../BinaryExpression';

export default class NotEqualsExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitNotEqualsExpression(this);
    }
}