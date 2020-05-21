/*
    A functional mixin is a composable factory function that receives a_mixin_as an argument
    copies properties and methods from that mixin, and returns a new object.
*/

function CoffeeMaker(object){
    
    var needsRefill = false;

    
    return Object.assign({/*target Object*/}, object, { //pass the new property to object
        pourAll: function(){
            needsRefill = true;
        },
        isEmpty: function(){
            return needsRefill;
        }
    });
}

var mixedCoffeeMaker = CoffeeMaker({style: 'percolator'});
console.log(mixedCoffeeMaker);
//{style: "percolator", porAll: f, isEmpty: f}
/*
{
    style: 'percolator', //this is added to the new object
    pourAll: function(){
        needsRefill = true;
    },
    isEmpty: function(){
        return needsRefill;
    }
}
*/



//**************************************/
//ANOTHER EXAMPLE OF A FUNCTIONAL MIXIN
//**************************************/

function IceCreamFactory(obj){
    var isCold = true;

    return Object.assign({}, obj,{
        melt: function(){
            isCold = false;
        },
        isCold: function(){
            return isCold;
        }
    });
}

var IceCream = IceCreamFactory({});//passing a blanck object
console.log(IceCream);
//{melt: f, isCold: f}



//creating another fucntional mixin
function ConeFactory (obj){
    var isDry = true;

    return Object.assign({}, obj, {
        soggy: function(){
            isDry = false;
        },
        isDry: function(){
            return isDry;
        }
    });
}

var checkingConeFactory = ConeFactory({});
console.log(checkingConeFactory);
//{soggy: f, isDry: f}

//passing ConeFactory to IceCreamFactory
//and passing and empty object to ConeFactory
var IceCreamCone = IceCreamFactory(ConeFactory({}));
console.log(IceCreamCone);
//{soggy: f, isDry: f, melt: f, isCold: f}