## Lesson 1 
* example of standard JavaScript
    * create a simple variable and console.log(); to display the results
    * create a simple arrow function to test the results

## Global Object
* window object in side console on the browser
    * window object in console
        * lower in property have a method called [window is browser global object]
            * setTimeout method called working with alert Javascript

## Global Node Context environment
* global object is working like the same as the window object
    * can check blobal object method by console.log(global)
    * global.setTimeout can use or setTimeout like window object
* Method for check directory of the file using console.log(__dirname);
* Method for check directory with file name of the file using console.log(__filename);

## Modules and require
* When we want to separate files from modules
    * example
        * import module or JavaScript file by using require();
        * export module by using [module.exports]
            * example of module.exports
                * single module by using module.exports = function or variable contain values
                * multiple module by using modile.exports = {
                    * 2 way of using
                        * directly by called variable like people;
                        * property by called variable like people: people;
                }

## more about co-module
* example of co-module
    * os module
        * called by const os = require('os');
        * using by os.platform(); to see what platform is using
        * using by os.homedir(); to see the path of the file contain

## The FileSystem
* read files [reading files]

* write file

* directories

* delete file

# ETC
* ./ search the files in the same directory