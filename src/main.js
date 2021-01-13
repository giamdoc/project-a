const express = require('express');
const app = express();
const port = 5050;
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Templale Engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Routes init
route(app);


app.listen(port, () => console.log(`Example app listening http://localhost:${port}`));