require('../css/style.css');
require('bulma');

const pages = require('./pages.js');
const $ = require('jquery');
const skills = require('../data/skills.json');

$.each(skills, (key, value) => {
  $('body').append('<section class="section"><div class="container">');
  $('body').append(`<h1 class="title">${skills[key].grouping}</h1>`);
  $('body').append(`<h2 class="subtitle">${skills[key].skills}</h2>`);
  $('body').append(`<p>me too</p>`);
  $('body').append('</div></section>');

 
});