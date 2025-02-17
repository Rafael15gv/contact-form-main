/*===============================================*/
/*      Habilitar Button con el Check Box        */
/*===============================================*/

let boton = document.getElementsByTagName('button')[0];
document.getElementById("consent").addEventListener("change", function() {
  if (this.checked) {
    boton.style.backgroundColor = "var(--green-medium-color)";
  } else {
    boton.style.backgroundColor = "var(--gray-medium-color)";
    // document.body.style.backgroundColor = "white";
  }
});

/*===============================================*/
/*      CODIGO PARA VALIDAR INFORMACION          */
/*===============================================*/

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que la página se recargue
  
  let name = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message-client").value;
  let general = document.getElementById("consent").checked;
  let support = document.getElementById("consent").checked;
  let consent = document.getElementById("consent").checked;
  
  let e_fname = document.getElementById("e_fname");
  let e_lname = document.getElementById("e_lname");
  let e_email = document.getElementById("e_email");
  let e_query = document.getElementById("e_query");
  let e_message = document.getElementById("e_message");
  // let e_consent = document.getElementById("e_consent");
  
  if (consent == true) {
    event.preventDefault();
            if (name.trim() === "") {
              e_fname.style.display = "block";
              // document.getElementById("fname").classList.add("errorFocus");
            }
            if (lastName.trim() === "") {
              e_lname.style.display = "block";
            } 
            if (email.trim() === "") {
              e_email.style.display = "block";
            }
            if (general == true && support == true ) {
              e_query.style.display = "block";
            }
            if (message.trim() === "") {
              e_message.style.display = "block";
            }  
            
            
            // else {
            //   alert("Formulario enviado con éxito!");
            //   error.style.display = "none";
            //   error2.style.display = "none";
            // }
            // alert(`
            //   nombre: ${nombre} 
            //   apellido ${apellido} 
            //   correo ${email}`);
          }
          
});


