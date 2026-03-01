// active hamburger menu 
let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// remove navlist
navlist.addEventListener("click",()=>{
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
})



// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");


// switch between about buttons 

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});



// portfolio fillter 

var mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});


// Initialize swiperjs 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints: {
        576:{
            slidesPerView:2,
            spaceBetween:10,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
  });



//   skill Progress bar 

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll",()=>{
    if(!skillsPlayed)
    skillsCounter();
})


function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight)return true;
    return false;
}

function updateCount(num,maxNum){
    let currentNum = +num.innerText;
    
    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(()=>{
            updateCount(num,maxNum)
        },12)
    }
}


let skillsPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
        let target = +counter.dataset.target;
        let strokeValue = 465 - 465 * (target / 100);

        progress_bars[i].style.setProperty("--target",strokeValue);

        setTimeout(()=>{
            updateCount(counter,target);
        },400)
    });

    progress_bars.forEach(p => p.style.animation = "progress 2s ease-in-out forwards");
}


// side progress bar 

let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// active menu 

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

// scroll reveal

ScrollReveal({ 
    distance:"90px",
    duration:2000,
    delay:200,
    // reset: true ,
});


ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading', { origin: "top" });
ScrollReveal().reveal('.about-img,.fillter-buttons,.contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content,.skills', { origin: "right" });
ScrollReveal().reveal('.allServices,.portfolio-gallery,.blog-box,footer,.img-hero', { origin: "bottom" });

const cardData = [
    {
        title: "Desbloquea tu Creatividad",
        image: "img/sin-fondo-negativo.png",
    },
    {
        title: "Diseña tu Futuro Digital",
        image: "img/Kathyana-Primera propuesta.png",
    },
    {
        title: "Construye con Pasión",
        image: "img/Moda y Estilo.png",
    },
    {
        title: "Piensa en Grande",
        image: "img/Logo sin Fondo.png",
    },
     {
        title: "Piensa en Grande",
        image: "img/Logo-Fast-Money.png",
    },
     {
        title: "Piensa en Grande",
        image: "img/MUSE Fashon.png",
    },
     {
        title: "Piensa en Grande",
        image: "img/Mesa de trabajo 1.png",
    },
     {
        title: "Piensa en Grande",
        image: "img/LogoAP.png",
    },
    {
        title: "Piensa en Grande",
        image: "img/LogoCodelatam.png",
    },
];

const marqueeTrack = document.getElementById("marqueeTrack");

function createCards() {
    const allCards = [...cardData, ...cardData];

    allCards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("marquee-card");

        cardElement.innerHTML = `
            <img src="${card.image}" alt="card">
            <div class="marquee-overlay">
                <p>${card.title}</p>
            </div>
        `;

        marqueeTrack.appendChild(cardElement);
    });

    marqueeTrack.style.animationDuration = (cardData.length * 3) + "s";
}

createCards();

marqueeTrack.addEventListener("mouseenter", () => {
    marqueeTrack.style.animationPlayState = "paused";
});

marqueeTrack.addEventListener("mouseleave", () => {
    marqueeTrack.style.animationPlayState = "running";
});

const plans = [
    {
        id: 'basico',
        name: 'PLAN BÁSICO',
        price: '$30',
        tagline: 'Ideal para emprendedores',
        description: 'Ideal para emprendimientos que están comenzando ',
        popular: false,
        features: [
            '1 propuesta de logo',
            '1 ronda de cambios ',
            'Entrega en JPG y PNG',
            'Logo en fondo claro y oscuro',
            '1 flyer promocional sencillo',
            'Tiempo de entrega: 3–4 días'
        ],
    },
    {
        id: 'estandar',
        name: 'PLAN ESTÁNDAR',
        price: '$40',
        tagline: 'Identidad más sólida',
        description: 'Perfecto para marcas que quieren una identidad más sólida ',
        popular: true,
        features: [
            '2 propuestas de logo',
            'Hasta 2 rondas de cambios',
            'Entrega en JPG, PNG y PDF',
            'Versiones: color, blanco y negro',
            '1 flyer promocional personalizado',
            'Mini manual corporativo',
            'Tiempo de entrega: 2–3 días'
        ],
    },
    {
        id: 'premium',
        name: 'PLAN PREMIUM',
        price: '$60',
        tagline: 'Marca profesional',
        description: 'Pensado para marcas que quieren verse profesionales y destacar',
        popular: false,
        features: [
            '3 propuestas de logo',
            'Cambios ilimitados',
            'Entrega en JPG, PNG, PDF y editable',
            'Versiones: color, blanco, negro y monocromático',
            'Mockups del logo',
            '1–2 flyers promocionales profesionales',
            'Manual corporativo completo',
            'Tiempo de entrega: 1–2 días'
        ],
    }
];

const pricingContainer = document.getElementById("pricingContainer");

plans.forEach(plan => {

    const card = document.createElement("div");
    card.classList.add("pricing-card");

    // Destacar plan popular
    if (plan.popular) {
        card.classList.add("popular-plan");
    }

    card.innerHTML = `
        ${plan.popular ? `<div class="popular-badge">⭐ Más Popular</div>` : ''}

        <h3>${plan.name}</h3>
        <div class="price">${plan.price}</div>
        <div class="tagline">${plan.tagline}</div>
        <p>${plan.description}</p>

        <ul>
            ${plan.features.map(feature => `
                <li><i class='bx bx-check'></i> ${feature}</li>
            `).join('')}
        </ul>

        <button class="plan-btn" onclick="purchasePlan('${plan.name}')">
            Contratar
        </button>
    `;

    pricingContainer.appendChild(card);
});

function purchasePlan(planName) {
    const message = `Hola 👋, estoy interesado en el ${planName}. ¿Podrías darme más información?`;
    const url = `https://api.whatsapp.com/send/?phone=50589512768&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}