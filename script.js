String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

const palabras = ['Duff', 'Lisa', 'Bart','Homero'];

const palabra= palabras[Math.floor(Math.random()*palabras.length)];
let palabrasConGuiones = palabra.replace(/./g, "_ ");
contadorFallos = 0;

document.querySelector('#output').innerHTML = palabrasConGuiones
document.querySelector('#calcular').addEventListener('click', () =>{
  const letra = document.querySelector('#letra').value;
    let haFallado = true;
  
  
  for(const i in palabra){
    if(letra == palabra[i]){
      palabrasConGuiones = palabrasConGuiones.replaceAt(i*2, letra);
      haFallado = false; 
    }
       
}
  if(haFallado){
    contadorFallos++;
    document.querySelector('#ahorcado').style.backgroundPosition = -(264*contadorFallos) + 'px 0';
    if(contadorFallos == 4){
      alert("perdiste el juego")
    }
    
  }else{
    if(palabrasConGuiones.indexOf('_')<0){
      document.querySelector('#ganador').style.display = 'flex';
    }
  }
document.querySelector('#output').innerHTML = palabrasConGuiones;

document.querySelector('#letra').value = '';
document.querySelector('#letra').focus();

});




