let essais = 0;

function submitQuiz() {

    if (essais >= 3) {
        alert("Vous avez atteint le nombre maximum de tentatives.");
        document.querySelector('button[type="submit"]').disabled = true;
        return;
    }

    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "b") {
        score += 4;
    }

    const q2 = document.querySelectorAll('input[name="q2[]"]:checked');
    q2.forEach(option => {
        if (option.value === "a" || option.value === "c") {
            score += 3;
        } else if (option.value === "b") {
            score -= 3;
        }
    });

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "b") {
        score += 4;
    }

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "b") {
        score += 4;
    }

    const s1 = document.getElementById("s1").value;
    const s2 = document.getElementById("s2").value;
    const s3 = document.getElementById("s3").value;
    if (s1 === "true") score += 2;
    if (s2 === "false") score += 2;
    if (s3 === "true") score += 2;

    const res = document.getElementById("resolutions").value.toLowerCase();
    const motsCles = ["sensibiliser", "informer", "ne pas relâcher", "prévenir", "agir", "limiter", "surveiller", "éduquer"];
    if (motsCles.some(mot => res.includes(mot))) { //fonction flechée (syntaxe + courte)
        score += 5;
    }

    essais++;
    const tableau = document.querySelector("#result tbody");
    const ligne = document.createElement("tr");
    const caseEssai = document.createElement("td");
    const caseScore = document.createElement("td");
    caseEssai.textContent = essais;
    caseScore.textContent = score;
    ligne.appendChild(caseEssai);
    ligne.appendChild(caseScore);
    tableau.appendChild(ligne);

    //enlève la sélection après l'envoi
    document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
    document.querySelectorAll('select').forEach(el => el.value = "");
    document.getElementById("resolutions").value = "";
}
