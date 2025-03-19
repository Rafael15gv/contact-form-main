//VARIABLES Y ARRAYS
let primero = 0;
var validacion = 0;
var toggle = 0;

// Campos con las clases para apuntar a los elementos en el DOM
const fieldsValue = [
  { selector: "#fname", errorId: "#e_fname" },
  { selector: "#lname", errorId: "#e_lname" },
  { selector: "#email", errorId: "#e_email" },
  { selector: "#message-client", errorId: "#e_message" },
];

const fieldsCheck = [
  { selector: "#general-enquiry", errorId: "#e_query" },
  { selector: "#support-request", errorId: "#e_query" },
];

/*===============================================*/
/*                 FUNCIONES                     */
/*===============================================*/

function validarValores() {
  for (const { selector, errorId } of fieldsValue) {
    const input = document.querySelector(selector);
    const testError = document.querySelector(errorId);

    if (input.value.trim() === "") {
      testError.style.display = "block"; //muestra el ERROR
    } else {
      validacion++;
      testError.style.display = "none";
    }
  }
}

function validarCheck() {
  for (const { selector, errorId } of fieldsCheck) {
    const input = document.querySelector(selector);
    const testError = document.querySelector(errorId);

    if (input.checked == false && primero == 0) {
      testError.style.display = "block"; //muestra el ERROR
    } else {
      validacion++;
      primero = 1;
      testError.style.display = "none";
    }
  }
}

function reset() {
  for (const { selector } of fieldsValue) {
    document.querySelector(selector).value = "";
  }
  for (const { selector } of fieldsCheck) {
    document.querySelector(selector).checked = false;
  }
}

/*===============================================*/
/*      Habilitar Button con el Check Box        */
/*===============================================*/
let consent = document.querySelector("#consent");
let boton = document.querySelector(".btn");
consent.addEventListener("change", function () {
  this.checked ? boton.style.backgroundColor = "var(--green-medium-color)" : boton.style.backgroundColor = "var(--gray-medium-color)";
});


/*===============================================*/
/*      CODIGO PARA VALIDAR INFORMACION          */
/*===============================================*/
const form = document.querySelector("#formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que la página se recargue
  validacion = 0;

  //consulta si esta chuliando y valida si todo esta lleno y no hay error
  if (consent.checked == true) {
    validarValores();
    validarCheck();
    console.log(validacion);
  }

  //muestra el mensaje
  if (validacion > 5) {
    console.log(`la validacion es: ${validacion}`);
    if (toggle == 0) {
      document.getElementById("prueba2").classList.add("desplazar");
      toggle = 1;
      reset();
    } 
    else {
      document.getElementById("prueba2").classList.remove("desplazar");
      toggle = 0;
    }
  }
});
