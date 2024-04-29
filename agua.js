function Cantidaddeagua(){
    Resultado =document.getElementById("N2").value*
    0.035-document.getElementById("N1").value;
    document.getElementById("Result").innerHTML=Math.round(Resultado);
}