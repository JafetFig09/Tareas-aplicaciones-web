document.getElementById("demo").innerHTML = "Hola Mundo";

document.getElementById("p1").innerHTML = "Nuevo Texto";

const elemento = document.getElementById("titulo");
elemento.innerHTML = "Nuevo Encabezado";

const x = document.getElementById("main");
console.log(x);


const y = x.getElementsByTagName("p");
console.log(y);


const p = document.getElementsByClassName("intro");
console.log(p);



const elementos = document.querySelectorAll("p.intro");
console.log(elementos);


const listItems = document.querySelectorAll("ul > li");
console.log(listItems);


const h1Element= document.querySelector("h1");
console.log(h1Element);

const list = document.querySelector(".list");
console.log(list);

const listaDeElementos = document.querySelectorAll("ul > li");

listaDeElementos.forEach((item) => {console.log(item);})



const h1 = document.querySelector("h1");

h1.style.color = "blue";

const form = document.forms["form1"];
let texto = "";

for(let i = 0 ; i< form.length; i++){
    texto += form.elements[i].value + "<br>";
}

console.log(texto);


let lista = document.createElement("ul");
document.body.appendChild(lista);

let elemento1 = document.createElement("li");
elemento1.textContent = "Flor";
lista.appendChild(elemento1);

let elemento2 = document.createElement("li");
elemento2.textContent = "Jaguar";
lista.appendChild(elemento2);



const buton = document.getElementById("btn");

buton.addEventListener("click", () =>{
    alert("Gracias por dar click");
});
 function validarFormulario() {
 let formulario = document.forms['miFormulario']['nombre'].value;
     if (formulario == "") {
        alert("Se debe completar el nombre");
        return false;
      }
}

function MiFunction(){
    let x = document.getElementById("numero").value;

    let texto;

    if(isNaN(x) || x < 1 || x > 10){
        texto = "Entrada No Valida";
    }else{
        texto = "Entrada Correcta";
    }

    document.getElementById("parrafo").innerHTML = texto;
}


document.getElementById("miImagen").src = "image/perro.jpg";

document.getElementById("demo").innerHTML = "Fecha: "+Date();

  
  