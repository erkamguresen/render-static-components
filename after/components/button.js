import { imgElement } from './img.js';
import { storiesSpan, spanElement } from './span.js';

export const storiesButton = (className = '', idName = '') => {
  const button = document.createElement('button');
  button.className = className;
  button.id = idName;

  let span = storiesSpan('avatar');
  button.appendChild(span);

  span = spanElement('insta story', 'name');
  button.appendChild(span);
  return button;
};

export const buttonWithImg = (
  buttonClassName = '',
  buttonIdName = '',

  imgSrc,
  imgAlt = '',
  imgClassName = '',
  imgIdName = ''
) => {
  const returnButton = document.createElement('button');
  returnButton.className = buttonClassName;
  returnButton.id = buttonIdName;

  returnButton.appendChild(imgElement(imgSrc, imgAlt, imgClassName, imgIdName));

  return returnButton;
};
