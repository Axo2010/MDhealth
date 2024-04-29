var Resultado,Number,Number2,operacion;
function CalcularIMC(){
    
     Resultado =document.getElementById("N1").value /
     Math.pow(document.getElementById("N2").value,2);
    document.getElementById("Result").innerHTML=Math.round(Resultado);    
  }