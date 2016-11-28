// Listener to lazy load Zoo
document.getElementById( 'button' ).addEventListener( 'click', e => {
  System.import( './animations' ).then( Animations => {
    if (!this.merryXmas) {
      this.merryXmas = new Animations.MerryXmas( 'effect' );
    }
    this.merryXmas.animate();
  } );
} );

setTimeout(() => {
  System.import('./messaging').then( Messaging => {
    new Messaging.Alert();
  } );
}, 5000);