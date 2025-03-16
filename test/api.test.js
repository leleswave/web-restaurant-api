import request from 'supertest';
import app from '../src/server.js';
import { expect } from 'chai';

describe("GraphQL API General", () => {

  it("should fetch the full menu", async () => {
    const query = `
      query {
        allMenuItems {
          appetizers {
            name
            description
            price
          }
          entrees {
            name
            description
            price
          }
          sandwiches {
            cold {
              name
              description
            }
            hot {
              name
              description
              price
            }
          }
        }
      }
    `;

    const res = await request(app)
      .post("/graphql")
      .send({ query })
      .expect(200);  

  
    expect(res.body.data).to.have.property('allMenuItems');
    expect(res.body.data.allMenuItems).to.have.property('appetizers');
    expect(res.body.data.allMenuItems).to.have.property('entrees');
    expect(res.body.data.allMenuItems).to.have.property('sandwiches');

    expect(res.body.data.allMenuItems.entrees).to.be.an('array').that.is.not.empty;
    res.body.data.allMenuItems.entrees.forEach(entree => {
      expect(entree).to.have.property('name');
      expect(entree).to.have.property('description');
      expect(entree).to.have.property('price');
    });

    expect(res.body.data.allMenuItems.sandwiches.hot).to.be.an('array').that.is.not.empty;
    res.body.data.allMenuItems.sandwiches.hot.forEach(sandwich => {
      expect(sandwich).to.have.property('name');
      expect(sandwich).to.have.property('price');
      expect(sandwich.price).to.be.a('number');
    });

    expect(res.body.data.allMenuItems.sandwiches.cold).to.be.an('array').that.is.not.empty;
    res.body.data.allMenuItems.sandwiches.cold.forEach(sandwich => {
      expect(sandwich).to.have.property('name');
      expect(sandwich).to.not.have.property('price');
    });

  });

});
