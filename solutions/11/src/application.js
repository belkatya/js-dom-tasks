import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = document.querySelectorAll('[data-autocomplete]');
  inputs.forEach(input => {
    const autocompleteUrl = input.dataset.autocomplete;
    const autocompleteName = input.dataset.autocompleteName;
    const list = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`);
    input.addEventListener('input', async (e) => {
      const searchTerm = e.target.value;
      const url = new URL(autocompleteUrl, window.location.origin);
      url.searchParams.append('search', searchTerm);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const countries = await response.json();
        list.innerHTML = '';
        if (countries.length > 0) {
          countries.forEach(country => {
            const listItem = document.createElement('li');
            listItem.textContent = country;
            list.appendChild(listItem);
          });
        } else {
          const listItem = document.createElement('li');
          listItem.textContent = 'Nothing';
          list.appendChild(listItem);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        list.innerHTML = '<li>Error fetching data</li>';
      }
    });
  });
  // END
};
