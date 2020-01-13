const Mongolib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mondoDB = new Mongolib();
  }
  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mondoDB.getAll(this.collection, query);
    return movies || [];
  }
  async getMovie({ movieId }) {
    const movie = await this.mondoDB.get(this.collection, movieId);
    return movie;
  }

  async createMovie({ movie }) {
    const createdMovieId = await this.mondoDB.create(this.collection, movie);
    return createdMovieId;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this.mondoDB.update(
      this.collection,
      movieId,
      movie
    );
    return updatedMovieId;
  }

  async deleteMovie({ movieId }) {
    const deletedMovieId = await this.mondoDB.delete(this.collection, movieId);
    return deletedMovieId;
  }
}

module.exports = MoviesService;
