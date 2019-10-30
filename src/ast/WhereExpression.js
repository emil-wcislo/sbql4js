import BinaryExpression from './BinaryExpression';

export default class WhereExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitWhereExpression(this);
    }
}