import velocity from 'velocity-animate';

export class MerryXmas {
  constructor( selector ) {
    this.el = document.getElementById( selector );
    this.isCollapsed = true;
  }

  animate() {
    if ( this.isCollapsed ) {
      velocity(this.el, {
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, { duration: 1000 } );
    } else {
      velocity(this.el, {
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, { duration: 1000 } );
    }
    this.isCollapsed = !this.isCollapsed;
  }
}