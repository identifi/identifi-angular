# iris-angular

[![Travis](https://img.shields.io/travis/irislib/iris-angular/master.svg?style=flat-square)](https://travis-ci.org/irislib/iris-angular)
[![David](https://img.shields.io/david/irislib/iris-angular.svg?style=flat-square)](https://david-dm.org/irislib/iris-angular)

> Decentralized social networking application built on AngularJS & [Iris-lib](https://github.com/irislib/iris-lib)

Available at:
* https://iris.to
* https://iris.cx
* https://iris.github.io/
* [Chrome extension](https://chrome.google.com/webstore/detail/iris/oelmiikkaikgnmmjaonjlopkmpcahpgh)
* [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/irisapp/)

## Development
### Requirements
Node >= 10, yarn (or npm)

### Get started
```
git clone https://github.com/irislib/iris-angular.git
cd iris-angular
```

Or run it on Glitch.com: https://glitch.com/~irislib-iris-angular

### Install dependencies & build
```
yarn
```
Build goes into dist directory and browser extension into dist.zip.

### Just build
```
yarn build
```

### Develop
Run development server with browsersync:
```
yarn run serve
```

If you want to test connecting with another user in an incognito window, disable browser sync at http://localhost:3001.
