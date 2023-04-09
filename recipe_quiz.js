// takeQuiz function
function takeQuiz(score) {

  if (score >= 8) {
  console.log("You should make lasagna tonight!\nThis classic Italian dish is perfect for when you're in the mood for something meaty and savoury. With layers of pasta, cheese, and tomato sauce, lasagna is always a crowd pleaser.");
  }
  
  else if (score >= 5) {
    console.log("You should make cake tonight!\nWhether you're in the mood for something chocolatey or fruity, there's a cake recipe out there for you. Plus, making a cake from scratch is a great way to impress your friends and family.");
  } 
  
  else {
    console.log("You should make pizza tonight!\nThis versatile dish can be customised with your favorite toppings, making it perfect for when you're in the mood for something savoury. Plus, it's quick and easy to make, so you can have dinner on the table in no time.");
  }
};




// welcome function
function welcome() {
    let name = prompt("What is your name?");
    alert("Hello, " + name + "! I think you'll be a great chef soon!");
}

//event listener
let welcomeFutureButton = document.getElementById("welcome-button");
welcomeFutureButton.addEventListener("click", welcome);
