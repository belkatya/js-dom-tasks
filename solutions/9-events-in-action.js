export default () => {
  // BEGIN

  const tabButtons = document.querySelectorAll('[data-bs-toggle]');
  tabButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      let target = document.querySelector(button.dataset.bsTarget);
      if (!target) {
        return;
      }
      let nav = button.closest('.nav');
      if (!nav) {
        return;
      }
      let allButtonsInNav = nav.querySelectorAll('[data-bs-toggle]');
      allButtonsInNav.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      let contentContainer = nav.parentElement.querySelector('.tab-content');
      if (!contentContainer) {
        contentContainer = nav.closest('.row, .container')?.querySelector('.tab-content');
      }
      if (!contentContainer) {
          return;
      }
      const allPanes = contentContainer.querySelectorAll('.tab-pane');
      allPanes.forEach(pane => pane.classList.remove('active'));
      target.classList.add('active');
    });
  });
  // END
};