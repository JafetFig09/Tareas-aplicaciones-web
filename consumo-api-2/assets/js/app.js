
const miModulo = (() => {
  'use strict';

  //Seleciona los elementos del HTML
  const contenedorCartas = document.querySelector(".contenedor-cartas");
  const boton = document.querySelector(".boton");
  
  //Funcion que consume la API y pinta el HTML
  const getPokemon = async () => {
    contenedorCartas.innerHTML ='';
    for (let i = 0; i < 12; i++) {
      let numeroPokemon = Math.floor(Math.random() * 1010) + 1;
      let url = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      const arrayTypes =[...data.types];
      const tipes = arrayTypes.map((item) => item.type.name).join(", ");
      
      contenedorCartas.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
          <div class="card carta">
            <img src="${data.sprites.other['official-artwork'].front_default}" class="card-img-top img-fluid"/>
            <div class="card-body cuerpo-carta  text-white ">
            <h5 class="card-title info"><strong class="titulo-card">Nombre:</strong> ${data.name}</h5>
            <h5 class="card-title info "><strong class="titulo-card">Tipos:</strong> ${tipes}</h5>
         
          </div>
          </div>
        </div>
      `;
     
    }
  
    
  };
  

  boton.addEventListener('click', () =>{
    contenedorCartas.innerHTML ='';
    getPokemon();
  })

  return{
    apiPokemon:getPokemon
  }

}) ();



