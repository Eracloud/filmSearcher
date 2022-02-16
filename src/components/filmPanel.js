class FilmPanel {
  constructor() {
    this.filmPanel = document.createElement("div");
  }

  createHtml() {
    this.filmPanel.classList.add("filmPanel");
    const title = document.createElement("h1");
    title.classList.add("filmPanel__title", "title");

    const poster = new Image(200, 250);
    poster.classList.add("filmPanel__poster", "poster");

    const year = document.createElement("p");
    year.classList.add("filmPanel__year", "year");

    this.filmPanel.prepend(title, poster, year);

    return this.filmPanel;
  }
}

export default FilmPanel;
