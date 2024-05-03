import request from 'supertest';
import { expect } from 'chai';

describe('GET API tests using supertest', () => {
	const baseurl = 'https://kasir-api.belajarqa.com'; //base-url API
	it('Get User Detail', (done) => {
		request(baseurl)
		.get('/users/7efaf3f5-d126-4770-84b4-ba1632af0e3c') //URI or endpoint
		.set('Accept', 'application/json')
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDcwNTA4N30.T6WZxLcnVpQ5CM-Z1Zk9D2mP0-1fUwrcLLQEqXmJ8pU') //Header token from API Authorization
		.end(function (err, res) {
			expect(res.statusCode).to.be.equal(200); //Expected Response or Assertion
			expect(res.body.status).to.be.equal('success'); //Expected Response or Assertion
			expect(res.body.data.user.name).to.be.equal('kasir-serbaguna'); //Expected Response or Assertion
			expect(res.body.data.user.email).to.be.equal('user@example.com'); //Expected Response or Assertion
			expect(res.body.data.user.role).to.be.equal('kasir'); //Expected Response or Assertion
			done();
		});
	});
});
