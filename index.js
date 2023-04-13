console.log("Welcome to TIC TAC TOE");

const gameover = new Audio("gameover.wav");
const click = new Audio("click.wav");
let isgameover = false;

let turn = "X";
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkwins = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      isgameover = true;
      document.getElementsByClassName("info")[0].innerText =
        boxtext[e[0]].innerText + " won";
        gameover.play();
    
    }
  });
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  element.addEventListener("click", () => {
    let boxttext = element.querySelector(".boxtext");
    let turninfo = document.getElementsByClassName("info")[0];
    if (boxttext.innerText === "") {
      boxttext.innerText = turn;
      if (!isgameover) {
        turn = changeTurn();
        turninfo.innerText = "Turn for " + turn;
      }

      checkwins();
    }

    click.play();
  });
});

document.getElementById("reset").addEventListener('click',()=>{

    click.play();
    location.reload();
   

})
