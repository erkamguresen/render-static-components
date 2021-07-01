export const headingElement = (level, text) => {
  if (level < 0 || level > 6) return;

  const heading = document.createElement(`h${level}`);

  heading.textContent = text;

  return heading;
};
