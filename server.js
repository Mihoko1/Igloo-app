"use strict";

// Import dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const http = require('http');
const io = require('socket.io');
const app = express();
const session = require('express-session');
const conferenceRouter = require('./routes/conferenceRouter');

// Set EJS as templating engine
app.set('view engine', 'ejs');
// Place view files in the /views folder
app.set('views', 'views');

// Place public assets such as CSS, front end JS scripts, etc. in the /public folder
app.use(express.static('public'));

// Define routes here by referencing the router module file
app.use(conferenceRouter); 

// Spin up the server to run on either the enviromental variable port number or 8888
app.listen(process.env.PORT || 8888);