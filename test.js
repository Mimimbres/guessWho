const cardTemplate = function (el) {
    return `<div class="card">
               <img id="flag-image" src="${el.Imagen}" width=150px aspect-ratio=auto height= 362px />
               <h1 class="center">${el.Nombre}</h1>
             </div>`;
   };
   
   const countriesNode = document.getElementById("countries");
   
   fetch('https://apisimpsons.fly.dev/api/personajes?limit=650')
   .then(function (response) {
    return response.json();
   })
   .then(function (countries) {
    let limitedCountries = countries.docs.slice(0, 24);
    shuffleArray(limitedCountries);
    limitedCountries.forEach((el) => {
       countriesNode.innerHTML += cardTemplate(el);
    });
   });
   
   function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
   }
   