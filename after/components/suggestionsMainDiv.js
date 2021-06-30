export const suggestionsDiv = (className = '', idName = '') => {
  const newSuggestionsDiv = document.createElement('div');

  newSuggestionsDiv.className = className;
  newSuggestionsDiv.id = idName;

  //TODO change it later
  newSuggestionsDiv.innerText = 'Suggestions Part';
  return newSuggestionsDiv;
};
