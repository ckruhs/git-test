import { GitTestPage } from './app.po';

describe('git-test App', () => {
  let page: GitTestPage;

  beforeEach(() => {
    page = new GitTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
