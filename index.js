var validacion = 0;

/*===============================================*/
/*      Habilitar Button con el Check Box        */
/*===============================================*/

let boton = document.getElementsByTagName("button")[0];
document.getElementById("consent").addEventListener("change", function () {
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

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    let name = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message-client").value;
    let general = document.getElementById("general-enquiry").checked;
    let support = document.getElementById("support-request").checked;
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
      } else {
        validacion++;
      }
      if (lastName.trim() === "") {
        e_lname.style.display = "block";
      } else {
        validacion++;
      }
      if (email.trim() === "") {
        e_email.style.display = "block";
      } else {
        validacion++;
      }
      if (general == false && support == false) {
        e_query.style.display = "block";
      } else {
        validacion++;
      }
      if (message.trim() === "") {
        e_message.style.display = "block";
      } else {
        validacion++;
      }
    }

    if (validacion == 5) {
      document.getElementById("success").style.display = "flex";
    }



});
