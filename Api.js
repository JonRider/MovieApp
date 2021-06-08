import { API_KEY } from "./key";

const processMovie = (movie) => ({
  title: movie["Title"],
  year: movie["Year"],
  poster: movie["Poster"],
});

// Bugs to fix: need to be able to search for movies with more than one word by using + concatenation

export const find = async (title) => {
  const searchURL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`;
  const response = await fetch(searchURL);
  const search = await response.json();
  return search["Search"].map(processMovie);
};
