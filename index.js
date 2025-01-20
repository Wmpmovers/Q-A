let firstCard = document.getElementById("firstCard");
let startCard = document.getElementById("startCard");


  // Initialize EmailJS
  (function(){
    emailjs.init("SEQsTGL8uZfzGOnzI"); // Replace with your EmailJS user ID
})();

let yName = document.getElementById("exampleInputName").value;
let pNumber = document.getElementById("exampleInputNumber").value;


// Form submission
document.getElementById('form-input').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

 let gName = document.getElementById("nname");
let inputName = document.getElementById("exampleInputName").value;


    emailjs.sendForm('service_x5dxeok', 'template_32dz7un', this)
        .then(function() {
           startCard.style.display = "none";
           firstCard.style.display = "block";
           if (inputName == inputName){
            gName.innerHTML = inputName + "!!!";
        }
        }, function(error) {
            alert('Please check your internet connection!');
        });
});


let scores = document.getElementById("scores");
let zeroo = 1;


// FIRST QUIZ
function submitt() {
    alert("Are you sure yoy want to submit your quiz?")
    firstCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next() {
let answers = document.getElementById("answers").value;
let list1 = document.getElementById("list1");
    if (answers == "Seven" || answers == "Five" || answers == "Twenty" || answers == "Eleven"){
    firstCard.style.display = "none";
    secondCard.style.display = "block";
    }else if (answers == "") {
    alert("Your input is empty please try again!!!")
    }else{
        alert("Please input the correct option")
    };

    // STATEMENT FOR SCORES
    if (answers == "Seven"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list1.style.background = "red";
        list1.style.color = "white";
    }
}



// SECOND QUIZ
let secondCard = document.getElementById("secondCard");
function submitt2() {
    secondCard.style.display = "none";
    lastNoteCard.style.display = "block";
};


function next2() {
let list2 = document.getElementById("list2");
    let answers2 = document.getElementById("answers2").value;
if (answers2 == "Pluto" || answers2 == "Mars" || answers2 == "Brazil" || answers2 == "Asia"){
    secondCard.style.display = "none";
    thirdCard.style.display = "block";
    }else if (answers2 == "") {
    alert("Your input is empty please try again!!!")
    }else{
        alert("Please input the correct option")
    };

    // STATEMENT FOR SCORES
    if (answers2 == "Mars"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list2.style.background = "red";
        list2.style.color = "white";
    }
};


// ////////////////////////////////////////////////
// THIRD QUIZ
let thirdCard = document.getElementById("thirdCard");
function submitt3() {
    thirdCard.style.display = "none";
    lastNoteCard.style.display = "block";
};

function next3() {
let list3 = document.getElementById("list3");
    let answers3 = document.getElementById("answers3").value;
    if (answers3 == "Ottawa" || answers3 == "Toronto" || answers3 == "America" || answers3 == "United Kingdom"){
        thirdCard.style.display = "none";
        forthCard.style.display = "block";
        }else if (answers3 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers3 == "Ottawa"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list3.style.background = "red";
        list3.style.color = "white";
    }
}

//////////////////////////////////////////////
// FORTH QUIZ
let forthCard = document.getElementById("forthCard");

function submitt4() {
    forthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next4() {
let list4 = document.getElementById("list4");
    let answers4 = document.getElementById("answers4").value;
    if (answers4 == "Bill Gate" || answers4 == "Mark Zukerberg" || answers4 == "Elon Musk" || answers4 == "Warren Buffet"){
        forthCard.style.display = "none";
        fifthCard.style.display = "block";
        }else if (answers4 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers4 == "Elon Musk"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list4.style.background = "red";
        list4.style.color = "white";
    }
}

//////////////////////////////////////////
// FIFTH QUIZ
let fifthCard = document.getElementById("fifthCard");
function submitt5() {
    fifthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};

function next5() {
let list5 = document.getElementById("list5");
    let answers5 = document.getElementById("answers5").value;
    if (answers5 == "France" || answers5 == "Brazil" || answers5 == "Argentina" || answers5 == "Morroco"){
        fifthCard.style.display = "none";
        sixthCard.style.display = "block";
        }else if (answers5 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers5 == "France"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list5.style.background = "red";
        list5.style.color = "white";
    }
}

//////////////////////////////////////////
// SIXTH QUIZ
let sixthCard = document.getElementById("sixthCard");
function submitt6() {
    sixthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next6() {
let list6 = document.getElementById("list6");
    let answers6 = document.getElementById("answers6").value;
    if (answers6 == "Barrack Obama" || answers6 == "George Washington" || answers6 == "Donald Trump" || answers6 == "Elon Musk"){
        sixthCard.style.display = "none";
        seventhCard.style.display = "block";
        }else if (answers6 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers6 == "George Washington"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list6.style.background = "red";
        list6.style.color = "white";
    }
}



//////////////////////////////////////////
// SEVENTH QUIZ
let seventhCard = document.getElementById("seventhCard");

function submitt7() {
    seventhCard.style.display = "none";
    lastNoteCard.style.display = "block";
};

function next7() {
let list7 = document.getElementById("list7");
    let answers7 = document.getElementById("answers7").value;
    if (answers7 == "Sanni Abacha" || answers7 == "Olusegun Obasanjo" || answers7 == "Ernest Shonekan" || answers7 == "Nnamdi Azikiwe"){
        seventhCard.style.display = "none";
        eighthCard.style.display = "block";
        }else if (answers7 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers7 == "Nnamdi Azikiwe"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list7.style.background = "red";
        list7.style.color = "white";
    }
}



//////////////////////////////////////////
// EIGHTH QUIZ
let eighthCard = document.getElementById("eighthCard");

function submitt8() {
    eighthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next8() {
let list8 = document.getElementById("list8");
    let answers8 = document.getElementById("answers8").value;
    if (answers8 == "Heart" || answers8 == "Kidney" || answers8 == "Liver" || answers8 == "Lungs"){
        eighthCard.style.display = "none";
        ninethCard.style.display = "block";
        }else if (answers8 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers8 == "Kidney"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list8.style.background = "red";
        list8.style.color = "white";
    }
};


//////////////////////////////////////////
// NINETH QUIZ
let ninethCard = document.getElementById("ninethCard");

function submitt9() {
    ninethCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next9() {
let list9 = document.getElementById("list9");
    let answers9 = document.getElementById("answers9").value;
    if (answers9 == "She dont like the movie." || answers9 == "She doesnt like the movie." || answers9 == "She doesnt likes the movie." || answers9 == "She not like the movie."){
        ninethCard.style.display = "none";
        tenthCard.style.display = "block";
        }else if (answers9 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers9 == "She doesnt like the movie."){
        scores.innerHTML = eval(zeroo++);
    }
    else{
        list9.style.background = "red";
        list9.style.color = "white";
    }
};


//////////////////////////////////////////
// TENTH QUIZ
let tenthCard = document.getElementById("tenthCard");

function submitt10() {
    tenthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next10() {
let list10 = document.getElementById("list10");
    let answers10 = document.getElementById("answers10").value;
    if (answers10 == "Angry" || answers10 == "Sad" || answers10 == "Joyful" || answers10 == "Neutral"){
        tenthCard.style.display = "none";
        eleventhCard.style.display = "block";
        }else if (answers10 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers10 == "Joyful"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list10.style.background = "red";
        list10.style.color = "white";
    }
}


//////////////////////////////////////////
// ELEVENTH QUIZ
let eleventhCard = document.getElementById("eleventhCard");

function submitt11() {
    eleventhCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next11() {
let list11 = document.getElementById("list11");
    let answers11 = document.getElementById("answers11").value;
    if (answers11 == "The Arctic Ocean" || answers11 == "Atlantic Ocean" || answers11 == "River Jordan" || answers11 == "River Niger"){
        eleventhCard.style.display = "none";
        twelvethCard.style.display = "block";
        }else if (answers11 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers11 == "The Arctic Ocean"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list11.style.background = "red";
        list11.style.color = "white";
    }
};


//////////////////////////////////////////
// ELEVENTH QUIZ
let twelvethCard = document.getElementById("twelvethCard");

function submitt12() {
    twelvethCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next12() {
let list12 = document.getElementById("list12");
    let answers12 = document.getElementById("answers12").value;
    if (answers12 == "16" || answers12 == "8" || answers12 == "24" || answers12 == "32"){
        twelvethCard.style.display = "none";
        thirteenthCard.style.display = "block";
        }else if (answers12 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers12 == "8"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list12.style.background = "red";
        list12.style.color = "white";
    }
};


//////////////////////////////////////////
// THIRTEENTH QUIZ
let thirteenthCard = document.getElementById("thirteenthCard");

function submitt13() {
    thirteenthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next13() {
let list13 = document.getElementById("list13");
    let answers13 = document.getElementById("answers13").value;
    if (answers13 == "90deg" || answers13 == "180deg" || answers13 == "360deg" || answers13 == "0deg"){
        thirteenthCard.style.display = "none";
        forteenthCard.style.display = "block";
        }else if (answers13 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers13 == "360deg"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list13.style.background = "red";
        list13.style.color = "white";
    }
};


//////////////////////////////////////////
// FORTHEENTH QUIZ
let forteenthCard = document.getElementById("forteenthCard");

function submitt14() {
    forteenthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next14() {
let list14 = document.getElementById("list14");
    let answers14 = document.getElementById("answers14").value;
    if (answers14 == "13" || answers14 == "8" || answers14 == "30" || answers14 == "15"){
        forteenthCard.style.display = "none";
        fifteenthCard.style.display = "block";
        }else if (answers14 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers14 == "8"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list4.style.background = "red";
        list14.style.color = "white";
    }
};


//////////////////////////////////////////
// FIFTEENTH QUIZ
let fifteenthCard = document.getElementById("fifteenthCard");

function submitt15() {
    fifteenthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next15() {
let list15 = document.getElementById("list15");
    let answers15 = document.getElementById("answers15").value;
    if (answers15 == "10" || answers15 == "11" || answers15 == "14" || answers15 == "21"){
        fifteenthCard.style.display = "none";
        sixteenthCard.style.display = "block";
        }else if (answers15 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers15 == "11"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list15.style.background = "red";
        list15.style.color = "white";
    }
};


//////////////////////////////////////////
// THIRTEENTH QUIZ
let sixteenthCard = document.getElementById("sixteenthCard");

function submitt16() {
    sixteenthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next16() {
let list16 = document.getElementById("list16");
    let answers16 = document.getElementById("answers16").value;
    if (answers16 == "Air" || answers16 == "Gravity" || answers16 == "Space" || answers16 == "Solar System"){
        sixteenthCard.style.display = "none";
        seventeenthCard.style.display = "block";
        }else if (answers16 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers16 == "Gravity"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list16.style.background = "red";
        list16.style.color = "white";
    }
};

//////////////////////////////////////////
// SEVENTEENTH QUIZ
let seventeenthCard = document.getElementById("seventeenthCard");

function submitt17() {
    seventeenthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next17() {
let list17 = document.getElementById("list17");
    let answers17 = document.getElementById("answers17").value;
    if (answers17 == "H2O2" || answers17 == "H2O" || answers17 == "CO2" || answers17 == "H2"){
        seventeenthCard.style.display = "none";
        eighteenthCard.style.display = "block";
        }else if (answers17 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers17 == "H2O"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list17.style.background = "red";
        list17.style.color = "white";
    }
};

//////////////////////////////////////////
// EIGHTEENTH QUIZ
let eighteenthCard = document.getElementById("eighteenthCard");

function submitt18() {
    eighthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next18() {
let list18 = document.getElementById("list18");
    let answers18 = document.getElementById("answers18").value;
    if (answers18 == "Oxygen" || answers18 == "Nitrogen" || answers18 == "Helium" || answers18 == "Hydrogen"){
        eighteenthCard.style.display = "none";
        nineteenthCard.style.display = "block";
        }else if (answers18 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers18 == "Helium"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list18.style.background = "red";
        list18.style.color = "white";
    }
};

//////////////////////////////////////////
// NINETEENTH QUIZ
let nineteenthCard = document.getElementById("nineteenthCard");

function submitt19() {
    nineteenthCard.style.display = "none";
    lastNoteCard.style.display = "block";
};
function next19() {
let list19 = document.getElementById("list19");
    let answers19 = document.getElementById("answers19").value;
    if (answers19 == "Neon" || answers19 == "Fluorine" || answers19 == "Helium" || answers19 == "Argon"){
        nineteenthCard.style.display = "none";
        twentyyCard.style.display = "block";
        }else if (answers19 == "") {
        alert("Your input is empty please try again!!!")
        }else{
            alert("Please input the correct option")
        };
        // STATEMENT FOR SCORES
    if (answers19 == "Fluorine"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list19.style.background = "red";
        list19.style.color = "white";
    }
};



//////////////////////////////////////////
// TWENTYY QUIZ
let twentyyCard = document.getElementById("twentyyCard");

function submitt20() {
    alert("Your quiz will be submitted automatically and your scores will be calcatulated.")
let list20 = document.getElementById("list20");
    let answers20 = document.getElementById("answers20").value;
    twentyyCard.style.display = "none";
    lastNoteCard.style.display = "block";
    
    // STATEMENT FOR SCORES
    if (answers20 == "6"){
        scores.innerHTML = eval(zeroo++);
    }else{
        list20.style.background = "red";
        list20.style.color = "white";
    };
    // if (scores <= 10){
    //     let statuss = document.getElementById("status");
    //     statuss.innerHTML = "Weak";
    // }
};


// STATEMENT FOR THE LAST CARD
let lastNoteCard = document.getElementById("lastNoteCard");




