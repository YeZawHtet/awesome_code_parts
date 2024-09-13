
  const div = document.querySelector('div');

  let isDragging = false;
  let startX, startY, initialX, initialY;

  div.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    initialX = div.offsetLeft;
    initialY = div.offsetTop;
    div.style.cursor = 'grabbing'; // Change the cursor when dragging
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      div.style.left = initialX + deltaX + 'px';
      div.style.top = initialY + deltaY + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    div.style.cursor = 'grab'; // Reset the cursor when done dragging
  });