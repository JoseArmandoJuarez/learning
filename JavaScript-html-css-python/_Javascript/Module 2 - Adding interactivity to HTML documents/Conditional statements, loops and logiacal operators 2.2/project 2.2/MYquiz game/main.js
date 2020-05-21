 

// var myQuestions = [
//     {question1: 'strongest super hero', a: 'Hulk', b: 'Thor', c:'Iron-man'},
    
//     {question2: 'Which is the talles mountain?', a: 'Mount everest', b: 'Manaslu', c:'Makalu'},
    
//     {question3: 'Which of this is a fruit', a: 'Potato', b: 'Lettuce', c:'Tomato'},
// ];


// for(){
//     var accessor = "question" + 1;

//     var htmlQuestion = document.getElementById("question"+i);
//     htmlQuestion.innerHTML = "First question";
// }

function submitQuestions(){
    var correctAnswers = 0;

    var choicesQ1 = document.getElementsByName("choiceQuestion1");
    console.log(choicesQ1);
    console.log(choicesQ1[0].checked);
    console.log(choicesQ1[1].checked);
    console.log(choicesQ1[2].checked);
    var Q1Answer = 'a';

    if (choicesQ1[0].checked && choicesQ1[0].value == Q1Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ1[1].checked  && choicesQ1[1].value == Q1Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ1[2].checked  && choicesQ1[2].value == Q1Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);



    
    //Questions and answers 2
    var choicesQ2 = document.getElementsByName("choiceQuestion2");
    var Q2Answer = 'b';

    if (choicesQ2[0].checked && choicesQ2[0].value == Q2Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ2[1].checked  && choicesQ2[1].value == Q2Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ2[2].checked  && choicesQ2[2].value == Q2Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);



    //Questions and answers 3
    var choicesQ3 = document.getElementsByName("choiceQuestion3");
    var Q3Answer = 'c';

    if (choicesQ3[0].checked && choicesQ3[0].value == Q3Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ3[1].checked  && choicesQ3[1].value == Q3Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ3[2].checked  && choicesQ3[2].value == Q3Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);



    //Questions and answers 4
    var choicesQ4 = document.getElementsByName("choiceQuestion4");
    var Q4Answer = 'a';

    if (choicesQ4[0].checked && choicesQ4[0].value == Q4Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ4[1].checked  && choicesQ4[1].value == Q4Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ4[2].checked  && choicesQ4[2].value == Q4Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);




    //Questions and answers 5
    var choicesQ5 = document.getElementsByName("choiceQuestion5");
    var Q5Answer = 'b';
    
    if (choicesQ5[0].checked && choicesQ5[0].value == Q5Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ5[1].checked  && choicesQ5[1].value == Q5Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ5[2].checked  && choicesQ5[2].value == Q5Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);



    //Questions and answers 6
    var choicesQ6 = document.getElementsByName("choiceQuestion6");
    var Q6Answer = 'b';

    if (choicesQ6[0].checked && choicesQ6[0].value == Q6Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ6[1].checked  && choicesQ6[1].value == Q6Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ6[2].checked  && choicesQ6[2].value == Q6Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);




    //Questions and answers 7
    var choicesQ7 = document.getElementsByName("choiceQuestion7");
    var Q7Answer = 'b';
    
    if (choicesQ7[0].checked && choicesQ7[0].value == Q7Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ7[1].checked  && choicesQ7[1].value == Q7Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ7[2].checked  && choicesQ7[2].value == Q7Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);



    //Questions and answers 8
    var choicesQ8 = document.getElementsByName("choiceQuestion8");
    var Q8Answer = 'c';
    
    if (choicesQ8[0].checked && choicesQ8[0].value == Q8Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ8[1].checked  && choicesQ8[1].value == Q8Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ8[2].checked  && choicesQ8[2].value == Q8Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);



    
    //Questions and answers 9
    var choicesQ9 = document.getElementsByName("choiceQuestion9");
    var Q9Answer = 'b';
    
    if (choicesQ9[0].checked && choicesQ9[0].value == Q9Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ9[1].checked  && choicesQ9[1].value == Q9Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ9[2].checked  && choicesQ9[2].value == Q9Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);




    //Questions and answers 10
    var choicesQ10 = document.getElementsByName("choiceQuestion10");
    var Q10Answer = 'a';
        
    if (choicesQ10[0].checked && choicesQ10[0].value == Q10Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ10[1].checked  && choicesQ10[1].value == Q10Answer){
        correctAnswers = correctAnswers + 1;
    }
    if (choicesQ10[2].checked  && choicesQ10[2].value == Q10Answer){
        correctAnswers = correctAnswers + 1;
    }
    console.log("Correct answers:" + correctAnswers);


    var score = document.getElementById("displayScore");
    score.innerHTML = "<h2>You got "+correctAnswers + " of 10 questions correct</h2>";
}

