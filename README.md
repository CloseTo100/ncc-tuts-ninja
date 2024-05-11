# Middleware
## Middleware use to run between request and response via the server
* middleware from express is use();
    * Example middleware
        * app.use(func);
        * app.get('/', func);
        * app.use(func);

    * Middleware working
        * app.use(func); // progressed
        * app.get('/', func); // progressed
        <!-- skip func -->
        * app.use(func); //un progressed

## Middleware idea to progress inside app
    * Logger middleware to log details every request
    * authentication check middleware for protected routes
    * Middleware to prase JSON data from request
    * Return 404 pages

## Next Function to run middleware dynamically
* Next(); by Express will look in callback and property called

## 3-rd party middleware
* Morgan Module
    * morgan('tiny');
    * morgan('dev);

## Static File
* app.use(express.static('location[foldername]'));
