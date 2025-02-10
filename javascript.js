var score = 0;
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var highscore = document.querySelector(".highscore")
var buttonsrow = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var timerInterval;
var cw = document.querySelector(".cw");
var cwtime = 2;
var seconds = 180;
var a1;
var a2;
var a3;
var a4;
var a = document.createElement('a');  
var link = document.createTextNode("This is link");
// Quiz opening page
function quizopening() {
    highscore.style.visibility = "hidden";

    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Start Quiz";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        question1();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "View Scores";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        scorepage();
    });
}
quizopening();

// Timer set up
function countdown() {
    timerInterval = setInterval(function() {
    seconds --;
    timer.textContent = "Time left: " + seconds;
        if (seconds <= 0) {
            clearInterval (timerInterval);
            seconds = 0;
            timer.textContent = "Time left: 0"
            postquiz();
        }
    }, 1000);
}

// Bonus= add the time to your score
function timepoints() {
    score += seconds;
}

// Correct answer response= Correct text will display

// Correct text display.
function correctcw() {
    var yesInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color: rgb(112, 177, 112)")
    cw.textContent = "Correct c: !";
        if (cwtime <= 0) {
            clearInterval (yesInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

// Wrong answer response.
function wrong() {
    seconds -=15;
}

// Wrong text display.
function wrongcw() {
    var noInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color:rgb(185, 80, 80)");
    cw.textContent = "Wrong :c !";
        if (cwtime <= 0) {
            clearInterval (noInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

// Q #1 
function question1() {
    a1.remove();
    a2.remove();
    countdown();
    question.textContent = "Where was our first date?";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Shopping";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "My bed";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Buffalo Wild Wings";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Wing Thursday";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        question2();
        correct();

    });
}

// Q #2
function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "What's my favorite thing about you?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "You're beautiful as fook";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "The other 3 options";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question3();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "You always want whats best for me";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "You have the kindest heart and sweetest soul";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question3();
        wrong();
    });
}

// Q #3
function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "How did I ask you to be my gf?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "*caresses face* You are the most beautiful divine creation from the universe and I wish to partake in adult things and an everlasting loving relationship with you.";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "*makes out with you* uh will you b my gf c:";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question4();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Date me or I will cry";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "*never actually asks you out n we proceed to date without a title*";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
}

// Q #4
function question4() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "How long will we last for?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "foreeverrrrrrrrr";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        correctcw();
        question5();
        correct();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "lol youre leavin my ass";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "for as long as Destiny doesnt mess up";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "mmmmm idk";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        wrongcw();
        question5();
        wrong();
    });
}

// Q #5
function question5() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Will you b my valentine???????";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "no";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        postquiz();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "no";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        postquiz();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "..no";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        postquiz();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "yeth c:";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        correctcw();
        postquiz();
        correct();
    });
};

// Post-quiz
function postquiz() {
    timepoints();
    seconds = 0; 
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    highscore.style.visibility = "visible";
    question.textContent = "Quiz Complete! Your score is " + score + ". Please enter your name below, and follow the link in the corner!" 
    a.appendChild(link);  
    a.title = "Link";  
      
    // Set the href property. 
  
    
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Submit";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
    var img = new Image(); 
    var div = document.getElementById('x'); 
 
 
    img.onload = function() { 
 
        div.innerHTML += '<img src="'+img.src+'" />';  
 
}; 
 
 
    img.src = 'assets/frame.png'; 
}

// High score page
function scorepage() {
    clearInterval (timerInterval);
    a1.remove();
    a2.remove();
    highscore.style.visibility = "hidden";
    banner.textContent = "High Scores"
    
    question.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Restart Quiz";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        location.reload();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Clear Scores";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        localStorage.clear();
        question.textContent = "";
    });
}
