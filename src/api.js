export const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

export const GAME_ID = 'sa7iLyWCcC3Ao7tJMfAb';

export const getScores = () => fetch(`${BASE_URL}/games/${GAME_ID}/scores`)
  .then((resp) => resp.json());

export const addScore = (username, score) => fetch(
  `${BASE_URL}/games/${GAME_ID}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: username,
      score,
    }),
  },
).then((resp) => resp.json());