var validacion = 0;
var toggle = 0;

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
    validacion = 0;
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
        e_fname.style.display = "none";

      }
      if (lastName.trim() === "") {
        e_lname.style.display = "block";
      } else {
        validacion++;
        e_lname.style.display = "none";
      }
      if (email.trim() === "") {
        e_email.style.display = "block";
      } else {
        validacion++;
        e_email.style.display = "none";
      }
      if (general == false && support == false) {
        e_query.style.display = "block";
      } else {
        validacion++;
        e_query.style.display = "none";
      }
      if (message.trim() === "") {
        e_message.style.display = "block";
      } else {
        validacion++;
        e_message.style.display = "none";
      }
    }
    if (validacion == 5) {
      if (toggle == 0) {
        document.getElementById("prueba2").classList.add("desplazar");
        toggle = 1;
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message-client").value = "";
        document.getElementById("general-enquiry").checked = false;
        document.getElementById("support-request").checked = false;
        document.getElementById("consent").checked = false;
      }else {
        document.getElementById("prueba2").classList.remove("desplazar");
        toggle = 0;
        // document.getElementById("fname").value="raafa";
        

      }

    }
          

});
