
const sections = document.querySelectorAll( '.sect' )
const scrollSections = () => {

  	const scrollDown = window.scrollY;
	sections.forEach( current => {
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute( 'id' ),
			  sectionsClass = document.querySelector( '.nav__menu a[href*=' + sectionId + ']' );
		if( scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight ){
			sectionsClass.classList.add( 'active-link' );
		} else{
			sectionsClass.classList.remove( 'active-link' );
		};
	});

}
window.addEventListener( 'scroll', scrollSections )
