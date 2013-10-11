

function validar_correo(){
/* validación del e-mail */
var correo=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;          
if (contactos.email.value) {  
alert('Contenido del email no es CORREO ELECTR&Oacute;NICO v&aacute;lido.');
return false; }
/* si no hemos detectado fallo devolvemos TRUE */
return true;
}



 function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = [8,37,39,46];

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    }
		
