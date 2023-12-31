const cardTemplate = function (el) {
    return `<div class="card">
                <img id="flag-image" src="${el.Imagen}" alt="flag" />
                <h1 class="center">${el.Nombre}</h1>
              </div>`;
  };
  
  const countriesNode = document.getElementById("master");
  
  fetch('https://apisimpsons.fly.dev/api/personajes?limit=40')
  .then(function (response) {
    return response.json();
})
.then(function (countries) {
    console.log({countries})
    countries.docs.forEach((el) => {
        countriesNode.innerHTML += cardTemplate(el);
      });
    });