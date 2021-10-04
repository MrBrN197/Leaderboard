import { refreshScoreBoard } from './dom-functions.js';

/* eslint-disable-next-line import/prefer-default-export */
export const createEventListeners = () => {
  console.log('creating event listeners');
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', refreshScoreBoard);
  refreshBtn.click();
};