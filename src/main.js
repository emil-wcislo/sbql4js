import peg from 'pegjs';
import stringify from 'json-stringify-safe';

import { parse } from '../parser/sbql4js';

import PlusExpression from './ast/PlusExpression';
import ConstExpression from './ast/const/ConstExpression';
// import IntegerExpression from './ast/const/IntegerExpression';

import Interpreter from './visitor/Interpreter/Interpreter';

import parserDeps from './utils/importParserDeps';
import data from './test/data/projects/data';

// const c1 = new ConstExpression(1);
// const c2 = new ConstExpression(2);
// const plus = new PlusExpression(c1, c2); 


// plus.accept(i);

// console.log(i.qres);


// const parser = peg.generate(`
//   start = ('a' / 'b')+ { return new ConstExpression(text); }
// `, { context: { ConstExpression } });

// const res = parser.parse("abba");
// const resJson = JSON.stringify(res);
// console.log(resJson);

// const res = parse('1 + 2 - 3 * 4', parserDeps);
const db = [
    {
        name: "emp",
        value: {
            firstName: "Jan",
            lastName: "Kowalski",
            job: "Clerk",
            salary: 2500
        }  
    },
    {
        name: "emp",
        value: {
            firstName: "Anna",
            lastName: "Nowak",
            job: "Manager",
            salary: 3500
        }  
    },
]
// const i = new Interpreter(db);
// const res = parse('"Ala" + " ma" + " kota"', parserDeps);
// const res = parse('emp where firstName == "Anna"', parserDeps);

// const res = parse('emp where salary <= 3500', parserDeps);
// const resJson = JSON.stringify(res, null, 2);
// console.log(resJson);
// res.accept(i);
// console.log(i.qres.pop());

const testDb = data;
// console.log(stringify( testDb, null, 2 ));
const i = new Interpreter(testDb);
const res = i.query('task');
console.log(stringify( res, null, 2 ));
// const ast2 = parse('employee.addresses', parserDeps);

// ast2.accept(i);
// console.log(stringify( i.qres.pop(), null, 2 ));

//--dependency '.\\src\\ast\\const\\ConstExpression.js'