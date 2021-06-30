export const userDiv = (className = '', idName = '') => {
  const newUserDiv = document.createElement('div');

  newUserDiv.className = className;
  newUserDiv.id = idName;

  //TODO change it later
  newUserDiv.innerText = 'User Part';
  return newUserDiv;
};
