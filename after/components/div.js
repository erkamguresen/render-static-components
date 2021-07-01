export const divElement = (className = '', idName = '') => {
  const newPostDiv = document.createElement('div');

  newPostDiv.className = className;
  newPostDiv.id = idName;

  return newPostDiv;
};
