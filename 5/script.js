var filasM1 = document.getElementById("n1");
var columnasM1 = document.getElementById("n2");
filasM1.addEventListener('change', imprimir1, false);
columnasM1.addEventListener('change', imprimir1, false); 

var filasM2 = document.getElementById("m1");
var columnasM2 = document.getElementById("m2");
filasM2.addEventListener('change', imprimir2, false);
columnasM2.addEventListener('change', imprimir2, false); 

function imprimir1(){ 
    var section1 = document.getElementById("entrada1");
    var numeroFilas1 = Number(filasM1.value);
    var numeroColumnas1 = Number(columnasM1.value); 
    var cad = "";
    function mostrarMatriz(){ 
        for(var i=0; i<numeroFilas1; i++){            
            for (var j=0; j<numeroColumnas1; j++){
                if(j==0){
                    cad += "<div>";
                }
                cad += "<input type='number' class='inputs1'>";
                if(j==(numeroColumnas1-1)){
                    cad += "</div><br>";
                }
            }
        } 
        return cad;
    }
    var html = mostrarMatriz();
    section1.innerHTML = html;
}

function imprimir2(){  
    var section2 = document.getElementById("entrada2");
    var numeroFilas2 = Number(filasM2.value);
    var numeroColumnas2 = Number(columnasM2.value); 
    var cad = "";
    function mostrarMatriz(){ 
        for(var i=0; i<numeroFilas2; i++){            
            for (var j=0; j<numeroColumnas2; j++){
                if(j==0){
                    cad += "<div>";
                }
                cad += "<input type='number' class='inputs2'>";
                if(j==(numeroColumnas2-1)){
                    cad += "</div><br>";
                }
            }
        } 
        return cad;
    }
    var html = mostrarMatriz();
    section2.innerHTML = html;
}

var boton = document.getElementById("multiplica");
boton.addEventListener("click", multiplicar, false);

function multiplicar(){
    var valores1 = document.getElementsByClassName("inputs1");
    var valores2 = document.getElementsByClassName("inputs2");
    var nValores1 = 0;
    var nValores2 = 0;
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var m1 = Number(document.getElementById("m1").value);
    var m2 = Number(document.getElementById("m2").value);
    var section = document.getElementById("salida");
    var cad = "";
    if(n2==m1){
        var matriz1 = []; 
        var matriz2 = [];
        var matriz3 = [];
        for(var i=0; i<n1; i++){ 
            matriz1[i]= [];
                for (var j=0; j<n2; j++){
                    matriz1[i][j] = valores1[nValores1].value;
                    nValores1++;
                }
        } 
        for(var i=0; i<m1; i++){ 
            matriz2[i]= [];
                for (var j=0; j<m2; j++){
                    matriz2[i][j] = valores2[nValores2].value;
                    nValores2++;
                }
        }
        var ac = 0;
        for(var r= 0; r<n1; r++){
            matriz3[r]= [];
            for(var t= 0; t<m2; t++){
                ac=0;
                if(t==0){
                    cad += "<div>";
                }
                for(var f=0; f<m1; f++){
                    ac += ((matriz1[r][f])*(matriz2[f][t]));
                }
                cad += "<p>" + ac + "</p>";
                matriz3[r][t]= ac;
                if(t==(m2-1)){
                    cad += "</div>";
                }
            }
        }
        section.innerHTML = cad;
        
        
    }else{
        alert("El número de columnas de la primera matriz debe ser igual al número de filas de la segunda matriz");
    }
    
    
    
}























