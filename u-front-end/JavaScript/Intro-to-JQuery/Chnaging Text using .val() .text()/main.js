$('#input').on('change', function(){

    var val = $('#input').val(); //callect value of #input by using val()

    var h1 = $('.articles').children('h1'); //collect the h1 which is gonna be changed

    h1.text(val);// set the text of h1 to the value of #input
});