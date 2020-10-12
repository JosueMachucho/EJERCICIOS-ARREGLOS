var incrementador = document.getElementById("n1");
incrementador.addEventListener('change', imprimir, false);  

function imprimir(){
    var numero = Number(document.getElementById("n1").value);
    var section = document.getElementById("s2");
    var cad = "";
    function mostrarMatriz(){ 
        for(var i=0; i<numero; i++){            
            for (var j=0; j<numero; j++){
                if(j==0){
                    cad += "<div>";
                }
                cad += "<input type='number' class='inputs'>";
                if(j==(numero-1)){
                    cad += "</div><br>";
                }
            }
        } 
        return cad;
    }
    var html = mostrarMatriz();
    section.innerHTML = html;
}

var boton = document.getElementById("valida")
boton.addEventListener("click", validarMatriz, false);

function validarMatriz(){
    var valores = document.getElementsByClassName("inputs");
    var nValores = 0;
    var n = Number(document.getElementById("n1").value);
    var matriz = [];
    for(var i=0; i<n; i++){ 
        matriz[i]= [];
            for (var j=0; j<n; j++){
                matriz[i][j] = valores[nValores].value;
                nValores++;
            }
    } 
    var suma= 0; 
    for(var i=1; i<n; i++){ 
            for (var j=0; j<n; j++){
                if(j<i){
                    suma += matriz[i][j];
                }
            }
    }    
    if(suma == 0){
        alert("La matriz es triangular superior");   
    }else{
        alert("No es una matriz triangular superior");
    }
    
}   