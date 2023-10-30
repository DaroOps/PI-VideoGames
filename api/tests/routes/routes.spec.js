const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogames, conn } = require('../../src/db.js');
const { createNullObject } = require('../utils/createNullObject.js');
const isValidUUID = require('../../src/utils/isValidUUID.js');
const { getGameDetail } = require('../../src/services/gameDetailService.js');

const agent = session(app);
const videogame = createNullObject("", "BASE TEST CREATE",true);


describe('Videogame routes', () => {
    before(async () => {
        await conn.sync({ force: true });
    });
    before(() => conn.authenticate()
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        }));
    beforeEach(() => Videogames.sync({ force: false }));
    describe('GET /videogames', () => {
        it('should get 200 and return an array of objects', async () => {
            const response = await agent.get('/videogames').expect(200);

            expect(Array.isArray(response.body)).to.be.true;
            response.body.forEach((game) => {
                expect(typeof game).to.be.equal('object');
            });

        });
    });

    describe('GET /videogames/:id', () => {
        const fullFillObj = createNullObject("", "THEIDTEST", true);
        
        agent.post('/videogames').send(fullFillObj).expect(201);

        before(async () => {

        });

        it('should get the details of a game from the API', async () => {
            const response = await agent.get('/videogames/43').expect(200);
            expect(typeof response.body).to.be.equal('object');
        });

        it('should get the details of a game from the database', async () => {
          
           
            const postRes = await agent.post('/videogames').send(fullFillObj)

            const response = await agent.get(`/videogames/${postRes.body.id}`).expect(200);
           
            expect(isValidUUID(response.body.id)).to.be.true;
            expect(response.body).to.have.property('genres');
            expect(response.body).to.have.property('id');
        });
    });

    describe('GET /videogames/name?', () => {
        it('should get 200', () =>
            agent.get('/videogames?name="mario"').expect(200)
        );
    });

    describe('GET /genres', () => {
        it('should get 200', () =>
            agent.get('/genres').expect(200)
        );
    });

    describe('POST /videogames', () => {

        const fullFillObj = createNullObject("", "TEST POST", true);
       
        it('should get 201', () =>
            agent.post('/videogames').send(fullFillObj).expect(201),
        ); 
    });
});