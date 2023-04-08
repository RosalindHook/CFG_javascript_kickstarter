// Create an object to hold the quiz questions and possible answers
const quiz = {
    questions: [
      {
        question: "What type of food are you in the mood for?",
        answers: {
          a: "Something meaty",
          b: "Something savoury",
          c: "Something sweet"
        }
      },
      {
        question: "How much time do you have to cook?",
        answers: {
          a: "Less than 30 minutes",
          b: "30-60 minutes",
          c: "More than 60 minutes"
        }
      },
      {
        question: "What ingredients do you have to hand?",
        answers: {
          a: "Pasta, ground beef, tomato sauce",
          b: "Flour, tomato sauce, cheese, cherry tomatoes",
          c: "Flour, sugar, eggs, butter"
        }
      }
    ]
  };
  
  // Keep track of the user's answers
  const userAnswers = [];
  
  // Display each question and its possible answers
  for (let i = 0; i < quiz.questions.length; i++) {
    const question = quiz.questions[i].question;
    const answers = quiz.questions[i].answers;
    
    // Display the question
    console.log(`Question ${i+1}: ${question}`);
    
    // Display the possible answers
    for (let answer in answers) {
      console.log(`${answer}: ${answers[answer]}`);
    }
    
    // Get the user's answer
    let userAnswer = prompt("Enter your answer (a, b, or c):");
    
    // Make sure the user's answer is valid
    while (userAnswer !== "a" && userAnswer !== "b" && userAnswer !== "c") {
      userAnswer = prompt("Invalid answer. Please enter a, b, or c:");
    }
    
    // Add the user's answer to the array of answers
    userAnswers.push(userAnswer);
  }
  
  // Calculate the result based on the user's answers
  let result = "";
  
  if (userAnswers[0] === "a" && userAnswers[1] === "c" && userAnswers[2] === "a") {
    result = "lasagna";
  } else if (userAnswers[0] === "b" && userAnswers[1] === "a" && userAnswers[2] === "b") {
    result = "pizza";
  } else if (userAnswers[0] === "c" && userAnswers[1] === "b" && userAnswers[2] === "c") {
    result = "cake";
  } else {
    result = "... oh sorry, I couldn't decide what to make based on your answers - go and explore the whole recipe bank and see what takes your fancy!";
  }
  
  // Display the result
  console.log(`You should make ${result}!`);
  
