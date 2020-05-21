let persons = [
    {givenName: 'Michel', familyName: 'Buffa', age: 51},
    {givenName: 'Pig', familyName: 'Bodine', age: 20},
    {givenName: 'Pirate', familyName: 'Prentice', age: 32} 
];

function compareByAge(a, b){    //comparison function
    if(a.age < b.age)           //compare by age
        return -1;
    if(a.age > b.age)
        return 1;
    return 0;
}


/*
    persons[0]
    >> Object {
        age: 51,
        familyName: "Buffa",
        givenName: "Michel"
    }

    persons[0].giveName
    >> Michel

    persons.sort(compareByAge); //Sorts out names by age and sorts the array
    >> [Object {
            age: 20,
            familyName: "Bodine",
            givenName: "Pig"
        },Object {
            age: 32,
            familyName: "Prentice",
            givenName: "Pirate"
        },Object {
            age: 51,
            familyName: "Buffa",
            givenName: "Michel"
        }]

    persons.splice(0, 1); //Removes Object
    >> [Object {
        age: 20,
        familyName: "Bodine",
        giveName: "Pig"
    }]

    persons.pop();  //If want to remove last object instead of using splice use .pop()
    >> Object {
        age: 51,
        familyName: "Buffa",
        givenName: "Michel"
    }

    // To also remove the last element, can use 
    //a.splice(a.length-1);

*/