export default (document) => {
  // BEGIN
  const title = document.querySelector('h1').textContent;
  const description = document.querySelector('.description').textContent;
  const articleDivs = document.querySelectorAll('.links > div');
  const items = Array.from(articleDivs).map((articleDiv) => {
    const titleElement = articleDiv.querySelector('h2 a');
    const descriptionElement = articleDiv.querySelector('p');
    return {
      title: titleElement.textContent,
      description: descriptionElement.textContent,
    };
  });
  return {
    title: title,
    description: description,
    items: items,
  };
  // END
};
