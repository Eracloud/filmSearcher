import Film from "../../entities/film";

const convertFilmData = (data) => {
  const { Title: title, Year: year, Poster: poster } = data;

  return new Film(title, year, poster);
};

export default convertFilmData;
