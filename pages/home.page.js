export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = 'input[name="query"]';
    this.movieCard = '.card';
  }

  async goto() {
    await this.page.goto('https://www.themoviedb.org/');
  }

  async search(movie) {
    await this.page.fill(this.searchInput, movie);
    await this.page.keyboard.press('Enter');
  }

  getFirstResult() {
    return this.page.locator(this.movieCard).first();
  }
}