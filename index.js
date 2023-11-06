fetch('https://apisimpsons.fly.dev/api/personajes?limit=40')
 .then(response => response.json())
 .then(data => {
  const characters = data.results;
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  const frames = document.querySelectorAll('.frame');
  frames.forEach(frame => {
    const img = document.createElement('img');
    img.src = randomCharacter.imagen;
    img.onerror = function() {
      console.error('Error loading image:', this.src);
    };
    frame.appendChild(img);
  });
 })
 .catch(error => console.error('Error:', error));
