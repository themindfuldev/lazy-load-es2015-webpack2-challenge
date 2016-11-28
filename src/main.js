// Listener to lazy load Zoo
document.getElementById( 'button' ).addEventListener( 'click', e => {
  System.import( './merryXmas' ).then( MerryXmas => {
    if (!this.merryXmas) {
      this.merryXmas = new MerryXmas.default( 'effect' );
    }
    this.merryXmas.animate();
  } );
} );

setTimeout(() => {
  System.import('./alert').then(Alert => {
    new Alert.default();
  })
}, 5000);