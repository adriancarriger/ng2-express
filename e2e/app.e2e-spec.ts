import { Ng2ExpressPage } from './app.po';

describe('ng2-express App', function() {
  let page: Ng2ExpressPage;

  beforeEach(() => {
    page = new Ng2ExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
