const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

//writing files
// fs.writeFile('./docs/blog1.txt', 'this is my replace blog', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('file written');
// });

// fs.writeFile('./docs/blog2.txt', 'this is my second blog', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('file written');
// });

// directories
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err,) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('directory created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('directory removed');
//     });
// }

// delete files
// if(fs.existsSync('./docs/deleteme.txt')) {
//     fs.unlink('./docs/deleteme.txt', (err, data) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('file deleted');
//     });
// } else {
//     fs.writeFile('./docs/deleteme.txt', 'this is my delete file', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('file created');
//     });
// }
