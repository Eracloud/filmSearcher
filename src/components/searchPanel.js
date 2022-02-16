import FilmApi from "../api/filmSearch/provider";

class SearchPanel {
  constructor() {
    this.searchPanel = document.createElement("form");
  }

  createHtml() {
    this.searchPanel.classList.add("searchPanel");

    const search = document.createElement("input");
    search.classList.add("searchPanel__search", "search");
    search.placeholder = "Search the film...";

    const button = document.createElement("button");
    button.classList.add("searchPanel__button", "button");
    button.innerText = "Search".toUpperCase();
    button.type = "button";

    let inputFilm;

    search.addEventListener("input", (event) => {
      const {
        currentTarget: { value: inputValue },
      } = event;
      inputFilm = inputValue;
    });

    button.addEventListener("click", () => {
      FilmApi.getFilmSearch(`t=${inputFilm}`)
        .then((result) => {
          const title = document.querySelector(".title");
          const year = document.querySelector(".year");
          const poster = document.querySelector(".poster");
          title.innerText = result.title;
          year.innerText = result.year;
          poster.src = result.poster;
          poster.style = "display:block";
        })
        .catch(() => {
          const title = document.querySelector(".title");
          title.innerText = "Welcome to ";
          const link = document.createElement("a");
          document.querySelector(".title").append(link);
          link.href = "https://www.kinopoisk.ru/?";
          link.innerText = "Kinopoisk.ru";
        });
    });

    this.searchPanel.prepend(search, button);
    return this.searchPanel;
  }
}

export default SearchPanel;
