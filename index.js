if (document.getElementById("abrir-modal")) {

    var modal = document.getElementById("mymodal");
    var boton = document.getElementById("abrir-modal");
    var span = document.getElementsByClassName("cerrar")[0];
    var body = document.getElementsByTagName("body");

    boton.onclick = function () {

        modal.style.display = "flex";
        body.style.position = "-webkit-sticky";
        body.style.height = "100%";
        body.style.overflow = "auto";
    }

    span.onclick = function () {

        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}