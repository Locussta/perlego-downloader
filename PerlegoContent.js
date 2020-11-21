function printPages(start, end) {
    document.querySelector("style").remove();
    let printContents = "";
    let i = start;
    function downloadPage() {
        setTimeout(()=>{
            let content = document.querySelector(`div[data-chapterid='${i}']`);
            content.scrollIntoView();
            if (content.querySelector(".pdfplaceholder") == null) {
                printContents += content.innerHTML + "<br>";
                i++;
            }
            if (i <= end) {
                downloadPage();
            }
            if (i == end + 1) {
                document.body.innerHTML = printContents;
                console.log("Reading...");
                setTimeout(()=>{
                    window.print();
                    location.reload();
                }
                , (end - start) * 100);
            }
        }
        , 1000);
    }
    downloadPage();
}
