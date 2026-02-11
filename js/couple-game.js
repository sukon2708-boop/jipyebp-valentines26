const questions = [
  {
    q: "Where was our first date?",
    c: ["An Indian restaurant", "An Italian restaurant", "A Vietnamese restaurant"],
    correct: 0,
    
  },
  {
    q: "Where is my favorite date place?",
    c: ["The beach", "Chiang Mai", "Anywhere as long as I’m with you "],
    correct: 2,
    
  },
  {
    q: " What is my impression of you?",
    c: ["Handsome", "Honest", "Kind, warm, and caring toward people around you (includes 1 and 2)"],
    correct: 2,
  
  },
  {
    q: "What is the first movie we watched together?”?",
    c: ["Star Wars", "Stitch", "Tiger"],
    correct: 1,
    
  },
  {
    q: "When do you think I feel most drawn to you?",
    c: ["When you look at me without saying a word", "When you’re close enough that I can feel you", "Every moment you’re around"],
    correct: 2,
    
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " That’s exactly right!";
  } else {
    answerHint.textContent = " That’s okay, no worries";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>Game Over </h2>
    <p class="subtle">You scored</p>
    <h6>${score} / ${questions.length}Final Score</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "An amazing match — truly meant for each other";
  if (score >= 3) return "Just the right amount of sweetness, so lovely ";
  return "Love isn’t about the score, it’s about the heart";
}

renderQuestion();
