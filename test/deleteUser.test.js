import request from 'supertest';
import { expect } from 'chai';

describe('DELETE API tests using supertest', () => {
	const baseurl = 'https://kasir-api.belajarqa.com'; //base-url API
	it('Delete User', (done) => {
		request(baseurl)
		.delete('/users/26ab1fae-41c2-4987-b2ea-c04397160ce5') //URI or endpoint
		.set('Accept', 'application/json')
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDczODM3OX0.G0BXk7q2VMUiLsAbVb0y3qyOimOmLeq_tDvOyZZBNyw') //Header token from API Authorization
		.end(function (err, res) {
			expect(res.statusCode).to.be.equal(200); //Expected Response or Assertion
			expect(res.body.status).to.be.equal('success'); //Expected Response or Assertion
			expect(res.body.message).to.be.equal('User berhasil dihapus'); //Expected Response or Assertion
			done();
		});
	});
});
