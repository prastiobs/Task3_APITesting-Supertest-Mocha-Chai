import request from 'supertest';
import { expect } from 'chai';

describe('Get API tests using supertest', () => {
	const baseurl = 'https://kasir-api.belajarqa.com';
	it('Get User Detail', (done) => {
		request(baseurl)
		.delete('/users/05ad66ce-13b5-4522-9544-e159555ad597')
		.set('Accept', 'application/json')
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDU2OTUzN30.Tr-ImUrkkPy3vIzgDOhlpSV6W0-esxuc3pF4qqG4T9Q')
		.end(function (err, res) {
			expect(res.statusCode).to.be.equal(200);
			expect(res.body.status).to.be.equal('success');
			expect(res.body.message).to.be.equal('User berhasil dihapus');
			done();
		});
	});
});
