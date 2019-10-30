import ASTExpression from './ASTExpression';

export default class BinaryExpression extends ASTExpression {
    constructor(leftExpr, rightExpr) {
        super();
        this.leftExpr = leftExpr;
        this.rightExpr = rightExpr;
    }

    // get leftExpr() { return this.leftExpr}
    // private set leftExpr(val) { this.leftExpr = val }
    // get rightExpr() { return this.rightExpr}
}