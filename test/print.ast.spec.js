const { expect } = require('chai');
const Parser = require('../src/parser').default
const { selectIntoToSQL } = require('../src/select')

describe('print.ast', () => {
	const parser = new Parser();
	const options = {  database: "trino", trimQuery: false }
	const query = `select date(a) from t`;
	describe('print', () => {
		it('should pass', () => {
			try {
				console.log(JSON.stringify(parser.astify(query, options), null, "\t"));
			} catch (e) {
				console.log(e);
			}
		})
	})

})