Contact List using Angular:
===========================

This app has been builded on top of [angular-seed](https://github.com/angular/angular-seed).

## Prerequisites

Node.js tools to initialize and test. You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

## Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

`npm` automatically run `bower` so we can simply do:

```
npm install
```

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes it easier to serve the files by a webserver.*

## Run the Application

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    test/               --> test config and source files
      protractor-conf.js    --> config file for running e2e tests with Protractor
      e2e/                  --> end-to-end specs
        scenarios.js
      karma.conf.js         --> config file for running unit tests with Karma
      unit/                 --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services



## Unit Tests

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and watch the source and test files for changes and then re-run the tests whenever any of them change.

Single run of the tests and then exit.

```
npm run test-single-run
```

Codeship testing