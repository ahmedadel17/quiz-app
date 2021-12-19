const quizdata =[
    {
        question:"what is the abbreviation of hyper text markup language?",
        a:"html",
        b:"css",
        c:"http",
        d:"https",
        correct:'a'
    },
    {
        question:"what is the name of jason stathm in mechanic film?",
        a:"bishop",
        b:"jacob",
        c:"george",
        d:"jason",
        correct:'a'
    },
    {
        question:"what is the name of alvaro morte in lacasa de papel?",
        a:"john",
        b:"sergio",
        c:"berlin",
        d:"alvaro",
        correct:'b'
    },
    {
        question:"what is the most used programming language in 2019?",
        a:"c#",
        b:"java script",
        c:"java",
        d:"c",
        correct:'c'
    }
];
var main=document.getElementById("main");
var quizheader=document.getElementById("quizheader");
const answerel=document.querySelectorAll(".answer");
var questionel=document.getElementById("questionel")
var a_text=document.getElementById("a_text");
var b_text=document.getElementById("b_text");
var c_text=document.getElementById("c_text");
var d_text =document.getElementById("d_text");
var submitbtn=document.getElementById("submit");
let currentquestion=0;
let score =0;

function getselected(){
    
    
    let answer=undefined;
answerel.forEach(  (answerel) => {
    if(answerel.checked){
        answer=answerel.id;
    }

})  ;
return answer;
}


loadquiz();
function loadquiz(){
    const currentquizdata=quizdata[currentquestion];
    questionel.innerText=currentquizdata.question;
    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;
    // currentquestion++;
}
function deselectanswers(){
    answerel.forEach(  (answerel) => {
        if(answerel.checked){
            answerel.checked=false;
        }});
}
submitbtn.addEventListener("click", () => {
    getselected();
    
    const answer =getselected();
    console.log(answer);
    if(answer ){
        if(answer ===quizdata[currentquestion].correct ){
            score++;
        }
        currentquestion++;
        deselectanswers()
        console.log(score)
        }
    
   
   
    if(currentquestion<quizdata.length){
        loadquiz();
    }
    else{
       quizheader.classList.add("color");
        quizheader.innerHTML='<center><h1>Exam finished!!<h1><center><br><h6>you answered right </h6> '+score;
      
       submitbtn.classList.add("displaynone");
      
    }
});
