// BEGIN
export default (document) => {
    const divs = document.querySelectorAll('div');
    divs.forEach((div) => {
        Array.from(div.childNodes).forEach((child) => {
            if (child instanceof Text) {
                const textContent = child.textContent;
                if (textContent.trim() !== '') {
                    const p = document.createElement('p');
                    p.textContent = textContent;
                    child.replaceWith(p);
                }
            }
        });
    });
}
// END