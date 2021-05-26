"use strict";

function index(req, res) {
    // res.render('index.ejs');
    res.render('index.ejs');
}

function lobby(req, res) {
    res.render('lobby.ejs');
}

function pageNotFoundError(req, res) {
    res.status(404);
    res.render('pagenotfound.ejs');
}

function serverError(req, res) {
    res.status(500);
    res.render('servererror.ejs');
}

exports.index = index;
exports.lobby = lobby;
exports.pageNotFoundError = pageNotFoundError;
exports.serverError = serverError;