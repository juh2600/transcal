require('dotenv').config();

const express = require('express');
const routes = require('./routes/master');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', routes.dashboard); // consider making this a landing page, or maybe so conditionally upon whether the user is logged in/has site data
app.get('/dashboard', routes.dashboard);
app.get('/wiki/:name', routes.wiki);
app.get('/settings', routes.settings);

app.listen(process.env.PORT);
