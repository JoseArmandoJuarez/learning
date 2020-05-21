function resetName(){
    var inputField = document.querySelector("#name");
    inputField.value = "";
  }
  
  function setToRed(){
    var colorChooser = document.querySelector("#color");
    colorChooser.value = "#FF0000";
  }
  
  function changeStep(){
    var number = document.querySelector("#number");
    number.value = 10;
    number.step = "0.1";
    number.max = 11;
  }
  
  function changeAndResize(img){
    img.src="https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/61/38/7d/61387dfa-0594-0fdb-60ee-52e24c584cb1/source/1200x630bb.jpg";
    img.width = 250;
    img.style.border = "4px solid red";
  }