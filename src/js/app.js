require('../css/style.css');
require('bulma');
const pages = require('./pages.js');
const $ = require('jquery');

$.each(pages, (key, value) => {
  $('body').append('<h1>' + pages[key].name + '</h1>');
});

