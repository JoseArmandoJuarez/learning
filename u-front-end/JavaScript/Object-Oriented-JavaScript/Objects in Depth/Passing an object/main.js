var originalObject = {
    favoriteColor: 'red'
};

function setToBlue(object){ //holds favoriteColor: 'red'
    object.favoriteColor = 'blue'; //Now red is replaced by blue
}

setToBlue(originalObject); //holds the value of originalObject and passes it to object

console.log(originalObject.favoriteColor); //output: blue