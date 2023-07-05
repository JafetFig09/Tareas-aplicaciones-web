let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let post = document.getElementById("post");

const data = {};

form.addEventListener("submit", ( parametro ) => {
  parametro.preventDefault();
  formValidation();
});


const formValidation = () => {
  if (textarea.value === "") {
    msg.innerHTML = "El comentario no puede estar vacio.";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};



const acceptData = () => {
  data["text"] = textarea.value;
  createPost();
};

const createPost = () => {
  post.innerHTML += `
    <div class="contenedor-comentario">
      <p class="comentario">${data.text}</p>
      <span>
        <i onclick="editpost(this)" class="fas fa-edit"></i>
        <i onclick="deletepost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `
    textarea.value = "";
};

const  editpost = ( parametro ) => {
    textarea.value = parametro.parentElement.previousElementSibling.innerHTML;
    parametro.parentElement.parentElement.remove();
}

const deletepost = ( parametro ) => {
    parametro.parentElement.parentElement.remove();
}