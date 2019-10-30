// Simple Arithmetics Grammar
// ==========================
//
// Accepts expressions like "2 * (3 + 4)" and computes their value.
Expression 
  = Where

Where 
  = head:Comparison tail:(_ ("where" ) _ Comparison)* {
    return tail.reduce(function(result, element) {
      if (element[1] === "where") { return new options.WhereExpression( result , element[3] ); }
    }, head);
  }

Comparison
  = head:Additive tail:(_ ("==" / "!=" / ">=" / "<=" / ">" / "<" ) _ Additive)* {
    return tail.reduce(function(result, element) {
      if (element[1] === "==") { return new options.EqualsExpression( result , element[3] ); }
      if (element[1] === "!=") { return new options.NotEqualsExpression( result , element[3] ); }
      if (element[1] === ">") { return new options.GreaterThanExpression( result , element[3] ); }
      if (element[1] === "<") { return new options.LessThanExpression( result , element[3] ); }
      if (element[1] === ">=") { return new options.GreaterOrEqualExpression( result , element[3] ); }
      if (element[1] === "<=") { return new options.LessOrEqualExpression( result , element[3] ); }
    }, head);
  }

Additive
  = head:Multiplicative tail:(_ ("+" / "-") _ Multiplicative)* {
      return tail.reduce(function(result, element) {
        if (element[1] === "+") { return new options.PlusExpression( result , element[3] ); }
        if (element[1] === "-") { return new options.MinusExpression( result , element[3] ); }
      }, head);
    }

Multiplicative
  = head:Dot tail:(_ ("*" / "/") _ Dot)* {
      return tail.reduce(function(result, element) {
        if (element[1] === "*") { return new options.MultiplyExpression( result , element[3] ); }
        if (element[1] === "/") { return new options.DivideExpression( result , element[3] ); }
      }, head);
    }

Dot
  = head:Factor tail:(_ (".") _ Factor)* {
    return tail.reduce(function(result, element) {
      if (element[1] === ".") { return new options.DotExpression( result , element[3] ); }
    }, head);
  }

Factor
  = "(" _ expr:Expression _ ")" { return expr; }
  / Constant
  / Name

Constant
  = Integer
  / String

Integer "integer"
  = _ [0-9]+ { return new options.ConstExpression( parseInt(text(), 10) ); }

String
  = '"' chars:DoubleStringCharacter* '"' { return new options.ConstExpression( chars.join('') ); }
  / "'" chars:SingleStringCharacter* "'" { return new options.ConstExpression( chars.join('') ); }

DoubleStringCharacter
  = !('"' / "\\") char:. { return char; }
  / "\\" sequence:EscapeSequence { return sequence; }

SingleStringCharacter
  = !("'" / "\\") char:. { return char; }
  / "\\" sequence:EscapeSequence { return sequence; }

EscapeSequence
  = "'"
  / '"'
  / "\\"
  / "b"  { return "\b";   }
  / "f"  { return "\f";   }
  / "n"  { return "\n";   }
  / "r"  { return "\r";   }
  / "t"  { return "\t";   }
  / "v"  { return "\x0B"; }

Name "name"
  = _ [a-zA-Z][a-zA-Z0-9]* { return new options.NameExpression( text() ); }

_ "whitespace"
  = [ \t\n\r]*

              