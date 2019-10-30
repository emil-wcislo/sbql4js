import ASTExpression from '../ASTExpression';

export default class ConstExpression extends ASTExpression {
    constructor(value) {
        super();
        this.value = value;
    }

    accept(astVisitor) {
        astVisitor.visitConstExpression(this);
    }
}