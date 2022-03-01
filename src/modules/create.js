const list = document.querySelector('.leaderboard');

export default function create(array = []) {
  list.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    list.innerHTML += `<li>${array[i].index} type="checkbox"><input data-id="${array[i].index}" class= "taskEdit" type="text" value ="${array[i].description}"></li>`;
  }
}