import { storiesButton } from './button.js';

export const storiesDiv = (className = '', idName = '') => {
  const newStoriesDiv = document.createElement('div');

  newStoriesDiv.className = className;
  newStoriesDiv.id = idName;

  newStoriesDiv.appendChild(storiesButton('story'));
  newStoriesDiv.appendChild(storiesButton('story'));
  newStoriesDiv.appendChild(storiesButton('story'));
  newStoriesDiv.appendChild(storiesButton('story'));
  newStoriesDiv.appendChild(storiesButton('story'));
  newStoriesDiv.appendChild(storiesButton('story'));

  return newStoriesDiv;
};
