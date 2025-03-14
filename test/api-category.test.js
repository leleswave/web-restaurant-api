import request from 'supertest';
import app from '../src/server.js'; 
import { expect } from 'chai';

describe("GraphQL API Category", () => {

  it("should fetch items by category", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { appetizers { name } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.appetizers).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.appetizers[0].name).to.equal("Iceberg Wedge Salad with House Cured Bacon");
  });


  it("should have at least two items in the sandwiches category", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { sandwiches { cold { name } hot { name } } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.sandwiches.cold).to.have.lengthOf.at.least(2);
    expect(res.body.data.allMenuItems.sandwiches.hot).to.have.lengthOf.at.least(2);
  });

  it("should ensure enchiladas category is not empty", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { enchiladas { name } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.enchiladas).to.be.an('array').that.is.not.empty;
  });


});
