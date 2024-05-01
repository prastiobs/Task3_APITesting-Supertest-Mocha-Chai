import request from 'supertest';
import { expect } from 'chai';

describe('Get API tests using supertest', () => {
	const baseurl = 'https://kasir-api.belajarqa.com';
	it('Get User Detail', (done) => {
		request(baseurl)
		.get('/users/d57cc205-dce1-4ed8-b842-25d7b7c0256d')
		.set('Accept', 'application/json')
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDU2MjU2NX0.N69l-78FvUx3t_yY-mI_Vd3Mzp73RKnVJjWIGTPt0GU')
		.end(function (err, res) {
			expect(res.statusCode).to.be.equal(200);
			expect(res.body.status).to.be.equal('success');
			expect(res.body.data.user.name).to.be.equal('kasir-serbaguna');
			expect(res.body.data.user.email).to.be.equal('user@example.com');
			expect(res.body.data.user.role).to.be.equal('kasir');
			done();
		});
	});
});
