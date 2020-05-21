const parrot = {
    group: 'bird',
    feathers: true,
    chirp: function(){
        console.log('Chirp chirp!');
    }
};

const pigeon = {
    group: 'bird',
    feathers: true,
    chirp: function(){
        console.log('Chirp chirp!');
    }
};

console.log(parrot === pigeon); 
/*false - yes it has the same properties 
but it will only return true when comparing two references to exatly the same object.
*/

//create a new variable and assign it to one of the above objects
const myBird = parrot; //now myBird has the value of parrot

console.log(myBird === parrot); //true

//So since pigeon is not the same object as myBird or parrot, 
//any comparisons between myBird and pigeon will return false:

console.log(myBird === pigeon); // false