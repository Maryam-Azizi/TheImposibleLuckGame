/*
Author: Hannah Givens
Date Started: 10/08/2020
Project: An Impossible Luck Quize!

Date Modified: 10/08/20
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

    //! this needs fixed to do something different. 
    updateQuestonArea(){
        // TODO: need to rename something
        var something1 = document.getElementById('questionsDisplay');
        something1.innerHTML = "";
        something1.innerHTML += "<h1 class= 'words'>" + this.queston + "</h1> "
        var something = document.getElementById('ansersDiplayBtn');
        something.innerHTML = "";
        something.innerHTML += `<button class ='questions' vlaue = '1' >${this.answer1}</button> <button class ='questions'  vlaue = '2' >${this.answer2}</button> <button class ='questions'  vlaue = '3'>${this.answer3}</button> <button class ='questions'  vlaue = '4'>${this.answer4}</button>`

    }

}


// TODO: currently colledting questions from snapchat. 
// here im making quetions fro my class
var Q1 = new Questons("What Grade should I get?","100%","200%","300%","4000%");
var Q2 = new Questons("what is the color of the sky?","Red","Magenta","Pink","Blue");
var Q3 = new Questons("What is a cooler mame?","Jim","Tim","Tina","Jane");
var Q4 = new Questons("Where is Your cat?","What Cat?","Home","Vet","Mittens?");
var Q5 = new Questons("Who are you?","THE PRESIDENT","ME, DUH","NOBODY","SOMEBODY");
var Q6 = new Questons("What fish would you be?","Shark!","Zebra Fish","Dalphine","CatFish");
var Q7 = new Questons("What's a sekeletons Favorite snack?","SpareRibs","Ribi","bonless Ribs","Jawbreakers");
var Q8 = new Questons("Where IS SHREK?","MY SWAMP","His SWAMP","OUR SWAMP","6ft under");
var Q9 = new Questons("why is 6 afraid of 7?","789","7 ate 9","7 eight 9","hes not!");
var Q10 = new Questons("whats is the meaning of life?","CODE","42","Games","Nothing");
var Q11 = new Questons("Help Ive fallen and i cant get up?","LIFEALERT","lifealert","LIfeAlert","ALertLIFE");
var Q12 = new Questons("what is the best season?","PEPPER","CARJUN ","SUMMER","DEER");
var Q13 = new Questons("How do you make a pirate ferrious?","Steal His Booty","take away the p","call him polly","arrest him");
var Q14 = new Questons("what do among us players eat?","Impasta","O2","Reactor","Comms");
var Q15 = new Questons("What's the difference between a guitar and a fish?","Wood?","fish breaths","you cant tuna fish","fish are animals");
var Q16 = new Questons("q?","1","2","3","4");
var Q17 = new Questons("q?","1","2","3","4");
var Q18 = new Questons("q?","1","2","3","4");
var Q19 = new Questons("q?","1","2","3","4");
var Q20 = new Questons("q?","1","2","3","4");
 

// here im turning theminto an array 
var questionsAry = [];
questionsAry.push(Q1);
console.log(questionsAry[0]);
questionsAry.push(Q2);
console.log(questionsAry[1]);
questionsAry.push(Q3);
console.log(questionsAry[2]);
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
questionsAry.push(Q16);
questionsAry.push(Q17);
questionsAry.push(Q18);
questionsAry.push(Q19);
questionsAry.push(Q20);


window.addEventListener('load', intializePage);
  
function intializePage() {
    start();
}

//* START FUNCTION!!!!
function start(){
    var startMessage = document.getElementById('questionsDisplay');
    startMessage.innerHTML = "";
    startMessage.innerHTML += "<h1 class= 'words'> Welcom to the IMPOSIBLE LUCK QUIZ! </h1> "
    var startBtn = document.getElementById('movementHousing');
    startBtn.innerHTML = "<button class ='navigationButtons' vlaue = 'start' id = 'start'> START HERE </button>"
    document.getElementById('start').addEventListener("click", questionRotation);
}


var i = 0;
function questionRotation(){
    var startBtn = document.getElementById('movementHousing');
    startBtn.innerHTML = "<button class ='navigationButtons' vlaue = 'next' id = 'next'> Check </button>"
    
    var runs = 0;
    while( runs < 1){
    console.log(questionsAry[i]);
    questionsAry[i].updateQuestonArea();
    i++;
    runs++;
}
document.getElementById('next').addEventListener("click", questionCheck);
}


function questionCheck(){
    var rand = Math.random()*4;
    console.log(rand);
    var valueOfClick = document.getElementsByClassName('questions').value
    console.log(valueOfClick)
    if(rand = valueOfClick){
        // YAY 
    }else{
        // fun a fuction that is the beginging
    }
    document.getElementById('next').addEventListener("click", questionRotation)
}


// TODO: this will randomiz what array value will be the right one because ther are no real right answers just luck 

// ? this will generate what is the right answer. THis if need to be nested in the while loop that determins the quetions

// if(rand = ckickedAnswer){
//     //when right: change btn color and display next btn 
// }else{
//     // fun a fuction that is the beginging
// }



// if(rand >=0 && rand <1){
//     //make this.answer1 the answer

// }esle if(rand >=1 && rand <2){
//     //make this.answer2 the answer
// }esle if(rand >=1 && rand <2){
//     //make this.answer3 the answer
// }else{
//     //make this.answer4
// }



