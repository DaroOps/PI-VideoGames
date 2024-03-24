const { Videogames, Genres, conn } = require('../../src/db.js');
const { expect} = require('chai');
const { createNullObject } = require('../utils/createNullObject.js');
const { getGameGenres } = require('../../src/services/gameGenresService.js');


const fillObj = createNullObject("");

const nullName = createNullObject("name");
const nullDescription = createNullObject("description");
const nullPlatforms = createNullObject("platforms");
const nullImage = createNullObject("image");
const nullReleaseDate = createNullObject("releasedate");

const date = new Date('2023-10-25T20:30:02.088Z');

describe('videogames Database Models\n', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators Videogames Model:\n', () => {
    beforeEach(() => Videogames.sync({ force: true }));

    describe('full fill object', () => {
      it('should work when it has all spaces filled with valid data:', (done) => {
        Videogames.create(fillObj)
          .then((videogame) => {
            expect(videogame.name).to.equal('Valid name');
            expect(videogame.description).to.equal('Valid description');
            expect(videogame.platforms).to.equal('Valid platforms');
            expect(videogame.image).to.equal('Valid image');
            expect(videogame.releasedate.toISOString()).to.equal(date.toISOString());
            done();
          })
          .catch((err) => done(err));
      });
    });

    describe('name: ', () => {
      it('should throw an error if name is null', (done) => {
        Videogames.create(nullName)
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
    });

    describe('description: ', () => {
      it('should throw an error if description is null', (done) => {
        Videogames.create(nullDescription)
          .then(() => done(new Error('It requires a valid description')))
          .catch(() => done());
      });
    });

    describe('platform: ', () => {
      it('should throw an error if platform is null', (done) => {
        Videogames.create(nullPlatforms)
          .then(() => done(new Error('It requires a valid platform')))
          .catch(() => done());
      });
    });

    describe('image: ', () => {
      it('should throw an error if platform is null', (done) => {
        Videogames.create(nullImage)
          .then(() => done(new Error('It requires a valid platform')))
          .catch(() => done());
      });
    });

    describe('reslease Date: ', () => {
      it('should throw an error if release date is null', (done) => {
        Videogames.create(nullReleaseDate)
          .then(() => done(new Error('It requires a valid date')))
          .catch(() => done());
      });
    });

    describe('Validators Genres Model:\n', () => {
      beforeEach(async () => {
        await Genres.sync({ force: true });
      });
  
      describe('Validate Empty Model on awake \n', () => {
        it('should be empty when the database is empty for the first time', async () => {
          const dataInGenres = await Genres.count();
          expect(dataInGenres).to.equal(0);
        });
      });
  
    });
  });

  

  describe('Validators Genres Model:\n', () => {
    before(async () => {
        
        await Genres.sync({ force: false });
        await getGameGenres();
        
    });
    
    describe('Validate if is filled when is empty \n', () => {
      it('should be filled when is empty', async () => {
       
        const dataInGenres = await Genres.count();
        expect(dataInGenres).to.equal(19);      
      });

      it('should exist and have ID 1: "Action"', async () => {
        const genre = await Genres.findByPk(1);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Action');
      });
    
      it('should exist and have ID 2: "Indie"', async () => {
        const genre = await Genres.findByPk(2);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Indie');
      });
    
      it('should exist and have ID 3: "Adventure"', async () => {
        const genre = await Genres.findByPk(3);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Adventure');
      });
    
      it('should exist and have ID 4: "RPG"', async () => {
        const genre = await Genres.findByPk(4);
        expect(genre).to.exist;
        expect(genre.name).to.equal('RPG');
      });
    
      it('should exist and have ID 5: "Strategy"', async () => {
        const genre = await Genres.findByPk(5);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Strategy');
      });
    
      it('should exist and have ID 6: "Shooter"', async () => {
        const genre = await Genres.findByPk(6);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Shooter');
      });
    
      it('should exist and have ID 7: "Casual"', async () => {
        const genre = await Genres.findByPk(7);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Casual');
      });
    
      it('should exist and have ID 8: "Simulation"', async () => {
        const genre = await Genres.findByPk(8);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Simulation');
      });
    
      it('should exist and have ID 9: "Puzzle"', async () => {
        const genre = await Genres.findByPk(9);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Puzzle');
      });
    
      it('should exist and have ID 10: "Arcade"', async () => {
        const genre = await Genres.findByPk(10);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Arcade');
      });
    
      it('should exist and have ID 11: "Platformer"', async () => {
        const genre = await Genres.findByPk(11);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Platformer');
      });
    
      it('should exist and have ID 12: "Massively Multiplayer"', async () => {
        const genre = await Genres.findByPk(12);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Massively Multiplayer');
      });
    
      it('should exist and have ID 13: "Racing"', async () => {
        const genre = await Genres.findByPk(13);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Racing');
      });
    
      it('should exist and have ID 14: "Sports"', async () => {
        const genre = await Genres.findByPk(14);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Sports');
      });
    
      it('should exist and have ID 15: "Fighting"', async () => {
        const genre = await Genres.findByPk(15);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Fighting');
      });
    
      it('should exist and have ID 16: "Family"', async () => {
        const genre = await Genres.findByPk(16);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Family');
      });
    
      it('should exist and have ID 17: "Board Games"', async () => {
        const genre = await Genres.findByPk(17);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Board Games');
      });
    
      it('should exist and have ID 18: "Educational"', async () => {
        const genre = await Genres.findByPk(18);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Educational');
      });
    
      it('should exist and have ID 19: "Card"', async () => {
        const genre = await Genres.findByPk(19);
        expect(genre).to.exist;
        expect(genre.name).to.equal('Card');
      });
    });
  });


});
