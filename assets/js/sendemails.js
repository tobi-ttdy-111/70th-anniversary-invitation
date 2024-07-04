
const contactForm = document.querySelector( '#contactForm' );
const contactMessage = document.querySelector( '#contactMessage' );

contactForm.addEventListener( 'submit', ( e ) => {

    e.preventDefault();
    emailjs.sendForm( 'service_b1pqrtg', 'template_d976o0r', '#contactForm', 'JRwfQbwnL8Vjwf5EQ' )
        .then( () => {
            contactMessage.textContent = 'Tu asistencia al evento a sido confirmada ✅';
            setTimeout( () => {
                contactMessage.textContent = '';
            }, 5000 );
            contactForm.reset();
        }, () => {
            contactMessage.textContent = 'Ocurrio un error en tu registro, vuelve a intentarlo ❌';
        });

});