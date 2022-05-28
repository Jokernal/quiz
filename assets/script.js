var buttonEl = document.querySelector("#btnStart");
var timeBox = document.querySelector(".timeBox");
var questions = document.querySelector("#questions");
var rQuestion = ["Is Javascript a coding language?", "is javascript useful?", "is javascript cool"]
var sButton = document.querySelector("#btnStart");
var qSection = document.querySelector("#qSection");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var sParent = document.querySelector(".sParent");
var scoreEl = document.querySelector("#save-score");


var counter = "50";
var startTimer;
var score = 0;



 buttonEl.addEventListener("click", function(){

    startTimer = setInterval(timer, 1000);
    questions.textContent = (rQuestion[0]);
    sButton.remove();
    answer1.className = ".btn";
    answer2.className = ".btn";
    answer1.textContent = "Yes";
    answer2.textContent = "No";
    qSection.appendChild(answer1);
    qSection.appendChild(answer2);

    
   
 })

    function timer(){ 
    if (counter === 50){
        score = 0;
    }
        
        timeBox.textContent = ("Time: " + counter);
        counter--;
        if(counter === -1)
        {
            timeBox.textContent = "Time: 0";
            clearInterval(startTimer);
            counter = "50";
            endGame();
        }
    }
    answer1.addEventListener("click", nQuestion);
    answer2.addEventListener("click", nQuestionWrong);
    var i = 0;
    function nQuestion()
    {
        
        score = score + 20;
        i = ++i;
        questions.textContent = rQuestion[i];
        if(i === 3)
        {
            localStorage.setItem("score", score);
            endGame();
        }
        
        
    }

    function nQuestionWrong()
    {
        
        counter = counter - 20;
        i = ++i;
        questions.textContent = rQuestion[i];
    
        if(i === 3)
        {
            endGame();
        }
    }
    
    function endGame()
    {
        window.location.href = "highScores.html";
        //addHighScores();
    }
    
    //var scores = document.createElement("li")
    //function addHighScores(){
        //scores.textContent = localStorage.getItem("scores");
        //sParent.appendChild(scores);
    //}
    
//var scoreHandler = function(event){
    
    
    //score = localStorage.getItem("score");
    //event.preventDefault();
    //var scoreNameInput = document.querySelector("input[name='your-name']").value;
    //console.log(scoreNameInput);
    //scores.className = "scores";
    //scores.textContent = scoreNameInput + " " + score;
    //sParent.appendChild(scores);
    //localStorage.setItem("scores", scores.textContent);

//}
scoreEl.addEventListener("click", function(){
    var key = inpKey.value;
    console.log(name);
    console.log(score);
    if(name)
    {
        localStorage.setItem("key", key);
        console.log(localStorage);
        location.reload();
    };
    
    });
    for(i = 0; i< localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        sParent.innerHTML += `${key}: ${value} <br />`
    }


  
    
    





         
    





