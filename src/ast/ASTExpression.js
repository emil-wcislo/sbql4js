export default class ASTExpression {
    constructor() {
        this.type = this.constructor.name;
    }

    accept(astVisitor) {
        console.log("ASTExpression.accept");
    }
}