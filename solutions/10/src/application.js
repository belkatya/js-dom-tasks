import escapeHtml from 'escape-html';

// BEGIN
export default () => {
  const feedbackForm = document.querySelector('form');
  feedbackForm.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    const safeEmail = escapeHtml(feedbackForm.elements.email.value);
    const safeName = escapeHtml(feedbackForm.elements.name.value);
    const safeComment = escapeHtml(feedbackForm.elements.comment.value);
    const confirmationElement = document.createElement('div');
    confirmationElement.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${safeEmail}</div>
      <div>Name: ${safeName}</div>
      <div>Comment: ${safeComment}</div>`;
    feedbackForm.replaceWith(confirmationElement);
  });
};
// END