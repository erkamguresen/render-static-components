import { imgElement } from './img.js';

export const divElement = (className = '', idName = '') => {
  const newPostDiv = document.createElement('div');

  newPostDiv.className = className;
  newPostDiv.id = idName;

  return newPostDiv;
};

export const profileDivElement = (userName) => {
  const newPostDiv = document.createElement('div');

  newPostDiv.className = 'profile';

  const avatarDiv = divElement('avatar');
  avatarDiv.appendChild(imgElement('../images/posts/default-user.png', 'User'));
  newPostDiv.appendChild(avatarDiv);

  const descDiv = divElement('desc');
  descDiv.innerHTML = `
    <a href="../#">${userName}</a>
    <span>Followed by <a href="../#">another-user</a>
      and more 12 people</span>`;
  newPostDiv.appendChild(descDiv);

  return newPostDiv;
};
