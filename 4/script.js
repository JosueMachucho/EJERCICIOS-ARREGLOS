var incrementador = document.getElementById("n1");
incrementador.addEventListener('change', imprimir, false);  

function imprimir(){
    var numero = Number(document.getElementById("n1").value);
    var section = document.getElementById("s2");
    var cad = "";
    function construirpiramide(){
        var piramide= [];
        if(numero === 0){
           piramide= [];
            cad += "<p>0</p>";
        } 
        if(numero === 1){
            piramide= [[1]]; 
            cad += "<p>1</p>";
        }else{
            for(var i=1; i<=numero; i++){
                var arr= [];
                for (var j=0; j<i; j++){
                    if(j==0){
                        cad += "<div>";
                    }
                    if (j === 0 || j === i-1){
                        arr.push(1);
                        cad += "1 ";
                    } else {
                        arr.push((piramide[i-2][j-1] + piramide[i-2][j]));
                        cad += "<p>" + (piramide[i-2][j-1] + piramide[i-2][j]) + "</p>"; 
                    }
                    if(j==(i-1)){
                        cad += "</div>";
                    }
                }
                piramide.push(arr);
            }
        }  
        return cad;
        console.log(piramide)
    }
    var html = construirpiramide();
    section.innerHTML = html;    
}
    

