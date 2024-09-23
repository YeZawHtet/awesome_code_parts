const div = document.querySelector('div');
  
// Function to move the div randomly within the viewport
function moveDiv() {
  // Get the viewport width and height
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Get random x and y positions within the bounds of the viewport
  const randomX = Math.random() * (viewportWidth - div.offsetWidth);
  const randomY = Math.random() * (viewportHeight - div.offsetHeight);

  // Update the position of the div
  div.style.left = randomX + 'px';
  div.style.top = randomY + 'px';
}

// Move the div every 1 second (1000ms)
setInterval(moveDiv, 3000);