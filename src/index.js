import './styles.css';

import { post, get, start } from './modules/api.js';

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const gameIdFromStorage = () => {
  const localStorageID = localStorage.getItem('ID')
    ? JSON.parse(localStorage.getItem('ID'))
    : null;
  return localStorageID;
};

const saveCreate = () => {
  const data = {
    name: 'Poker Jack and Dragons',
  };
  if (!gameIdFromStorage()) {
    window.addEventListener('load', async () => {
      const { result } = await start(`${apiURL}games`, data);
      const gameID = result.substr(14, 20);
      localStorage.setItem('ID', JSON.stringify(gameID));
    });
  }
};

const submit = () => {
  const data = {
    user: '',
    score: '',
  };
  const userInputField = document.querySelector('.name');
  const scoreInputField = document.querySelector('.score');
  const submitButton = document.querySelector('.submit');

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    data.score = scoreInputField.value;
    data.user = userInputField.value;
    const url = `${apiURL}games/${gameIdFromStorage()}/scores/`;
    await post(url, data);
    userInputField.value = '';
    scoreInputField.value = '';
    window.location.reload();
  });
};

const getScores = async () => {
  const ulTag = document.querySelector('.leaderboard');
  const liTag = document.createElement('li');
  const url = `${apiURL}games/${gameIdFromStorage()}/scores/`;
  const { result } = await get(url);
  result.sort((a, b) => b.score - a.score);
  result.forEach((item) => {
    liTag.textContent = `${item.user}:${item.score} `;
    ulTag.appendChild(liTag.cloneNode(true));
  });
};

const refresh = document.querySelector('.update');
refresh.addEventListener('click', () => {
  window.location.reload();
});

getScores();
saveCreate();
submit();
