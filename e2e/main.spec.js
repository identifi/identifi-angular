'use strict';

describe('angularjs homepage todo list', function() {
  it('should create a new user', function() {
    browser.get('http://localhost:3000');

    element(by.id('newUserName')).sendKeys('Test User');
    element(by.id('createUserBtn')).click();

    var info = element(by.css('alert-info h3'));
    expect(info.toExist());
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
