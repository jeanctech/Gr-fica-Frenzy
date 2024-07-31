// Inicializar variables
let score = 0;
let currentLevel = 0;
const levels = [
  { function: "y = 2x + 1", difficulty: "Fácil" },
  { function: "y = 3x - 2", difficulty: "Medio" },
  { function: "y = 4x + 3", difficulty: "Difícil" },
];

// Función para generar una función lineal aleatoria
function generateFunction() {
  const m = Math.random() * 10 - 5;
  const b = Math.random() * 10 - 5;
  return `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`;
}

// Función para dibujar la gráfica
function drawGraph(m, b) {
  const graphContainer = document.getElementById("graph-container");
  graphContainer.innerHTML = "";
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 400;
  graphContainer.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - (b * canvas.height) / 10);
  ctx.lineTo(
    canvas.width,
    canvas.height - ((m * canvas.width) / 10 + (b * canvas.height) / 10)
  );
  ctx.stroke();
}

// Función para verificar la respuesta del usuario
function checkAnswer() {
  const userInput = document.getElementById("user-input").value;
  const correctFunction = levels[currentLevel].function;
  if (userInput === correctFunction) {
    document.getElementById("feedback").innerHTML = "¡Correcto!";
    nextLevel();
  } else {
    document.getElementById("feedback").innerHTML =
      "Incorrecto. La función correcta es " + correctFunction;
  }
}

// Función para avanzar al siguiente nivel
function nextLevel() {
  currentLevel++;
  if (currentLevel >= levels.length) {
    // Mostrar pantalla de victoria
    document.getElementById("game-container").innerHTML =
      "¡Felicidades! Has completado todos los niveles.";
  } else {
    showLevel(levels[currentLevel]);
  }
}

// Función para mostrar el nivel actual
function showLevel(level) {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = `Nivel ${currentLevel + 1} - ${level.difficulty}<br>y = ${level.function}`;
  const [_, m, b] = level.function.match(/y = ([\d.-]+)x \+ ([\d.-]+)/);
  drawGraph(parseFloat(m), parseFloat(b));
}

// Función para compartir en Twitter
document.getElementById("share-twitter").addEventListener("click", () => {
  const tweet = `Acabo de resolver ${levels.length} funciones lineales en Gráfica Frenzy! Mi puntuación es ${score}. #GráficaFrenzy`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  window.open(url, "_blank");
});

// Función para compartir en Facebook
document.getElementById("share-facebook").addEventListener("click", () => {
  const post = `Acabo de resolver ${levels.length} funciones lineales en Gráfica Frenzy! Mi puntuación es ${score}.`;
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post)}`;
  window.open(url, "_blank");
});

// Mostrar nivel inicial
showLevel(levels[currentLevel]);
