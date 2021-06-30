export const imgElement = (src, alt = '', className = '', idName = '') => {
  const img = document.createElement('img');

  img.src = src;
  img.alt = alt;
  img.className = className;
  img.id = idName;

  return img;
};
