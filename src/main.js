// Importing Cat module synchronously
import * as MerryXmas from './merryXmas';
import * as Alert from './alert'

// Listener to lazy load Zoo
document.getElementById( 'button' ).addEventListener( 'click', e => {
  if (!this.merryXmas) {
    this.merryXmas = new MerryXmas.default( 'effect' );
  }
  this.merryXmas.animate();
} );

setTimeout(() => {
  new Alert.default();
}, 5000);