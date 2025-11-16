//Comienzo del codigo Carrusel.
document.getElementById("ID_FlechaIZQ").addEventListener("click",Flechas_Carrusel);
document.getElementById("ID_FlechaDER").addEventListener("click",Flechas_Carrusel);

let Posicion_Carrusel = 0;
let Indice_Botones_Carrusel = document.getElementsByClassName("Indice-Carrusel");

Indice_Botones_Carrusel[0].addEventListener("click",Indice_Boton_Carrusel);
Indice_Botones_Carrusel[1].addEventListener("click",Indice_Boton_Carrusel);
Indice_Botones_Carrusel[2].addEventListener("click",Indice_Boton_Carrusel);
Indice_Botones_Carrusel[3].addEventListener("click",Indice_Boton_Carrusel);

let ImagenPosicion_Carrusel = document.getElementsByClassName("Imagenes-Carrusel");

function Flechas_Carrusel(){
    

    for (i=0;i<ImagenPosicion_Carrusel.length;i++){
        ImagenPosicion_Carrusel[i].classList.remove("Imagen-Activa");
        Indice_Botones_Carrusel[i].classList.remove("Indice_Activo");
    }

    switch(event.target.id){
        case "ID_FlechaIZQ":
        if (Posicion_Carrusel == 0){
            Posicion_Carrusel += ImagenPosicion_Carrusel.length-1;
        } else if (Posicion_Carrusel > 0) {
            Posicion_Carrusel = Posicion_Carrusel - 1;
        }
        break;
        case "ID_FlechaDER":
        if (Posicion_Carrusel == ImagenPosicion_Carrusel.length-1){
            Posicion_Carrusel = Posicion_Carrusel - (ImagenPosicion_Carrusel.length-1);
        } else if (Posicion_Carrusel < ImagenPosicion_Carrusel.length-1) {
            Posicion_Carrusel = Posicion_Carrusel + 1;
        }
        break;
    }

    ImagenPosicion_Carrusel[Posicion_Carrusel].classList.add("Imagen-Activa");
    Indice_Botones_Carrusel[Posicion_Carrusel].classList.add("Indice_Activo");

}

function Indice_Boton_Carrusel(){

    ImagenPosicion_Carrusel[Posicion_Carrusel].classList.remove("Imagen-Activa");
    Indice_Botones_Carrusel[Posicion_Carrusel].classList.remove("Indice_Activo");

    Posicion_Carrusel = Posicion_Carrusel - Posicion_Carrusel;

    ImagenPosicion_Carrusel[event.target.id + ""].classList.add("Imagen-Activa");
    Indice_Botones_Carrusel[event.target.id + ""].classList.add("Indice_Activo");

    for (i=0;i<ImagenPosicion_Carrusel.length;i++){
        if (event.target.id == i){
            Posicion_Carrusel += i;
        }
    }
}
//Fin del codigo Carrusel.

//Comienzo codigo Botones_Paginas.
document.getElementById("Boton_Juegos").addEventListener("click",);
document.getElementById("Boton_Libros").addEventListener("click",);
document.getElementById("Boton_Musica").addEventListener("click",);
document.getElementById("Boton_Series").addEventListener("click",);


//Fin codigo Botones_Paginas.