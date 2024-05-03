import request from 'supertest';
import { expect } from 'chai';

describe('DELETE API tests using supertest', () => {
	const baseurl = 'https://kasir-api.belajarqa.com'; //base-url API
	it('Delete User', (done) => {
		request(baseurl)
		.delete('/users/5c5de718-a806-4aae-843b-25d82a7da899') //URI or endpoint
		.set('Accept', 'application/json')
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDcwNDg4Nn0.pinzOgiz03WkD-GZX_oEqCRsa4y5JbKnN1gBkuVB8m4') //Header token from API Authorization
		.end(function (err, res) {
			expect(res.statusCode).to.be.equal(200); //Expected Response or Assertion
			expect(res.body.status).to.be.equal('success'); //Expected Response or Assertion
			expect(res.body.message).to.be.equal('User berhasil dihapus'); //Expected Response or Assertion
			done();
		});
	});
});
