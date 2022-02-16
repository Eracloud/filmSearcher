// import "./style.scss";
// import App from "./app";

// const app = new App();
// app.init();
// console.log(app);

import "./style.scss";
import FilmApi from "./api/filmSearch/provider";

const frag = document.createDocumentFragment();
const body = document.querySelector("body");
const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

frag.append(header, main, footer);

const section = document.createElement("section");
section.classList.add("section");
main.prepend(section);

const searchPanel = document.createElement("form");
searchPanel.classList.add("searchPanel");
const search = document.createElement("input");
search.classList.add("searchPanel__search", "search");
search.placeholder = "Search the film...";
const button = document.createElement("button");
button.classList.add("searchPanel__button", "button");
button.innerText = "Search".toUpperCase();
button.type = "button";
section.prepend(searchPanel);
searchPanel.prepend(search, button);

const filmPanel = document.createElement("div");
filmPanel.classList.add("filmPanel");
const title = document.createElement("h1");
title.classList.add("filmPanel__title", "title");

const poster = new Image(200, 250);
poster.classList.add("filmPanel__poster", "poster");

const year = document.createElement("p");
year.classList.add("filmPanel__year", "year");

section.append(filmPanel);
filmPanel.prepend(title, poster, year);

body.append(frag);

let inputFilm;

search.addEventListener("input", (event) => {
  const {
    currentTarget: { value: inputValue },
  } = event;
  inputFilm = inputValue;
});

button.addEventListener("click", () => {
  FilmApi.getFilmSearch(`t=${inputFilm}`).then((result) => {
    title.innerText = result.title;
    year.innerText = result.year;
    poster.src = result.poster;
    poster.style = "display:block";
  });
});
