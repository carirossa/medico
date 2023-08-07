let nombre = prompt ("ingrese su nombre");
let mensaje = "Hola " + nombre;
alert (mensaje);

function agenda(){ 
let respuesta = prompt ("Ingrese el profesional con desea atenderse (Clinico, Traumatologo, Kinesiologo)");
  if(respuesta.toLowerCase() == "clinico"){
      for(let turno = 1; turno <= 7; turno++){
       let mensaje = `Turno #${turno} Nombre: ${nombre}`;
       alert (mensaje);
      break;}}       
      else if(respuesta.toLowerCase() == "traumatologo"){
        for(let turno = 1; turno <= 7; turno++){
         let mensaje = `Turno #${turno} Nombre: ${nombre}`;
         alert (mensaje);
        break;}}
      else if(respuesta.toLowerCase() == "kinesiologo"){
      for(let turno = 1; turno <= 7; turno++){
       let mensaje = `Turno #${turno} Nombre: ${nombre}`;
       alert (mensaje);
      break;}}
}
agenda()
