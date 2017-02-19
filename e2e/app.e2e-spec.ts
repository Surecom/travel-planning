import { TravelPlanningPage } from './app.po';

describe('travel-planning App', function() {
  let page: TravelPlanningPage;

  beforeEach(() => {
    page = new TravelPlanningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
