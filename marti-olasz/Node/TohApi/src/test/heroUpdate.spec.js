const should = require('should');
const sinon = require('sinon');

const update = require('../controllers/hero/heroUpdate');

describe('Hero update', () => {
	it('should update hero', () => {
		const hero = { save: (callback) => callback() };
		const req = { hero, body: { name: '' } };
		const res = {
			status: sinon.spy(),
			send: () => {}
		};
		update(req, res);

		res.status.calledWith(200).should.equal(true);
	});

	it('should not update hero without hero', () => {
		const req = { body: {} };
		const res = {
			status: sinon.spy(),
			send: () => {}
		};
		update(req, res);

		res.status.calledWith(404).should.equal(true);
	});
});
