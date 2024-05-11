// using express
const express = require('express');
// using morgan
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & statics file
app.use(express.static('public'));

app.use(morgan('tiny'));

// using express middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]
    res.render('index', {title: 'Home', blogs });
});

// use express middleware
// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'create a new blog'});
});

// 404 Pages 
// Create a  middleware to handle 404 page
app.use((req, res, next) => {
    res.status(404).render('404', {title: '404'});
});