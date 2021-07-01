import { buttonWithImg } from './button.js';
import { divElement } from './div.js';
import { imgElement } from './img.js';
import { pElement } from './p.js';
import { spanElement } from './span.js';

export const postDiv = (className = 'post', idName = '') => {
  const newPostDiv = document.createElement('div');

  newPostDiv.className = className;
  newPostDiv.id = idName;

  const postTopDivElement = postTopDiv();
  newPostDiv.appendChild(postTopDivElement);

  const postMediaDivElement = postMediaDiv();
  newPostDiv.appendChild(postMediaDivElement);

  const postBottomDivElement = postBottomDiv();
  newPostDiv.appendChild(postBottomDivElement);

  return newPostDiv;
};

const postBottomDiv = () => {
  const postBottomDiv = divElement('post-bottom');

  const buttonsDiv = divElement('buttons');
  const div = divElement();
  div.appendChild(imgElement('.././assets/posts/heart-icon.svg', 'heart icon'));
  div.appendChild(
    imgElement('.././assets/posts/comment-icon.svg', 'comment icon')
  );
  div.appendChild(
    imgElement('.././assets/posts/direct-icon.svg', 'direct icon')
  );

  buttonsDiv.appendChild(div);

  const button_with_img = buttonWithImg(
    '',
    '',
    '.././assets/posts/collect-icon.svg',
    'collect icon'
  );

  buttonsDiv.appendChild(button_with_img);

  const span = spanElement('', 'likes');
  //TODO refactor accordingly
  span.innerHTML = `Liked by <a href="../#">user__</a> and
  <strong>73 others</strong>`;

  const p = pElement('');
  p.innerHTML = `<a href="../https://github.com/leocosta1" target="_blank"
    >leocosta1</a>
    Responsive clone of Instagram UI. Made with love, for study
    purposes. ❤`;

  postBottomDiv.appendChild(buttonsDiv);
  postBottomDiv.appendChild(span);
  postBottomDiv.appendChild(p);

  return postBottomDiv;
};

const postMediaDiv = () => {
  const postMediaDiv = divElement('post-media');

  postMediaDiv.appendChild(
    imgElement('../images/posts/insta-clone.png', 'Post')
  );

  return postMediaDiv;
};

const postTopDiv = () => {
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

  return postTopDiv;
};
