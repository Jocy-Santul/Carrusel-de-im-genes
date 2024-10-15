const animales = [
    "./Imagenes/Ballena.jpg",
    "./Imagenes/Bandurria.jpg", 
    "./Imagenes/Choique.jpg", 
    "./Imagenes/Ernesto.jpg", 
    "./Imagenes/Flamenco.jpg", 
    "./Imagenes/Guanaco.jpg", 
    "./Imagenes/Mara.jpg", 
    "./Imagenes/Piche.jpg", 
    "./Imagenes/pinguino.jpg", 
    "./Imagenes/Puma.jpg", 
    "./Imagenes/Tero.jpg", 
    "./Imagenes/Zorro.jpg",
    "./Imagenes/Carpintero.webp",
    "./Imagenes/Gato-de-pajonal.webp",
    "./Imagenes/Gecko-de-Darwin.webp",
    "./Imagenes/Guemul.webp",
    "./Imagenes/Lagarto-cabezon.webp",
    "./Imagenes/Monito-de-monte.webp",
    "./Imagenes/Rana-palmada-de-arroyo.webp",
    "./Imagenes/Vizcacha.jpg"
]

const carrusel = document.querySelector('.slider');

let fotoActual = 0;

const hacerSlider = (index) => {
    if (index > animales.length - 1 ) {
        index = 0;
    }
    else if (index < 0) {
        index = animales.length - 1;
    }
    carrusel.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = animales[index];
    imagen.classList.add('img')
    carrusel.appendChild(imagen);
}

const fotoAnterior = () => {
    if (fotoActual === 0) {
        fotoActual = animales.length - 1;
    } else {
        fotoActual--;
    }
    hacerSlider(fotoActual);
}

const siguienteFoto = () => {
    if (fotoActual === animales.length - 1) {
        fotoActual = 0;
    } else {
        fotoActual++;
    }
    hacerSlider(fotoActual);
}

hacerSlider(fotoActual);

