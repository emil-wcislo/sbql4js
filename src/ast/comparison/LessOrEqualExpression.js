import BinaryExpression from '../BinaryExpression';

export default class LessOrEqualExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitLessOrEqualExpression(this);
    }
}