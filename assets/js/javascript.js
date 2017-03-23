
function boton(num) {
  var numero = document.calculadora.resultado.value;
  document.calculadora.resultado.value = numero + num;
  var numero = document.calculadora.resultado2.value;
  document.calculadora.resultado2.value = numero + num;
  console.log(document.calculadora.resultado.value )
};
function borrar() {//funcion para limpar input
  document.calculadora.resultado.value ="";
  document.calculadora.resultado2.value ="";
};
function calcular(){//funcion para mostrar resultado
  document.calculadora.resultado.value = eval(document.calculadora.resultado.value);
};
function cuadrado() {
  var alCuadrado=Math.pow(eval(document.calculadora.resultado.value),2);
  console.log(alCuadrado);
}
