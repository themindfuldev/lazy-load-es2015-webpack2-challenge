// Importing from Animations and Messaging
import { MerryXmas } from './animations';
import { Alert } from './messaging'

// Listener to fire up Merry Xmas
document.getElementById( 'button' ).addEventListener( 'click', e => {
  if (!this.merryXmas) {
    this.merryXmas = new MerryXmas( 'effect' );
  }
  this.merryXmas.animate();
} );

// Timeout to fire up Alert
setTimeout(() => {
  new Alert();
}, 5000);