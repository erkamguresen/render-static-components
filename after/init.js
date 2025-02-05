import { data } from './data.js';

// import components
import { storiesDiv } from './components/storiesMainDiv.js';
import { postDiv } from './components/postMainDiv.js';
import { userDiv } from './components/userMainDiv.js';
import { suggestionsDiv } from './components/suggestionsMainDiv.js';

// render and append components
const storiesRoot = document.getElementById('stories-root');
storiesRoot.appendChild(storiesDiv('stories'));

const postRoot = document.getElementById('post-root');
postRoot.appendChild(postDiv('post'));
postRoot.appendChild(postDiv('post'));

const userRoot = document.getElementById('user-root');
userRoot.appendChild(userDiv('user-profile'));

const suggestionsRoot = document.getElementById('suggestions-root');
suggestionsRoot.appendChild(suggestionsDiv('suggestions'));
