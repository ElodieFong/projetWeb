
var score = 0;
var totalPop = 0;
var minuteur = 60;
var interval;
var countdown;

const ecran = document.getElementById("ecranGame");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

const louisiIMG = "../img/chatrer_louisi.png";

var louisiEst = null; 

//faire apparaitre les louisi (oui, j'ai donner un surnom a l'ecrevisse)
function spawnLouisi(){
    // Si louisi existe déjà, on la delete
    if (louisiEst) {
        ecran.removeChild(louisiEst);
    }

    // new image
    louisiEst = document.createElement("img");
    louisiEst.src = louisiIMG;
    louisiEst.classList.add("ecrevisse");

    // Position aléatoire
    const maxX = ecran.clientWidth - 60;
    const maxY = ecran.clientHeight - 60;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    louisiEst.style.left = `${x}px`;
    louisiEst.style.top = `${y}px`;

    // +1 louisi
    ecran.appendChild(louisiEst);
    totalPop++;

    // clic - death
    louisiEst.onclick = () => {
    score++;
    scoreDisplay.textContent = "Score : " + score;
    spawnLouisi();
  };
}

function updateTimer() {
  minuteur--;
  timerDisplay.textContent = "Temps restant : " + minuteur;
  if (minuteur <= 0) {
    clearInterval(interval);
    clearInterval(countdown);
    if (louisiEst) ecran.removeChild(louisiEst);
    const recap = document.getElementById("recapScore");
    const capt = document.getElementById("chatrer");
    const pop = document.getElementById("pop");

    recap.style.display = "table";
    capt.textContent = score;
    pop.textContent = totalPop;

    alert("Game Over");
  }
}

function theGame(){
    alert("Le jeu commence !");
    score = 0;
    minuteur = 60;
    scoreDisplay.textContent = "Score : 0";
    timerDisplay.textContent = "temps restant : 60";
    alert("c'est ou que ca coince");
    spawnLouisi();
    interval = setInterval(function(){spawnLouisi();}, 1000);
    countdown = setInterval(updateTimer, 1000);
}