function breakTheIce() {
  // Function to get student names
  function getStudentNames() {
    var studentNames = [];
    var nameInput = "";
    var nameLooping = true;

    while (nameLooping) {
      nameInput = prompt("Enter the student's name or leave blank to stop.");
      if (nameInput === "") {
        nameLooping = false;
      } else {
        studentNames.push(nameInput);
      }
    }
    return studentNames;
  }

  // Function to choose a random student from the given names
  function chooseLuckyStudent(studentNames) {
    var randomIndexValue = Math.floor(Math.random() * studentNames.length);
    return studentNames[randomIndexValue];
  }

  // Function to generate a random icebreaker question
  function generateQuestion() {
    var randomQuestionIndex = Math.floor(Math.random() * 10) + 1;
    var question;

    switch (randomQuestionIndex) {
      case 1:
        question = "What is your favorite school subject?";
        break;
      case 2:
        question = "Who's your favorite actor/actress?";
        break;
      case 3:
        question = "What is your favorite book?";
        break;
      case 4:
        question = "Where did you grow up?";
        break;
      case 5:
        question = "What is your favorite color?";
        break;
      case 6:
        question = "Where was your favorite vacation?";
        break;
      case 7:
        question = "Snow or sun?";
        break;
      case 8:
        question = "What is your favorite movie?";
        break;
      case 9:
        question = "Dogs or cats?";
        break;
      case 10:
        question = "How many pets do you have?";
        break;
    }
    return question;
  }

  //Function to display output
  function output() {
    var namedStudent = getStudentNames();
    var luckyStudent = chooseLuckyStudent(namedStudent);
    var question = generateQuestion();

    document.write(luckyStudent + "<br>");
    document.write(question);
  }
  output();
}

// Calling the main function
breakTheIce();