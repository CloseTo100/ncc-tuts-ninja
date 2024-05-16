// using express
const express = require('express');
// 
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
// express app
const app = express();

// Connect Database
const dbURI = 'mongodb+srv://workdebtasset:XSDOsYWC72UTJMI7@nodeninja.chmdtup.mongodb.net/mongoninja?retryWrites=true&w=majority&appName=nodeninja';
mongoose.connect(dbURI)
// listen for requests
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res) => {
//     const blog = new Blog({
//         title: 'New Blog',
//         snippet: 'This is a new blog',
//         body: 'This is the body of the new blog'
//     });
//     blog.save()
//    .then((result) => res.send(result))
//    .catch((err) => console.log(err))
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//    .then((result) => res.send(result))
//    .catch((err) => console.log(err))
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('66408712e3d08ee89090bc14')
//    .then((result) => res.send(result))
//    .catch((err) => console.log(err))
// });

// routes
app.get('/', (req, res) => {
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ]
    // res.render('index', {title: 'Home', blogs });
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createAt: -1})
    .then((result) => {
        res.render('index', {
            title: 'All Blogs', 
            blogs:  result
        });
    })
    .catch((err) => {
        console.log(err);
    })
});

app.post('/blogs', (req, res) => {

});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'create a new blog'});
});

// 404 Pages 
// Create a  middleware to handle 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});