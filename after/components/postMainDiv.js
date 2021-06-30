export const postDiv = (className = '', idName = '') => {
  const newPostDiv = document.createElement('div');

  newPostDiv.className = className;
  newPostDiv.id = idName;

  //TODO change it later
  newPostDiv.innerText = 'Post Part';
  return newPostDiv;
};
