'use strict';

var _pegjs = require('pegjs');

var _pegjs2 = _interopRequireDefault(_pegjs);

var _jsonStringifySafe = require('json-stringify-safe');

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

var _sbql4js = require('../parser/sbql4js');

var _PlusExpression = require('./ast/PlusExpression');

var _PlusExpression2 = _interopRequireDefault(_PlusExpression);

var _ConstExpression = require('./ast/const/ConstExpression');

var _ConstExpression2 = _interopRequireDefault(_ConstExpression);

var _Interpreter = require('./visitor/Interpreter/Interpreter');

var _Interpreter2 = _interopRequireDefault(_Interpreter);

var _importParserDeps = require('./utils/importParserDeps');

var _importParserDeps2 = _interopRequireDefault(_importParserDeps);

var _data = require('./test/data/projects/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var db = [{
    name: "emp",
    value: {
        firstName: "Jan",
        lastName: "Kowalski",
        job: "Clerk",
        salary: 2500
    }
}, {
    name: "emp",
    value: {
        firstName: "Anna",
        lastName: "Nowak",
        job: "Manager",
        salary: 3500
    }
}];
// const i = new Interpreter(db);
// const res = parse('"Ala" + " ma" + " kota"', parserDeps);
// const res = parse('emp where firstName == "Anna"', parserDeps);

// const res = parse('emp where salary <= 3500', parserDeps);
// const resJson = JSON.stringify(res, null, 2);
// console.log(resJson);
// res.accept(i);
// console.log(i.qres.pop());

// import IntegerExpression from './ast/const/IntegerExpression';

var testDb = _data2.default;
// console.log(stringify( testDb, null, 2 ));
var i = new _Interpreter2.default(testDb);
var res = i.query('task');
console.log((0, _jsonStringifySafe2.default)(res, null, 2));
// const ast2 = parse('employee.addresses', parserDeps);

// ast2.accept(i);
// console.log(stringify( i.qres.pop(), null, 2 ));

//--dependency '.\\src\\ast\\const\\ConstExpression.js'