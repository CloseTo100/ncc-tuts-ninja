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
    * can check global object method by console.log(global)
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
                * multiple module by using module.exports = {
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
### read files [reading files]
read files from the directory
const fs = require('fs'); // called module system
fs.readFile(2 arguments);
fs.readFile('directory[location file]', callback function (2 arguments));
* example
    * fs.readFile('./docs/file1.txt', (err, data) => {
        if(err) {
            console.log(err);
        }
        console.log(data); // This will show/display buffer to console
        console.log(data); // pass data to String from the exists file
    })

### write file [writing files]
write files to the directory
const fs = require('fs');
fs.writeFile(3 arguments);
fs.writeFile('directory', 'content to to write in the file', called function);
* example
    * fs.writeFile('./docs/file2.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file written successfully');
    })

* example write to the existing file
    * fs.writeFile('./docs/file1.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file written successfully');
    });

### directories [create or remove directories]
create a directory to location
* const fs = require('fs');
* fs.mkdir('path', callback function);
    * fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('directory created successfully');
    });
remove a directory from the location
* const fs = require('fs');
* fs.rmdir('path', callback function);
    * fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.og('directory removed successfully');
    })
### create and remove file by using if else for secure err
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('directory created successfully');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('directory removed successfully');
    })
}

### delete file [delete files]
* delete files from the directory
const fs = require('fs');
fs.unlink(2 arguments);
fs.unlink('path', callback function);
* fs.unlink('./docs/deleteme.txt', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('file removed successfully');
})

* create a file to the directory
const fs = require('fs');
fs.writeFile(3 arguments);
fs.writeFile('path', callback function);
fs.writeFile('./docs/deleteme.txt', 'create a deleteme.txt file in this directory', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('file created successfully');
    });

# ETC
* ./ search the files in the same directory