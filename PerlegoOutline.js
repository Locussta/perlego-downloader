function download(filename, text) {
    const pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        const event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}

const table = Array.from(document.querySelectorAll('h2')).find(el=>el.textContent === 'Table of contents').parentNode;
const labels = table.querySelectorAll("a");
let output = "";
labels.forEach((label)=>{
    const linkElems = label.getAttribute("href").split('/');
    const pageNum = linkElems[linkElems.length - 1];
    const textContent = label.innerText;
    output += `0 ${pageNum} ${textContent}\n`;
}
);

download('outline.txt', output);
