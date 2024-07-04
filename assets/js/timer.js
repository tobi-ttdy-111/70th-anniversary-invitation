
const days = document.querySelector( '#days' );
const hours = document.querySelector( '#hours' );
const minutes = document.querySelector( '#minutes' );
const seconds = document.querySelector( '#seconds' );
const eventDate = new Date( 'September 3, 2024 14:00:00' ).getTime();

const temporizador = setInterval( () => {

    const ahora = new Date().getTime();
    const diferencia = eventDate - ahora;

    const dias = Math.floor( diferencia / ( 1000 * 60 * 60 * 24 ) );
    const horas = Math.floor( ( diferencia % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
    const minutos = Math.floor( ( diferencia % ( 1000 * 60 * 60 ) ) / ( 1000 * 60) );
    const segundos = Math.floor( ( diferencia % ( 1000 * 60 ) ) /  1000 );

    days.innerHTML = `${ dias } :`;
    hours.innerHTML = `${ horas } :`;
    minutes.innerHTML = `${ minutos } :`;
    seconds.innerHTML = segundos;

}, 1000);