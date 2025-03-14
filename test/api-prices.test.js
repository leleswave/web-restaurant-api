import request from 'supertest';
import app from '../src/server.js'; // Caminho para o seu servidor Express
import { expect } from 'chai';

describe("GraphQL API Prices", () => {

  it("should fetch entrees with price", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { entrees { name price } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.entrees).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.entrees[0].price).to.be.a('number').that.is.greaterThan(0);
  });

  it("should fetch sandwiches with full and half price", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { sandwiches { cold { name halfPrice fullPrice } } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.sandwiches.cold).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.sandwiches.cold[0].halfPrice).to.be.a('number').that.is.greaterThan(0);
    expect(res.body.data.allMenuItems.sandwiches.cold[0].fullPrice).to.be.a('number').that.is.greaterThan(0);
  });


  it("should fetch enchiladas with valid prices", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { enchiladas { name unoPrice dosPrice tresPrice } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.enchiladas).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.enchiladas[0].unoPrice).to.be.a('number').that.is.greaterThan(0);
    expect(res.body.data.allMenuItems.enchiladas[0].dosPrice).to.be.a('number').that.is.greaterThan(0);
    expect(res.body.data.allMenuItems.enchiladas[0].tresPrice).to.be.a('number').that.is.greaterThan(0);
  });


  it("should fetch soup and salad combos with valid prices", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { soupAndSaladCombos { name price } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.soupAndSaladCombos).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.soupAndSaladCombos[0].price).to.be.a('number').that.is.greaterThan(0);
  });

  it("should fetch quiche menu with price", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { quiche { name price } } }'
      });

    expect(res.status).to.equal(200);
    expect(res.body.data.allMenuItems.quiche).to.be.an('array').that.is.not.empty;
    expect(res.body.data.allMenuItems.quiche[0].price).to.be.a('number').that.is.greaterThan(0);
  });

  it("should have price as a number for all items", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: `
          query {
            allMenuItems {
              appetizers { price }
              entrees { price }
              sandwiches { cold { halfPrice fullPrice } hot { price } }
              soupAndSaladCombos { price }
              fajitas { price }
              tacos { price }
              enchiladas { unoPrice dosPrice tresPrice }
              quiche { price }
              greenSalad { price }
            }
          }
        `
      });

    expect(res.status).to.equal(200);
    res.body.data.allMenuItems.appetizers.forEach(item => {
      expect(item.price).to.be.a('number');
    });
    res.body.data.allMenuItems.entrees.forEach(item => {
      expect(item.price).to.be.a('number');
    });
    res.body.data.allMenuItems.sandwiches.cold.forEach(item => {
      expect(item.halfPrice).to.be.a('number');
      expect(item.fullPrice).to.be.a('number');
    });
    res.body.data.allMenuItems.soupAndSaladCombos.forEach(item => {
      expect(item.price).to.be.a('number');
    });
    res.body.data.allMenuItems.fajitas.forEach(item => {
      expect(item.price).to.be.a('number');
    });
    res.body.data.allMenuItems.tacos.forEach(item => {
      expect(item.price).to.be.a('number');
    });
    res.body.data.allMenuItems.enchiladas.forEach(item => {
      expect(item.unoPrice).to.be.a('number');
      expect(item.dosPrice).to.be.a('number');
      expect(item.tresPrice).to.be.a('number');
    });
    res.body.data.allMenuItems.quiche.forEach(item => {
      expect(item.price).to.be.a('number');
    });
    res.body.data.allMenuItems.greenSalad.forEach(item => {
      expect(item.price).to.be.a('number');
    });
  });


  it("should have all prices greater than zero", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: `
          query {
            allMenuItems {
              appetizers { price }
              entrees { price }
              sandwiches { cold { halfPrice fullPrice } hot { price } }
              soupAndSaladCombos { price }
              fajitas { price }
              tacos { price }
              enchiladas { unoPrice dosPrice tresPrice }
              quiche { price }
              greenSalad { price }
            }
          }
        `
      });

    expect(res.status).to.equal(200);
    res.body.data.allMenuItems.appetizers.forEach(item => {
      expect(item.price).to.be.greaterThan(0);
    });
    res.body.data.allMenuItems.entrees.forEach(item => {
      expect(item.price).to.be.greaterThan(0);
    });
    res.body.data.allMenuItems.sandwiches.cold.forEach(item => {
      expect(item.halfPrice).to.be.greaterThan(0);
      expect(item.fullPrice).to.be.greaterThan(0);
    });
    res.body.data.allMenuItems.soupAndSaladCombos.forEach(item => {
      expect(item.price).to.be.greaterThan(0);
    });
    res.body.data.allMenuItems.fajitas.forEach(item => {
      expect(item.price).to.be.greaterThan(0);
    });
    res.body.data.allMenuItems.tacos.forEach(item => {
      expect(item.price).to.be.greaterThan(0);
    });
    res.body.data.allMenuItems.enchiladas.forEach(item => {
      expect(item.unoPrice).to.be.greaterThan(0);
      expect(item.dosPrice).to.be.greaterThan(0);
      expect(item.tresPrice).to.be.greaterThan(0);
    });
    res.body.data.allMenuItems.quiche.forEach(item => {
      expect(item.price).to.be.greaterThan(0);
    });
    res.body.data.allMenuItems.greenSalad.forEach(item => {
      expect(item.price).to.be.greaterThan(0);
    });
  });

 
  it("should fetch green salads with different prices", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { greenSalad { name price } } }'
      });

    expect(res.status).to.equal(200);
    const prices = res.body.data.allMenuItems.greenSalad.map(item => item.price);
    const uniquePrices = [...new Set(prices)];
    expect(uniquePrices.length).to.be.greaterThan(1); 
  });

 
  it("should have tacos with prices greater than 9", async () => {
    const res = await request(app)
      .post("/graphql")
      .send({
        query: '{ allMenuItems { tacos { name price } } }'
      });

    expect(res.status).to.equal(200);
    const tacosAbove9 = res.body.data.allMenuItems.tacos.filter(taco => taco.price > 9);
    expect(tacosAbove9).to.have.lengthOf.at.least(1);
  });


});
