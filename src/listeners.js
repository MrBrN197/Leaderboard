import { initializeScoreboard, addToScoreBoard } from './dom-functions.js';

export default () => {
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', initializeScoreboard);
  refreshBtn.click();

  const formElem = document.querySelector('form');
  const userInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    addToScoreBoard(userInput.value, scoreInput.value);
  });
};