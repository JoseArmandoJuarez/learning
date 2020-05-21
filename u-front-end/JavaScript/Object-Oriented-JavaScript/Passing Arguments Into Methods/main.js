const developer = {
    name: 'Andrew',
    sayHello: function(){
        console.log('Hi there!');
    },
    favoriteLanguage: function(language){ //language hilds the value 'JavaScript'
        console.log('My favorite programming language is ' + language);
    }
};

developer.favoriteLanguage('JavaScript');//passes this string to language
//My favorite programming language is JavaScript

