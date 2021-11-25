// Consegna:
// Dati tre array contenenti:
//  - una lista ordinata di 5 immagini,
//  - una lista ordinata dei relativi 5 luoghi e
//  - una lista di 5 news,
// creare un carosello come nella foto allegata.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: 
// costruiamo il container e inseriamo l’immagine grande 
// a sinistra e le thumbnails sulla destra in modo
//  da poter stilare lo slider; avremo così 
//  la struttura base e gli stili pronti per 
//  poterci poi concentrare solamente sull’aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico 
// e inseriamo le immagini dinamicamente servendoci dell’array fornito
//  e un semplice ciclo for che concatena un template literal.
//   Al termine di questa fase ci ritroveremo con lo stesso slider,
//    ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce verso l’alto o verso il basso, 
// l’immagine attiva diventa visibile in formato grande a sinistr
// a e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà 
// apparire in evidenza rispetto alle altre.


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


let thumb_big = document.querySelector (".thumb-big");

let thumb_small = document.querySelector (".thumb-small");

let arrow_up = `<i class="fas fa-chevron-up"></i>`;
arrow_up.className = "arrow";


for(i = 0; i < items.length; i++) {
    let thumb = document.createElement("div");
    thumb_small.appendChild(thumb);
    thumb.className = "thumb";
    let image = document.createElement ('img');
    image.className = "img-small";
    image.src = items[i];
    thumb.append(image);
    if (i == 0) {
        thumb.append(arrow_up);
    }
    console.log ([i]);
}

let image_b = document.createElement("img");
image_b.className = "img-big";
image_b.src = 'img/01.jpg';
thumb_big.append(image_b);

