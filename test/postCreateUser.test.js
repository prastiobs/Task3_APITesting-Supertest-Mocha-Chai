import request from 'supertest';
import { expect } from 'chai';

describe('POST API tests using supertest', () => {
    const baseurl = 'https://kasir-api.belajarqa.com'; //base-url API
    it('Create User', (done) => {
        request(baseurl)
        .post('/users') //URI or endpoint
        .send({ "name": "kasir-serbaguna", "email": "user@example.com", "password": "jiasda2321@" }) //Body Request
        .set('Accept', 'application/json')
		.set('Content-Type', 'application/json')
		.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAwNWYyZWMyLTZjOGYtNGEwZi1iMDM0LTE5NzhkYjM2ZDJkNyIsImNvbXBhbnlJZCI6Ijg2NzM1M2E3LTBkNjYtNDg4OS1hYzc0LWE5YWE4NDk2MjI2YSIsImlhdCI6MTcxNDczODM3OX0.G0BXk7q2VMUiLsAbVb0y3qyOimOmLeq_tDvOyZZBNyw') //Header token from API Authorization
		.end(function (err, res) {
            expect(res.statusCode).to.be.equal(201); //Expected Response or Assertion
			expect(res.body.status).to.be.equal('success'); //Expected Response or Assertion
            expect(res.body.message).to.be.equal('User berhasil ditambahkan'); //Expected Response or Assertion
			expect(res.body.data.name).to.be.equal('kasir-serbaguna'); //Expected Response or Assertion
			done();
        });
    });
});
