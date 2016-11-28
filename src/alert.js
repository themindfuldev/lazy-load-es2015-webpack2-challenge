import alertify from 'alertify.js';

export default class Alert {
  constructor() {
    alertify
      .okBtn("Sorta")
      .cancelBtn("Not really")
      .confirm("I am learning how to lazy load", function (ev) {

          // The click event is in the
          // event variable, so you can use
          // it here.
          ev.preventDefault();
          alertify.success("Great job! Keep up the great work!");

      }, function(ev) {

          // The click event is in the
          // event variable, so you can use
          // it here.
          ev.preventDefault();

          alertify.error("Don't be negative, you can do it, I know it!");

      });
  }
}