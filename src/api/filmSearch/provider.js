/* Типы запросов
 *1) GET - получает данные
 *2) POST - создание новых данных, либо их модификации
 *3) PUT - МОДИФИКАЦИЯ
 *4) DELETE - УДАЛЕНИЕ
 *5) PATСH - ЧАСТИЧНАЯ МОДИФИКАЦИЯ, БЕЗ СТИРАНИЯ
 */

import convertFilmData from "./converter";

const API_KEY = "b90e3e73";

class FilmSearchProvider {
  constructor(url = "", token = null) {
    this.url = url; // базовый url
    this.token = token;
    this.protocol = "http";
  }

  get baseUrl() {
    return `${this.protocol}://${this.url}/?apiKey=${this.token}`;
  }

  getFilmSearch(filmId) {
    const requestUrl = `${this.baseUrl}&${filmId}`;

    return fetch(requestUrl)
      .then((response) => {
        console.log(response);

        if (response.status !== 200) {
          throw Error("ERROR in request");
        }

        return response.json();
      })
      .then((data) => {
        if (data.Error) {
          throw Error(data.Error);
        }
        return convertFilmData(data);
      });
  }
}

export default new FilmSearchProvider("www.omdbapi.com", API_KEY);
