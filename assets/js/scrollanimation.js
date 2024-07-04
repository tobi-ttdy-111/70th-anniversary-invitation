
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal( `.home__perfil, .about__perfil, .contact__mail`, { origin: 'right' });
sr.reveal( `.home__name, .home__info,
            .about__container .section__title-1, .about__info,
            .contact__social, .contact__data`, { origin: 'left' });
sr.reveal( `.services__card, .services .section__title-2`, { interval: 100 });
