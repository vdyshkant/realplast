


$(document).ready(function() {
	if($('body').is('.page-video')){



    // basic paging logic to demo the buttons
    var pr = document.querySelector( '.objects .paginate.left' );
    var pl = document.querySelector( '.objects .paginate.right' );

    pr.onclick = slide.bind( this, -1 );
    pl.onclick = slide.bind( this, 1 );

    var index = 0, total = 5;

    slide(0);



  } // eof body.is

  function slide(offset) {
    index = Math.min( Math.max( index + offset, 0 ), total - 1 );

    document.querySelector( '.objects .counter' ).innerHTML = ( index + 1 ) + ' / ' + total;

    pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
    pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
  }

}); // eof ready
