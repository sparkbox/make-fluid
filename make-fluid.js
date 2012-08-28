// document.body.setAttribute("style", "background-color: red;");
fluid = {
  all: document.getElementsByTagName("*"),

  adjustWidth: function( el ) {
    var parent = el.parentNode;

    if ( parent == document ) {
      parentWidth = document.width;
    } else {
      var parentStyle = document.defaultView.getComputedStyle( parent, null );
      var parentWidth = parseInt( parentStyle.getPropertyCSSValue( "width" ).cssText, 10 );
    }

    var style = document.defaultView.getComputedStyle( el, null );
    var width = parseInt( style.getPropertyCSSValue( "width" ).cssText, 10 );

    el.style.width = ( width / parentWidth * 100 ) + "%";
  },

  init: function() {
    for ( var i = 0; i < fluid.all.length; i++ ) {
      console.log( "i: " + i );
      console.log( fluid.all[ i ].nodeName );
      fluid.adjustWidth( fluid.all[ i ] );
    }
  }
};

fluid.init();