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
});
