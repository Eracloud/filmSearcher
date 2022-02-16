import FilmPanel from "./components/filmPanel";
import SearchPanel from "./components/searchPanel";

class App {
  constructor() {
    this.filmPanel = new FilmPanel();
    this.searchPanel = new SearchPanel();
  }

  init() {
    const frag = document.createDocumentFragment();
    const body = document.querySelector("body");
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");

    frag.append(header, main, footer);

    const section = document.createElement("section");
    section.classList.add("section");

    main.prepend(section);

    const filmPanel = this.filmPanel.createHtml();
    section.append(filmPanel);

    const searchPanel = this.searchPanel.createHtml();
    section.prepend(searchPanel);

    body.append(frag);
  }
}

export default App;
