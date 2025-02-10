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
    question.textContent = "How did we first meet?";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "You fell out of heaven right before me";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "I asked God to bring me my other half and manifested you";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Kash's live";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question2();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "All the above";
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
    a1.innerHTML = "Your ethereal beauty";
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
    a3.innerHTML = "You make me laugh and you're so unserious";
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
    question.textContent = "How many kids are we gonna have";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "none";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "3";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        correctcw();
        question4();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "2";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        wrongcw();
        question4();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "1";
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
    a2.innerHTML = "you're about to break up w me";
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
    a4.innerHTML = "yes :)";
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
    question.textContent = "Quiz Complete! Your score is " + score + ". Haz you mean the world to me. Thank you for being the first person I speak to in the morning and the last person I speak to before bed. You are my dream girl. I can't wait to see what is in store for us. I can't wait until you're all mine. Thank you pretty baby for dealing with me. Te quiero mucho mi hermosa princesa. I adore you.";
// Create the link to a note
var noteLink = document.createElement('a');
noteLink.href = "https://www.icloud.com/notes/0d1goTp-Pf2v8P7iKtXHfAM2Q#Hasna,_my_Sun";  // Replace with your desired note link
noteLink.target = "_blank";  // Open the link in a new tab
noteLink.textContent = " here's something I wrote you";  // The text for the link

// Add some styling to make it stand out, if desired
noteLink.style.color = "red";  // Blue color for the link
noteLink.style.fontSize = "1.2rem";  // Adjust font size

// Append the link to the question element
question.appendChild(noteLink);
question.appendChild(document.createElement('br'));  // Optional: add a line break after the link

// Add the submit button
a1 = document.createElement("BUTTON");
    // Check if the Spotify embed already exists
    if (!document.querySelector("#spotify-embed")) {
        // Create the iframe element for the Spotify playlist
        var spotifyEmbed = document.createElement('iframe');
        spotifyEmbed.src = "https://open.spotify.com/embed/playlist/7IjKUUFdLkVovmtBclOtbB?utm_source=generator";  // Your playlist link
        spotifyEmbed.width = "100%";
        spotifyEmbed.height = "352";
        spotifyEmbed.style.borderRadius = "12px";
        spotifyEmbed.frameBorder = "0";
        spotifyEmbed.allowfullscreen = "";
        spotifyEmbed.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        spotifyEmbed.loading = "lazy";
        spotifyEmbed.id = "spotify-embed";  // Set an ID to identify the embed

        // Append the Spotify iframe to the body
        document.body.children[4].appendChild(spotifyEmbed);
        document.body.children[4].appendChild(document.createElement('br'));  // Add a line break
    }

    // Add the submit button
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