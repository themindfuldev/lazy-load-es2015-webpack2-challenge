// Listener to lazy load Merry Xmas
document.getElementById( 'button' ).addEventListener( 'click', e => {
  import( './animations' ).then( Animations => {
    if (!this.merryXmas) {
      this.merryXmas = new Animations.MerryXmas( 'effect' );
    }
    this.merryXmas.animate();
  } );
} );

// Timeout to lazy load Alert
setTimeout(() => {
  import('./messaging').then( Messaging => {
    new Messaging.Alert();
  } );
}, 5000);