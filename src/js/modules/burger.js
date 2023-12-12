const burger = new JustBurger( {
  isOpen: ( burger ) => {
    document.querySelector( '#overlay' ).classList.remove( 'hide' );
    document.querySelector( '#overlay' ).classList.add( 'open' );
    document.querySelector( 'html' ).classList.add( 'is-open-menu' );
  },
  isClose: ( burger ) => {
    document.querySelector( '#overlay' ).classList.add( 'hide' );
    document.querySelector( '#overlay' ).classList.remove( 'open' );
    document.querySelector( 'html' ).classList.remove( 'is-open-menu' );
  }
} );

export {
  burger,
};