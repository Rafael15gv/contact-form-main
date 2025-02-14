let boton = document.getElementsByTagName('button')[0];
// let body = document.getElementsByTagName('body')[0];




//CODIGO PARA DARLE COLOR AL BOTON CUANDO SE DA CLIC A CONSETN**********************************
document.getElementById("consent").addEventListener("change", function() {
  if (this.checked) {
    boton.style.backgroundColor = "var(--green-medium-color)";
  } else {
    boton.style.backgroundColor = "var(--green-lighter-color)";
    // document.body.style.backgroundColor = "white";
  }
});








  // CODIGO PARA VALIDAR INFORMACION***************************************

document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que la página se recargue

  let nombre = document.getElementById("fname").value;
  let apellido = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let enquiry = document.getElementById("general-enquiry").value;
  let support = document.getElementById("support-request").value;
  let mensaje = document.getElementById("message-client").value;
  
  let error = document.getElementById("prueba");
  let error2 = document.getElementById("prueba2");

  if (nombre.trim() === "") {
    // alert("El campo no puede esta vacio");
    event.preventDefault();
    error.classList.remove("error");
  } if (apellido.trim() === "") {
    // alert("El campo no puede esta vacio");
    event.preventDefault();
    error2.classList.remove("error");
  } if (apellido.trim() === "") {
    // alert("El campo no puede esta vacio");
    event.preventDefault();
    error2.classList.remove("error");
  }if (apellido.trim() === "") {
    // alert("El campo no puede esta vacio");
    event.preventDefault();
    error2.classList.remove("error");
  }  
  
  
  
  else {
    alert("Formulario enviado con éxito!");
    error.classList.add("error");
    error2.classList.add("error");
  }


});


