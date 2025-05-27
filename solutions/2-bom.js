// BEGIN
export default (url) => {
    location.href = url;
    const nameBrowser = navigator.appCodeName;
    const versionBrowser = navigator.appVersion;
    const urlBrowser = location.href;
    return `${nameBrowser}/${versionBrowser} ${urlBrowser}`;
}
// END