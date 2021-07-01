export const pElement = (text, className = '', idName = '') => {
  const pEl = document.createElement('p');
  pEl.className = className;
  pEl.id = idName;
  pEl.textContent = text;

  return pEl;
};
