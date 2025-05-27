export default () => {
  // BEGIN
  const button = document.getElementById('alert-generator');
  const alertsContainer = document.querySelector('.alerts');
  let alertCount = 0;
  button.addEventListener('click', () => {
    alertCount++;
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'alert-primary');
    alertDiv.textContent = `Alert ${alertCount}`;
    alertsContainer.insertBefore(alertDiv, alertsContainer.firstChild);
  });
  // END
};