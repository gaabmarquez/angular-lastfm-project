import { InterviewProjectPage } from './app.po';

describe('interview-project App', () => {
  let page: InterviewProjectPage;

  beforeEach(() => {
    page = new InterviewProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
