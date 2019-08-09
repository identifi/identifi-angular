'use strict';

describe('iris', function() {
  var until = protractor.ExpectedConditions;

  it('should have a title', function() {
    browser.get('');
    browser.wait(until.titleIs('Iris'), 1000, 'Title was not Iris within 1s').then(() => {
      expect(browser.getTitle()).toEqual('Iris');
    });
  });

  it('should create a new user', function() {
    element(by.model('newUserName')).sendKeys('Test User');
    element(by.id('createUserBtn')).click();

    var info = element(by.css('.alert-info .h3'));

    browser.wait(until.presenceOf(info), 10000, 'Element taking too long to appear in the DOM').then(() => {
      expect(info.isPresent()).toBe(true);
      expect(element(by.className('nav-identicon')).isPresent()).toBe(true);
    });
    /*
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
    */
  });

  it('should post a message', function() {
    element(by.id('comment')).sendKeys('Test Post');
    element(by.buttonText('Publish')).click();

    var messages = element.all(by.tagName('message'));

    browser.wait(until.presenceOf(element(by.tagName('message'))), 5000, 'Message taking too long to appear in the DOM').then(() => {
      expect(messages.count()).toBe(1);
    });
  });

  it('should like a message', function() {
    element(by.className('glyphicon-heart-empty')).click();
    expect(element(by.binding('msg.likes')).getText()).toBe("1");
  });

  it('should navigate to user profile page', function() {
    element(by.className('nav-identicon')).click();
    browser.wait(until.presenceOf(element(by.className('stats-box'))), 5000, 'Profile page stats box was not present');
  });

  it('own messages should be visible under "received" tab', function() {
    browser.wait(until.presenceOf(element(by.tagName('message'))), 20000, 'Message taking too long to appear in the DOM').then(() => {
      var messages = element.all(by.tagName('message'));
      expect(messages.count()).toBe(4);
    });
  });

  it('should have the same state after refresh', function() {
    browser.get('');
    browser.wait(until.presenceOf(element(by.tagName('message'))), 20000, 'Message taking too long to appear in the DOM').then(() => {
      var messages = element.all(by.tagName('message'));
      expect(messages.count()).toBe(1);
    });
  });

  it('should log out', function() {
    element(by.className('glyphicon-cog')).click();
    element(by.buttonText('Log out')).click();
    var logout = element(by.id('logout'));
    browser.wait(until.presenceOf(logout), 5000, 'Logout button was not present').then(() => {
      logout.click();
    });
    browser.wait(until.invisibilityOf(element(by.className('nav-identicon'))), 6000, 'User identicon should disappear after login').then(() => {});
  });
});
