
/* Mascara de telefone */

 $("#telefone").mask("(99) 99999-9999");
                    
        

/* Não conter caractere especial no input endereço*/

const addressInput = document.querySelector("#endereço");

addressInput.addEventListener("keypress", function(e) {

if(!checkChar(e)){
  e.preventDefault();
}

});

function checkChar(e) {

const char = String.fromCharCode(e.keycode);
const pattern = '[a-zA-Z0-9]';

if(char.match(pattern)) {
  return true;
}
}


/* Validação */

const form = document.getElementById("register-form");
const campos = document.querySelectorAll('.required');
const label = document.querySelectorAll('label-required');

function setError(index){
    campos[index].style.border = '2px solid #e63636';
}

 
function nameValidate() {
   if(campos[0].ariaValueMax.length < 3)
          setError(0);
} else {
    console.log('Validado o nome');
}