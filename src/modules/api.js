const gameName = 'PokerjackAndDragons';
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const uniqueId = 'PokerjackAndDragons12341234'

// const start = async (name = gameName) => {
//   const apiId = await fetch(apiURL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name,
//     }),

//   });
//   await apiId.json();
//   return apiId;
// };

// const uniqueId = start;
// console.log(uniqueId);

const post = async (userName, userScore, gameId = uniqueId) => {
  const scoresURL = `${apiURL}/${gameId}/scores`;

  const results = await fetch(scoresURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),

  });

  await results.json();
  return results;
};

const get = async (gameId = uniqueId) => {
  const scoresURL = `${apiURL}/${gameId}/scores`;
  const data = await fetch(scoresURL);
  const userScores = await data.json();

  return userScores;
};

export { get, post, start };