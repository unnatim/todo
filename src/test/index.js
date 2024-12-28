const { expect } = require('chai');
const request = require('supertest'); // Directly use supertest
const app = require('../app');

describe('v1', () => {
  it('Get request to /test returns some text', async () => {
    const res = await request(app).get('/test'); // Call request with app
    const textResponse = res.body;
    expect(res.status).to.equal(200);
    expect(textResponse.text).to.be.a('string');
    expect(textResponse.text).to.equal('Simple Node App Working!');
  });
});