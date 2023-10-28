const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogames, conn } = require('../../src/db.js');
const { createNullObject } = require('../utils/createNullObject.js');

const agent = session(app);
const videogame = createNullObject("");

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogames.sync({ force: true })
    .then(() => Videogames.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
  
  describe(' GET /videogames/:id', () => {
    it('should get 200', () =>
      agent.get('/videogames/43').expect(200)
    );
  });

  describe('GET /videogames/name?', () => {
    it('should get 200', () =>
      agent.get('/videogames?name=mario').expect(200)
    );
  });

  describe('GET /genres', () => {
    it('should get 200', () =>
      agent.get('/genres').expect(200)
    );
  });
  
  describe('POST /videogames', () => {

    const fullFillObj = createNullObject("");
    const genres = ["Action", "Puzzles"];

    it('should get 200', () =>
      agent.post('/videogames').send(fullFillObj, genres).expect(201)
    );
  });
});