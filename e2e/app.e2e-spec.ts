import { CityEmotionDemoPage } from './app.po';

describe('city-emotion-demo App', () => {
  let page: CityEmotionDemoPage;

  beforeEach(() => {
    page = new CityEmotionDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
