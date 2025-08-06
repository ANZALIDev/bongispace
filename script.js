// Interactivité des cartes services
function showService(serviceType) {
    const services = {
        design: "Nos designs mélangent culture locale et modernité.",
        tech: "Prototypes d'apps IA en 2 semaines."
    };
    alert(services[serviceType]);
}

//CTA Button
document.getElementById('cta-button').addEventListener('click', () => {
    window.location.href = "#contact";
});

//Animation au scroll
window.addEventListener('scroll',  () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
            card.style.opacity ='1';
        }
    });
});

document.addEventListener('DOMContentLoaded', ()=> {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    //Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior:'smooth'
            });
        });
    });
});

//GESTION DU MENU BURGER
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

//FERMER LE MENU QUAND ON CLIQUE SUR UN LIEN
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


//Filtrage des services
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', ()=> {
// activ/deactive le bouton
        document.querySelectorAll('filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        //Filtre les cartes
        const filter = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.service-card');

        cards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

button.addEventListener('click', () => {
    button.style.transform ='scale(0.95';
    setTimeout(() => {button.style.transform = 'scale(1)';}, 200);
});