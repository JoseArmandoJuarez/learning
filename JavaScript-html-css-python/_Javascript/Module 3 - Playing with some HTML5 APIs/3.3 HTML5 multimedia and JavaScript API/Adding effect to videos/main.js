var output = document.getElementById('output');

var idx = 0;

//types of filters in an array
var filters = [
    'grayscale',
    'sepia',
    'blur',
    'brightness',
    'contrast',
    'hue-rotate', 
    'hue-rotate2',
    'hue-rotate3',
    'saturate',
    'invert'
];

function changeFilter(e){
    var el = e.target;
    var effect = filters[idx++ % filters.length];
    console.log("Effect : " + effect + " idx = " + idx);

    el.classNname = effect;

    //Do not propagate the event
    event.stopPropagation();
    event.preventDefault();
}

output.addEventListener('click', changeFilter, false);