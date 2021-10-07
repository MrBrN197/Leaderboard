import { getScores, addScore } from './api.js';

export const initializePageHTML = () => {
  const initialHTML = `
  <header>
    <h1>Leaderboard</h1>
  </header>
  <main>
    <section class="leaderboard">
      <div class="header">
        <h2>Recent scores</h2>
        <button id="refresh-btn" type="button">Refresh</button>
      </div>
      <ul id="scoreboard">
      </ul>
    </section>
    <section class="add-score">
      <div class="header">
        <h2>Add your score</h2>
      </div>
      <form action="#">
        <input type="text" name="name" id="name" placeholder="Your name" required autocomplete="off">
        <input type="number" name="score" id="score" placeholder="Your score" required autocomplete="off">
        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
  `;
  document.body.innerHTML = initialHTML;
};

export const createScoreCardElement = (user, score) => {
  const scoreLi = document.createElement('li');

  const innerHTML = `
    <div>
      <div class="details">
        <span class="name">${user}</span>
        <span class="name">${score}</span>
      </div>
      <div class="progress"></div>
    </div>
  `;

  scoreLi.classList.add('score-card');
  // scoreLi.classList.add('active');
  scoreLi.innerHTML = innerHTML;
  return scoreLi;
};

export const initializeScoreboard = async () => {
  const scoreboard = document.getElementById('scoreboard');
  const scores = await getScores();
  scores.result.sort((a, b) => b.score - a.score);

  const maxScore = scores.result[0].score;

  scoreboard.innerHTML = '';
  scores.result.forEach(({ user, score }) => {
    const scoreCard = createScoreCardElement(user, score);
    scoreboard.appendChild(scoreCard);
    scoreboard.getBoundingClientRect(); // NOTE: neccessary for transition to work

    scoreCard.querySelector('.progress').style.width = `${(score / maxScore) * 100}%`;
    scoreCard.querySelector('.progress').classList.add('active');
  });
};

export const addToScoreBoard = async (usernameValue, scoreValue) => {
  const username = usernameValue.trim();
  const score = parseInt(scoreValue.trim(), 10);
  if (!username || !score) return false;
  const response = await addScore(username, score);
  if (response.message) return false;
  return true;
};

export const setDisabledState = (element, state) => {
  element.disabled = !!state;
};

export const clearInput = (...inputs) => inputs.forEach((input) => { input.value = ''; });