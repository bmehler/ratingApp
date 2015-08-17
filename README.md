# ratingApp
A tool for measuring the job performance of your employees.

"ratingApp" is a small project to get familiar with AngularJS.
The ratingApp uses JSON for storing the employee specific rating data.

## Installation
To install the ratingApp clone the repository and install the dependencies.
```
$ git clone https://github.com/bmehler/ratingApp.git
$ cd ratingApp
$ npm install
```
## Quick start
To run the app enter:
```
$ npm start
```
Open your browser and enter:
```
http://localhost:8080
```
## Running tests (Karma/Jasmine)
To run the tests enter:
```
$ (npm test | npm run test-single-run)
```
### Configuration
I used for development purposes the headless testing with PhantomJS.
Feel free to change the browser setting in karma.conf.js. Both the karma-firefox-launcher and karma-chrome-launcher are already installed during npm install.
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['Firefox', 'Chrome'],
  });
};
```
### Troubleshooting
If you got an error regarding  **libfontconfig.so** please run:
```
$ (sudo) apt-get install libfontconfig
```
## License
The MIT License

Copyright (c) 2015 Bernhard Mehler &lt;bernhard.mehler@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
