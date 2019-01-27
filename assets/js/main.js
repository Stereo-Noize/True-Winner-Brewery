$(document).ready(function(){

	//Input Mask
	$('input[type="tel"]').mask('+7 (999) 999-99-99');

	// Last News Slider
  $('.last-news').slick({
  	autoplay: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./assets/img/left.png" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./assets/img/right.png" alt="" /></button>',
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 991.98,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 767.98,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
  // End Last News Slider

  // Footer Promo Slider
  $('.footer-promo').slick({
  	autoplay: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./assets/img/left-accent.png" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./assets/img/right-accent.png" alt="" /></button>',
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
  });
  // End Footer Promo Slider

  // Photo Tab Sliders
  $('.inner-galery__slider').slick({
  	autoplay: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./assets/img/left.png" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./assets/img/right.png" alt="" /></button>',
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
  });
  // End Photo Tab Sliders

  // Video Tab Sliders
  $('.video-galery__slider').slick({
  	autoplay: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./assets/img/left.png" alt="" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./assets/img/right.png" alt="" /></button>',
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
  });
  // End Video Tab Sliders

  if ( $('#navbarLinks').hasClass('show') ) {
  	$('#process').css('margin-top', '180px');
  };

  // Load News
  $('#load').click(function() {
  	$('.loaded:nth-child(n+9)').css('display', 'block');
  	$(this).hide('slow', function() {});
  });

  // Load Photo
  $('#morePhotos').click(function() {
  	$('.inner-galery:nth-child(n+5)').css('display', 'block');
  	$(this).hide('slow', function() {});
  });

  // Load Video
  $('#moreVideo').click(function() {
  	$('.video-galery:nth-child(n+5)').css('display', 'block');
  	$(this).hide('slow', function() {});
  });


  // Custom Select
  var x, i, j, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("my-custom-select");
	for (i = 0; i < x.length; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  /*for each element, create a new DIV that will act as the selected item:*/
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  /*for each element, create a new DIV that will contain the option list:*/
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  for (j = 0; j < selElmnt.length; j++) {
	    /*for each option in the original select element,
	    create a new DIV that will act as an option item:*/
	    c = document.createElement("DIV");
	    c.innerHTML = selElmnt.options[j].innerHTML;
	    c.addEventListener("click", function(e) {
	        /*when an item is clicked, update the original select box,
	        and the selected item:*/
	        var y, i, k, s, h;
	        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
	        h = this.parentNode.previousSibling;
	        for (i = 0; i < s.length; i++) {
	          if (s.options[i].innerHTML == this.innerHTML) {
	            s.selectedIndex = i;
	            h.innerHTML = this.innerHTML;
	            y = this.parentNode.getElementsByClassName("same-as-selected");
	            for (k = 0; k < y.length; k++) {
	              y[k].removeAttribute("class");
	            }
	            this.setAttribute("class", "same-as-selected");
	            break;
	          }
	        }
	        h.click();
	    });
	    b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  a.addEventListener("click", function(e) {
	      /*when the select box is clicked, close any other select boxes,
	      and open/close the current select box:*/
	      e.stopPropagation();
	      closeAllSelect(this);
	      this.nextSibling.classList.toggle("select-hide");
	      this.classList.toggle("select-arrow-active");
	    });
	}
	function closeAllSelect(elmnt) {
	  /*a function that will close all select boxes in the document,
	  except the current select box:*/
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  for (i = 0; i < y.length; i++) {
	    if (elmnt == y[i]) {
	      arrNo.push(i)
	    } else {
	      y[i].classList.remove("select-arrow-active");
	    }
	  }
	  for (i = 0; i < x.length; i++) {
	    if (arrNo.indexOf(i)) {
	      x[i].classList.add("select-hide");
	    }
	  }
	}
	/*if the user clicks anywhere outside the select box,
	then close all select boxes:*/
	document.addEventListener("click", closeAllSelect);

	// End Custom Select

	// Custom File Input 
	document.querySelector("html").classList.add('js');

	var fileInput  = document.querySelector( ".input-file" ),  
	    button     = document.querySelector( ".input-file-trigger" ),
	    the_return = document.querySelector(".file-return");
	      
	button.addEventListener( "keydown", function( event ) {  
	    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
	        fileInput.focus();  
	    }  
	});
	button.addEventListener( "click", function( event ) {
	   fileInput.focus();
	   return false;
	});  
	fileInput.addEventListener( "change", function( event ) {  
	    the_return.innerHTML = this.value;  
	});  
	// End Custom File Input 

});