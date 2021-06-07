import { API_KEY } from "./key";

const processMovie = (movie) => ({
  title: movie["Title"],
  year: movie["Year"],
  poster: movie["Poster"],
});

export const find = async (title) => {
  const searchURL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`;
  console.log(searchURL);
  const response = await fetch(searchURL);
  const search = await response.json();
  return search["Search"].map(processMovie);
};
