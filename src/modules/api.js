const start = async (url, data) => {
  const apiId = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: data.name,
    }),
  });
  return apiId.json();
};

const post = async (url, data) => {
  const results = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: data.user,
      score: data.score,
    }),
  });
  return results.json();
};

const get = async (url) => {
  const userScores = await fetch(url);

  return userScores.json;
};

export { get, post, start };