import { Td001Page } from './app.po';

describe('td001 App', function() {
  let page: Td001Page;

  beforeEach(() => {
    page = new Td001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
