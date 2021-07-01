import { divElement } from './div.js';
import { imgElement } from './img.js';

export const userDiv = (className = '', idName = '') => {
  const newUserDiv = document.createElement('div');

  newUserDiv.className = className;
  newUserDiv.id = idName;

  const avatarDiv = divElement('avatar');
  avatarDiv.appendChild(imgElement('../images/posts/default-user.png', 'User'));

  newUserDiv.appendChild(avatarDiv);

  const descDiv = divElement('desc');
  descDiv.innerHTML = `<a href="../https://github.com/leocosta1" target="_blank"
  >leocosta1</a>
  <span>Always learning!</span>`;

  newUserDiv.appendChild(descDiv);

  return newUserDiv;
};
