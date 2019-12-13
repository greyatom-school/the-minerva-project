$(document).ready(function() {
  var username = "";
  var results = [];
  var selectedAnswers = {};

  // Cache the dom elems
  var usernameInput = $("#username");
  var modal = $("#modal-container");
  var quizContainer = $("#quiz-container");
  var submitBtn = $("#submit");
  var resetBtn = $("#reset");
  var btnGroup = $(".buttons");

  // Render quiz from the retrieved quiz data
  function renderQuiz(response) {
    if (response.results.length) {
      results = [].concat(response.results);

      // Loop through the results received from the response and render a quiz question
      results.forEach(function(quiz, index) {
        var answers = [quiz.correct_answer]
          .concat(quiz.incorrect_answers)
          .sort(() => Math.random() - 0.5);
        var answerList = $('<ul class="answers-list"></ul>');

        // Loop through the array of answers and render it
        answers.forEach(function(answer) {
          answerList.append('<li class="answer">' + answer + "</li>");
        });

        // Loop through results and render question and answer
        quizContainer.append(
          '<li class="quiz-block" data-index="' +
            index +
            '" id=question-' +
            index +
            '><h4 class="question">' +
            (index + 1) +
            ". " +
            quiz.question +
            "</h4></li>"
        );
        $("#question-" + index + "").append(answerList);
      });

      // $(".answer").on("click", onAnswerClick);
      btnGroup.css("display", "flex");
    }
  }

  // Get the data to render quiz questions
  function getQuizDetails() {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
    )
      .then(res => res.json())
      .then(renderQuiz);
  }

  // Toggle username modal based on requirement
  function toggleUsernameModal() {
    if (modal.hasClass("out")) {
      modal.removeClass("out");
    } else {
      modal.addClass("out");
    }
  }

  // Get the username from modal when user presses enter
  function getUsername(event) {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
      if (usernameInput.val()) {
        username = usernameInput.val();

        toggleUsernameModal();

        getQuizDetails();
      }
    }
  }

  // Bind events
  usernameInput.on("keypress", getUsername);
});
