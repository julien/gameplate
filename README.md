generator-phaser
=================

A [Yeoman](http://yeoman.io/) generator to create HTML5 games with [Phaser](http://phaser.io/). This generator allows for the creation of Phaser games with best practices. The main generator (`yo phaser`) outputs a basic Phaser game. You can also generate new prefabs (`yo phaser:prefab`) or states (`yo phaser:state`) to add to your project.

You can view your game in the browser by running `npm start` from the project's root directory and the web page will refresh as you save your files.

When you are ready to publish, build your game with `npm run build` and view the output in the `build/` folder. The build process minifies and compresses individual files into one file for faster network downloading, the source code is transpiled to ES5 compatible JavaScript using [Babel](https://babeljs.io/).

**INSTRUCTIONS**

+ Install [Node.js](http://www.nodejs.org)

+ Install the required npm modules by issuing these commands:

  `npm install -g yo generator-phaser`

+ Create a new directory for your game:
  + Unix/OSX : `mkdir ~/Desktop/mygame && cd $_`
  + Windows  : `mkdir %USERPROFILE%\Desktop\mygame && cd %USERPROFILE%\Desktop\mygame`

+ Invoke the generator:

  `yo phaser`

+ Invoke the state generator (Note: this updates & overwrites `main.js`):

  `yo phaser:state`

+ Invoke the prefab generator:

  `yo phaser:prefab`

+ Invoke the shader generator:

  `yo phaser:shader`

+ Run a local development server (livereload enabled) with this command:

  `npm start`

+ Package your game (i.e. minify css, html and js) with:

  `npm run build`

**Notes**

The game's `main.js` file will be updated with new states when you run the state generator.
It adds in .js files found in the `src/states/` directory.

**CREDITS**

+ [@photonstorm](https://github.com/photonstorm/) for creating
  [Phaser](https://github.com/photonstorm/phaser).

+ The guys behind [yeoman](https://github.com/yeoman/yeoman).

+ [Gulp.js](http://www.gulpjs.com)

+ [Ben Alman](http://benalman.com/) for [Grunt](http://gruntjs.com/)

+ [Keney.nl](http://kenney.nl/assets/shooting-gallery) for the default game's images, [erkanozan](https://www.freesound.org/people/erkanozan/sounds/51749/) for gunshot audio,  [iut_Paris8](https://www.freesound.org/people/iut_Paris8/sounds/88243/) for 'ding' audio

+ All other repo contributors
