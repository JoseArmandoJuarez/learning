/*
Use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

featuredArticle = $('.featured'); //slecting the class featured
//var featuredArticle = document.querySelector('.featured');

// if visible is set remove it, otherwise add it
featuredArticle.toggleClass('featured'); //removes the class="featured"
//In Javascript featuredArticle.classList.toggle('featured');

console.log(featuredArticle);




