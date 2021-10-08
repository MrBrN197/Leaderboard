import {
  initializeScoreboard,
  addToScoreBoard,
  setDisabledState,
  clearInput,
} from './dom-functions.js';

export default () => {
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', initializeScoreboard);
  refreshBtn.click();

  const formElem = document.querySelector('form');
  const userInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const submitInput = formElem.querySelector('input[type=submit]');
  formElem.addEventListener('submit', async (e) => {
    e.preventDefault();
    setDisabledState(submitInput, true);
    const success = await addToScoreBoard(userInput.value, scoreInput.value);
    if (success) initializeScoreboard();
    clearInput(userInput, scoreInput);
    setDisabledState(submitInput, false);
  });
};