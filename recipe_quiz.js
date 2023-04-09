// takeQuiz function
function takeQuiz(score) {

  if (score >= 8) {
  console.log("You should make lasagna tonight! This classic Italian dish is perfect for when you're in the mood for something meaty and savoury. With layers of pasta, cheese, and tomato sauce, lasagna is always a crowd pleaser.");
  }
  
  else if (score >= 5) {
    console.log("You should make cake tonight! Whether you're in the mood for something chocolatey or fruity, there's a cake recipe out there for you. Plus, making a cake from scratch is a great way to impress your friends and family.");
  } 
  
  else {
    console.log("You should make pizza tonight! This versatile dish can be customised with your favorite toppings, making it perfect for when you're in the mood for something savoury. Plus, it's quick and easy to make, so you can have dinner on the table in no time.");
  }
};


// event listener (click on quiz button in html file to get the pop up quiz function)

let quizButton = document.getElementById("quiz-button");
quizButton.addEventListener("click", function() {
  let type = prompt("What type of food are you in the mood for? Please enter 1- Something savoury; 2- Something sweet; 3- Something meaty");
  let time = prompt("How much time do you have to cook? Please enter 1- less than 30 minutes; 2- 30-60 minutes; 3- more than 60 minutes"); 
  let ingredients = prompt("What ingredients do you have to hand? Please enter 1- flour, tomato sauce, cheese, cherry tomatoes; 2- flour, sugar, eggs and butter; 3 - pasta, ground beef and tomato sauce");
  
  let score = parseInt(type) + parseInt(time) + parseInt(ingredients);
  
  takeQuiz(score);
});



// welcome function
function welcome() {
    let name = prompt("What is your name?");
    alert("Hello, " + name + "! I think you'll be a great chef soon!");
}

//event listener
let welcomeFutureButton = document.getElementById("welcome-button");
welcomeFutureButton.addEventListener("click", welcome);
