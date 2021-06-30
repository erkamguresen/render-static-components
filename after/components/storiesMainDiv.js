export const storiesDiv = (className = '', idName = '') => {
  const newStoriesDiv = document.createElement('div');

  newStoriesDiv.className = className;
  newStoriesDiv.id = idName;

  //TODO change it later
  newStoriesDiv.innerText = 'Stories Part';
  return newStoriesDiv;
};
