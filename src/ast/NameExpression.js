export default class NameExpression {
    constructor(name) {
        this.name = name;
    }

    accept(astVisitor) {
        astVisitor.visitNameExpression(this);
    }
}