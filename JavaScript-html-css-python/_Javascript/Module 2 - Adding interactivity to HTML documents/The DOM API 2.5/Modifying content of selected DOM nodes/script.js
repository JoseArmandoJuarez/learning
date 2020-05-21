window.onload = init;

function init() {
    //DOM is ready
    var firstP = document.querySelector("#first");
    console.log(firstP.textContent); //"first paragraph"
    console.log(firstP.innerHTML); //"first paragraph"

    firstP.textContent = "Hello I'm the first paragraph";
    console.log(firstP.textContent); //"Hello I'm the first paragraph"

    var secondP = document.querySelector("#second");
    console.log(secondP.textContent); //"second paragraph"
    console.log(secondP.innerHTML); "<em>second</em> paragraph"
    
    secondP.textContent = "Hello I'm the second paragraph";
    console.log(secondP.textContent); //"Hello I'm the second paragraph"
    console.log(secondP.innerHTML); //"Hello I'm the second paragraph"
}