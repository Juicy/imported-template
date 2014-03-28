// `document.currentScript.ownerDocument` references this import's document
console.info("/partials/wellBehaved/external.js was executed in imported document", 
	document.currentScript.ownerDocument);
// `document` references the main document (the page that's importing us)