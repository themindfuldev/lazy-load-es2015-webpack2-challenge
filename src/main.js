// Importing Cat module synchronously
import { MerryXmas } from './animations';
import { Alert } from './messaging'

// Listener to lazy load Zoo
document.getElementById( 'button' ).addEventListener( 'click', e => {
  if (!this.merryXmas) {
    this.merryXmas = new MerryXmas( 'effect' );
  }
  this.merryXmas.animate();
} );

setTimeout(() => {
  new Alert();
}, 5000);