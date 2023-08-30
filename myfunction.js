$(document).ready(function () {
    alturaMaxima = 201;
    velocidad = 20 //pixels por vez. alturaMaxima-cantidad tiene que ser múltiplo de velocidad.
    espera = 10 //Tiempo de espera entre cada movimiento
    anchoPagina = window.innerWidth;
    if (anchoPagina < 300) {
        alturaMaxima = 81;
    }

    cantidad = 1;

});

function nobackbutton() {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button" //chrome
    window.onhashchange = function () { window.location.hash = "no-back-button"; }
}

function mostrar(esto) {

    if (cantidad == 1 || cantidad == alturaMaxima) {
        incremento = (cantidad == 1) ? velocidad : -velocidad;
        tope = (cantidad == 1) ? alturaMaxima : 1;
    }
    es = document.getElementById(esto);
    pe = esto;

    cantidad += incremento;

    es.style.width = cantidad + "px";
    if (cantidad != tope) {
        setTimeout("mostrar('" + pe + "')", espera);
    }
}

function mostrar_(esto) {
    //alert("Inicia funcion");
    if ($("#pnlNormales").css("display") == "none") {
        $("#pnlNormales").css("display", "block");

        if ($("#pnlBellasArtes").css("display") == "none") {
            //alert("Existe");
           
            $("#pnlBellasArtes").css("display", "block");

        }
        else {
            //alert("Nel");
            $("#pnlNormales").css("display", "none");
        }

    }
    else {
        $("#pnlBellasArtes").css("display", "none");
        $("#pnlNormales").css("display", "none");
    }
    mostrar(esto);
}

       


