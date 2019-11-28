//DOMをキャッシュする
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");
const background_div = document.querySelector(".background");
//三つの選択から一つをランダムに選択する
function getComputerChoice(){
  const choices = ["グー", "チョッキ", "パー"];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}
//勝った場合
function win(u, c){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore.innerHTML = computerScore;
  result_p.innerHTML = u + "　VS　" + c + "<br>勝ちました!";
  result_p.style.color = "#A9D5B8";
}
//負けた場合
function lose(u, c){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = u + "　VS　" + c + "<br>負けました!";
  result_p.style.color = "#E69999";
}
//引き分けの場合
function draw(u, c){
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = u + "　VS　" + c + "<br>引き分け!";
  result_p.style.color = "#FFFDDD";
}
//ゲームをプレイする
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + " " + computerChoice){
    case "グー チョッキ":
    case "チョッキ パー":
    case "パー グー":
    win(userChoice, computerChoice);
    break;
    case "グー パー":
    case "チョッキ グー":
    case "パー チョッキ":
    lose(userChoice, computerChoice);
    break;
    case "グー グー":
    case "チョッキ チョッキ":
    case "パー パー":
    draw(userChoice, computerChoice);
    break;
  }
}

function main(){
  rock_div.addEventListener("click", function(){
    game("グー");
  })
  paper_div.addEventListener("click", function(){
    game("パー");
  })
  scissors_div.addEventListener("click", function(){
    game("チョッキ");
  })
}
main();
