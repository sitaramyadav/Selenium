var webdriver = require('selenium-webdriver'),
 	By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
	chrome = require('selenium-webdriver/chrome');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://www.google.com');
driver.quit();