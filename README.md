# Perlego EBook Downloader

**For personal use only.** 

College students that have used Perlego before know that downloading EBooks for offline viewing is not easy. This repository contains scripts that help paying users download their EBooks without hassle. 

**For the most basic use case (Less than ~200 pages):** 
1. Open Ebook in a browser (currently only ones available as PDF). 
1. Go to the page you want to start printing. 
1. Open Chrome's developer console [via the UI](https://developers.google.com/web/tools/chrome-devtools/open#chrome).
1. Paste the content of `PerlegoContent.js` into the console and press enter. 
1. Enter `printPages(startPage, endPage)` into the console, where `startPage` is the page number you want to start printing on, and `endPage` is the page number of the page you want to end on. 
1. Wait for the script to finish running, and you should be prompted to save the pdf. 

If you want to download an entire textbook, it is recommended that you download the book in sections of around 150 pages to reduce the load on the browser. You could then combine the pdfs together using external tools such as `pdfunite`. 

Please note that `PerlegoContent.js` does not save the menu(outline) of the pdf, for that you need to use `PerlegoOutline.js` as described below. 

**Procedure for downloading an entire textbook with the menu intact:** 
1. Download all sections of the Ebook using `PerlegoContent.js`, make sure you name your pdfs `part_1.pdf`, `part_2.pdf`, etc. in the `Downloads` folder. 
2. Make sure you have `poppler-utils` installed to combine the pdfs, and `fntsample` installed to add the outline. 
3. Run `PerlegoOutline.js` from the "Table of contents" page of the Ebook (between "Book details" and "Related") in developer console. 
4. (optional) You can customise the downloaded `outline.txt` according to [this specification](http://manpages.ubuntu.com/manpages/bionic/man1/pdfoutline.1.html). 
5. In the `Downloads` folder, open a local terminal and run the following commands: 

	```
	# Combine the pdfs into one
	pdfunite part_*.pdf temp.pdf

	# Add the outline of the pdf
	pdfoutline temp.pdf outline.txt output.pdf

	# Clean up
	rm part_*.pdf temp.pdf outline.txt
	```
