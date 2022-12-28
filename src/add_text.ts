let message: string = 'Cores: ';
// create a new heading 1 element
let heading = document.createElement('h3');
let cores :number = 4;

heading.textContent = message + cores;
// add the heading the document
document.body.appendChild(heading);