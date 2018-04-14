require('../css/style.css');
const people = require('./people.js');
const $ = require('jquery');

$.each(people, (key, value) => {
  $('body').append('<h1>' + people[key].name + '</h1>');
});

