import { buttonWithImg } from './button.js';
import { divElement } from './div.js';
import { imgElement } from './img.js';

export const postDiv = (className = 'post', idName = '') => {
  const newPostDiv = document.createElement('div');

  newPostDiv.className = className;
  newPostDiv.id = idName;

  const postTopDiv = divElement('post-top');
  const profileDiv = divElement('profile');
  const avatarDiv = divElement('avatar');
  const imgEl = imgElement('../images/posts/default-user.png', 'User');

  avatarDiv.appendChild(imgEl);
  profileDiv.appendChild(avatarDiv);
  postTopDiv.appendChild(profileDiv);

  const button = buttonWithImg(
    '',
    '',
    '.././assets/posts/three-dots.svg',
    'three dots'
  );
  postTopDiv.appendChild(button);

  newPostDiv.appendChild(postTopDiv);

  const postMediaDiv = divElement('post-media');
  newPostDiv.appendChild(postMediaDiv);

  const postBottomDiv = divElement('post-top');
  newPostDiv.appendChild(postBottomDiv);

  return newPostDiv;
};
