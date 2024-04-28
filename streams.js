const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog3.txt', {encoding: 'utf8'});

// readStream.on('data', (chuck) => {
//     console.log('----- NEW CHUCK -----');
//     console.log(chuck.toString());
//     writeStream.write('\n----- NEW CHUCK -----\n');
//     writeStream.write(chuck);
// });

// piping
readStream.pipe(writeStream);
// fs.unlink('./docs/blog3.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('file deleted');
// })