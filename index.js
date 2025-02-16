// let body = document.getElementsByTagName('body')[0];




//CODIGO PARA DARLE COLOR AL BOTON CUANDO SE DA CLIC A CONSETN**********************************
let boton = document.getElementsByTagName('button')[0];
document.getElementById("consent").addEventListener("change", function() {
  if (this.checked) {
    boton.style.backgroundColor = "var(--green-medium-color)";
  } else {
    boton.style.backgroundColor = "var(--green-lighter-color)";
    // document.body.style.backgroundColor = "white";
  }
});








//   // CODIGO PARA VALIDAR INFORMACION***************************************

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que la página se recargue
  
  let check = document.getElementsByTagName("input")[5].checked;
  let nombre = document.getElementById("fname").value;
  let apellido = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let enquiry = document.getElementById("general-enquiry").value;
  let support = document.getElementById("support-request").value;
  let mensaje = document.getElementById("message-client").value;
  
  let error = document.getElementById("prueba");
  let error2 = document.getElementById("prueba2");
  
  if (check == true) {

  

            event.preventDefault();
            if (nombre.trim() === "") {
              // alert("El campo no puede esta vacio");
              error.style.display = "block";
              // error.classList.remove("error");
            } if (apellido.trim() === "") {
              // alert("El campo no puede esta vacio");
              error2.style.display = "block";
            } if (apellido.trim() === "") {
              // alert("El campo no puede esta vacio");
              error.style.display = "block";
            }if (apellido.trim() === "") {
              error.style.display = "block";
            }  
            
            
            
            else {
              alert("Formulario enviado con éxito!");
              error.style.display = "none";
              error2.style.display = "none";
            }
          }
          
});


// if (check == true) {

  
// }

