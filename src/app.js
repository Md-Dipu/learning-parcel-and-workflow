// Udate the main title text dynamically using its element ID
const title = document.getElementById('mainTitle');
title.innerText = 'I changed it using javascript.';

// Attach a click event listener to the first button, triggerig an alert when clicked!
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  alert('Hello Everyone.');
});
