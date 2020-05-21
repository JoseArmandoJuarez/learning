
var pos = 0;
var questionHTMLElement = 0;
var test_status = 0;
var question = 0;
var choice = 0;
var choices = 0;
var chA = 0; 
var chB = 0;
var chC = 0;
var chD = 0;
var correctAnswers = 0;


var questions = [
    ["Javascript is ___________ language?", "Programming", "Scripting", "Application", "None of these" , "B"],
    ["Javascript is designed for...?", "To style pages", "To add interactivity to HTML Pages", "To excute query related DB on server", "To perform server side scripting operation", "D"],
    ["Javascript is ___________ side scripting language?", "browser", "server", "ISP", "Non of these", "B"],
    ["Not a number in Javascript is?", "NaN", "null", "infinity", "undefined", "A"],
    ["Which super hero can climb walls?", "Iron-man", "Thor", "Spider-man", "captain america", "C"],
    ["Which of the following is a fruit?", "lettuce", "Tomato", "Potato", "Onion", "B"],
    ["Which is the tallest Mountain?", "Makalu", "Manaslu", "Annapurna", "Mount Everest", "D"],
];

function renderQuestion(){
  questionHTMLElement = document.getElementById("displayQuestion");
  scoreHTMLElement = document.getElementById("score");

  if(pos >= questions.length){
    questionHTMLElement.innerHTML = "<h2>You got "+correctAnswers+" of "+questions.length+" questions correct</h2>";
    document.getElementById("test_status").innerHTML = "Test completed";

    // resets the variable to allow users to restart the test
    pos = 0;
    correctAnswers = 0;

    // stops rest of renderQuestion function running when test is completed
    return false;
  }

  if (pos>0){
    scoreHTMLElement.innerHTML = "<h2>You got "+correctAnswers+" of "+questions.length+" questions correct</h2>";
  }

  
  document.getElementById("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  chD = questions[pos][4];
  questionHTMLElement.innerHTML = "<h3>"+question+"</h3>";

  // the += appends to the data started on the line above
  questionHTMLElement.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  questionHTMLElement.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  questionHTMLElement.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
  questionHTMLElement.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
  questionHTMLElement.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}


function checkAnswer(){
  // use getElementsByName because, have an array which it will loop through
  choices = document.getElementsByName("choices");

  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][5]){
    //each time there is a correct answer this value increases
    correctAnswers++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}

//window.addEventListener("load", renderQuestion, false);


renderQuestion();

