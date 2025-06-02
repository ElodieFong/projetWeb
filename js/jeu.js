var score = 0;
var totalPop = 0;
var minuteur = 60;
var interval;
var countdown;

const ecran = document.getElementById("ecranGame");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

const louisiIMG = "../img/chatrer_louisi.png";


//faire apparaitre les louisi (oui, j'ai donner un surnom a l'ecrevisse)
function spawnLouisi(){

  // new image
  const louisi = document.createElement("img");
  louisi.src = louisiIMG;
  louisi.classList.add("ecrevisse");

  // Position aléatoire
  const maxX = ecran.clientWidth - 60;
  const maxY = ecran.clientHeight - 60;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  louisi.style.left = `${x}px`;
  louisi.style.top = `${y}px`;

  // +1 louisi
  ecran.appendChild(louisi);
  totalPop++;

  // clic - death
  louisi.onclick = () => {
    score++;
    scoreDisplay.textContent = "Score : " + score;
    if (ecran.contains(louisi)) {
      ecran.removeChild(louisi);
    }
  };

   // delete au bout de 1sec si pas mort
  setTimeout(() => {
    if (ecran.contains(louisi)) {
      ecran.removeChild(louisi);
    }
  }, 1000);
}

function updateTimer() {
  minuteur--;
  timerDisplay.textContent = "Temps restant : " + minuteur;
  if (minuteur <= 0) {
    clearInterval(interval);
    clearInterval(countdown);
  

    const recap = document.getElementById("recapScore");
    const capt = document.getElementById("chatrer");
    const pop = document.getElementById("pop");

    recap.style.display = "table";
    capt.textContent = score;
    pop.textContent = totalPop;

    alert("Game Over");
    document.querySelector("button[onclick='theGame()']").disabled = false;

  }
}

function theGame(){
    alert("Le jeu commence !");
    
document.querySelector("button[onclick='theGame()']").disabled = true;
    score = 0;
    minuteur = 60;
    scoreDisplay.textContent = "Score : 0";
    timerDisplay.textContent = "temps restant : 60";
    spawnLouisi();
    interval = setInterval(function(){spawnLouisi();}, 1000);
    countdown = setInterval(updateTimer, 1000);
}