document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    link.addEventListener('click', function() {
      if (browser) {
        browser.tabs.create({url: '/index.html'});
      } else {
        chrome.tabs.create({url: '/index.html'});
      }
    });
});
