const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('services movies', () => {
  const MoviesServices = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock
  });
  const moviesServices = new MoviesServices();
  describe('when getmovies method is called', async () => {
    it('should call the getall mongolib method', async () => {
      await moviesServices.getMovies({});
      assert.strict(getAllStub.called, true);
    });

    it('should retunr an array of movies', async () => {
      const result = await moviesServices.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    });
  });
});
