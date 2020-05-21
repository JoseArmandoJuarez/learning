
//Cat 1
var firstCatName = document.getElementById('name1');
firstCatName.style.cssText = 'font-size: 3em; text-align: left; padding-left: 250px;';



var elem = document.getElementById('catNum1');

var count1 = 1;


elem.addEventListener('click', function(){
    document.getElementById('score1').innerHTML = count1++;
    console.log('Cat 1 has been clciked!');

}, false);



//Cat 2

var secondCatName = document.getElementById("name2");
secondCatName.style.cssText = 'font-size: 3em; text-align: left; padding-left: 250px;';

var elem2 = document.getElementById('catNum2');

var count2 = 1;

elem2.addEventListener('click', function(){
    document.getElementById('score2').innerHTML = count2++;
    console.log('Cat 2 has been clicked!');
}, false);



