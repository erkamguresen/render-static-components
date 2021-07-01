export const divElement = (className = '', idName = '') => {
  const newDivElement = document.createElement('div');

  newDivElement.className = className;
  newDivElement.id = idName;

  return newDivElement;
};
