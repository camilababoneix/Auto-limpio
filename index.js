//Validación nombre
document.getElementById("nombre").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtnombre = input.value;
  
    const feedbacknombre = document.getElementById("feedback-nombre");
   
    if (txtnombre.length < 30) {
        feedbacknombre.innerHTML = "El nombre es correcto.";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbacknombre.className = "valid-feedback";
            
    } else {
        feedbacknombre.innerHTML = "El nombre es muy corto.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbacknombre.className = "invalid-feedback";   
     
    }
});

//Validación apellido
document.getElementById("apellido").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtapellido = input.value;
  
    const feedbackapellido = document.getElementById("feedback-apellido");
   
    if (txtapellido.length < 30) {
        feedbackapellido.innerHTML = "El nombre es correcto.";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackapellido.className = "valid-feedback";
      
    } else {
        feedbackapellido.innerHTML = "El apellido es muy corto.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackapellido.className = "invalid-feedback";
    }
});

//Validación rut sin dígito verificador
document.getElementById("rut").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtrut = input.value;

    const feedbackrut = document.getElementById("feedback-rut");
  expr = /^[0-9]{7,8}$/;

    if (!expr.test(txtrut)) {
        feedbackrut.innerHTML = "Debe contener 7 u 8 digitos.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackrut.className = "invalid-feedback";
    } else {
        feedbackrut.innerHTML = "El rut es correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackrut.className = "valid-feedback";
    }
});

//Validación dígito verificador
document.getElementById("dv").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtdv = input.value;
  
    const feedbackdv = document.getElementById("feedback-dv");
    expr = /^[0-9kK]{1}$/;
    if (!expr.test(txtdv)) {
        feedbackdv.innerHTML = "Debe contener 1 digito.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackdv.className = "invalid-feedback";
    } else {
        feedbackdv.innerHTML = "El dígito verificador es correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackdv.className = "valid-feedback";
    }
});

document.getElementById("direccion").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtdireccion = input.value;
  
    const feedbackdireccion = document.getElementById("feedback-direccion");
    expr = /^[a-zA-Z\s]{4,80}$/;
    if (!expr.test(txtdireccion)) {
        feedbackdireccion.innerHTML = "Debe contener entre 4 y 80 caracteres";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackdireccion.className = "invalid-feedback";
    } else {
        feedbackdireccion.innerHTML = "La dirección es correcta";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackdireccion.className = "valid-feedback";
    }
});

document.getElementById("marca").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtmarca = input.value;
  
    const feedbackmarca = document.getElementById("feedback-marca");
    expr = /^[a-zA-Z\s]{4,20}$/;
    if (!expr.test(txtmarca)) {
        feedbackmarca.innerHTML = "Debe contener entre 4 y 20 caracteres.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackmarca.className = "invalid-feedback";
    } else {
        feedbackmarca.innerHTML = "La marca es correcta";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackmarca.className = "valid-feedback";
    }
});

document.getElementById("modelo").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtmodelo = input.value;
  
    const feedbackmodelo = document.getElementById("feedback-modelo");
    expr = /^[a-zA-Z\s]{4,20}$/;
    if (!expr.test(txtmodelo)) {
        feedbackmodelo.innerHTML = "Debe contener entre 4 y 20 caracteres.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackmodelo.className = "invalid-feedback";
    } else {
        feedbackmodelo.innerHTML = "El modelo es correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackmarca.className = "valid-feedback";
    }
});

document.getElementById("ano").addEventListener("blur", (evento) => {
    const input = evento.currentTarget;
    const txtano = input.value;
  
    const feedbackano = document.getElementById("feedback-ano");
    expr = /^[0-9]{4}$/;
    if (!expr.test(txtano)) {
        feedbackano.innerHTML = "Debe contener 4 dígitos.";
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      feedbackano.className = "invalid-feedback";
    } else {
        feedbackano.innerHTML = "El año esta correcto";
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      feedbackano.className = "valid-feedback";
    }
});

//Validación cálculo de servicios

const boton = document.getElementById("btn-lavado");
boton.addEventListener("click", () => {


    const lavadoExterior    = $("#lavado-exterior").prop("checked");

    const lavadoMotor       = $("#lavado-motor").prop("checked");

    let montoNeto           = 0;

    if( lavadoExterior ) {
        montoNeto = montoNeto + 7000;
    }

    if( lavadoMotor ) {
        montoNeto = montoNeto + 5000;
    }

    const impuesto  = montoNeto * 0.19;
    const total     = montoNeto + impuesto;


    document.getElementById("neto").innerHTML   = `<span>$ ${montoNeto}</span>`;
    document.getElementById("iva").innerHTML    = `<span>$ ${impuesto}</span>`;
    document.getElementById("total").innerHTML  = `<span>$ ${total}</span>`;
  
});
  