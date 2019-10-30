import stringify from 'json-stringify-safe';

import { parse } from '../../../parser/sbql4js';
import parserDeps from '../../utils/importParserDeps';
import ASTVisitor from '../ASTVisitor';
import ENVS from './ENVS';

export default class Interpreter extends ASTVisitor {
    constructor(db) {
        super();
        this.qres = [];
        this.envs = new ENVS(db);
    }

    query(queryString) {
        const queryAst = parse(queryString, parserDeps);
        queryAst.accept(this);
        const result = this.qres.pop();
        return result;
    }

    coertionToBag(val) {
        if(Array.isArray(val)) {
            return val;
        } else {
            return [ val ];
        }
    }

    coertionToSingle(val) {
        if(Array.isArray(val)) {
            return val[0];
        } else {
            return val;
        }
    }

    visitLeftRightExpr(expr) {
        
        expr.leftExpr.accept(this);
        expr.rightExpr.accept(this);
        const n1 = this.qres.pop();
        const n2 = this.qres.pop();
        return {
            leftRes: n2,
            rightRes: n1
        };
    }

    visitConstExpression(constExpr) {
        this.qres.push(constExpr.value);
    }

    visitNameExpression(expr) {
        const name = expr.name;
        const res = this.envs.bind(name);
        // const resJSON = stringify(res, null, 2);
        // console.log(`visitNameExpression, res: ${resJSON}`);
        this.qres.push(res);
    }

    visitPlusExpression(expr) {
        // plusExpr.leftExpr.accept(this);
        // plusExpr.rightExpr.accept(this);
        // const n1 = this.qres.pop();
        // const n2 = this.qres.pop();
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes + r.rightRes;
        this.qres.push(res);
        console.log(`${r.leftRes} + ${r.rightRes}`);
    }

    visitMinusExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes - r.rightRes;
        this.qres.push(res);
        // console.log(expr.type);
        console.log(`${r.leftRes} - ${r.rightRes}`);
    }

    visitMultiplyExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes * r.rightRes;
        this.qres.push(res);
        // console.log(expr.type);
        console.log(`${r.leftRes} * ${r.rightRes}`);
    }

    visitDivideExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes / r.rightRes;
        this.qres.push(res);
        // console.log(expr.type);
        console.log(`${r.leftRes} / ${r.rightRes}`);
    }

    visitEqualsExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes == r.rightRes;
        this.qres.push(res);
    }

    visitNotEqualsExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes != r.rightRes;
        this.qres.push(res); 
    }

    visitGreaterThanExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes > r.rightRes;
        this.qres.push(res); 
    }

    visitLessThanExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes < r.rightRes;
        this.qres.push(res); 
    }

    visitGreaterOrEqualExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes >= r.rightRes;
        this.qres.push(res); 
    }

    visitLessOrEqualExpression(expr) {
        const r = this.visitLeftRightExpr(expr);
        const res = r.leftRes <= r.rightRes;
        this.qres.push(res); 
    }


    visitDotExpression(expr) {
        expr.leftExpr.accept(this);
        const leftVal = this.coertionToBag(this.qres.pop());
        const res = [];
        leftVal.forEach(el => {
            this.envs.nested(el);
            expr.rightExpr.accept(this);
            const rightVal = this.coertionToBag(this.qres.pop());
            // console.log(`dot right: ${JSON.stringify(rightVal, null, 2)}`);
            res.push(...rightVal);
            this.envs.pop();
        });
        this.qres.push(res);
    }

    visitWhereExpression(expr) {
        expr.leftExpr.accept(this);
        const leftVal = this.coertionToBag(this.qres.pop());
        const res = [];
        leftVal.forEach(el => {
            this.envs.nested(el);
            expr.rightExpr.accept(this);
            const rightVal = this.coertionToSingle(this.qres.pop());
            if(rightVal && rightVal === true) {
                res.push(el);
            }
            this.envs.pop();
        });
        this.qres.push(res);
    }
}