function rand(n){
     return(Math.floor(Math.random() * n + 1 ));
    }
    var cambia_imagen = new Array();
    cambia_imagen[0] = "img/";
    cambia_imagen[1] = "1.jpg";
    cambia_imagen[2] = "2.jpg";
    cambia_imagen[3] = "3.jpg";
    cambia_imagen[4] = "4.jpg";
    cambia_imagen[5] = "5.jpg";
    cambia_imagen[6] = "6.jpg";
    cambia_imagen[7] = "7.jpg";
    cambia_imagen[8] = "8.jpg";
    cambia_imagen[9] = "9.jpg";
    
    function cambiar(){
         document.getElementById("ia").src = cambia_imagen[rand(10)-1];
    }