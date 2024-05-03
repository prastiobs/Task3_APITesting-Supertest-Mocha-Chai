import request from 'supertest';
import { expect } from 'chai';

describe('PUT API tests using supertest', () => {
    const baseurl = 'https://kasir-api.belajarqa.com'; //base-url API
    it('Update User', (done) => {
        request(baseurl)
        .put('/users/6fe0ed1e-034d-401a-97b6-4cedb8d7ac77') //URI or endpoint
        .send({ "name": "update-user", "email": "user@example.com" }) //Body Request
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDcwNTA4N30.T6WZxLcnVpQ5CM-Z1Zk9D2mP0-1fUwrcLLQEqXmJ8pU') //Header token from API Authorization
		.end(function (err, res) {
            expect(res.statusCode).to.be.equal(200); //Expected Response or Assertion
			expect(res.body.status).to.be.equal('success'); //Expected Response or Assertion
            expect(res.body.message).to.be.equal('User berhasil diupdate'); //Expected Response or Assertion
			expect(res.body.data.name).to.be.equal('update-user'); //Expected Response or Assertion
			done();
        });
    });
});
