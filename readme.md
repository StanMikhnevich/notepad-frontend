# Quick Dev Template
Set of tools called to help developers to develop their web applications faster, based on [gulp](http://gulpjs.com/).

Please see installation and usage guide down below.

## Includes libraries and frameworks
  - Bootstrap 3
  - AngularJS and AngularJS 2
  - jQuery
  - Underscore.js and Underscore.String.js 
  - Material Design Icons (by. Google)

### Version
##### 2.0.0 => 2.0.1
- Fixed gulp source:add --name=source_name command

##### 1.0.0 => 2.0.0
- Updated/Replaced/Removed libraries
- Deleted: underscore, underscore.string and bootstrap 3 libs from package.json
- Refactored/Rewritten the builder code
- New configuration system
- New env system (now any config value may be changed from the env file)
- New libraries bundle system
- Other improvements and changes

##### 0.2.4 => 1.0.0
- Updated libraries
- Applied `npm audit fix` 

### Version
##### 0.2.3 => 0.2.4
- Updated libraries
- Applied `npm audit fix` 

##### 0.2.2 => 0.2.3
- Updated libraries
- Applied `npm audit fix` 
- Removed .gitignore files from /src/sources/base/resources folder.

**No breaking changes*

##### 0.2.1 => 0.2.2
- Updated libraries
- Applied `npm audit fix` 
- *The way `env_data` is delivered **(`breaking change`)**  

The way `env_data` is sent to `source` js code was changed, now it's concated to the beginning of js file.   
Instead of `qdt_c.platform.env_data` please use `ENV` global variable. 
Also `qdt_c` variable is no longer available in js but still available in pug files.

##### 0.2.0 => 0.2.1
- Fixed all security warnings (by updating libs)
- Updated gulp to version 4.0.0
- Removed Angular 2 libs
- Updated all libraries to latest versions
- Some other small optimizations  

Gulp 4 is not backward compatible, "qdt" was updated internaly to remain backwards compatible, if you found any breaking changes feel free to contact me (besides removing angular 2 of course)  
____

Also starting the work on next "qdt" version, non backward compatible but with the same concepts, so it will be easy to migrate.


### Version
##### 0.1.6 => 0.2.0
- Combine js/ts tasks  
- Minify, sourcemap and browserify support for javascript  
- Config and environment file .json => .js (module export, backward compatible)  
now supports comments and nodejs logic
- Optionally disable scss minification
- Removed 2 unused gulp plugins

##### 0.1.0
Description will be available soon.

##### 0.0.1
Description will be available soon.

## Installation and Usage

Quick Dev Template requires [Node.js](https://nodejs.org/) v4+ with [npm](https://www.npmjs.com) to run.

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

Then you need to clone qdt repository.
```sh
$ git clone https://HardCoderNET@bitbucket.org/HardCoderNET/quick-dev-template.git [project-name]
```

Now open **src/front** folder inside your project and install **npm** dependencies.
```sh
$ cd [project-name]/src
$ npm i
```

To create environment file from sample run
```sh
$ gulp init
```

Then you should run gulp task **add-source**.
Default source name is "base", but you might change it in qdt-config.json in platforms > "*" > "source", or for specific platform to override global "source" value.
```sh
$ gulp source:add --name="base"
```

Now you can start working no your project using following commands:  

Run web server and watch files for changes 
```sh
$ gulp 
```
   
Compile source but don't start web server and don't watch files for changes
```
$ gulp compile
```

Run only web server but don't compile anything   
(make sure to have source code compiled, otherwise you will not see anything)
```
$ gulp server
```

Run web server and watch source code, but don't do full compile on start  
(only files modified after startup, will be compiled)
```
$ gulp watch
```

### Documentation
Documentation will be available later. 
For now, you may read comments from config and environment files.