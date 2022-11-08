const validar = document.getElementById("validar");

validar.addEventListener('click', function(){

    let birthday = document.getElementById("birthday").value;
    let birthdayCheck = new Date(birthday.split("-").join("/"));
    let maxYear = new Date().getFullYear()-12;
    let maxDate = new Date(new Date().setFullYear(maxYear, new Date().getMonth(), new Date().getDate()));
    
    console.log(birthdayCheck)

    if(birthdayCheck<=maxDate){
        console.log("Fecha Válida")
    }else{
        console.log("Debes ser Mayor de x");
    }
});