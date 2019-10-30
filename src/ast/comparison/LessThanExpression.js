import BinaryExpression from '../BinaryExpression';

export default class LessThanExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitLessThanExpression(this);
    }
}