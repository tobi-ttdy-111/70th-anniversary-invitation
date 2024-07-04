
const scrollUp = () => {
	const scrollUp = document.querySelector( '#scrollUp' );
	this.scrollY >= 350 ? scrollUp.classList.add( 'show-scroll' )
						: scrollUp.classList.remove( 'show-scroll' );
}
window.addEventListener( 'scroll', scrollUp )
