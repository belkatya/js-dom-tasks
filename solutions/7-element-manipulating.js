import camelCase from 'lodash/camelCase';

// BEGIN
export default (document) => {
    const allElements = document.body.getElementsByTagName('*');
    for (const element of allElements) {
        const classList = element.classList;
        const classNames = Array.from(classList);
        for (const className of classNames) {
            const camelCaseName = camelCase(className);
            if (camelCaseName !== className) {
                classList.replace(className, camelCaseName);
            }
        }
    }
}
// END