const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetchTopRated: {
    title: 'TopRated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
  fetHorrorMovies: {
    title: 'Horror',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=3`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=4`,
  },
  fetchUpcoming: {
    title: 'Mystery',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=5`,
  },
  fetchTV: {
    title: 'TV Movies',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=6`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=7`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=8`,
  },
  fetchPopular: {
    title: 'Popular',
    url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
};
