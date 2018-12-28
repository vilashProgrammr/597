import { NewsApp1Page } from './app.po';

describe('news-app1 App', () => {
  let page: NewsApp1Page;

  beforeEach(() => {
    page = new NewsApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
