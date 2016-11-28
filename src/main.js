// Listener to lazy load Merry Xmas
document.getElementById( 'button' ).addEventListener( 'click', e => {
  System.import( './animations' ).then( Animations => {
    if (!this.merryXmas) {
      this.merryXmas = new Animations.MerryXmas( 'effect' );
    }
    this.merryXmas.animate();
  } );
} );

// Timeout to lazy load Alert
setTimeout(() => {
  System.import('./messaging').then( Messaging => {
    new Messaging.Alert();
  } );
}, 5000);