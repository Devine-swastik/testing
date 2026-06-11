document.getElementById('move-random').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Get random position
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 100);
  
  // Set button position
  this.style.position = 'fixed';
  this.style.left = randomX + 'px';
  this.style.top = randomY + 'px';
});
