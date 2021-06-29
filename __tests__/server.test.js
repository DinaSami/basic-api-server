  
const {server} = require('../src/server')
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('food test',()=>{
  it('Should return name',async ()=>{
 const response = await mockRequest.get(`/food`);
 expect(response.status).toBe(200)
  })
  it('clothes test',async ()=>{
    const response = await mockRequest.get(`/clothes`);
    expect(response.status).toBe(200)
     })
})