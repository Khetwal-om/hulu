const API_KEY="66985d7ca06f85297148a6ea70d9ea67"
 
export default{ 
     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchTopRated: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
     fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
     fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
     fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
     fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
     fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
}





