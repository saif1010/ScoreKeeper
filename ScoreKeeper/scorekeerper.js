const p1 = {
    score : 0,
    button: document.querySelector("#player1"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score : 0,
    button: document.querySelector("#player2"),
    display: document.querySelector("#p2Display")
}

const resetbutton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playtill");
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
function updateScore(player,opponnet){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add("has-text-success");
         opponnet.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponnet.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", function () {
  updateScore(p1,p2)
});
p2.button.addEventListener("click", function () {
  updateScore(p2,p1)
});
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  // console.log(this.value)
  reset();
});

resetbutton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score =0;
        p.display.textContent=0;
        p.button.disabled=false;
        p.display.classList.remove("has-text-success", "has-text-danger")
    }
 
}
