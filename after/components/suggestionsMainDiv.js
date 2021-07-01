import { divElement, profileDivElement } from './div.js';
import { headingElement } from './h.js';

export const suggestionsDiv = (className = '', idName = '') => {
  const newSuggestionsDiv = document.createElement('div');

  newSuggestionsDiv.className = className;
  newSuggestionsDiv.id = idName;

  newSuggestionsDiv.appendChild(headingElement(3, 'Suggestions for you'));

  const profilesDiv = divElement('profiles');
  profilesDiv.appendChild(profileDivElement('user_nick'));
  profilesDiv.appendChild(profileDivElement('user_nick'));
  profilesDiv.appendChild(profileDivElement('user_nick'));

  newSuggestionsDiv.appendChild(profilesDiv);

  return newSuggestionsDiv;
};
