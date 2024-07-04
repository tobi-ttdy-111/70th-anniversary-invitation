
const navLink = document.querySelectorAll( '.nav__link' );

const linkAction = () => {
    const navMenu = document.querySelector( '#navMenu' )
    navMenu.classList.remove( 'show-menu' );
}
navLink.forEach( n => n.addEventListener( 'click', linkAction ) );
