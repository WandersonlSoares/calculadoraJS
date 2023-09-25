//var display = document.getElementById('display')

function selecnum(numero){
   
    var num  = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML += numero

}


function selecop(sinalop){
   
     document.getElementById('resultado').innerHTML  +=  sinalop
   

}

function calcular () {
    var resultado  = document.getElementById('resultado').innerHTML 

    if(resultado){
       document.getElementById('resultado').innerHTML = eval(resultado) 
    } 
   
}

function limpartela(){
    document.getElementById('resultado').innerHTML = ""

}