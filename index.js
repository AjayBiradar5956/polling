const port = 8000;
const express = require('express');
const app = express();
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
app.use(express.urlencoded());

app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require("./routes/home"));

app.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("app running on port", port);
})


//check if the linktovote is working or not
//work on lintovote exact link so that it gets incremented and shows the question/view page and
//not the homepage