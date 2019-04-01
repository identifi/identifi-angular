var link = document.getElementById('link');
link.addEventListener('click', function() {
  if (typeof browser !== 'undefined') {
    browser.tabs.create({url: '/index.html'});
  } else {
    chrome.tabs.create({url: '/index.html'});
  }
});
