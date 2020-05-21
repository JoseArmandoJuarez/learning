var darkVader = {
    race: 'human',
    job: 'villain',
    talk: function(){
        return 'come to the dark side, Luke!';
    },
    describeYourself: function(){
        // call darkVader's talk method. 
        return "I'm a " + this.race + " and I'm a " + this.job + 
        " in a series of movies!";
    }
}