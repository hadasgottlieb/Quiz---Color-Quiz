let STORE = {
  currentQuestionIndex: 0,
  resultsArray: [],

  questions: [
    {
      questionNumber: 1,
      category: "Blue",
      options: ["lightblue", "mediumblue", "darkblue"],
    },
    {
      questionNumber: 2,
      category: "Red",
      options: ["pink", "red", "darkred"],
    },
    {
      questionNumber: 3,
      category: "Green",
      options: ["lightgreen", " green", "darkgreen"],
    },
  ]
}

//This function starts quiz
function startQuiz() {
  console.log(`function startQuiz ran`);

  $("#opening-button").on("click", function() {
    $("#quiz-container").removeClass("hide-on-start");
 
    $("#opening-container").hide();
    renderQuiz();
  });
}

//This function renders the question
function renderQuiz() {
  console.log(`function renderQuiz ran`);

  
  let question = STORE.questions[STORE.currentQuestionIndex];
  $("#color-container").html("");
  question.options.forEach(function(choice) {
    $("#color-container").append(`<div class = "${choice} color-options"><label><input type="radio" name="radio" value = "${choice}"><span>${choice}</span></label></div>`)
  });

}

//This function listens for when the submit button is clicked
//Pushes choice to resultsArray
//Moves to next question
//If no more questions, displays results
function submitColor() {
  $("#submit-color").on("click", function() {
    let checkedColor = $("input:checked").val();
    if (checkedColor) {
      STORE.resultsArray.push(checkedColor);
      STORE.currentQuestionIndex++;

    }
    if (STORE.currentQuestionIndex < STORE.questions.length) {
      renderQuiz();
    } else {
      renderResults();
    }
  });
}

//This function renders the results
function renderResults() {
  $("#quiz-container").hide();
  $("#results-container").removeClass("hide-on-start");
  STORE.resultsArray.forEach(function(choice) {
    $("#results-list").append(`<li class = "${choice}">${choice}</li>`);
  });

}


function renderPage() {
  startQuiz();
  submitColor();
}

$(renderPage);