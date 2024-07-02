document.addEventListener("click", handleClick);
document.addEventListener("change", handleCambio);
contador = document.getElementById("agendas");
document.getElementById("Formato").style.display = "none";
let numero = 0
function handleClick(evento) {

  if (evento.target.matches("#button-addon1")) {
    handleCuota();
  } else if (evento.target.matches("#limpiar")) {
    resetearFormularios();
  } else if (evento.target.matches("#Tipificar")) {
    handleTipificar();
  } else if (evento.target.matches("#CopiarT")) {
    copiarEnTipificar();
  }else if (evento.target.matches("#formatear")) {
    dir = document.getElementById("direccion").value;
    direccion(dir)
    document.getElementById("direccion").value="";
  }
 
 
}

function handleTipificar() {
  setBackgroundColor("#1392F1");
  toggleDisplay(["#MotivoTec", "#Musuariod", "#fecha", "#MoQuiebre", "#tec", "#MoQuiebre1", "#Motiv"], "none");
  toggleDisplay(["#Titular", "#intentos" , "#Formatod", "#Motiv"], "block");
  setInnerHTML("#inte", "Quiebres Técnicos");
}

function toggleDisplay(selectors, displayValue) {
  selectors.forEach(selector => {
    document.querySelector(selector).style.display = displayValue;
  });
}

function setBackgroundColor(color) {
  document.getElementById("color").style.background = color;
}

function setInnerHTML(selector, html) {
  document.querySelector(selector).innerHTML = html;
}




function handleCambio(e) {
  const Mo = document.querySelector("#Motivo").value;
  const tecn = document.getElementById("TEC").checked;
  const int = document.getElementById("inten").checked;
  const  M2 = document.querySelector("#exampleDataList1").value;
  
 
  if (["#Motivo", "#TEC", "#inten", "#exampleDataList1", "#FD"].some(selector => e.target.matches(selector))) {
    setInnerHTML("#Musuario", "Contesta indica que");
   
    if (int && Mo == "0") {
      handleQuibret(int, tecn, M2);
    } else {
      toggleDisplay(["#Motiv","#Formatod"], "block");
      toggleDisplay(["#MoQuiebre1"], "none");
      handleMotivo(Mo, int, tecn, M2);
    }
    handleCambiodire();
  }
}

function handleQuibret(inten, tecn, M2) {
  toggleDisplay(["#tec", "#MoQuiebre1"], "block");
  toggleDisplay(["#Titular", "#fecha", "#Musuariod", "#MoQuiebre", "#Motiv"], "none");
  setInnerHTML("#TC", "AGENDA");

  if (!tecn) {
    setBackgroundColor("#FF0000");
    toggleDisplay(["#MotivoTec"], "block");
  } else {
    setBackgroundColor("#28A745");
    toggleDisplay(["#MotivoTec"], "none");
  }
}

function handleMotivo(Mo, inten, tecn, M2) {
  switch (Mo) {
    case "0":
      handleTipificar();
      break;
    case "1":
      setBackgroundColor("#28A745");
      toggleDisplay(["#intentos", "#tec", "#MotivoTec", "#MoQuiebre"], "none");
      toggleDisplay(["#Titular", "#fecha", "#Musuariod"], "block");
      break;
    case "2":
      setBackgroundColor("#FF0000");
      toggleDisplay(["#intentos", "#tec", "#fecha", "#MoQuiebre"], "none");
      toggleDisplay(["#Titular", "#Musuariod", "#MoQuiebre"], "block");
      break;
    case "3":
      handleNoContacto(inten, tecn, M2);
      toggleDisplay(["#Formatod"], "none");
      document.querySelector("#FD").checked=false;
      break;
  }
}



function handleNoContacto(inten, tecn, M2) {
  setInnerHTML("#inte", "6 INTENTOS");
  if (inten && !tecn) {
    setInnerHTML("#TC", "COMENTARIOS TECNICO");
    toggleDisplay(["#MoQuiebre"], "block");
    toggleDisplay(["#MotivoTec", "#Musuariod"], "none");
    toggleDisplay(["#tec"], "block");
  } else if (inten && tecn) {
    setInnerHTML("#TC", "COMENTARIOS TECNICO");
    toggleDisplay(["#MoQuiebre", "#MotivoTec"], "block");
    toggleDisplay(["#Musuariod"], "none");
    toggleDisplay(["#tec"], "block");
  } else if (!inten && tecn) {
    setInnerHTML("#TC", "CONTESTA");
    setInnerHTML("#Musuario", "Contesta y cuelga");
    toggleDisplay(["#intentos", "#MotivoTec", "#fecha", "#MoQuiebre"], "none");
    toggleDisplay(["#tec", "#Titular", "#Musuariod"], "block");
  } else {
    setBackgroundColor("rgb(255, 126, 5)");
    setInnerHTML("#TC", "CONTESTA");
    toggleDisplay(["#intentos", "#tec", "#Titular"], "block");
    toggleDisplay(["#MotivoTec", "#fecha", "#Musuariod", "#MoQuiebre"], "none");
  }
}




function handleCuota() {
  try {
   cuota = document.getElementById("Fecha").value;
     franja = document.getElementById("Franja").value;
     texto = `¡Hola! Solicito un cupo para el día ${cuota} en la franja ${franja} para la orden `;

    copiarAlPortapapeles(texto);
    alerta(texto, 1);
  } catch (error) {
    console.error("Error al copiar al portapapeles:", error);
  }
}

function resetearFormularios() {
  valor = document.querySelector("#Motivo").value;
 int = document.getElementById("inten").checked;
  if (int && valor == "0") {
    document.getElementById("Mtecnico").value = "";
    document.getElementById("exampleDataList1").value = "";
  } else {
    handleTipificar();
    Formulario.reset();
  }
  handleCambiodire();
 
}



function copiarEnTipificar() {
  const valor = document.querySelector("#Motivo").value;
  const tecn = document.getElementById("TEC").checked;
   const inten = document.getElementById("inten").checked;
 const MotTecnico = document.getElementById("Mtecnico").value;
 const NumT = document.getElementById("NumTitular").value;
 const NomT = document.getElementById("NomTitular").value;
 const mq = document.getElementById("exampleDataList").value;
 const mq1 = document.getElementById("exampleDataList1").value;
 const MotUsuario = document.getElementById("Musuario").value;
 const Fecha = document.getElementById("Fecha").value;
 const Franja = document.getElementById("Franja").value;
 const fecha = new Date().toLocaleDateString();
 const nomagent = document.getElementById("NomAgent").value;
 let texto = "1";
 

  const manejarSuspension = () => {
    if (mq1 === "RECURSOS MAL APROVISIONADOS") {
      if (tecn) {
        texto = `Favor indicar qué número de CTO es viable para la instalación y así proceder con el quiebre ${nomagent}.`;
        Agenda();
      } else {
        texto = `QT - ${mq1} las CTO sugeridas son ${MotTecnico} ${nomagent}.`;
      }
    } else if (mq1 === "CTO SATURADA") {
      texto = `Se levanta suspensión, Localidad con inventario actualizado, no aplican quiebres por CTO saturada ${nomagent}.`;
      Agenda();
    } else if (mq1 === "DISTANCIA EXCEDIDA (mas de 300 metros)") {
      texto = `Se levanta suspensión, indicar distancia excedida en comentarios ${nomagent}.`;
      Agenda();
    } else if (mq1 === "CRUCE DE VIA PRINCIPAL" || mq1 === "FALTA DE APOYO PARA ACOMETIDA") {
      texto = `Se levanta suspensión, Favor indicar inconveniente presentado en comentarios ${nomagent}.`;
      Agenda();
    } else if (mq1 === "NO EXISTE RED FTTH") {
      if (tecn) {
        texto = `Se levanta suspensión, Se validan archivos HHPP, se evidencia que la dirección de la orden sí tiene cobertura ${nomagent}.`;
        Agenda();
      } else {
        texto = `QT - ${mq1} Se valida archivos HHPP, se evidencia que la dirección ${MotTecnico} no cuenta con cobertura para la instalación ${nomagent}.`;
      }
    }
  };

  // Manejo de suspensiones
  if (inten && valor === "0") {
    if (!tecn && mq1 !== "RECURSOS MAL APROVISIONADOS" && mq1 !== "NO EXISTE RED FTTH") {
      texto = `QT - ${mq1} ${MotTecnico} ${nomagent}`;
    } else {
      manejarSuspension();
    }
  } else {
    switch (valor) {
      case "1":
        texto = `Se marca al número ${NumT} titular ${NomT} ${MotUsuario} se valida datos correctos se agenda para el día ${Fecha} en la franja ${Franja} Gestiona ${nomagent} ${fecha}`;
        Agenda();
        break;
      case "2":
        texto = `QC - ${mq} Se marca al número ${NumT} titular ${NomT} ${MotUsuario} valida datos correctos, se procede a quebrar orden Gestiona ${nomagent} ${fecha}`;
        break;
      case "3":
        if (inten) {
          texto = `QC - ${mq} Se marca al número ${NumT} titular ${NomT} se realizan 6 intentos de llamada no contesta se cancela orden bajo autorización de supervisor`;
          if (tecn) {
            texto += ` se deja comentarios del técnico "${MotTecnico}"`;
          }
          texto += ` Gestiona ${nomagent} ${fecha}`;
        } else if (tecn) {
          texto = `Se marca al número ${NumT} titular ${NomT} ${MotUsuario} Gestiona ${nomagent} ${fecha}.`;
        } else {
          texto = `Se marca al número ${NumT} titular ${NomT} no contesta Gestiona ${nomagent} ${fecha}.`;
        }
        break;
    }
  }
  copiarYAlertar(texto,alerta);
}


function copiarYAlertar(t, callback) {
  try {
    if (t === "1") {
      Swal.fire({
        icon: "warning",
        title: "Escoja un Motivo",
      });
    } else {

    t = t.replaceAll('|',' ').replace(/\s+/g,' ')
    copiarAlPortapapeles(t);
    callback(t); 
    }
    
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Error al copiar al portapapeles:",
    });

  }
}


function alerta(text) {

 
  const Toast = Swal.mixin({
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "success",
    title: "copiado",
    text: text,
  });
}

function handleCambiodire() {
  let p = document.getElementById("FD").checked;
  if (p) {
    toggleDisplay(["#Formato"], "block");
  } else {
    toggleDisplay(["#Formato"], "none");
  }
  
}

function direccion(d)
 {

  d = d.replaceAll('|',' ').replace(/\s+/g,' ')


 //Paso 1: Usar una expresión regular para extraer la parte "KR 8 A CL 28 C"
let regex =/^[A-Z]{2} [0-9]+ [A-Za-z ]*[A-Z]{2} [0-9]+ [A-Za-z ]*/;
let regex2 = /^\d+(?: [A-Z]+ \d+)?(?: [A-Z]+ \d+)?/
let match1= d.match(regex);

if (match1) {
  let final = match1.index + match1[0].length;
 final = d.substring(final);
final=final.match(regex2);




    let parte1 = match1[0];  
    let parte2 = final[0];
    d=parte1.trim()+"-"+parte2.trim()
} 

 
    copiarYAlertar(d,alerta)

 


}



function Agenda() {
  numero++;
  contador.innerHTML = "AGENDAS REALIZADAS:   " + numero;

}
async function copiarAlPortapapeles(txt) {
  await navigator.clipboard.writeText(txt);
}



