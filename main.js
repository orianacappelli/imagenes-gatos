document.querySelector("button").onclick = function(){
    document.getElementById("imagen").setAttribute("src","imagenn/gato2.jpg");

    document.querySelector("button").onclick = function(){
        if(document.getElementById("imagen").getAttribute("src")=="imagenn/gato1.jpg"){
            document.getElementById("imagen").setAttribute("src","imagenn/gato2.jpg");
        }
        else{
            document.getElementById("imagen").setAttribute("src","imagenn/gato1.jpg");
        }
    }
}