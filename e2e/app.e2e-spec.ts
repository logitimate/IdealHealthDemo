import { NaturalStateDesignPage } from './app.po';

describe('natural-state-design App', () => {
  let page: NaturalStateDesignPage;

  beforeEach(() => {
    page = new NaturalStateDesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
