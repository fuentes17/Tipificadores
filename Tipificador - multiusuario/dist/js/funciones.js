


document.addEventListener("click", manejarClick);
document.addEventListener("change", manejarCambio);

function manejarClick(evento) {
  if (evento.target.matches("#copiar")) {
    const texto = document.getElementById("NombreTec").value;
    copiarYAlertar(texto, alerta);
  } else if (evento.target.matches("#copiar1")) {
    const texto = document.getElementById("cedula").value;
    copiarYAlertar(texto, alerta);
  } else if (evento.target.matches("#copiar2")) {
    const texto = document.getElementById("telefono").value;
    copiarYAlertar(texto, alerta);
  } else if (evento.target.matches("#copiar3")) {
    const tis = document.getElementById("atis").value;
    texto = "100000" + tis
    copiarYAlertar(texto, alerta);
  } else if (evento.target.matches("#button-addon1")) {
    manejarBotonAddon1();
  } else if (evento.target.matches("#limpiar")) {
    resetearFormularios();
  } else if (evento.target.matches("#Tipificar")) {
    manejarTipificar();
  } else if (evento.target.matches("#CopiarT")) {
    copiarEnTipificar();
  }
}
function manejarCambio(e) {
  Mo = document.querySelector("#Motivo").value;
  M = document.querySelector("#NS").value;
  valor = document.querySelector("#Contacto").value;
  tra = document.querySelector("#Trabajador").value;
  con = document.getElementById("Contingencia").checked;
  Ac = document.getElementById("Aceptains").checked;
  su = document.getElementById("sus").checked;
  switch (Mo) {
    case "1":

      if (
        e.target.matches("#Motivo") ||
        e.target.matches("#Contacto") ||
        e.target.matches("#Trabajador") ||
        e.target.matches("#Aceptains") ||
        e.target.matches("#Contingencia") || e.target.matches("#sus")
      ) {
        document.getElementById("chatbot").style.display = "block";
        document.getElementById("Titular").style.display = "block";
        document.getElementById("contingencia").style.display = "block";
        document.getElementById("Soporte").style.display = "none";
        document.getElementById("color").style.background = "#28A745";

        if (tra == "Gestor" && valor == "...") {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("Acepta").style.display = "none";
          document.getElementById("chatbot").style.display = "none";
          document.getElementById("suspender").style.display = "none";

        } else if (tra == "Gestor" && valor == "1") {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("Acepta").style.display = "none";
          document.getElementById("chatbot").style.display = "none";
          document.getElementById("suspender").style.display = "none";
        } else if (valor == "1" && tra == "Técnico" && !con && Mo == "1") {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "block";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("Acepta").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("suspender").style.display = "none";
        } else if (valor == "2" && !con && Mo == "1" && !Ac && !su) {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "block";
          document.getElementById("fecha").style.display = "block";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("Acepta").style.display = "block";
          document.getElementById("suspender").style.display = "block";
        } else if (valor == "2" && !con && Mo == "1" && Ac && !su) {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "block";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contingencia").style.display = "block";
          document.getElementById("Acepta").style.display = "block";
          document.getElementById("suspender").style.display = "none";
        } else if (valor == "2" && !con && Mo == "1" && !Ac && su) {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "block";
          document.getElementById("fecha").style.display = "block";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("Acepta").style.display = "none";
          document.getElementById("suspender").style.display = "block";
          document.getElementById("fecha").style.display = "none";

        } else if (con && valor != "1") {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("Acepta").style.display = "none";
          document.getElementById("suspender").style.display = "none";
        } else if (con) {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "block";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("Acepta").style.display = "none";
          document.getElementById("suspender").style.display = "none";

        } else if (!con) {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("contacto").style.display = "block";
        }
      }

      break;
    case "2":
      document.getElementById("color").style.background = "#FF0000";
      document.getElementById("contingencia").style.display = "block";
      document.getElementById("Titular").style.display = "block";
      document.getElementById("Soporte").style.display = "none";
      tel = document.getElementById("exampleDataList").value;
      document.getElementById("chatbot").style.display = "none";

      if (
        e.target.matches("#Motivo") ||
        e.target.matches("#Contacto") ||
        e.target.matches("#Trabajador") ||
        e.target.matches("#Contingencia")
      ) {
        document.getElementById("chatbot").style.display = "none";
        document.getElementById("Acepta").style.display = "none";

        if (tra == "Gestor" && valor == "...") {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("suspender").style.display = "none";
        } else if (tra == "Gestor" && valor == "1" && !con) {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("suspender").style.display = "none";

        } else if (tra == "Técnico" && valor == "1" && !con) {
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("MoQuiebre").style.display = "block";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "block";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("suspender").style.display = "none";
        } else if (valor == "2" && !con && Mo == "2") {
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "block";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("MoQuiebre").style.display = "block";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("suspender").style.display = "block";
          document.getElementById("contingencia").style.display = "none";
        } else if (con) {
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("contacto").style.display = "none";
          document.getElementById("MoQuiebre").style.display = "block";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("nomt").style.display = "block";
          document.getElementById("numt").style.display = "block";
          document.getElementById("suspender").style.display = "none";
        } else if (!con) {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "none";
          document.getElementById("contacto").style.display = "block";
          document.getElementById("nomt").style.display = "block";
          document.getElementById("numt").style.display = "block";
        }
      }

      break;

    case "3":

      if (e.target.matches("#Motivo") || e.target.matches("#NS")) {
        document.getElementById("color").style.background = "#F18F13";
        document.getElementById("chatbot").style.display = "none";
        document.getElementById("Acepta").style.display = "none";
        document.getElementById("suspender").style.display = "none";
        if (M == "11" || M == "6" || M == "13" || M == "14" || M == "3" || M == "9" || M == "4") {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "block";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "block";
          document.getElementById("contacto").style.display = "none";
          document.getElementById("Titular").style.display = "block";
          document.getElementById("contingencia").style.display = "none";
        } else if (M == "16") {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "block";
          document.getElementById("Soporte").style.display = "block";
          document.getElementById("contacto").style.display = "none";
          document.getElementById("Titular").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
          document.getElementById("Acepta").style.display = "block";
          document.getElementById("gp").innerHTML = "Dirección"
          document.getElementById("sf").innerHTML = "Recibo Público"
        } else {
          document.getElementById("MoQuiebre").style.display = "none";
          document.getElementById("MotivoTec").style.display = "block";
          document.getElementById("Musuariod").style.display = "none";
          document.getElementById("fecha").style.display = "none";
          document.getElementById("GPS").style.display = "none";
          document.getElementById("Soporte").style.display = "block";
          document.getElementById("contacto").style.display = "none";
          document.getElementById("Titular").style.display = "none";
          document.getElementById("contingencia").style.display = "none";
        }

        break;
      }
  }
}
function copiarYAlertar(t, callback) {
  try {
    copiarAlPortapapeles(t);
    callback(t);
  } catch (error) {
    console.error("Error al copiar al portapapeles:", error);
  }
}

function manejarBotonAddon1() {
  try {
    const tis = document.getElementById("atis").value;
    const cuota = document.getElementById("Fecha").value;
    const franja = document.getElementById("Franja").value;
    const texto = `¡Hola! Solicito un cupo para el día ${cuota} en la franja ${franja} para la orden 100000${tis}`;

    copiarAlPortapapeles(texto);
    alerta(texto, 1);
  } catch (error) {
    console.error("Error al copiar al portapapeles:", error);
  }
}

function resetearFormularios() {
  Form.reset();
  Formulario.reset();
}

function manejarTipificar() {

  document.getElementById("Soporte").style.display = "none";
  document.getElementById("MotivoTec").style.display = "none";
  document.getElementById("Musuariod").style.display = "none";
  document.getElementById("fecha").style.display = "none";
  document.getElementById("GPS").style.display = "none";
  document.getElementById("MoQuiebre").style.display = "none";
  document.getElementById("Titular").style.display = "none";
  document.getElementById("Acepta").style.display = "none";
  document.getElementById("chatbot").style.display = "none";
  document.getElementById("color").style.background = "#1392F1";
  document.getElementById("suspender").style.display = "none";
  document.getElementById("gp").innerHTML = "GPS"
  document.getElementById("sf").innerHTML = "Soporte Fotográfico"

}

function copiarEnTipificar() {
  valor = document.querySelector("#Motivo").value;
  MotTecnico = document.getElementById("Mtecnico").value;
  NumT = document.getElementById("NumTitular").value;
  NomT = document.getElementById("NomTitular").value;
  conti = document.getElementById("Contingencia").checked;
  Acepta = document.getElementById("Aceptains").checked;
  Trab = document.getElementById("Trabajador").value;
  val = document.getElementById("Contacto").value;
  mq = document.getElementById("exampleDataList").value;
  MotUsuario = document.getElementById("Musuario").value;
  fecha = document.getElementById("Fecha").value;
  Franja = document.getElementById("Franja").value;
  gp = document.getElementById("gps").value;
  sf = document.getElementById("SF").value;
  fc = document.getElementById("FC").checked;
  su = document.getElementById("sus").checked;
  q = document.getElementById("exampleDataList").value;
  nomagent = document.getElementById("NomAgent").value;
  agent = document.getElementById("Agent").value;

  m = " ";
  c = " ";
  switch (valor) {
    case "1":
      if (conti) {

        if (val == "1" && !fc && gp == "OK" && sf == "OK") {

          m = " se valida chatbot ok no "
          c = " POR CONTINGENCIA Se Valida GPS " + gp + " Se Valida SOPORTE FOTOGRÁFICO " + sf + " se deja orden pendiente por reagendar  "
        } else if (val == "1" && fc && gp == "OK" && sf == "OK") {
          m = " se valida soporte por falla en chatbot ok no "
          c = " POR CONTINGENCIA Se Valida GPS " + gp + " Se Valida SOPORTE FOTOGRÁFICO " + sf + " se deja orden pendiente por reagendar  "
        } else if (val == "1" && !fc && gp != "OK" || sf != "OK") {

          m = " se valida chatbot ok no "
          c = " POR CONTINGENCIA Se Valida GPS " + gp + " Se Valida SOPORTE FOTOGRÁFICO " + sf + " Se le indica a Técnico dirigirse al predio y Subir Soporte fotográfico  "
        } else if (val == "1" && fc && gp != "OK" || sf != "OK") {
          m = " se valida soporte por falla en chatbot ok no "
          c = " POR CONTINGENCIA Se Valida GPS " + gp + " Se Valida SOPORTE FOTOGRÁFICO " + sf + " Se le indica a Técnico dirigirse al predio y Subir Soporte fotográfico  "
        } else if (!fc) {
          m = " se valida chatbot ok no "
          c = " POR CONTINGENCIA se deja pendiente por reagendar "
        } else if (fc) {
          m = " se valida soporte por falla en chatbot ok no "
          c = " POR CONTINGENCIA se deja pendiente por reagendar"
        }



      } else if (val == "2") {
        if (!Acepta && !fc && !su) {

          m = " se valida CHATBOT OK "
          c = "  se reagenda para " +
            fecha +
            " En la franja " +
            Franja

        }

        if (!Acepta && !fc && su) {



          m = " se valida CHATBOT OK "
          c = " se deja orden pendiente por reagendar "

        } else if (!Acepta && fc && !su) {

          m = " se valida soporte por falla en chatbot ok "
          c = " se reagenda para " + fecha + " En la franja " + Franja

        } else if (!Acepta && fc && su) {

          m = " se valida soporte por falla en chatbot ok "
          c = " se deja orden pendiente por reagenda "

        }
        else if (Acepta && !fc && !su) {

          m = " se valida CHATBOT OK "
          c = " indica que esta a la espera de instalación valida datos correctos "

        } else if (Acepta && fc && !su) {

          m = " se valida soporte por falla en chatbot ok "
          c = " indica que esta a la espera de instalación valida datos correctos "

        }
      } else if (val == "1" && Trab == "Técnico" && !fc) {
        if (gp == "OK" && sf == "OK") {

          m = " se valida chatbot ok "
          c = " No contesta Se Valida GPS " +
            gp +
            " Se Valida SOPORTE FOTOGRÁFICO " +
            sf +
            " se deja orden pendiente por reagendar "

        } else {
          m = " se valida chatbot ok "
          c = " No contesta Se Valida GPS " +
            gp +
            " Se Valida SOPORTE FOTOGRÁFICO " +
            sf +
            " Se le indica a Técnico dirigirse al predio y Subir Soporte fotográfico "
        }
      } else if (val == "1" && Trab == "Técnico" && fc) {
        if (gp == "OK" && sf == "OK") {

          m = " se valida soporte por falla en chatbot ok "
          c = " No contesta Se Valida GPS " + gp + " Se Valida SOPORTE FOTOGRÁFICO " + sf + " se deja orden pendiente por reagendar "
        } else {

          m = " se valida soporte por falla en chatbot ok "
          c = " No contesta Se Valida GPS " +
            gp +
            " Se Valida SOPORTE FOTOGRÁFICO " +
            sf +
            " Se le indica a Tecnico dirigirse al predio y Subir Soporte fotográfico "

        }
      }

      if (val == "1" && Trab == "Gestor") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico} se marca al número ${NumT} titular ${NomT} no contesta se le indica a gestor que favor envié técnico a predio para proceder con la gestión Gestionado por ${nomagent} ${agent}.`;
      } else if (val == "2") {
        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico} ${m} se marca al número ${NumT} titular ${NomT} ${MotUsuario} ${c} Gestionado por ${nomagent} ${agent}.`;
      } else {
        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico} ${m} se marca al número ${NumT} titular ${NomT} ${c} Gestionado por ${nomagent} ${agent}.`;
      }



      copiarYAlertar(texto, alerta);

      break

    case "2":


      if (conti) {

        texto = `QC - ${mq} LINEA RESCATE Se comunica ${Trab} informando Titular desea cancelar el servicio ${MotTecnico} no se marca al número ${NumT} titular ${NomT} POR CONTINGENCIA se deja orden suspendida en aplicativos Gestionado por ${nomagent} ${agent}`;

      } else if (val == "2" && q != "TELEFONO DEL CLIENTE ERRADO" && q != "GESTIÓN COMERCIAL/CLIENTE ACEPTA INSTALACIÓN" && q != "GESTIÓN COMERCIAL/CLIENTE SOLICITA LLAMAR EN 10 MIN" && !su) {


        texto = `QC - ${mq} LINEA RESCATE Se comunica ${Trab} informando Titular desea cancelar el servicio ${MotTecnico} Se marca al número ${NumT} titular ${NomT} ${MotUsuario} se hace objeción pero desiste valida datos, se procede a quebrar orden Gestionado por ${nomagent} ${agent}`;



      } else if (val == "2" && q != "TELEFONO DEL CLIENTE ERRADO" && q != "GESTIÓN COMERCIAL/CLIENTE ACEPTA INSTALACIÓN" && q != "GESTIÓN COMERCIAL/CLIENTE SOLICITA LLAMAR EN 10 MIN" && su) {

        texto = `QC - ${mq} LINEA RESCATE Se comunica ${Trab} informando Titular desea cancelar el servicio ${MotTecnico} Se marca al número ${NumT} titular ${NomT} ${MotUsuario} se deja orden suspendida en aplicativos Gestionado por ${nomagent} ${agent}`;

      } else if (val == "2" && q == "GESTIÓN COMERCIAL/CLIENTE ACEPTA INSTALACIÓN" && q != "TELEFONO DEL CLIENTE ERRADO" && q != "GESTIÓN COMERCIAL/CLIENTE SOLICITA LLAMAR EN 10 MIN") {

        texto = `LINEA RESCATE Se comunica técnico  informando Titular desea cancelar el servicio ${MotTecnico} Se marca al número ${NumT} titular ${NomT} ${MotUsuario} se hace objeción acepta instalación, valida datos correctos Gestionado por ${nomagent} ${agent}`;

      } else if (val == "2" && q == "GESTIÓN COMERCIAL/CLIENTE SOLICITA LLAMAR EN 10 MIN" && q != "TELEFONO DEL CLIENTE ERRADO") {

        texto = `LINEA RESCATE Se comunica técnico  informando Titular desea cancelar el servicio ${MotTecnico} Se marca al número ${NumT} titular ${NomT} ${MotUsuario} solicita que lo llamen en 10 MIN Gestionad por ${nomagent} ${agent}`;
      } else if (val == "2" && q == "TELEFONO DEL CLIENTE ERRADO") {


        texto = `QC - ${mq} LINEA RESCATE Se comunica ${Trab} informando que ${MotTecnico} Se marca al número ${NumT} titular ${NomT} ${MotUsuario} se valida SOPORTE FOTOGRÁFICO OK se valida GPS OK se procede a suspender orden Gestionado por ${nomagent} ${agent}`;

      } else if (val == "1") {

        if (gp == "OK" && sf == "OK" && q != "INCUMPLIMIENTO DE CITA ATRIBUIBLE A TITULAR") {

          texto = `QC - ${mq} LINEA RESCATE Se comunica ${Trab} informando Titular desea cancelar el servicio ${MotTecnico} Se marca al número ${NumT} titular ${NomT} No contesta Se Valida GPS ${gp} Se Valida SOPORTE FOTOGRÁFICO ${sf} se procede a  suspender orden Gestionado por ${nomagent} ${agent}.`;

        } else if (q == "INCUMPLIMIENTO DE CITA ATRIBUIBLE A TITULAR" && gp == "OK" && sf == "OK") {

          texto = `QC - ${mq} LINEA RESCATE Se comunica ${Trab} informando que ${MotTecnico} Se marca al número ${NumT} titular ${NomT} no contesta se valida SOPORTE FOTOGRÁFICO ${sf}  se valida GPS ${gp} , YA QUE LLEVA MAS DE TRES VECES DE NO CONTACTO CON CLIENTE SE  PROCEDE A QUEBRAR ORDEN Gestionado por ${nomagent} ${agent}.`;
        } else {

          texto = `LINEA RESCATE Se comunica técnico informando que el cliente desea cancelar el servicio ${MotTecnico} Se marca al número ${NumT} titular ${NomT} No contesta Se Valida GPS ${gp} Se Valida SOPORTE FOTOGRÁFICO ${sf} Se le indica a Tecnico dirigirse al predio y Subir Soporte fotográfico Gestionado por ${nomagent} ${agent}.`;
        }
      }

      if (val == "1" && Trab == "Gestor") {
        texto = `LINEA RESCATE Se comunica Gestor informando que el cliente desea cancelar el servicio  ${MotTecnico} Se marca al número ${NumT} titular ${NomT} no contesta se le indica a gestor que favor envié técnico a predio para proceder con la gestión Gestionado por ${nomagent} ${agent}`;

      } else if (val == "2" && Trab == "Gestor" && su) {

        texto = `QC - ${mq} LINEA RESCATE Se comunica Gestor informando que el cliente desea cancelar el servicio  ${MotTecnico} Se marca al número ${NumT} titular ${NomT} ${MotUsuario} se deja orden suspendida en aplicativos Gestionado por ${nomagent} ${agent}`;
      }

      copiarYAlertar(texto, alerta);
      break

    case "3":
      spo = document.querySelector("#NS").value;

      if (spo == "1") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico} se valida chatbot y no ha realizado el proceso o no ha esperado respuesta se le recuerda parámetros del aplicativo a tener en cuenta antes de comunicarse con la linea y posibles causas por las cuales debe validar en caso de fallo por centro comando según la información. se le brinda ticket Gestionado por ${nomagent} ${agent}`;
      } else if (spo == "2") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico} se valida orden ya fue gestionada por otro compañero se entrega ticket Gestionado  por ${nomagent} ${agent}`;
      } else if (spo == "3") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  Se marca al número ${NumT} titular ${NomT} contesta ${MotUsuario} se le indica que en linea de rescate no se gestiona ordenes porque le falten materiales debe realizar autogestión o validar con su gestor Gestionado por ${nomagent} ${agent}`;

      } else if (spo == "4") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  Se marca al número ${NumT} titular ${NomT} contesta ${MotUsuario} se le informa que esta gestión no se realiza por linea de rescate que valide con cierre controlado o con su gestor Gestionado por ${nomagent} ${agent}`;

      } else if (spo == "5") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico} se valida orden y orden se encuentra en estado PETICIÓN SUSPENDIDA POR QC - QT - QF, PENDIENTE O CERRADA se le informa a Tecnico que en estos estados no se puede realizar gestión de la orden Gestionado  por ${nomagent} ${agent}`;
      } else if (spo == "6") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  Se marca al número ${NumT} titular ${NomT} contesta ${MotUsuario} se le indica a Tecnico que debe hacer autogestión o validar con gestor ya que en linea de rescate no se gestiona ordenes por lluvias  Gestionad por ${nomagent} ${agent}`;

      } else if (spo == "7") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico} se valida orden se encuentra en franja  am se le indica que en linea rescate solo gestionamos ordenes en am máximo hasta las 1 pm  se le indica a técnico hacer autogestión o validar con su gestor  Gestionado por ${nomagent} ${agent}`;

      } else if (spo == "8") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  se valida orden esta se encuentra en otro estado se le indica a Tecnico no se puede gestionar esta orden se le indica validar con gestor Gestionado  por ${nomagent} ${agent}`;

      } else if (spo == "9") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  Se marca al número ${NumT} titular ${NomT} contesta ${MotUsuario} se le indica que en linea de rescate no se gestiona orden porque no pueda llegar al predio debe validar con gestor o hacer autogestión Gestionado por ${nomagent} ${agent}`;

      } else if (spo == "10") {
        texto = `LINEA RESCATE Se comunica ${Trab} informando que la dirección del predio es errada o no encuentra dirección del predio se le indica comunicarse con gestor o hacer autogestión ya que desde Linea de rescate no se gestionan por ese motivo Gestionad por ${nomagent} ${agent}`;
      } else if (spo == "11") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  Se marca al número ${NumT} titular ${NomT} contesta ${MotUsuario} se hace objeción indicándole costos  indica que ACEPTA se procede a adicionar BASEPORT en aplicativos. Gestionado por ${nomagent} ${agent}`;

      } else if (spo == "12") {

        texto = `LINEA RESCATE Se comunica ${Trab} pero se cae la llamada sin poder validar la información  Gestionado por ${nomagent} ${agent}`;
      } else if (spo == "13") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  Se marca al número ${NumT} titular ${NomT} contesta ${MotUsuario} se le informa a Tecnico hacer autogestión por dirección errada Gestionado por ${nomagent} ${agent}`;

      } else if (spo == "14") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  Se marca al número ${NumT} titular ${NomT} ${MotUsuario} se solicita la baja de perfil en speedy Gestionado por ${nomagent} ${agent}`;

      } else if (spo == "15") {

        texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  se valida orden y es una avería, se le indica que desde linea de rescate no se gestiona que se comunique con gestor o cierre controlado Gestionado por ${nomagent} ${agent}`;
      } else if (spo == "16") {


        if (Acepta) {

          texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  se valida recibo público ${sf}, se valida dirección ${gp}, aceptación de línea de rescate SI, Gestionado por ${nomagent} ${agent}`;


        } else {
          texto = `LINEA RESCATE Se comunica ${Trab} informando ${MotTecnico}  se valida recibo público ${sf}, se valida dirección ${gp}, aceptación de línea de rescate no, Gestionado por ${nomagent} ${agent}`;

        }


      }


      copiarYAlertar(texto, alerta);
      break
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

async function copiarAlPortapapeles(txt) {
  await navigator.clipboard.writeText(txt);
}

