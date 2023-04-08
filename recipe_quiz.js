// Create an object to hold the quiz questions and possible answers
const quiz = [
  {
    question: "What type of food are you in the mood for?",
    answers: {
      a: "something meaty",
      b: "something savoury",
      c: "something sweet"
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
    question: "What ingredients do you have on hand?",
    answers: {
      a: "Pasta, ground beef, tomato sauce",
      b: "Flour, tomato sauce, cheese, cherry tomatoes",
      c: "Flour, sugar, eggs, butter"
    }
  }
];

const categories = {
  lasagna: {
    score: 0,
    description: "You should make lasagna tonight! This classic Italian dish is perfect for when you're in the mood for something cheesy and savoury. With layers of pasta, cheese, and tomato sauce, lasagna is always a crowd-pleaser."
  },
  pizza: {
    score: 0,
    description: "You should make pizza tonight! This versatile dish can be customised with your favorite toppings, making it perfect for when you're in the mood for something savoury. Plus, it's quick and easy to make, so you can have dinner on the table in no time."
  },
  cake: {
    score: 0,
    description: "You should make cake tonight! Whether you're in the mood for something chocolatey or fruity, there's a cake recipe out there for you. Plus, making a cake from scratch is a great way to impress your friends and family."
  }
};

function handleSubmit(event) {
  event.preventDefault();
  const answers = new FormData(event.target);
  const score = getScore(answers);
  const recommendation = getRecommendation(score);
  displayRecommendation(recommendation);
}

function getScore(answers) {
  const score = {
    cheesy: 0,
    savory: 0,
    sweet: 0
  };

  for (let i = 0; i < quiz.length; i++) {
    const answer = answers.get(`answer-${i+1}`);
    if (answer === "a") {
      score.cheesy++;
    } else if (answer === "b") {
      score.savory++;
    } else if (answer === "c") {
      score.sweet++;
    }
  }

  return score;
}

function getRecommendation(score) {
  let winningCategory = null;
  let highestScore = -Infinity;

  for (const [category, categoryScore] of Object.entries(categories)) {
    let scoreForCategory = 0;
    for (const [answer, value] of Object.entries(categoryScore)) {
      if (answer === "score") {
        continue;
      }
      scoreForCategory += score[answer] * value;
    }
    if (scoreForCategory > highestScore) {
      winningCategory = category;
      highestScore = scoreForCategory;
    }
  }

  return categories[winningCategory];
}

function displayRecommendation(recommendation) {
  const recommendationElement = document.getElementById("recommendation");
  recommendationElement.textContent = recommendation.description;

  const resultElement = document.getElementById("result");
  resultElement.style.display = "block";
}

const form = document.getElementById("quiz-form");
form.addEventListener("submit", handleSubmit);

