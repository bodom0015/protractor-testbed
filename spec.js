// spec.js
describe('Labs Workbench Landing Page', function() {
  beforeEach(function() {
    browser.get('https://www.workbench.nationaldataservice.org/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Labs Workbench Landing Page');
  });

  it('should offer sign-up and sign-in', function() {
    
  });
});
