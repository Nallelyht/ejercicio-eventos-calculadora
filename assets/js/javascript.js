
function boton(num) {
  var numero = document.calculadora.resultado.value;
  document.calculadora.resultado.value = numero + num;
};
function borrar() {//funcion para limpar input
  document.calculadora.resultado.value ="";
};

}
function calcular(){//funcion para mostrar resultado
  document.calculadora.resultado.value = eval(document.calculadora.resultado.value);
};
