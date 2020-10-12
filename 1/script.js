var incrementador = document.getElementById("n1");
incrementador.addEventListener('change', imprimir, false);         

function imprimir(){
    var numero = Number(document.getElementById("n1").value);
    var section = document.getElementById("s2");
    var cad = "";
    var matriz= [];
    function ConstruirMatriz(){
        for(var i=0; i<numero; i++){
            matriz[i] = [];             
            for(var j=0; j<numero; j++){
                if(j==0){
                    cad += "<div>";
                }
                if(i==j){
                    matriz[i][j]= 1; 
                    cad += '<p>1</p>';
                }else{
                    matriz[i][j]= 0; 
                    cad += '<p>0</p>';
                }
                if(j==(numero-1)){
                    cad += "</div>";
                }
            }                
         }
        console.log(matriz);
         return cad;
    }
    var html = ConstruirMatriz();
    section.innerHTML = html;
}        
         