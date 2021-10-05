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
        <input type="text" name="name" id="name" placeholder="Your name" required>
        <input type="number" name="score" id="score" placeholder="Your score" required>
        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
  `;
  document.body.innerHTML = initialHTML;
};

export const initializeScoreboard = () => {
  const scoreboard = document.getElementById('scoreboard');
  getScores().then((scores) => {
    scoreboard.innerHTML = '';
    scores.result.forEach(({ user, score }) => {
      const scoreLi = document.createElement('li');
      scoreLi.textContent = `${user}: ${score}`;
      scoreboard.appendChild(scoreLi);
    });
  });
};

export const addToScoreBoard = async (usernameValue, scoreValue) => {
  const username = usernameValue.trim();
  const score = parseInt(scoreValue.trim(), 10);
  if (!username || !score) return false;
  return addScore(username, score).then((response) => {
    if (response.message) return false;
    return true;
  });
};

export const setDisabledState = (element, state) => {
  element.disabled = !!state;
};