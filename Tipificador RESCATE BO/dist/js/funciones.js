document.addEventListener("click", handleClick);
document.addEventListener("change", handleCambio);
contador = document.getElementById("agendas");
contador1 = document.getElementById("canceladas");
document.getElementById("Formato").style.display = "none";
let numero = parseInt(localStorage.getItem("agendar")) || 0
let numero1 = parseInt(localStorage.getItem("Cancelar")) || 0
var k;
var nombreAsesor;
var agentAsesor;
var t=""
var c=""


function handleClick(evento) {
  if (evento.target.matches("#button-addon1")) {
    handleCuota();
  } else if (evento.target.matches("#limpiar")) {
    resetearFormularios();
  } else if (evento.target.matches("#limpiar2")) {
    resetearFormulariosPiloto();
  } else if (evento.target.matches("#limpiar1")) {
    resetearFormulariosChat();
  } else if (evento.target.matches("#Tipificar")) {
    k = 0;
    GuardarDatos(k)
  } else if (evento.target.matches("#CopiarT")) {
    CopiarLLamada();
  } else if (evento.target.matches("#formatear")) {
    direccion();
  } else if (evento.target.matches("#imagen")) {
    subirImagen();
  } else if (evento.target.matches("#chat")) {
    // handleMotivoChat();
    k = 1;
    GuardarDatos(k)
  } else if (evento.target.matches("#plantillas")) {
    TextoPlantilla();
  } else if (evento.target.matches("#CopiarT1")) {
    CopiarChat();
  } else if (evento.target.matches("#CopiarP")) {
    CopiarPiloto();
  } else if (evento.target.matches("#dispo")) {
    Dispon();
  } else if (evento.target.matches("#piloto")) {
    k = 3;
    GuardarDatos(k)
  } else if (evento.target.matches("#cambio")) {
    cambio()
  }
}






function toggleDisplay(selectors, displayValue) {
  selectors.forEach((selector) => {
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
  const Mo1 = document.querySelector("#Motivo1").value;
  const Mo2 = document.querySelector("#MotivPi1").value;
  const Mot = document.querySelector("#exampleDataList1").value;
  const tecn = document.getElementById("TEC").checked;
  const int = document.getElementById("inten").checked;
  const cambiopla = document.getElementById("Campl").checked


  if (["#FD"].some((selector) => e.target.matches(selector))) {
    let p = document.getElementById("FD").checked;
    if (p) {
      toggleDisplay(["#Formato"], "block");
    } else {
      toggleDisplay(["#Formato"], "none");
    }
  }

  if (["#Campl"].some((selector) => e.target.matches(selector))) {

    if (cambiopla) {

      toggleDisplay(["#plv"], "none");
      toggleDisplay(["#pld"], "block");
      setInnerHTML("#vl", "VALIDAR DESCUENTO")
    } else {
      toggleDisplay(["#plv"], "block");
      toggleDisplay(["#pld"], "none");
      setInnerHTML("#vl", "VALIDAR PLAN")
    }
  }

  if (["#DIRAGQU"].some((selector) => e.target.matches(selector))) {
    const er = document.getElementById("DIRAGQU").value
    if (er != "CANCELAR") {
      document.getElementById("direrr").value = "Complemento"
    }
  }

  if (["#dir"].some((selector) => e.target.matches(selector))) {
    let p = document.getElementById("dir").checked;

    if (Mo1 === "3") {
      if (p) {
        setInnerHTML("#Musuario", "Cliente necesita XXXX DECOS será aprobada el incremento del valor de la factura en terreno con el titular, Sr Tecnico debe gestionar con Línea de Rescate. NO SE MODIFICA TAG EN TOA");

        toggleDisplay(["#Musuariod"], "block");
      } else {
        setInnerHTML("#Musuario", "Contesta indica que");

        toggleDisplay(["#Musuariod"], "none");
      }
    } else {
      if (p) {
        toggleDisplay(["#direco"], "block");
      } else {
        toggleDisplay(["#direco"], "none");
      }
    }

  }





  if (["#inten", "#TEC", "#exampleDataList1"].some((selector) => e.target.matches(selector))) {

    if (k == "1") {
      toggleDisplay(["#tec", "#MoQuiebre1", "#footer"], "block");

      setInnerHTML("#TC", "AGENDA");
      if (int) {
        toggleDisplay(
          ["#Titular", "#footer1", "#Musuariod", "#Motiv1", "#cambio"],
          "none"
        );

        if (tecn && Mot != "NO EXISTE RED FTTH") {
          setBackgroundColor("#28A745");
          toggleDisplay(["#MotivoTec"], "none");
        } else if (tecn && Mot === "NO EXISTE RED FTTH") {
          toggleDisplay(["#MotivoTec"], "block");
          setBackgroundColor("#28A745");
          document.getElementById("Mtecnico").value = "y la CTO viable para instalación es XXXX si es un conjunto/edificio favor dejar comentarios y soporte fotográfico del predio  "
        } else if (Mot === "NO EXISTE RED FTTH") {
          toggleDisplay(["#MotivoTec"], "block");
          setBackgroundColor("#FF0000");
          document.getElementById("Mtecnico").value = "XXXX no cuenta con cobertura para la instalación ya que es necesario una PC interna se valida comentarios y soporte fotográfico del técnico "

        } else {
          document.getElementById("Mtecnico").value = ""
          setBackgroundColor("#FF0000");
          toggleDisplay(["#MotivoTec"], "block");
        }
      } else {
        toggleDisplay(
          ["#Titular", "#footer1", "#Musuariod", "#Motiv1"],
          "block"
        );
        toggleDisplay(["#tec", "#MoQuiebre1", "#MotivoTec", "#footer"], "none");
        handleMotivoChat(Mo1);
      }
    } else if (k == "0") {
      toggleDisplay(["#tec", "#MoQuiebre1", "#footer"], "block");

      setInnerHTML("#TC", "AGENDA");
      if (int && Mo == "0") {
        toggleDisplay(["#tec", "#MoQuiebre", "#MoQuiebre1"], "block");
        toggleDisplay(
          ["#Titular", "#fecha", "#Musuariod", "#MoQuiebre", "#Motiv", "#cambio"],
          "none"
        );


        if (tecn && Mot != "NO EXISTE RED FTTH") {
          setBackgroundColor("#28A745");
          toggleDisplay(["#MotivoTec"], "none");
        } else if (tecn && Mot === "NO EXISTE RED FTTH") {
          toggleDisplay(["#MotivoTec"], "block");
          setBackgroundColor("#28A745");
          document.getElementById("Mtecnico").value = "y la CTO viable para instalación es xxxx si es un conjunto/edificio favor dejar comentarios y soporte fotográfico del predio  "
        } else if (Mot === "NO EXISTE RED FTTH") {
          toggleDisplay(["#MotivoTec"], "block");
          setBackgroundColor("#FF0000");
          document.getElementById("Mtecnico").value = "XXXX no cuenta con cobertura para la instalación ya que es necesario una PC interna se valida comentarios y soporte fotográfico del técnico "

        } else {
          document.getElementById("Mtecnico").value = ""
          setBackgroundColor("#FF0000");
          toggleDisplay(["#MotivoTec"], "block");
        }
      } else {
        toggleDisplay(["#Motiv", "#Formatod", "#footer"], "block");
        toggleDisplay(["#MoQuiebre1", "#Motiv1", "#footer1"], "none");
        handleMotivo(Mo);
      }
    } else {
      if (tecn) {
        setInnerHTML("#Musuario", "Contesta y cuelga");
        setBackgroundColor("rgb(255, 126, 5)");
        toggleDisplay(["#Musuariod", "#Titular", "#MotivPi", "#tec"], "block");
        toggleDisplay(["#MotivoTec", "#fecha", "#MoQuiebre"], "none");
      } else {
        setBackgroundColor("rgb(255, 126, 5)");
        toggleDisplay(["#Titular", "#MotivPi", "#tec"], "block");
        toggleDisplay(["#MotivoTec", "#Musuariod", "#fecha", "#MoQuiebre"], "none");
      }

    }
  }

  if (["#Motivo"].some((selector) => e.target.matches(selector))) {
    toggleDisplay(["#Motiv", "#Formatod", "#footer"], "block");
    toggleDisplay(["#MoQuiebre1", "#Motiv1", "#footer2", "#footer1"], "none");
    handleMotivo(Mo);
  } else if (
    ["#Motivo1", "#pl"].some((selector) => e.target.matches(selector))
  ) {
    
  

    toggleDisplay(["#Motiv1", "#Formatod", "#footer1"], "block");
    toggleDisplay(
      ["#MoQuiebre1", "#Motiv", "#footer", "#footer2", "#intentos", "#tec"],
      "none"
    );
    handleMotivoChat(Mo1);
  } else if (
    ["#MotivPi1", "#exampleDataList2"].some((selector) =>
      e.target.matches(selector)
    )
  ) {
    const mq = document.getElementById("exampleDataList2").value;

    if (mq === "DIRECCIÓN ERRADA") {
      document.getElementById("dir").checked = true;
      toggleDisplay(["#direco"], "block");
    } else {
      toggleDisplay(["#direco"], "none");
      document.getElementById("dir").checked = false;
    }

    toggleDisplay(["#MotivPi", "#Formatod", "#footer2"], "block");
    toggleDisplay(
      ["#MoQuiebre1", "#Motiv1", "#Motiv", "#footer", "#footer1"],
      "none"
    );
    handleMotivoPiloto(Mo2);
  }
}

function handleMotivoPiloto() {
  setInnerHTML("#exampleModalLabel", "Tipificar Piloto")
  setBackgroundColor("#1392F1");
  setInnerHTML("#confdr", "Confirma direccion");
  let Mo2 = document.getElementById("MotivPi1").value

  toggleDisplay(["#footer", "#footer1", "#Motiv1", "#Motiv"], "none");
  toggleDisplay(["#footer2", "#MoQuiebre", "#MotivPi", "#cambio"], "block");


  switch (Mo2) {
    case "1":
      toggleDisplay(
        ["#MoQuiebre2", "#MoQuiebre", "#Fecgaws", "#Formatod"],
        "none"
      );
      toggleDisplay(
        ["#Titular", "#Musuariod", "#TipoPredio"],
        "block"
      );
      break;
    case "2":
      setBackgroundColor("#28A745");
      toggleDisplay(
        ["#MoQuiebre2", "#MoQuiebre", "#Fecgaws", "#Formatod"],
        "none"
      );
      toggleDisplay(
        ["#Titular", "#fecha", "#Musuariod", "#MotivPi", "#TipoPredio"],
        "block"
      );
      break;
    case "3":
      setBackgroundColor("#FF0000");
      toggleDisplay(
        [
          "#MoQuiebre2",
          "#MoQuiebre",
          "#fecha",
          "#Fecgaws",
          "#Formatod",
          "#TipoPredio",
        ],
        "none"
      );
      toggleDisplay(
        ["#Titular", "#Musuariod", "#MoQuiebre2", "#MotivPi"],
        "block"
      );
      break;

    case "4":
      setBackgroundColor("rgb(255, 126, 5)");
      toggleDisplay(
        [
          "#MoQuiebre2",
          "#MoQuiebre",
          "#fecha",
          "#Formatod",
          "#TipoPredio",
          "#Musuariod",
          "#Cdire",
          "#Motiv1",
          "#Motiv"
        ],
        "none"
      );


      setInnerHTML("#TC", "CONTESTA");

      toggleDisplay(["#Titular", "#MotivPi", "#tec"], "block");
      break;

    default:
      toggleDisplay(
        [
          "#MotivoTec",
          "#Musuariod",
          "#fecha",
          "#MoQuiebre",
          "#tec",
          "#MoQuiebre1",
          "#MoQuiebre2",
          "#footer1",
          "#Fecgaws",
          "#intentos",
          "#Formatod",
          "#direco"
        ],
        "none"
      );
      toggleDisplay(
        ["#Titular", "#Cdire", "#TipoPredio"],
        "block"
      );
      break;
  }
}

function handleMotivo() {

  toggleDisplay(
    ["#footer1", "#footer2", "#MotivPi", "#Motiv1"], "none");
  toggleDisplay(["#footer", "#Motiv",], "block");

  setInnerHTML("#exampleModalLabel", "Tipificar LLamadas")

  let Mo = document.getElementById("Motivo").value

  const tecn = document.getElementById("TEC").checked;
  setInnerHTML("#Musuario", "Contesta indica que");
  const int = document.getElementById("inten").checked;
  switch (Mo) {
    case "1":
      setBackgroundColor("#28A745");
      toggleDisplay(
        [
          "#intentos",
          "#tec",
          "#MotivoTec",
          "#MoQuiebre",
          "#Fecgaws",
          "#Cdire",
        ],
        "none"
      );
      toggleDisplay(["#Titular", "#fecha", "#Musuariod", "#TipoPredio"], "block");
      break;
    case "2":
      setBackgroundColor("#FF0000");
      toggleDisplay(
        ["#intentos", "#tec", "#fecha", "#Fecgaws", "#Cdire"],
        "none"
      );
      toggleDisplay(["#Titular", "#Musuariod", "#MoQuiebre", "#TipoPredio"], "block");
      break;
    case "3":
      handleNoContacto(int, tecn);
      toggleDisplay(
        ["#Formatod", "#footer1", "#Fecgaws", "#Cdire", "#TipoPredio"],
        "none"
      );
      document.querySelector("#FD").checked = false;
      break;

    case "4":
        handleNoContacto(int, tecn);
        toggleDisplay(
          ["#Formatod", "#footer1", "#Fecgaws","#Cdire","#intentos", "#tec", "#TipoPredio"],
          "none"
        );
        toggleDisplay(["#Titular", "#Musuariod", "#fecha"], "block");
        setInnerHTML("#Musuario", "Se registra agenda tentativa para proceder a suspender nuevamente la orden");
        document.querySelector("#FD").checked = false;
        break;
    default:
      setBackgroundColor("#1392F1");
      toggleDisplay(
        [
          "#MotivoTec",
          "#Musuariod",
          "#fecha",
          "#MoQuiebre",
          "#tec",
          "#MoQuiebre1",
          "#MoQuiebre2",
          "#Fecgaws",
          "#Cdire",
          "#TipoPredio",
          "#direco",
          "#TipoPredio"
        ],
        "none"
      );
      toggleDisplay(
        ["#Titular", "#intentos", "#Formatod", "#Motiv", "#cambio"],
        "block"
      );
      setInnerHTML("#inte", "Quiebres Técnicos");
      break;
  }
}

function handleMotivoChat() {
  toggleDisplay(["#plv"], "block");
  toggleDisplay(["#pld"], "none");

  setInnerHTML("#exampleModalLabel", "Tipificar Chat")
  toggleDisplay(["#footer", "#footer2", "#Motiv", "#MotivPi"], "none");
  toggleDisplay(["#footer1", "#Motiv1"], "block");
  let Mo1 = document.getElementById("Motivo1").value
  setInnerHTML("#Musuario", "indica que");
  switch (Mo1) {

    case "1":
      setBackgroundColor("#28A745");
      toggleDisplay(
        ["#MoQuiebre", "#Fecgaws", "#Cdire"],
        "none"
      );
      toggleDisplay(["#Titular", "#fecha", "#Musuariod", "#Motiv1", "#TipoPredio"], "block");
      break;
    case "2":
      setBackgroundColor("#FF0000");
      toggleDisplay(["#fecha", "#Fecgaws", "#Cdire", "#TipoPredio"], "none");
      toggleDisplay(
        ["#Titular", "#Musuariod", "#MoQuiebre"],
        "block"
      );
      break;
    case "3":
      setBackgroundColor("rgb(255, 126, 5)");
      toggleDisplay(
        [
          "#MoQuiebre",
          "#Titular",
          "#Musuariod",
          "#Fecgaws",
          "#Motiv",
          "#TipoPredio",
          "#MotivPi"
        ],
        "none"
      );
      setInnerHTML("#confdr", "Mas Decos");
      toggleDisplay(["#fecha", "#Cdire", "#Motiv1"], "block");
      break;

    case "4":


      setBackgroundColor("rgb(255, 126, 5)");

      toggleDisplay(
        ["#MoQuiebre", "#fecha", "#Cdire", "#TipoPredio", "#Musuariod"],
        "none"
      );
      toggleDisplay(["#Titular", "#Fecgaws"], "block");
      break;

    default:
      setBackgroundColor("#1392F1");
      toggleDisplay(
        [
          "#MotivoTec",
          "#fecha",
          "#MoQuiebre",
          "#MoQuiebre2",
          "#tec",
          "#MoQuiebre1",
          "#Motiv",
          "#footer",
          "#Fecgaws",
          "#MotivPi",
          "#Cdire",
          "#footer2",
          "#TipoPredio",
          "#direco",
        ],
        "none"
      );

      setInnerHTML("#inte", "Quiebres Técnicos");
      toggleDisplay(
        ["#Titular", "#Musuariod", "#intentos", "#Formatod", "#footer1", "#Motiv1", "#cambio"],
        "block"
      );

      break;

  }
}

function handleNoContacto(inten, tecn) {
  setInnerHTML("#inte", "6 INTENTOS");
  if (inten && !tecn) {
    setInnerHTML("#TC", "COMENTARIOS TECNICO");
    toggleDisplay(["#MoQuiebre", "#tec"], "block");
    toggleDisplay(["#MotivoTec", "#Musuariod"], "none");
  } else if (inten && tecn) {
    setInnerHTML("#TC", "COMENTARIOS TECNICO");
    toggleDisplay(["#MoQuiebre", "#MotivoTec", "#tec"], "block");
    toggleDisplay(["#Musuariod"], "none");
  } else if (!inten && tecn) {
    setInnerHTML("#TC", "CONTESTA");
    setInnerHTML("#Musuario", "Contesta y cuelga");
    toggleDisplay(["#intentos", "#MotivoTec", "#fecha", "#MoQuiebre"], "none");
    toggleDisplay(["#tec", "#Titular", "#Musuariod"], "block");
  } else {
    setBackgroundColor("rgb(255, 126, 5)");
    setInnerHTML("#TC", "CONTESTA");
    toggleDisplay(["#MotivoTec", "#fecha", "#Musuariod", "#MoQuiebre"], "none");
    toggleDisplay(["#intentos", "#tec", "#Titular"], "block");
  }
}

function handleCuota() {
  const valor1 = document.getElementById("Motivo1").value;
  cuota = document.getElementById("Fecha").value;
  franja = document.getElementById("Franja").value;

  let texto = ""
  let aler = ""


  try {

    if (cuota) {
      if (valor1 !== "0") {
        texto = `PROYECTO EVA: ¡Hola! Solicito un cupo para el día ${cuota} en la franja ${franja} para la orden `;

      } else {
        texto = `¡Hola! Solicito un cupo para el día ${cuota} en la franja ${franja} para la orden `;
      }
    } else {
      aler = "Escoja Fecha"
    }
    if (texto || aler) {
      copiarYAlertar(texto, aler);
    }

  } catch (error) {
    console.error("Error al copiar al portapapeles:", error);
  }
}

function resetearFormulariosChat() {
  if (document.getElementById('divAdicional1')) {
    divAdicional1.remove()
  }


  Formulario.reset();
  handleMotivoChat();
}
function resetearFormulariosPiloto() {

  if (document.getElementById('divAdicional1')) {
    divAdicional1.remove()
  }

  Formulario.reset();
  handleMotivoPiloto();
}

function resetearFormularios() {
  if (document.getElementById('divAdicional1')) {
    divAdicional1.remove()
  }
  valor = document.querySelector("#Motivo").value;
  int = document.getElementById("inten").checked;
  if (int && valor == "0") {
    document.getElementById("Mtecnico").value = "";
    document.getElementById("exampleDataList1").value = "";
  } else {

    Formulario.reset();
    handleMotivo();
  }
}

function CopiarLLamada() {
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
  const firma = document.getElementById("FirmaAgent").value;
  const predio = document.getElementById("predio").value;
  const pisos = document.getElementById("Cantpi").value;
  const contadores = document.getElementById("Cantco").value;

  let texto = ""
  let aler = ""




  const manejarSuspension = () => {
    if (mq1 === "RECURSOS MAL APROVISIONADOS") {
      if (tecn) {
        texto = `Favor indicar qué número de CTO es viable para la instalación y así proceder con el quiebre ${firma}.`;
        to(texto,"1");
      } else {
        texto = `QT - ${mq1} las CTO sugeridas son ${MotTecnico} ${firma}.`;
        to(texto,"cancelar")
      }
    } else if (mq1 === "CTO SATURADA") {
      texto = `Se levanta suspensión, Localidad con inventario actualizado, no aplican quiebres por CTO saturada ${firma}.`;
             to(texto,"1");

    } else if (mq1 === "DISTANCIA EXCEDIDA (mas de 300 metros)") {
      texto = `Se levanta suspensión, indicar distancia excedida en comentarios ${firma}.`;
             to(texto,"1");

    } else if (
      mq1 === "CRUCE DE VIA PRINCIPAL" ||
      mq1 === "FALTA DE APOYO PARA ACOMETIDA"
    ) {
      texto = `Se levanta suspensión, Favor indicar inconveniente presentado en comentarios ${firma}.`;
              to(texto,"1");

    } else if (mq1 === "NO EXISTE RED FTTH") {
      if (tecn) {

        texto = `Se levanta suspensión, Se validan archivos HHPP, se evidencia que la dirección de la orden sí tiene cobertura, ${MotTecnico} ${firma}.`;
               to(texto,"1");

      } else {
        texto = `QT - ${mq1} Se valida archivos HHPP, se evidencia que la dirección ${MotTecnico} ${firma}.`;
        to(texto,"cancelar")
      }
    }
  };

  // Manejo de suspensiones
  if (inten && valor === "0") {

    if (
      !tecn &&
      mq1 !== "RECURSOS MAL APROVISIONADOS" &&
      mq1 !== "NO EXISTE RED FTTH"

    ) {
      texto = `QT - ${mq1} ${MotTecnico} ${firma}`;
      to(texto,"cancelar")
    } else {
      manejarSuspension();
    }
  } else {
    // Corregimos la obtención del número adicional
    const contador = 1; // Asegúrate de que el contador está inicializado en tu código
    const NumAdicionalID = `NumAdicional${contador}`; // Formamos el ID dinámico
    const NumTa = document.getElementById(NumAdicionalID)
      ? document.getElementById(NumAdicionalID).value
      : ""; // Obtenemos el valor del número adicional si existe


    switch (valor) {
      case "1":
        if (Fecha) {


          texto = `Se marca al número ${NumT} titular ${NomT} ${MotUsuario} `;

          if (NumTa) {
            texto += `, se agrega número adicional ${NumTa} `;
          }
          if (predio !== "NO CONFIRMA" && predio !== "Tipo de Predio") {
            if (predio == "CASA") {
              texto += `indica que es una casa de barrio sin administración, `;

            } else if (predio == "CONJUNTO(casas)") {
              texto += `indica que es un conjunto de casas, `;
            } else if (predio == "CONJUNTO(torres)") {
              texto += `indica que es un conjunto de torres, `;
            } else {
              texto += `indica que es un ${predio}, `;
            }
          }

          if (pisos !== "NO CONFIRMA" && pisos !== "Cant Pisos") {
            if (pisos == "1") {
              texto += `con ${pisos} piso, `;
            } else {
              texto += `con ${pisos} pisos, `;
            }



          }

          if (contadores !== "NO CONFIRMA" && contadores !== "Cant Contadores") {
            if (contadores == "1") {
              texto += `con ${contadores} Contador, `;
            } else {
              texto += `con ${contadores} Contadores, `;
            }

          }
          texto += ` se valida datos correctos se agenda para el día ${Fecha} en la franja ${Franja} Gestiona ${firma} ${fecha}`;
          to(NomT+NumT,"1");
        } else {
          aler = "Escoja Fecha de Agenda"

        }
        break;
      case "2":
        if (mq) {
if (mq=="RECURSOS MAL APROVISIONADOS") {
  texto = "QT - "
} else {
  texto = "QC - "
}

          texto += `${mq} Se marca al número ${NumT} `;
          if (NumTa) {
            texto += `No contesta, se marca al número ${NumTa} `;
          }


          texto += `titular ${NomT} ${MotUsuario} `


          if (predio !== "NO CONFIRMA" && predio !== "Tipo de Predio") {
            if (predio == "CASA") {
              texto += `indica que es una casa de barrio sin administración, `;

            } else if (predio == "CONJUNTO(casas)") {
              texto += `indica que es un conjunto de casas, `;
            } else if (predio == "CONJUNTO(torres)") {
              texto += `indica que es un conjunto de torres, `;
            } else {
              texto += `indica que es un ${predio}, `;
            }
          }

          if (pisos !== "NO CONFIRMA" && pisos !== "Cant Pisos") {
            if (pisos == "1") {
              texto += `con ${pisos} piso, `;
            } else {
              texto += `con ${pisos} pisos, `;
            }



          }

          if (contadores !== "NO CONFIRMA" && contadores !== "Cant Contadores") {
            if (contadores == "1") {
              texto += `con ${contadores} Contador, `;
            } else {
              texto += `con ${contadores} Contadores, `;
            }

          }

          texto += ` valida datos correctos, se procede a quebrar orden Gestiona ${firma} ${fecha}`;
          to(NomT+NumT,"cancelar");
        } else {

          aler = "Escoja Motivo de Quiebre"
        }
        break;
    case "3":
        if (inten) {
          if (mq) {


            texto = `QC - ${mq} Se marca al número ${NumT}`;
            if (NumTa) {
              texto += ` No contesta, se marca al número ${NumTa}`;
            }
            texto += ` titular ${NomT} se realizan 6 intentos de llamada no contesta se cancela orden bajo autorización de supervisor`;

            to(texto,"cancelar");
            if (tecn) {
              texto += ` se deja comentarios del técnico "${MotTecnico}"`;
            }
            texto += ` Gestiona ${firma} ${fecha}`;
          } else {

            aler = "Escoja Motivo de Quiebre"


          }
        } else if (tecn) {
          texto = `Se marca al número ${NumT} `;

          if (NumTa) {
            texto += `No contesta, se marca al número ${NumTa} `;
          }
          texto += ` titular ${NomT} ${MotUsuario} Gestiona ${firma} ${fecha}.`;
        } else {
          texto = `Se marca al número ${NumT} `;
          if (NumTa) {
            texto += `No contesta, se marca al número ${NumTa} `;
          }
          texto += ` titular ${NomT} no contesta Gestiona ${firma} ${fecha}.`;
        }
        break;



        case "4":
          if (Fecha) {
            texto = `Se marca al número ${NumT} titular ${NomT} ${MotUsuario} `; 
            if (NumTa) {
              texto += `, se agrega número adicional ${NumTa} `;
            }
            texto += `se agenda para el día ${Fecha} en la franja ${Franja} Gestiona ${firma} ${fecha}`;
          } else {
            aler = "Escoja Fecha de Agenda"
          }
          
        break;
      default:
        aler = "Escoja Motivo"
        break;
    }
  }
  texto = texto.replaceAll(/[()?¿#:]/g, "")
  copiarYAlertar(texto, aler);
}

function copiarYAlertar(t, e) {
  try {
    if (e) {
      Swal.fire({
        icon: "info",
        title: e
      });
    } else {

      t = t.replaceAll("|", " ");
      navigator.clipboard.writeText(t);
      alerta(t);

    }

  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Error al copiar al portapapeles",
    });
  }
}

function alerta(text) {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
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
    text: text,
  });
}


function direccion() {
  d = document.getElementById("direccion").value;
  d = d.replaceAll("|", " ").replace(/\s+/g, " ");
  let regex = /^[A-Z]{2} [0-9]+ [A-Za-z ]*[A-Z]{2} [0-9]+ [A-Za-z ]*/;
  let regex2 = /^\d+(?: [A-Za-z]{3} [A-Za-z0-9]+)?(?: [A-Za-z]{3} [A-Za-z0-9]+)?/;
  // let regex2 = /^\d+/
  //  let regex3 =/[A-Z]{3} \d+[A-Z]?/


  let match1 = d.match(regex);

  if (match1) {
    let final = match1.index + match1[0].length;
    final = d.substring(final);
    let placa = final.match(regex2)
    let parte1 = match1[0];

    let parte2 = placa[0]
    d = parte1.trim() + "-" + parte2.trim()
  }


  copiarYAlertar(d, "");

  document.getElementById("direccion").value = ""
}



//subir imagen

async function subirImagen() {
  const { value: file } = await Swal.fire({
    title: "Cambiar Fondo",
    input: "file",
    inputAttributes: {
      accept: "image/*",
      "aria-label": "Subir Fondo",
    },
  });

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      Swal.fire({
        title: "Su fondo Ha Sido Cambiado",
      });
      const base64Image = e.target.result;
      document.body.style.backgroundImage = `url(${base64Image})`;
      localStorage.setItem("imagenFondo", base64Image);
    };
    reader.onerror = (e) => {
      console.error("Error al leer el archivo:", e);
      Swal.fire({
        title: "Error",
        text: "No se pudo cambiar el fondo. Inténtelo de nuevo.",
        icon: "error",
      });
    };
    reader.readAsDataURL(file);
  }
}


function TextoPlantilla() {
  const nomagent = document.getElementById("NomAgent").value;
  document.getElementById(
    "saludo"
  ).textContent = `Hola 👋 ${getPartOfDay("saludo")} soy ${nomagent} de Telefónica Movistar, estoy encargado de validar tu caso Permítame un momento por favor`;
  document.getElementById(
    "despedida"
  ).textContent = `Fue un gusto atenderte, gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier inquietud o duda, te puedes comunicar a la linea nacional 018000911008 o al chat de WhatsApp 3152333333 recuerda que te atendió ${nomagent} que tengas ${getPartOfDay("despedida")}`;
  document.getElementById(
    "despedidasinr"
  ).textContent = `Pedimos disculpas por no haber podido atender tu solicitud mediante este chat, pero programaremos una llamada para poder resolver todas tus dudas! Gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier duda te puedes comunicar a la línea nacional 018000911008 o al chat de WhatsApp 3152333333. Recuerda que te atendió ${nomagent} Que tengas ${getPartOfDay("despedida")}`;
}

function CopiarPlantilla(textoid) {
  const nomagent = document.getElementById("NomAgent").value;
  const Fecha = formatearFecha(document.getElementById("Fecha").value);
  const Franja = document.getElementById("Franja").value;
  const fe1 = formatearFecha(document.getElementById("fe1").value);
  const fra = document.getElementById("fra").value;
  const plan = document.getElementById("valpa").value;
  const servicio = document.getElementById("valdesv").value;
txt=""
  let aler;
  document.querySelector("#Motivo1").addEventListener("change", handleCambio)




  if (textoid == "AGPLAN") {
    const planUsuario = document.getElementById("planUsuario").value;
    const planSistema = document.getElementById("planSistema").value;
    const tipo = document.getElementById("Motivoqa").value;

    if (planUsuario && tipo) {



      if (planUsuario === "CANCELA OTRO OPERADOR") {
        document.getElementById("Musuario").value = `Indica que el asesor le informo que cancelaba el servicio con el otro operador se le informa que estos procesos no están permitido realizarlo los asesores de movistar ya que algunos servicios manejan clausulas de permanencia por lo cual este proceso lo debe realizar el titular del servicio se le indica que si desea puede confirmar el proceso de cancelación o iniciar el proceso de cancelación con su operador actual mientras se puede agendar el servicio para que el titular realice el proceso `;
      } else if (planUsuario === "APPS STREAM") {
        document.getElementById("Musuario").value = `Indica que hace falta una de las aplicaciones Stream ofrecidas en el servicio se le informa que estas aplicaciones las puede activar después de la instalación del servicio desde la aplicación Mi Movistar o solicitarla al área comercial `;
      } else if (planUsuario === "MAS DECOS") {
        document.getElementById("Musuario").value = `Se le indica el incremento en la factura por valor de 15.500 por deco adicional `;
      } else if (planUsuario === "NO SOLICITO EL SERVICIO") {
        document.getElementById("Musuario").value = `Indica que no solicito el servicio se objeta `;
      } else if (planUsuario === "100 MB ADICIONALES") {
        document.getElementById("Musuario").value = `Indica que solicito el servicio con 100 megas adicionales ya que es cliente Pospago se le confirma que las 100 megas adicionales se le instalan 15 días después de la instalación inicial `;
      } else if (planUsuario === "DUO (BA + TV)") {
        document.getElementById("Musuario").value = `Indica que no desea la telefonía dentro del servicio de trio solo desea el servicio de BA y TV se le indica que solo existen 3 tipos de planes y que el servicio al ser con decos viene incluida la telefonía y esta no se puede retirar `;
      } else if (planUsuario === "APP MTV (no solicito)") {
        document.getElementById("Musuario").value = `indica que no solicito el servicio de MTV movistar APP, se objeta `;



      } else if (planUsuario != "SI SOLICITO EL SERVICIO") {
        document.getElementById("Musuario").value = `Indica que solicito el servicio de ${planUsuario} y la orden en el sistema viene como ${planSistema} se le indica que puede modificar el servicio después de la instalación `;
      }


      if (tipo === "CANCELAR") {


        if (planUsuario === "SI SOLICITO EL SERVICIO") {
          aler = "OPCION INVALIDA"
        } else {




          if (planUsuario === "CANCELA OTRO OPERADOR") {
            document.getElementById("exampleDataList").value = "CLIENTE DESISTE / INCONSISTENCIA EN LA OFERTA"
          } else if (planUsuario === "APPS STREAM") {
            document.getElementById("exampleDataList").value = "PLAN ERRADO OFERTA SUPLEMENTARIA"
          } else if (planUsuario === "100 MB ADICIONALES") {
            document.getElementById("exampleDataList").value = "CLIENTE DESISTE DEL SERVICIO POR DECISION PROPIA"
          } else if (planUsuario === "APP MTV (no solicito)") {
            document.getElementById("exampleDataList").value = "PLAN ERRADO OFERTA SUPLEMENTARIA"
          } else if (planUsuario === "NO SOLICITO EL SERVICIO") {
            document.getElementById("exampleDataList").value = "NO SOLICITO EL SERVICIO"
          } else {
            document.getElementById("exampleDataList").value = "PLAN ERRADO OFERTA PRIMARIA"
          }



          if (planUsuario === "MAS DECOS") {
            document.getElementById("Musuario").value += `no acepta, NO SE ACTUALIZA TAG DE EQUIPOS`;
            document.getElementById("exampleDataList").value = "PLAN ERRADO CLIENTE SOLICITO MAS DECOS"
          } else {
            document.getElementById("Musuario").value += `pero desiste del servicio`;
          }
          document.getElementById("Motivo1").value = "2"

        }
 
      } else {
        if (planUsuario === "SI SOLICITO EL SERVICIO") {
          document.getElementById("Musuario").value = `Indica que se equivoco al seleccionar la opcion pero que si solicito el servicio y que se encuentra a la espera de este se valida datos del tt y del servicio todo esta correcto `;
        } else if (planUsuario === "MAS DECOS") {
          document.getElementById("Musuario").value += `acepta, SE ACTUALIZA TAG DE EQUIPOS`;
        } else {
          document.getElementById("Musuario").value += `e indica que acepta el servicio`;

        }
        document.getElementById("Motivo1").value = "1"
      }

      if (!aler) {


        document.getElementById("close").click();


        document.getElementById("Motivo1").dispatchEvent(new Event('change'))
        document.getElementById("planUsuario").value = "";
        document.getElementById("planSistema").value = "";
        document.getElementById("Motivoqa").value = "";
      }


 


    } else {
      aler = "Favor Rellene los Campos"
    }
  
// plantillas para agendador
  } else if (textoid == "DDRPIL") {

    document.getElementById("Musuario").value = "Indica que la dirección correcta es xxxxx se solicita realizar GESTIÓN PILOTO COMPLEMENTO. Si no es posible la instalación por favor suspender la orden por el motivo correspondiente y evidenciar porque no es posible la instalación con el piloto.";
    document.getElementById("close").click();


    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "sisola") {

    document.getElementById("Musuario").value = "indica que se equivoco al seleccionar la opcion pero que si solicito el servicio y que se encuentra a la espera de este se valida datos del tt y del servicio todo esta correcto";
    document.getElementById("close").click();


    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "DECOSADF") {

    document.getElementById("Musuario").value = "Titular acepta el incremento en la factura por 15.500 para instalar el deco adicional. TAG ACTUALIZADO EN TOA";
    document.getElementById("close").click();


    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "erorcom") {

    document.getElementById("Musuario").value = "Indica que la dirección correcta es xxxxx y en el sistema contamos con la dirección  xxxx el error se encuentra en el complemento de la dirección se le indica contar con recibo publico en el momento de la instalación para que el técnico valide la instalación";
    document.getElementById("close").click();
    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "dircoser") {

    document.getElementById("Musuario").value = "Se valida dirección y servicio todo esta correcto indica que se encuentra a la espera del servicio";
    document.getElementById("close").click();
    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "ssf") {

    document.getElementById("Musuario").value = "Se valida servicio a instalar indica que es correcto y que se encuentra a la espera del servicio";
    document.getElementById("close").click();
    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "valplan") {
    if (plan) {
      txt = procesarServicio(plan);

    } else {
      aler = "Favor Anexar Plan"
    }
    document.getElementById("valpa").value = "";

  } else if (textoid == "valdes") {
    if (servicio) {


      txt = validar_descuentos(servicio);
      document.getElementById("Campl").click();
      document.getElementById("Campl").dispatchEvent(new Event('change'))
    } else {
      aler = "Favor Anexar Plan"
    }


    document.getElementById("valdesv").value = "";


  } else if (textoid == "despedidaagenda") {
    if (fe1 && nomagent) {
      txt = `Lamentamos no haber podido continuar la validación mediante este chat, la orden sigue programada para el día ${fe1} en la franja ${fra}. ✅Gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier duda te puedes comunicar a la línea nacional 018000911008 o al chat de WhatsApp 3152333333. Recuerda que te atendió ${nomagent}. Que tengas ${getPartOfDay("despedida")}`;
      document.getElementById("fe1").value = "yyyy-MM-dd";
      document.getElementById("fra").value = "";
    } else if (!fe1) {
      aler = "Escoja Fecha Agenda "
    } else {
      aler = " Favor Indicar Nombre de Agente "

    }

  } else if (textoid == "Predis") {
    let time = DiasSemana(new Date().toISOString().split('T')[0])
    txt = `No te preocupes Sr(a) entendemos que puedes estar ocupado en estos momentos, Pero si gustas podemos programarte una llamada para el dia de hoy o para el dia de mañana ${time[1]} o para el dia ${time[2]} Tú escoges, y ya me indicarías a qué hora (Recuerda que debe ser entre las 7:00 a.m y las 7:30 p.m)
     ¿Me confirmas por favor?`;


  } else if (textoid == "Comprsf") {


    const time1 = document.getElementById("Fechas").value.replace("T", " a las ")


    txt = `Muy amable por la información, procederemos a programarte la llamada para el ${time1} 📲 Gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier duda te puedes comunicar a la línea nacional 018000911008 o al chat de WhatsApp 3152333333. Recuerda que te atendió ${nomagent}. Que tengas ${getPartOfDay("despedida")}`;
    document.getElementById("Fechas").value = "yyyy-MM-dd";

  } else if (textoid == "ConfAg") {
     mo = document.getElementById("Motivo1").value
    if (Fecha && mo == 1) {


      txt = `Gracias por la espera, Le confirmo su cita ha sido agendada para el día ${Fecha} en la franja ${Franja}.
      
Fue un gusto atenderte, gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier inquietud o duda, te puedes comunicar a la linea nacional 018000911008 o al chat de WhatsApp 3152333333 recuerda que te atendió ${nomagent} que tengas ${getPartOfDay("despedida")}`;
    } else {
      aler = "Favor Escoger la Fecha Agendada"
    }

  } else if (textoid == "dipoag") {
    const fecha = formatearFecha(document.getElementById("fe").value);
    const AM = document.getElementById("btncheck1").checked;
    const PM = document.getElementById("btncheck2").checked;

    if (fecha) {
      if (AM && PM) {
        txt = `Le ofrecemos disponibilidad para: 📅 el Dia ${fecha} en la franja AM (7am a 12pm) o PM (12pm a 7pm)`;
      } else if (AM) {
        txt = `Le ofrecemos disponibilidad para: 📅 el Dia ${fecha} en la franja AM (7am a 12pm)`;
      } else if (PM) {
        txt = `Le ofrecemos disponibilidad para: 📅 el Dia ${fecha} en la franja PM (12pm a 7pm)`;
      }
      txt += `, ¿me confirma por favor?. 
      
¿También Deseas agregar un número de contacto adicional para la instalación por favor? (nombre y parentesco).`
    } else {
      aler = "escoja Fecha Para Disponibilidad"
    }

  } else if (textoid == "direinc") {
    const diragen = document.getElementById("diragen").value.replaceAll("|", " ").replace(/\s+/g, " ");
    const dirtt = document.getElementById("dirtt").value.replaceAll("|", " ").replace(/\s+/g, " ");
    const errordir = document.getElementById("direrr").value;
    const accion = document.getElementById("DIRAGQU").value;
 
// validar direccion
    if (diragen && dirtt && dirtt && accion) {
      if (accion === "CANCELAR") {
        txt = `Sr(a). evidencio que hay una inconsistencia en la dirección que tenemos registrada, ya que en el sistema tenemos la dirección ${diragen} `;
        if (errordir === "Total Dirección errada") {
          txt += `y la Dirección es diferente respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en la dirección `;
          document.getElementById("exampleDataList").value = "DIRECCIÓN ERRADA"
        } else if (errordir === "Via Principal") {
          txt += `y hay un error en la primera parte respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en la vía Principal de la dirección `;
          document.getElementById("exampleDataList").value = "VIA PRINCIPAL ERRADA"
        } else if (errordir === "Cruce") {
          document.getElementById("exampleDataList").value = "CRUCE ERRADO"
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en el cruce de la dirección `;
          txt += `y hay un error en la segunda parte respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
        } else if (errordir === "Placa") {
          document.getElementById("exampleDataList").value = "DIRECCIÓN ERRADA"
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en la placa de la dirección `;
          txt += `y hay un error en el número/placa respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
        } else if (errordir === "Complemento") {
          document.getElementById("exampleDataList").value = "ERROR EN COMPLEMENTO"
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en el complemento de la dirección `;
          txt += `y hay un error en el complemento respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
        }
        document.getElementById("Motivo1").value = "2"

        txt += ` Pedimos una disculpa por lo sucedido, sin embargo es necesario CANCELAR por favor Contactar al asesor comercial o a la Línea 018000911008 para el reingreso de tu pedido.
        
Fue un gusto atenderte, gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier inquietud o duda, te puedes comunicar a la linea nacional 018000911008 o al chat de WhatsApp 3152333333 recuerda que te atendió ${nomagent} que tengas ${getPartOfDay("despedida")}`;

      } else if (errordir === "Complemento") {


        document.getElementById("Motivo1").value = "1"
        if (accion === "AGENDAR (piloto)") {
          document.getElementById("Musuario").value = `Indica que la dirección correcta es ${dirtt} se solicita realizar instalación. Si no es posible la instalación por favor suspender la orden por el motivo correspondiente y evidenciar porque no es posible la instalación`;

        }

      } else {
        aler = "recuerde que solo se puede agendar errores en complementos"
      }

      if (!aler) {
        document.getElementById("diragen").value = "";
        document.getElementById("dirtt").value = "";
        document.getElementById("direrr").value = "";
        document.getElementById("DIRAGQU").value = "";
        document.getElementById("close").click();
        document.getElementById("Motivo1").dispatchEvent(new Event('change'))
      }
    } else {
      aler = "Favor Seleccionar e indicar todos los Campos"
    }
   
    
  } else if (textoid === "saludo" && !nomagent || textoid === "despedida" && !nomagent || textoid === "despedidasinr" && !nomagent) {
    aler = "Favor Indicar Nombre de Agente"
    //mensajes finales Despedidas y saludos
  } else if (textoid === "Noval12"||textoid === "Noval" || textoid === "c" || textoid === "cancpoc" || textoid === "Planin" || textoid === "despDife" || textoid === "CanAg") {
    txt = document.getElementById(textoid).innerHTML + `
    
Fue un gusto atenderte, gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier inquietud o duda, te puedes comunicar a la linea nacional 018000911008 o al chat de WhatsApp 3152333333 recuerda que te atendió ${nomagent} que tengas ${getPartOfDay("despedida")}`
  } else {
    txt = document.getElementById(textoid).innerHTML.replace(/<br\s*\/?>/gi, '\n');
  }
  

  document.getElementById("fe").value = " ";
  document.getElementById("btncheck1").checked = true;
  document.getElementById("btncheck2").checked = true;

  
  if (txt || aler) {
    copiarYAlertar(txt, aler);
  }

 



}

function getPartOfDay(d) {
  const now = new Date();
  const hours = now.getHours();


  if (d === "saludo") {
    if (hours >= 8 && hours < 12) {
      return "Buenos Días";
    } else if (hours >= 12 && hours < 18) {
      return "Buenas Tardes";
    } else {
      return "Buenas Noches";
    }
  } else if (d === "despedida") {
    if (hours >= 8 && hours < 12) {
      return "un excelente día 👋";
    } else if (hours >= 12 && hours < 18) {
      return "una excelente tarde 👋";
    } else {
      return "una excelente Noche 👋";
    }
  }

}

function CopiarChat() {
  const valor1 = document.querySelector("#Motivo1").value;
  const NumT = document.getElementById("NumTitular").value.replace("57", "");
  const NomT = document.getElementById("NomTitular").value;
  const mq = document.getElementById("exampleDataList").value;
  let MotUsuario = document.getElementById("Musuario").value;
  const Fecha = formatearFecha(document.getElementById("Fecha").value);
  const Franja = document.getElementById("Franja").value;
  const firma = document.getElementById("FirmaAgent").value;
  const time = document.getElementById("Fecha2").value.replace("T", " a las ");
  const f = new Date().toLocaleDateString();
  const direr = document.getElementById("dir").checked;
  const predio = document.getElementById("predio").value;
  const pisos = document.getElementById("Cantpi").value;
  const contadores = document.getElementById("Cantco").value;
  let texto = ""
  let aler = ""






  // Corregimos la obtención del número adicional
  const contador = 1; // Asegúrate de que el contador está inicializado en tu código
  const NumAdicionalID = `NumAdicional${contador}`; // Formamos el ID dinámico
  const NumTa = document.getElementById(NumAdicionalID)
    ? document.getElementById(NumAdicionalID).value
    : ""; // Obtenemos el valor del número adicional si existe


  // Manejo de suspensiones



  switch (valor1) {

    case "1":


      if (Fecha) {
        texto = `EVA-RESCATE BO Se realiza interacción con la titular ${NomT} al número ${NumT} ${MotUsuario}, `;
        if (NumTa) {
          texto += `se agrega número adicional ${NumTa} `;
        }


        if (predio !== "NO CONFIRMA" && predio !== "Tipo de Predio") {
          if (predio == "CASA") {
            texto += `indica que es una casa de barrio sin administración, `;

          } else if (predio == "CONJUNTO(casas)") {
            texto += `indica que es un conjunto de casas, `;
          } else if (predio == "CONJUNTO(torres)") {
            texto += `indica que es un conjunto de torres, `;
          } else {
            texto += `indica que es un ${predio}, `;
          }
        }

        if (pisos !== "NO CONFIRMA" && pisos !== "Cant Pisos") {
          if (pisos == "1") {
            texto += `con ${pisos} piso, `;
          } else {
            texto += `con ${pisos} pisos, `;
          }



        }

        if (contadores !== "NO CONFIRMA" && contadores !== "Cant Contadores") {
          if (contadores == "1") {
            texto += `con ${contadores} Contador,`;
          } else {
            texto += `con ${contadores} Contadores,`;
          }

        }
        texto += ` Se procede a agendar para el día ${Fecha} en la franja ${Franja} GESTIÓN REALIZADA POR CHAT EVA GESTIONA ${firma}`;



  to(NomT+NumT,"1");

        
      } else {
        aler = "Escoja Fecha de Agenda"
      }
      break;
    case "2":

      if (mq) {
        texto = `QC - ${mq} Se realiza interacción con la titular ${NomT} al número ${NumT} ${MotUsuario}, se procede a cancelar orden GESTIÓN REALIZADA POR CHAT EVA GESTIONA ${firma}`;
        to(NomT+NumT,"cancelar")
      } else {
        aler = "Escoja Motivo De Quiebre"
      }

      break;

    case "3":
      if (Fecha) {
        texto = `PROYECTO EVA - Se realiza gestión interna. Se deja agenda inicial para el día ${Fecha} en la franja ${Franja}`;

        if (direr) {
          texto += ` ${MotUsuario},`;
        }
        texto += ` Gestionado por ${firma}`;
        document.getElementById("fe1").value = document.getElementById("Fecha").value
        document.getElementById("fra").value = Franja
                to(texto,"1");

      } else {
        aler = "Escoja Fecha de Agenda"

      }

      break;

    case "4":

      texto = `PROYECTO EVA - Compromiso de llamada - Titular ${NomT} Indica que nos comuniquemos el día ${time}. OBSERVACION: Solicita devolver la llamada para validar información de agenda. Gestiona ${firma} ${f}`;
      document.getElementById("Fechas").value = document.getElementById("Fecha2").value
      break;
    default:
      aler = "Escoja Motivo"

      break;
  }

  texto = texto.replaceAll(/[()?¿#:+*]/g, "")
  copiarYAlertar(texto, aler);

}


// Cambio de ID para boton Tipificar
document.addEventListener("DOMContentLoaded", function () {
  const btnTipificar = document.getElementById("Btip");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      const target = this.getAttribute("data-bs-target");
      btnTipificar.setAttribute("data-bs-target", target);
    });
  });

  btnTipificar.addEventListener("click", function () {
    const target = this.getAttribute("data-bs-target");
    if (target) {
      const modal = document.querySelector(target);
      $(modal).modal("show");
    }
  });
});

// búsqueda

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    const searchValue = e.target.value.toLowerCase().trim();
    let anyItemVisible = false;

    document.querySelectorAll(".accordion-item").forEach((item) => {
      const paragraphs = item.querySelectorAll("h4");
      let isVisible = false;

      paragraphs.forEach((p) => {
        if (p.textContent.toLowerCase().includes(searchValue)) {
          isVisible = true;
        }
      });

      if (isVisible) {
        item.classList.remove("filtro");
        const button = item.querySelector(".accordion-button");
        if (button && button.classList.contains("collapsed")) {
          button.click(); // Expande el acordeón
        }
        anyItemVisible = true;
      } else {
        item.classList.add("filtro");
        const button = item.querySelector(".accordion-button");
        if (button && !button.classList.contains("collapsed")) {
          button.click(); // Colapsa el acordeón si no hay coincidencia
        }
      }
    });

    // Oculta el acordeón si no hay ninguna coincidencia
    if (!anyItemVisible) {
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.add("filtro");
      });
    }
  }
});

function CopiarPiloto() {
  const valor1 = document.querySelector("#MotivPi1").value;
  const NumT = document.getElementById("NumTitular").value;
  const NomT = document.getElementById("NomTitular").value;
  const mq = document.getElementById("exampleDataList2").value;
  const MotUsuario = document.getElementById("Musuario").value;
  const Fecha = document.getElementById("Fecha").value;
  const Franja = document.getElementById("Franja").value;
  const firma = document.getElementById("FirmaAgent").value;
  const predio = document.getElementById("predio").value;
  const pisos = document.getElementById("Cantpi").value;
  const contadores = document.getElementById("Cantco").value;
  const direcc = document.getElementById("direccion1").value;
  const tecn = document.getElementById("TEC").checked;
  let aler = ""

  const barrio = document.getElementById("Barrio").value;

  const dire = document.getElementById("dir").checked;



  let texto = `Se marca al número ${NumT} del titular ${NomT} ${MotUsuario},`;

  // Corregimos la obtención del número adicional
  const contador = 1; // Asegúrate de que el contador está inicializado en tu código
  const NumAdicionalID = `NumAdicional${contador}`; // Formamos el ID dinámico
  const NumTa = document.getElementById(NumAdicionalID)
    ? document.getElementById(NumAdicionalID).value
    : ""; // Obtenemos el valor del número adicional si existe

  // Manejo de suspensiones

  switch (valor1) {
    case "1":


      if (dire) {
        texto += ` la direccion correcta es ${direcc} y en el barrio ${barrio},`;
      } else {
        texto += ` la direccion es correcta,`;
      }
      if (NumTa) {
        texto += `, se agrega número adicional ${NumTa} `;
      }

      if (predio !== "NO CONFIRMA" && predio !== "Tipo de Predio") {
        if (predio == "CASA") {
          texto += ` indica que es una casa de barrio sin administración, `;

        } else if (predio == "CONJUNTO(casas)") {
          texto += ` indica que es un conjunto de casas, `;
        } else if (predio == "CONJUNTO(torres)") {
          texto += ` indica que es un conjunto de torres, `;
        } else {
          texto += ` indica que es un ${predio}, `;
        }
      }

      if (pisos !== "NO CONFIRMA" && pisos !== "Cant Pisos") {
        if (pisos == "1") {
          texto += ` con ${pisos} piso, `;
        } else {
          texto += ` con ${pisos} pisos, `;
        }



      }

      if (contadores !== "NO CONFIRMA" && contadores !== "Cant Contadores") {
        if (contadores == "1") {
          texto += ` con ${contadores} Contador, `;
        } else {
          texto += ` con ${contadores} Contadores, `;
        }

      }



      texto += ` Se continua con programación inicial. GESTIÓN PILOTO QUIEBRES ${firma}`;


      break;
    case "2":
      if (Fecha) {
        if (dire) {
          texto += ` la direccion correcta es ${direcc} y en el barrio ${barrio},`;
        } else {
          texto += ` la direccion es correcta,`;
        }
        if (NumTa) {
          texto += `, se agrega número adicional ${NumTa} `;
        }

        if (predio !== "NO CONFIRMA" && predio !== "Tipo de Predio") {
          if (predio == "CASA") {
            texto += ` indica que es una casa de barrio sin administración, `;

          } else if (predio == "CONJUNTO(casas)") {
            texto += ` indica que es un conjunto de casas, `;
          } else if (predio == "CONJUNTO(torres)") {
            texto += ` indica que es un conjunto de torres, `;
          } else {
            texto += ` indica que es un ${predio}, `;
          }
        }

        if (pisos !== "NO CONFIRMA" && pisos !== "Cant Pisos") {
          if (pisos == "1") {
            texto += ` con ${pisos} piso, `;
          } else {
            texto += ` con ${pisos} pisos, `;
          }



        }

        if (contadores !== "NO CONFIRMA" && contadores !== "Cant Contadores") {
          if (contadores == "1") {
            texto += ` con ${contadores} Contador, `;
          } else {
            texto += ` con ${contadores} Contadores, `;
          }

        }
        texto += ` Cliente solicita reagendar para el dia ${Fecha} en la franja ${Franja}. GESTIÓN PILOTO QUIEBRES ${firma}`;


      } else {
        aler = "Escoja Fecha Para Reagendar"
      }

      break;

    case "3":
      if (mq) {
        if (mq === "DIRECCIÓN ERRADA") {
          texto = `QC - ${mq} Se marca al número ${NumT} del titular ${NomT} ${MotUsuario}. Cliente indica que la dirección correcta es ${direcc} y el barrio ${barrio}, se procede a cancelar GESTIÓN PILOTO QUIEBRES ${firma}`;
        } else {
          texto = `QC - ${mq} Se marca al número ${NumT} del titular ${NomT} ${MotUsuario}, se procede a cancelar GESTIÓN PILOTO QUIEBRES ${firma}`;
        }
      } else {
        aler = "Escoja Motivo de Quiebre"
      }

      break;

    case "4":
      texto = `NO CONTACTO - Se marca al número ${NumT} `;
      if (NumTa) {
        texto = `NO CONTACTO - Se marca los Numeros ${NumT}, ${NumTa} `;
      }
      if (tecn) {
        texto += `${MotUsuario},`;

      } else {
        texto += `, en 3 oportunidades y no se logra establecer comunicación.`;

      }


      texto += ` GESTIÓN PILOTO QUIEBRES ${firma}`;
      break;
    default:
      aler = "Escoja Motivo"
      break
  }


  copiarYAlertar(texto, aler);
}

function cloncel() {
  var contador = 1;
  if (!document.getElementById('divAdicional1')) {
    // Crear un nuevo div para el clon
    var clone = document.createElement("div");
    clone.className = "col-sm mt-2"; // Clase de estilo para el nuevo div
    clone.id = `divAdicional${contador}`; // Asignar un id único para este contenedor

    // Crear un contenedor para el label
    var labelContainer = document.createElement("div");
    labelContainer.className = "mb-2"; // Clase para margen en la parte inferior

    // Crear un nuevo label
    var newLabel = document.createElement("label");
    newLabel.setAttribute("for", "NumAdicional" + contador);
    newLabel.textContent = "Número adicional";

    // Agregar el nuevo label al contenedor del label
    labelContainer.appendChild(newLabel);

    // Crear un contenedor para el input y el botón
    var inputButtonContainer = document.createElement("div");
    inputButtonContainer.className = "d-flex align-items-center"; // Alineación horizontal

    // Crear un nuevo input
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "form-control trans me-2"; // Clase de margen a la derecha para separar el input del botón
    newInput.id = "NumAdicional" + contador;
    newInput.setAttribute("autocomplete", "off");
    newInput.setAttribute("required", true);

    // Crear botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.setAttribute("class", "btn btn-danger");
    botonEliminar.setAttribute("type", "button");

    // Agregar el ícono SVG al botón de eliminar
    botonEliminar.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>`;

    // Función para eliminar el div contenedor completo (label, input y botón)
    botonEliminar.addEventListener("click", function () {
      clone.remove(); // Eliminar el div completo
    });

    // Agregar el nuevo input y botón al contenedor del input y botón
    inputButtonContainer.appendChild(newInput);
    inputButtonContainer.appendChild(botonEliminar);

    // Agregar el contenedor del label y el contenedor del input y botón al nuevo div
    clone.appendChild(labelContainer);
    clone.appendChild(inputButtonContainer);

    // Incrementar el contador para los siguientes clones
    contador++;

    // Obtener el div "nomt" para insertar el nuevo campo antes de él
    var nomt = document.getElementById("nomt");

    // Insertar el nuevo div antes del div con id="nomt"
    nomt.parentNode.insertBefore(clone, nomt);
  }

}


function formatearFecha(fecha) {
  if (fecha) {
    let fecha1 = new Date(fecha)

    var Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var Dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];



    let [ano, mes, dia] = fecha.split("-")

    let nombreMes = Meses[mes - 1]

    let nombreDia = Dia[fecha1.getDay()]

    var fechaFormateada = `${nombreDia}, ${dia} ${nombreMes} ${ano}`
  } else {
    fechaFormateada = ""
  }




  return fechaFormateada;
}


function procesarServicio(celda) {

  const contiene = (texto, busqueda) => texto.toLowerCase().includes(busqueda.toLowerCase());


  let tipo = "";
  if ((contiene(celda, "trio") || contiene(celda, "iptv")) && contiene(celda, "Descuento")) {
    tipo = "TRIO";
  } else if (((contiene(celda, "voz") || contiene(celda, "duo")) && contiene(celda, "Descuento")) && !contiene(celda, "Naked")) {
    tipo = "DUO";
  } else if ((contiene(celda, "solo internet") || contiene(celda, "plan banda") || contiene(celda, "Naked")) && contiene(celda, "Descuento")) {
    tipo = "BA";
  } else if (contiene(celda, "trio")) {
    tipo = "TRASLADOTRIO";
  } else if (contiene(celda, "duo") || contiene(celda, "VOZ") && !contiene(celda, "Naked")) {
    tipo = "TRASLADODUO";
  } else if (contiene(celda, "solo internet")) {
    tipo = "TRASLADOBA";
  } else if (contiene(celda, "plan banda")) {
    tipo = "TRASLADOBA";
  } else if (contiene(celda, "visita tecnica")) {
    tipo = "TEST DE VISITA";
  } else if (contiene(celda, "deco adicional")) {
    tipo = "DECO ADICIONAL";
  } else if (contiene(celda, "Deco Incluido")) {
    tipo = "Alta TV";
  }




  let velocidad = "";
  const regexvelocidad = /(\d+)\s?Mbps/
  const mbpsPos = celda.match(regexvelocidad)
  if (mbpsPos) {
    velocidad = mbpsPos[1] + " Mbps";
  }


  let decos = 0;

  let baseport;

  if (contiene(celda, "Baseport")) {
    baseport = 1;
  }

  if (tipo === "TRIO" || tipo === "DECO ADICIONAL" || tipo === "Alta TV") {
    decos = (celda.match(/Deco(?!_)/gi) || []).length
  }


  let movistarTvF = contiene(celda, "MTV App_FIJA") ? "Movistar TV APP de 74 Canales en vivo" : "";
  let movistarTvb = contiene(celda, "MTV App_Parrilla") || contiene(celda, "MTV App Basico") ? "Movistar TV APP de 9 Canales en vivo" : "";

  const win = contiene(celda, "Win") ? "Win +" : "";
  const netflix = contiene(celda, "netflix") ? "Netflix" : "";
  const combo = contiene(celda, "Combo Plus") || contiene(celda, "Disney+") || contiene(celda, "Disney +") ? "Disney +" : "";
  const disney =  contiene(celda, "DisneyPremium") || contiene(celda, "Disney_Premium")  ? "Disney Premium" : "";
  const HBO = contiene(celda, "HBO") ? "HBO +" : "";



  let resumen = "En sistema nos registra una ";
  switch (tipo) {
    case "TRIO":
      resumen += `Instalación de servicio nuevo TRIO con

* ☎️ telefonía fija básica
* 🌐 internet en fibra óptica de ${velocidad}
* 📺 televisión de 92 canales con `;
      if (decos === 1) {
        resumen += `${decos} DECO.`;

      } else {
        resumen += `${decos} DECOS. `;
      }
      movistarTvF = "Movistar TV APP de 74 Canales en vivo";

      break;
    case "DUO":
      resumen += `Instalación de servicio nuevo DUO con

* ☎️ telefonía fija básica
* 🌐 internet en fibra óptica de ${velocidad}.`;
      break;
    case "BA":
      resumen += `Instalación de servicio SOLO INTERNET

* 🌐 internet en fibra óptica de ${velocidad}.`;
      break;
    case "DECO ADICIONAL":
      resumen += `Instalación de `;
      if (decos == 1) {
        resumen += `${decos} DECO adicional.`;

      } else {
        resumen += `${decos} DECOS adicionales. `;

      }

      break;
    case "TEST DE VISITA":
      resumen += `Una visita técnica para realizar la tarea solicitada.`;
      break;
    case "TRASLADOTRIO":
      resumen += `Instalación de servicio de TRASLADO de telefonía fija básica, internet en fibra óptica de ${velocidad} y televisión `;
      break;
    case "TRASLADODUO":
      resumen += `Instalación de servicio TRASLADO DUO de telefonía fija básica e internet en fibra óptica de ${velocidad}.`;
      break;
    case "TRASLADOBA":
      resumen += `Instalación de servicio TRASLADO SOLO INTERNET en fibra de ${velocidad}`;
      break;
    case "Alta TV":
      resumen += `Instalación de servicio Alta TV con `;
      if (decos == 1) {
        resumen += `${decos} DECO.`;

      } else {
        resumen += `${decos} DECOS. `;

      }
      break;
    default:
      resumen = "";
  }



  if (baseport) {
    resumen += "+ Repetidor Wifi."
  }

  if (contiene(celda, "Convergente")) {
    resumen += `
* Linea plan Pospago`;
  }

  if (movistarTvb || movistarTvF || win || netflix || combo || HBO|| disney) {
    resumen += `
* Servicios incluidos: ${[movistarTvF, movistarTvb, win, netflix, combo,disney, HBO].filter(s => s).join(", ")}.`;
  }

  if (resumen) {
    return resumen + `

¿Este plan es correcto?`
  } else {
    copiarYAlertar("", "Plan No Identificado")
  }

  ;
}


function validar_descuentos(se) {



  let regex = /[0-9]+%[ ]?[_]?[xX][_]?[ ]?[0-9]+[_]?[ ]?[(]?[A-Za-z0-9 ]*[)]?/
  let regex2 = /[0-9]+%[ ]?[_]?[A-Za-z]{3}[_]?[ ]?[0-9]+[_]?[ ]?[(]?[A-Za-z0-9 ]*[)]?/
  let regex3 = /[0-9]+% cargo de instalacion Banda Ancha/
  const contiene = (texto, busqueda) => texto.toLowerCase().includes(busqueda.toLowerCase());

  let match1 = se.match(regex2);
  let match = se.match(regex);
  let match3 = se.match(regex3);


  let resumen = "Recuerde que su servicio cuenta con los siguientes Descuentos  ";
  if (match1) {
    let Desc = match1.index + match1[0].length;
    desc = se.substring(Desc);
    let descu = match1[0];
    resumen += `

* Descuento exclusivo del ${descu}`;

  }


  if (match) {
    let Desc1 = match.index + match[0].length;
    Desc1 = se.substring(Desc1);
    let Descu1 = match[0];
    resumen += `
* Descuento de cortesía del ${Descu1}`;
  }


  if (match3) {
    let Desc2 = match3.index + match3[0].length;
    Desc2 = se.substring(Desc2);
    let Descu2 = match3[0];
    resumen += `
* Descuento ${Descu2}`;
  }





  let tipo = "";
  if ((contiene(se, "trio") || contiene(se, "iptv")) && contiene(se, "Descuento")) {
    tipo = "TRIO";
  } else if ((contiene(se, "voz") || contiene(se, "duo")) && contiene(se, "Descuento")) {
    tipo = "DUO";
  }


  const regexvelocidad = /(\d+)\s?Mbps/
  const mbpsPos = se.match(regexvelocidad)



  let decos = 0;

  let baseport;




  decos = (se.match(/Deco(?!_)/gi) || []).length



  let movistarTvF = contiene(se, "MTV App_FIJA") ? "Movistar TV APP de 74 Canales en vivo" : "";
  let movistarTvb = contiene(se, "MTV App_Parrilla") || contiene(se, "MTV App Basico") ? "Movistar TV de 9 Canales en vivo" : "";

  const win = contiene(se, "Win") ? "Win +" : "";
  const netflix = contiene(se, "netflix") ? "Netflix" : "";
  const combo = contiene(se, "Combo Plus") || contiene(se, "Disney+") || contiene(se, "Disney +") ? "Disney +" : "";
  const disney =  contiene(se, "DisneyPremium") || contiene(se, "Disney_Premium") ? "Disney Premium" : "";
  const HBO = contiene(se, "HBO") ? "HBO +" : "";


  switch (tipo) {
    case "TRIO":
      resumen += `
* ☎️ telefonía fija básica
* 📺 televisión de 92 canales`
      if (decos == 1) {
        resumen += ` 
* ${decos} Deco.`;

      } else {
        resumen += ` 
* ${decos} Decos. `;

      }
      movistarTvF = "Movistar TV de 74 Canales en vivo";

      break;
    case "DUO":
      resumen += `
* ☎️ telefonía fija básica`;
      break;
  }


  if (contiene(se, "Baseport")) {
    baseport = 1;
  }

  if ((contiene(se, "Convergente"))) {
    resumen += `
* Plan Pospago`;
  }

  if (baseport) {
    resumen += `
* Repetidor Wifi.`
  }



  if (movistarTvb || movistarTvF || win || netflix || combo || HBO) {
    resumen += ` 
* ${[movistarTvF, movistarTvb, win, netflix,disney,combo, HBO].filter(s => s).join(`
* `)}.`;
  }



  if (mbpsPos) {
    resumen += `
* 🌐 Internet en fibra óptica de ${mbpsPos[1]} megas simétricas estables`;
  }
  if (match || match1 || match3) {
    return resumen += `
    
Aun así desea cancelar el servicio?`;
  } else {
    copiarYAlertar("", "El Servicio No Cuenta Con Descuentos")
  }




}

function DiasSemana(f) {

  let fecha1 = new Date(f + "T00:00:00")
  function getDiaNombre(dia) {
    switch (dia) {
      case 0:
        return "Domingo";
      case 1:
        return "Lunes";
      case 2:
        return "Martes";
      case 3:
        return "Miércoles";
      case 4:
        return "Jueves";
      case 5:
        return "Viernes";
      case 6:
        return "Sábado";
    }

  }

  var diaActual = fecha1.getDay();


  var diasSemana = [];


  diasSemana.push(getDiaNombre(diaActual));


  for (var i = 1; i <= 2; i++) {
    var diaSiguiente = (diaActual + i) % 7;
    diasSemana.push(getDiaNombre(diaSiguiente));
  }

  return diasSemana;
}

function cambio() {
  nombreAsesor = document.getElementById("NomAgent").value;

  if (nombreAsesor) {
    if (k == 1) {
      handleMotivo();
      k = 0
    } else if (k == 0) {
      handleMotivoChat();
      k = 1
    }
  } else {
    copiarYAlertar("", "Favor Indicar Nombre de Agente")
  }

}







function GuardarDatos(p) {
  const modalElement = document.getElementById("exampleModal")
  const modalInstance = new bootstrap.Modal(modalElement)

  nombreAsesor = document.getElementById("NomAgent").value;
  agentAsesor = document.getElementById("FirmaAgent").value;
  if (agentAsesor) {
    if ((p == 1 && nombreAsesor) || p == 0 || p == 3) {
      const modalq = {
        1: handleMotivoChat,
        3: handleMotivoPiloto,
        0: handleMotivo
      }
      localStorage.setItem("nombreAsesor", nombreAsesor);
      modalInstance.show()
      modalq[p]()
    } else {
      copiarYAlertar("", "Favor Indicar Nombre de Asesor")
    }
    localStorage.setItem("agentAsesor", agentAsesor);
  } else {
    copiarYAlertar("", "Favor Indicar Firma de Asesor")
  }
}

function to(j,p) {

  if (t!==j && p=="1" ) {  
      numero++;
      localStorage.setItem("agendar", numero);
      contador.innerHTML = "AGENDADAS:   " + numero ;
      t=j
    } else if (c!==j&& p=="cancelar") { {
      numero1++;
      localStorage.setItem("Cancelar", numero1);
      contador1.innerHTML = "CANCELADAS:   " + numero1;
      c=j
    }
 
  } 
let suma = Number(numero) + Number(numero1)
 total.innerHTML = "TOTAL: " + suma
}



document.addEventListener("DOMContentLoaded", () => {

  let agendar = localStorage.getItem("agendar") || 0
  let cancelar = localStorage.getItem("Cancelar") || 0
  let suma = Number(agendar) + Number(cancelar)
  contador.innerHTML = "AGENDADAS: " + agendar
  contador1.innerHTML = "CANCELADAS: " + cancelar
  total.innerHTML = "TOTAL: " + suma
  document.getElementById("NomAgent").value = localStorage.getItem("nombreAsesor");
  document.getElementById("FirmaAgent").value = localStorage.getItem("agentAsesor");


  const imagenFondoGuardada = localStorage.getItem("imagenFondo");
  if (imagenFondoGuardada) {
    document.body.style.backgroundImage = `url(${imagenFondoGuardada})`;
  }


})


function formatoagend() {
  numero = 0
  numero1 = 0
  localStorage.setItem("agendar", numero);
  localStorage.setItem("Cancelar", numero1);
  contador.innerHTML = "AGENDADAS: " + numero
  contador1.innerHTML = "CANCELADAS: " + numero1
}




