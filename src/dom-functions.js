import { getScores } from './api.js';

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
        <input type="text" name="name" id="name" placeholder="Your name">
        <input type="number" name="score" id="score" placeholder="Your score">
        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
  `;
  document.body.innerHTML = initialHTML;
};

export const refreshScoreBoard = () => {
  const scoreboard = document.getElementById('scoreboard');
  getScores().then((scores) => {
    console.log('scores: ', scores);

    scoreboard.innerHTML = '';
    scores.result.forEach(({ user, score }) => {
      console.log(user, score);
      const scoreLi = document.createElement('li');
      scoreLi.textContent = `${user}: ${score}`;
      scoreboard.appendChild(scoreLi);
    });
  });
};
