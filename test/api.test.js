import request from 'supertest';
import app from '../src/server.js';
import { expect } from 'chai';

describe("GraphQL API General", () => {
  it("should fetch the full menu", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: `
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
                  halfPrice
                  fullPrice
                }
                hot {
                  name
                  description
                  price
                }
              }
              soupAndSaladCombos {
                name
                price
              }
              fajitas {
                name
                description
                price
              }
              tacos {
                name
                description
                price
              }
              enchiladas {
                name
                description
                unoPrice
                dosPrice
                tresPrice
              }
              quiche {
                name
                description
                price
              }
              greenSalad {
                name
                description
                price
              }
            }
          }
        `
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.appetizers).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.entrees).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.sandwiches).to.have.property('cold').that.is.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.soupAndSaladCombos).to.be.an('array').that.is.not.empty;
  });


  it("should fetch valid fajitas", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { fajitas { name description price } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.fajitas).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.fajitas[0].price).to.be.a('number').that.is.greaterThan(0);
  });

  it("should return correct menu item for a taco", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { tacos { name description price } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.tacos).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.tacos[0].name).to.equal("Beer Battered Fish");
  });


  it("should have non-null names for all menu items", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: `
          query {
            allMenuItems {
              appetizers { name }
              entrees { name }
              sandwiches { cold { name } hot { name } }
              soupAndSaladCombos { name }
              fajitas { name }
              tacos { name }
              enchiladas { name }
              quiche { name }
              greenSalad { name }
            }
          }
        `
      });

    expect(res.status).to.equal(200);
    res.body.data.allMenuItems.appetizers.forEach(item => {
      expect(item.name).to.not.be.null;
    });
    res.body.data.allMenuItems.entrees.forEach(item => {
      expect(item.name).to.not.be.null;
    });
    res.body.data.allMenuItems.sandwiches.cold.forEach(item => {
      expect(item.name).to.not.be.null;
    });
    res.body.data.allMenuItems.soupAndSaladCombos.forEach(item => {
      expect(item.name).to.not.be.null;
    });
    res.body.data.allMenuItems.fajitas.forEach(item => {
      expect(item.name).to.not.be.null;
    });
    res.body.data.allMenuItems.tacos.forEach(item => {
      expect(item.name).to.not.be.null;
    });
    res.body.data.allMenuItems.enchiladas.forEach(item => {
      expect(item.name).to.not.be.null;
    });
    res.body.data.allMenuItems.quiche.forEach(item => {
      expect(item.name).to.not.be.null;
    });
    res.body.data.allMenuItems.greenSalad.forEach(item => {
      expect(item.name).to.not.be.null;
    });
  });


  it("should have non-empty names for all menu items", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: `
          query {
            allMenuItems {
              appetizers { name }
              entrees { name }
              sandwiches { cold { name } hot { name } }
              soupAndSaladCombos { name }
              fajitas { name }
              tacos { name }
              enchiladas { name }
              quiche { name }
              greenSalad { name }
            }
          }
        `
      });

    expect(res.status).to.equal(200);
    res.body.data.allMenuItems.appetizers.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
    res.body.data.allMenuItems.entrees.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
    res.body.data.allMenuItems.sandwiches.cold.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
    res.body.data.allMenuItems.soupAndSaladCombos.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
    res.body.data.allMenuItems.fajitas.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
    res.body.data.allMenuItems.tacos.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
    res.body.data.allMenuItems.enchiladas.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
    res.body.data.allMenuItems.quiche.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
    res.body.data.allMenuItems.greenSalad.forEach(item => {
      expect(item.name).to.not.be.empty;
    });
  });


  it("should fetch vegetarian tacos", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { tacos { name description } } }'
      });

    expect(res.status).to.equal(200);
    const vegetarianTacos = res.body.data.allMenuItems.tacos.filter(taco => taco.name.includes('Veggie'));
    expect(vegetarianTacos).to.have.lengthOf.at.least(1);
  });


  it("should have fajitas with 'Steak' in their name", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { fajitas { name } } }'
      });

    expect(res.status).to.equal(200);
    const fajitasWithSteak = res.body.data.allMenuItems.fajitas.filter(fajita => fajita.name.includes('Steak'));
    expect(fajitasWithSteak).to.have.lengthOf.at.least(1);
  });

});
