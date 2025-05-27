// BEGIN
export default (dom) => {
    const paragraphs = [];
    const paragraphSearch = (node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.tagName === 'P') {
                paragraphs.push(node.textContent.trim());
            } 
            else {
                for (const child of node.children) {
                    paragraphSearch(child);
                }
            }
        }
    };

    paragraphSearch(dom);
    return paragraphs;
}
// END