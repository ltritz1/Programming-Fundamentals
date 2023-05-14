/* This function chooses a name and question randomly to start an ice breaker conversation for classes and meetings*/
function BreakTheIce() {

/*Variable declarations*/
  var StudentNames = [];
  var nameLooping = true;
  var nameInput = "";
  var count = 0;
  var LuckyStudent;
  var randomIndexValue;
  var randomQuestionIndex;
  var question;

/* While loop that requests names of class or meeting for random selection*/
  while(nameLooping){
    nameInput = prompt("Enter the student's name or leave blank to stop.");
    if(nameInput === ""){
        nameLooping = false;
    }else{
        StudentNames.push(nameInput);
    }
  } 
  
  /*Random value chosen to pull the name from the StudentNames array*/
  randomIndexValue = Math.floor(Math.random()*StudentNames.length);  /*https://www.w3schools.com/js/js_random.asp*/ 
    LuckyStudent = StudentNames[randomIndexValue];
  
  /*Random value chosen to pull the question to be given*/
  randomQuestionIndex = Math.floor(Math.random() * 10) + 1;    /*https://www.w3schools.com/js/js_random.asp*/  
    if(randomQuestionIndex == 1) {
      question = "What is your favorite school subject?";
    }else if(randomQuestionIndex == 2) {
      question = "Who's your favorite actor/actress?";
    }else if(randomQuestionIndex == 3) {
      question = "What is your favorite book?";
    }else if(randomQuestionIndex == 4) {
      question = "Where did you grow up?";
    }else if(randomQuestionIndex == 5) {
      question = "What is your favorite color?";
    }else if(randomQuestionIndex == 6) {
      question = "Where was your favorite vacation?";
    }else if(randomQuestionIndex == 7) {
      question = "Snow or sun?";
    }else if(randomQuestionIndex == 8) {
      question = "What is your favorite movie?";
    }else if(randomQuestionIndex == 9) {
      question = "Dogs or cats?";
    }else if(randomQuestionIndex == 10) {
      question = "How many pets do you have?";
    }
  
  /*Output*/
  document.write((LuckyStudent) + "<br>");
  document.write(question);
  
  }

BreakTheIce();