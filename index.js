const CalculatorLexer = require("./tokens.jacoblex.out");
const fs = require("fs");
const lexer = new CalculatorLexer();

const CalculatorParser = require("./grammar.jacobgram.out");
const parser = new CalculatorParser();

const context = {
	aaa: "aaaValue",
	bbb: "bbbValue",
	ccc: "cccValue",
	customprint: (str) => console.log(`~~~ Custom ~~~~ | ${str}`),
	log: console.log,
};

lexer.setInput(fs.readFileSync("./input1.txt").toString());

// do {
// 	lexer.nextToken();
// 	console.log(lexer.current);
// } while (lexer.buffer?.length > 0);

parser.parse(lexer, context);
