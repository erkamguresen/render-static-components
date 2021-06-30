import { imgElement } from './img.js';

export const storiesSpan = (className = '', idName = '') => {
  const span = document.createElement('span');
  span.className = className;
  span.id = idName;

  const img = imgElement('../images/posts/default-user.png', 'User');

  span.appendChild(img);

  return span;
};

export const spanElement = (text, className = '', idName = '') => {
  const span = document.createElement('span');
  span.className = className;
  span.id = idName;
  span.textContent = text;

  return span;
};
