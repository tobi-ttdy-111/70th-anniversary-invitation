
$( document ).ready( () => {
    $( 'a.nav__link' ).on( 'click', ( e ) => {
        if ( this.hash !== "" ) {
            e.preventDefault();
            var hash = this.hash;
            $( 'html, body' ).animate( {
                scrollTop: $( hash ).offset().top
            }, 2000, () => {
                window.location.hash = hash;
            });
        }
    });
});
