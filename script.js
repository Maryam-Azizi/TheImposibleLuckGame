/*
Author: Hannah Givens
Date Started: 10/08/2020
Project: An Impossible Luck Quize!

Date Modified: 10/11/20
Date Modified: 10/12/20
Date Modified: 10/13/20
*/
// * This is where I hold my made Object/class
class Questons{
    constructor(q, a1,a2,a3,a4){
        this.queston = q; 
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
    }

    updateQuestonArea(){
        var grabDiv = document.getElementById('questionsDisplay');
        grabDiv.innerHTML = "";
        grabDiv.innerHTML += "<h1 class= 'words'>" + this.queston + "</h1> "
        var grabDiv2 = document.getElementById('ansersDiplayBtn');
        grabDiv2.innerHTML = "";
        grabDiv2.innerHTML += `${this.answer1} ${this.answer2} ${this.answer3} ${this.answer4}`

    }

}

// here im making quetions fro my class
var Q1 = new Questons("What Grade should I get?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >100%</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>200%</button>",
    "<button class ='questions' value ='3' id='an3' >300%</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>4000%</button>");
var Q2 = new Questons("what is the color of the sky?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >Red</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>Magenta</button>",
    "<button class ='questions' value ='3' id='an3' >Pink</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>Blue</button>");
var Q3 = new Questons("What is a cooler mame?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >Jim</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>Tim</button>",
    "<button class ='questions' value ='3' id='an3' >Tina</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>Jane</button>");
var Q4 = new Questons("Where is Your cat?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >What Cat?</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>Home</button>",
    "<button class ='questions' value ='3' id='an3' >Vet</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>Mittens?</button>");
var Q5 = new Questons("Who are you?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >THE PRESIDENT</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>ME, DUH</button>",
    "<button class ='questions' value ='3' id='an3' >NOBODY</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>SOMEBODY</button>");
var Q6 = new Questons("What fish would you be?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >Shark!</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>Zebra Fish</button>",
    "<button class ='questions' value ='3' id='an3' >Dalphine</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>CatFish</button>");
var Q7 = new Questons("What's a sekeletons Favorite snack?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >SpareRibs</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>Ribeye</button>",
    "<button class ='questions' value ='3' id='an3' >bonless Ribs</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>Jawbreakers</button>");
var Q8 = new Questons("Where IS SHREK?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >MY SWAMP</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>His SWAMP</button>",
    "<button class ='questions' value ='3' id='an3' >OUR SWAMP</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>6ft under</button>");
var Q9 = new Questons("why is 6 afraid of 7?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >789</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>7 ate 9</button>",
    "<button class ='questions' value ='3' id='an3' >7 eight 9</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>hes not!</button>");
var Q10 = new Questons("whats is the meaning of life?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >CODE</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>42</button>",
    "<button class ='questions' value ='3' id='an3' >Games</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>Nothing</button>");
var Q11 = new Questons("Help Ive fallen and i cant get up?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >LIFEALERT</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>lifealert</button>",
    "<button class ='questions' value ='3' id='an3' >LIfeAlert</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>ALertLIFE</button>");
var Q12 = new Questons("what is the best season?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >PEPPER</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>CARJUN</button> ",
    "<button class ='questions' value ='3' id='an3' >SUMMER</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>DEER</button>");
var Q13 = new Questons("How do you make a pirate ferrious?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >Steal His Booty</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>take away the p</button>",
    "<button class ='questions' value ='3' id='an3' >call him polly</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>arrest him</button>");
var Q14 = new Questons("what do among us players eat?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >Impasta</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>O2</button>",
    "<button class ='questions' value ='3' id='an3' >Reactor</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>Comms</button>");
var Q15 = new Questons("What's the difference between a guitar and a fish?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >Wood?</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>fish breaths</button>",
    "<button class ='questions' value ='3' id='an3' >you cant tuna fish</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>fish are animals</button>");
var Q20 = new Questons("What do you call a gangsta snowman?",
    "<button  type= 'submit' class ='questions' value = '1' id='an1' >Froze-T</button>",
    "<button  type= 'submit' class ='questions'  value = '2' id='an2'>Ice-T</button>",
    "<button class ='questions' value ='3' id='an3' >Silly, snowman cant be gangsta</button>",
    "<button  type= 'submit' class ='questions'  value = '4' id='an4'>Frosty</button>");
 

// here im turning them into an array 
var questionsAry = [];
questionsAry.push(Q1);
questionsAry.push(Q2);
questionsAry.push(Q3);
questionsAry.push(Q4);
questionsAry.push(Q5);
questionsAry.push(Q6);
questionsAry.push(Q7);
questionsAry.push(Q8);
questionsAry.push(Q9);
questionsAry.push(Q10);
questionsAry.push(Q11);
questionsAry.push(Q12);
questionsAry.push(Q13);
questionsAry.push(Q14);
questionsAry.push(Q15);
questionsAry.push(Q20);


//calling everything to the load. 
window.addEventListener('load', intializePage);
  
function intializePage() {
    start();
}
var i = 0;
//* START FUNCTION!!!!
function start(){
    var startMessage = document.getElementById('questionsDisplay');
    startMessage.innerHTML = "";
    startMessage.innerHTML += "<h1 class= 'words'> Welcom to the IMPOSIBLE LUCK QUIZ! </h1> "
    var startBtn = document.getElementById('movementHousing');
    startBtn.innerHTML = "<button class ='navigationButtons' vlaue = 'start' id = 'start'> START HERE </button>"
    document.getElementById('start').addEventListener("click", questionSwapping);
    var emptyAnswers = document.getElementById('ansersDiplayBtn');
    emptyAnswers.style.display= "none";
    i = 0;
}


 var randomGen = Math.floor((Math.random()*4)+1);


i = 0;

/* 
here Im truning the start button into the next button, and call the id of all buttons 
on click to then send their value of them though an if satement to determine if they are the right answer
*/
function questionSwapping(){
    var startBtn = document.getElementById('movementHousing');
    startBtn.innerHTML = "<button class ='navigationButtons' vlaue = 'next' id = 'next'> Submit </button>"
    questionRotation();
}

function questionRotation(){
    document.getElementById('ansersDiplayBtn').style.display= "inline";
    var runs = 0;
    var count = 0;

    while(count <= questionsAry.length ){
        if(count <= questionsAry.length){
        document.getElementById('ansersDiplayBtn').style.display= "inline";
        while( runs < 1){
            console.log(questionsAry[i]);
            questionsAry[i].updateQuestonArea();
            i++;
            runs++;
            randomGen;
            }
        count++;

        var valueOfClick1 = document.getElementById('an1');
        valueOfClick1.addEventListener("click", clickingValues);
        var valueOfClick2 = document.getElementById('an2');
        valueOfClick2.addEventListener("click", clickingValues);
        var valueOfClick3 = document.getElementById('an3');
        valueOfClick3.addEventListener("click", clickingValues);
        var valueOfClick4 = document.getElementById('an4');
        valueOfClick4.addEventListener("click", clickingValues);
    
        console.log("random: " + randomGen);
        console.log(valueOfClick1);
        console.log(valueOfClick3);
        console.log(valueOfClick2);
        console.log(valueOfClick1);

        }else{
            
            var endMessage = document.getElementById('questionsDisplay');
            endMessage.innerHTML = "";
            endMessage.innerHTML += "<h1 class= 'words'> YOU DID TI! YOU BEAT THE GAME! </h1> "
            var again = document.getElementById('movementHousing');
            again.innerHTML = "<button class ='navigationButtons' vlaue = 'again' id = 'again'> AGAIN! </button>"
            document.getElementById('again').addEventListener("click", start);
            randomGen = Math.floor((Math.random()*4)+1);
            var emptyAnswers = document.getElementById('ansersDiplayBtn');
            emptyAnswers.style.display= "none";
            
        }
    }

    
}

//this functoin is pulling the vales of the target witch are the buttons clicked.
function clickingValues(e){

    console.log(e.target);
    console.log(e.target.value);
    validAnswer( e.target);


}
function validAnswer(answer){
    var val = answer.value;
    if(randomGen == val){
        alert("YAY! You got it!");
        document.getElementById('next').addEventListener("click", questionNextBtn);
        randomGen = Math.floor((Math.random()*4)+1);
    }else{
        alert("THIS IS NOT THE ANSWER, you must go back to start.");
        document.getElementById('next').addEventListener("click", start);
        randomGen = Math.floor((Math.random()*4)+1);
    }

    console.log(answer);
    
}

// this send the console the random thats generated, and adds an listener to the next button to move on to the next quetion roation
function questionNextBtn(){
    console.log("random: " + randomGen);
    document.getElementById('next').addEventListener("click", questionRotation)
}

