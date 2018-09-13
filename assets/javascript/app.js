var seconds= 4;
var intervalId;

$( document ).ready(function() {
    console.log( "ready!" );
  
$(".startButton").on("click", run);


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    $(".startButton").toggleClass("startButtonDisplay");
    $(".questionBox").toggleClass("questionBoxDisplay");
    
  }
    
  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    seconds--;

    //  Show the number in the #show-number tag.
    $(".timeDisplay").html("<h2>" + seconds + "</h2>");


    //  Once number hits zero...
    if (seconds === 0) {

      //  ...run the stop function.
      
      clearInterval(intervalId);
      
      //  Alert the user that time is up.
      $(".questionBox").toggleClass("questionBoxDisplay")
      $(".finalBox").toggleClass("finalBoxDisplay");
      $(".outerBox").toggleClass("outerBoxDisplay")
    }
  }

 
  //right answers and wrong answers for buttons
  //hold right answers and wrong answers
  //count correct answers
  //count unanswered questions

  //count rightAnswers


  var rightAnswerCount = [0];

  var unansweredCount = [8];
  $(".rightAnswer").click(function(){
    
    rightAnswerCount ++;
    unansweredCount --;
    console.log(rightAnswerCount)
    $(".rightAnswerCount").text(rightAnswerCount);
    $(".unansweredCount").text(unansweredCount);
  });


  
  $(".wrongAnswer").click(function(){
    
   
    unansweredCount --;
    console.log(unansweredCount)
    $(".unansweredCount").text(unansweredCount);
  });

  
  

  // $(".rightAnswer").click(function(){
  //   console.log("test");
  // });

// var wrongAnswerCount = [8 - RightAnswerCount];
// var unansweredCount = [8 - wrongAnswerCount];
// $(".unansweredCount").text(unansweredCount);


});