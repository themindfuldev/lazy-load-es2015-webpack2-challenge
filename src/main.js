// Importing Cat module synchronously
import HugeCrazyModule from './hugeCrazyModule';
import BigWeirdModule from './bigWeirdModule'

// Listener to lazy load Zoo
document.getElementById( 'button' ).addEventListener( 'click', e => {
  if (!this.myHugeCrazyModule) {
    this.myHugeCrazyModule = new HugeCrazyModule( 'effect' );
  }
  this.myHugeCrazyModule.animate();
} );

setTimeout(() => {
  let myBigWeirdModule = new BigWeirdModule();
}, 5000);