// BEGIN
const parts = document.body.innerHTML.trim().split('\n');
const editedParts = parts.map((item) => `<p>${item}</p>`);
document.body.innerHTML = editedParts.join('\n');
// END