
const navMenu = document.querySelector( '#navMenu' );
const navToggle = document.querySelector( '#navToggle' );
const navClose = document.querySelector( '#navClose' );

if( navToggle ) {
    navToggle.addEventListener( 'click', () => {
        navMenu.classList.add( 'show-menu' );
    });
};

if( navClose ) {
    navClose.addEventListener( 'click', () => {
        navMenu.classList.remove( 'show-menu' );
    });
};
