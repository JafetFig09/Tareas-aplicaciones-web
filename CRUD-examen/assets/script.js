//Variables 
const game=document.querySelector("#game"); 
const dates=document.querySelector("#dates") 
const descripcion = document.querySelector("#descripcion");  
const post = document.querySelector("#post");
const abrirModal = document.querySelector("#modal-open");




form_modal.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidar();
});


//Valida si los campos del form esta vacio, si lo estan muestra un al

const formValidar = () => {
  if (descripcion.value === "" && game.value=== "" && dates.value === "") {
    Swal.fire(
      'NO PUEDES DEJAR VACIO LOS CAMPOS',
      'Presiona el boton OK',
      'warning'
    )

      
  } else {
    acceptData();
  }
};


let games={};
let dates_games={};
let descripciones={};

const acceptData = () => {
  games["text"]= game.value;
  dates_games["text"]=dates.value;
  descripciones["text"] = descripcion.value;
  createPost();
  modal.close(); 
};

const createPost = () => {

  post.innerHTML += `
    <div class="container__post">
      <p>Nombre:${games.text}</p>
      <p>Fecha de lanzamiento: ${dates_games.text}</p>
      <p>Descripcion:${descripciones.text}</p>
      <span>
        <i onclick="editpost(this)" class='bx bxs-edit' style='color:#1022c9' ></i>
        <i onclick="deletepost(this)" class='bx bxs-trash-alt' style='color:#ec0a41'  ></i>
      </span>
    </div>
  `;
  descripcion.value = "";
  game.value="";
};


// Editar comentarios
const editpost = (e) => {
  game.value=e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  descripcion.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  modal_open();
}

const deletepost = (e) => {
  e.parentElement.parentElement.remove();
}

const deleteAll =(e)=>{
  e.parentElement.remove();
}




const modal_open=()=>{
  modal.showModal();
};

const modal_close=()=>{

   
  modal.close();
  
};


