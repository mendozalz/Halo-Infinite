/* Importando el CSS */

import "../css/main.css";
import "../css/scheme.css";


/* Manipulación del DOM */

const $masOpciones = document.querySelector('#bmore');
const $mostrarLinksenMovil = document.querySelector('#bmenu');
const $menuMovil = document.querySelector(".links");
const $mostrarMas = document.querySelector('.more .menu');

$masOpciones.addEventListener('click', (e)=>{
    e.preventDefault();
    $mostrarMas.classList.toggle("show");
});

$mostrarLinksenMovil.addEventListener('click', (e)=>{
    e.preventDefault();
    $menuMovil.classList.toggle("show");
})

/* Creando la interación de los btn en el render para videos dinamicos */

const videos = [
    {
      id: "PyMlV5_HRWk",
    },
    {
      id: "XCbMVbeKlCg",
    },
    {
      id: "Fmdb-KmlzD8",
    },
    {
      id: "lOthvD1rMbQ",
    },
    {
      id: "nXDk86lQhto",
    },
  ];

  /* Manipulando el DOM para la sección de videos */

  const $slider = document.querySelector('#slider');
  const $control = document.querySelector('#controls');
  const $btnPrevio = document.querySelector('#prev');
  const $btnNext = document.querySelector('#next');
  const $current = document.querySelector('#current');
  const contendorVideos = document.querySelector('#videos-container');
  let actual=0;
  
 $btnNext.addEventListener('click', (e)=>{
    let cambio = actual;
    /* click infinito */
    actual = actual ++ < videos.length ? actual ++ : actual=0;
    if (actual != cambio) {
        renderVideo(videos[actual].id);
    }
 });


$btnPrevio.addEventListener('click', (e)=>{
    let cambio = actual;
    /* click infinito */
    actual = actual -- >= videos.length ? actual -- : actual;
    renderVideo(videos[actual].id);
    if (actual != cambio) {
        renderVideo(videos[actual].id);
    }
});


/* fn para cargar los videos dinamicamente */

renderVideo(videos[actual].id);

function renderVideo(id) {
    $current.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
};

function listVideo(){
  const html = videos.map((video, index) =>{
    return `
    <div class="item">
    <a href="#" data-id="${index}">
      <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
    </a>
    </div>`;
  });
  
  contendorVideos.innerHTML = html.join("");

  let $seleccionIndividual = document.querySelectorAll(".item a");

  $seleccionIndividual.forEach((i)=>{
    i.addEventListener('click', (e)=>{
      e.preventDefault();
      let id = +i.getAttribute('data-id');
      actual = id;
      renderVideo(videos[actual].id);
    });
  }
);
};

listVideo();

/* Dark-mode */

// Solo en efecto de animación
  document.querySelector(".container").addEventListener("click", () => {
  document.querySelector(".sol-logo").classList.toggle("animar-sol");
  document.querySelector(".luna-logo").classList.toggle("animar-luna");
 /*  document.querySelector("body").classList.toggle("oscuro"); */
  document.querySelector("header").classList.toggle("dark-theme");
  document.querySelector("nav .header").classList.toggle("dark-theme");
  document.querySelector("button#bmenu").classList.toggle("dark-theme");
  document.querySelector("a.link").classList.toggle("dark-theme");
  document.querySelector("span.material-symbols-outlined").classList.toggle("dark-theme");
  


  let colorTema;
    if (configUser.matches) {
        // Entramos con modo oscuro
        document.body.classList.toggle('light-theme');
        colorTema = document.body.classList.contains('light-theme') ? 'light' : 'dark'

    } else {
        document.body.classList.toggle('dark-theme');
        colorTema = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    localStorage.setItem('tema', colorTema)

});

/***********************/

const sol = document.querySelector(".sol");
    const luna = document.querySelector(".luna");

    sol.addEventListener("click", ()=>{
      location.reload();
    })
    luna.addEventListener("click", ()=>{
      location.reload();
    })

const configUser = window.matchMedia('(prefers-color-scheme: dark)');
const localConfig = localStorage.getItem('tema');
if (localConfig === 'dark') {
    document.body.classList.toggle('dark-theme');
    document.querySelector("header").classList.toggle("dark-theme");
    document.querySelector("nav .header").classList.toggle("dark-theme");
    document.querySelector("button#bmenu").classList.toggle("dark-theme");
    document.querySelector("a.link").classList.toggle("dark-theme");
    document.querySelector(".luna").classList.toggle("dark-theme");
    document.querySelector(".luna").style.opacity=1;
    document.querySelector("span.material-symbols-outlined").classList.toggle("dark-theme");
    document.querySelector("a.carrito").classList.toggle("dark-theme");
    document.querySelector("a.logout").classList.toggle("dark-theme");
    document.querySelector("#multi-player").classList.toggle("dark-theme");
    document.querySelector("footer").classList.toggle("dark-theme");
    

  } else if (localConfig === 'light') {
    document.body.classList.toggle('light-theme');


    
    

}

