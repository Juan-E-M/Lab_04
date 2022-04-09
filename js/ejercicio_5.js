function a_cambiar(){
    var num1 =parseInt(document.getElementById("num1").value);
    var opciones_1 = document.getElementsByName("monedas_1");
    var opciones_2 = document.getElementsByName("monedas_2");
    var f_conversion = 1;

    var resultado;

    for (let i=0; i<opciones_1.length; i++){
        for (let a=0; a<opciones_2.length; a++){
            if (opciones_1[i].checked && opciones_2[a].checked){
                
                if (opciones_1[i].value == "sol" && opciones_2[a].value == "dolar"){
                    f_conversion = 0.2695;
                }
                if (opciones_1[i].value == "sol" && opciones_2[a].value == "euro"){
                    f_conversion = 0.2475;
                }
                if (opciones_1[i].value == "dolar" && opciones_2[a].value == "sol"){
                    f_conversion = 3.71;
                }
                if (opciones_1[i].value == "dolar" && opciones_2[a].value == "euro"){
                    f_conversion = 0.9174;
                }
                if (opciones_1[i].value == "euro" && opciones_2[a].value == "sol"){
                    f_conversion = 4.04;
                }
                if (opciones_1[i].value == "euro" && opciones_2[a].value == "dolar"){
                    f_conversion = 1.09;
                }
            }
        }
    }
    
    if (num1){
        resultado = num1*f_conversion;
        alert("El cambio resultante es: "+resultado);
    }
    else{
        alert("Falta ingresar una cantidad");
    }
}