import BinaryExpression from './BinaryExpression';

export default class DotExpression extends BinaryExpression {
    constructor(leftExpr, rightExpr) {
        super(leftExpr, rightExpr);
    }

    accept(astVisitor) {
        astVisitor.visitDotExpression(this);
    }
}