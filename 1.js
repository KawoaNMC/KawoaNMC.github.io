 $(function(){
 	 	 
 	  $(".xuong,.kn").click(function(){
 	     $('body,html').animate({scrollTop:$('#khoiedu').offset().top},700);
 	  	return false ; 
 	 })
 	$(".sp").click(function(){
 	  	$('body,html').animate({scrollTop:$('#khoisanpham').offset().top},700);
 	  	return false ; 
 	})
	$(".cm").click(function(){
		$('body,html').animate({scrollTop:$('#comment').offset().top},700);
		return false ; 
   })

   	// js cho menu khối project
   	let link = $('.link');
	for (let j = 0; j < link.length; j++) {
   		link[j].addEventListener('click', function () {
      		for (let i = 0; i < link.length; i++) {
				 link[i].classList.remove('active');
     		}
			  this.classList.add('active');
   		});
	};

	$('.javaSwing').click (
		function() {
			$('.javaProduct .nenProduct').animate({ "width": "100%","height": "100%",opacity: 1}, 200)
			$('.webProduct .nenProduct').animate({ "width": "0%","height": "0%",opacity: 0}, 200)
			$('.cProduct .nenProduct').animate({ "width": "0%","height": "0%",opacity: 0}, 200)
		}
	)
	$('.c').click (
		function() {
			$('.javaProduct .nenProduct').animate({ "width": "0%","height": "0%",opacity: 0}, 200)
			$('.webProduct .nenProduct').animate({ "width": "0%","height": "0%",opacity: 0}, 200)
			$('.cProduct .nenProduct').animate({ "width": "100%","height": "100%",opacity: 1}, 200)
		}
	)
	$('.web').click (
		function() {
			$('.javaProduct .nenProduct').animate({ "width": "0%","height": "0%",opacity: 0}, 200)
			$('.webProduct .nenProduct').animate({ "width": "100%","height": "100%",opacity: 1}, 200)
			$('.cProduct .nenProduct').animate({ "width": "0%","height": "0%",opacity: 0}, 200)
		}
	)
	$('.allProduct').click (
		function() {
			$('.javaProduct .nenProduct').animate({ "width": "100%","height": "100%",opacity: 1}, 200)
			$('.webProduct .nenProduct').animate({ "width": "100%","height": "100%",opacity: 1}, 200)
			$('.cProduct .nenProduct').animate({ "width": "100%","height": "100%",opacity: 1}, 200)
		}
	)

	$('.sp1').hover(
		function() {
			$('.sp1 .imgProduct').animate({opacity: 0.1}, 400);
			$('.sp1 .xem').animate({ opacity: 1}, 400)
			$('.sp1 .title').animate({ opacity: 1, "margin-left": 0}, 400)
			$('.sp1 .sub-title').animate({ opacity: 1, "margin-left": 0}, 400)
		},
		function() {
			$('.sp1 .imgProduct').animate({opacity: 1}, 400);
			$('.sp1 .xem').animate({ opacity: 0}, 400)
			$('.sp1 .title').animate({ opacity: 0, "margin-left": "170px"}, 400)
			$('.sp1 .sub-title').animate({ opacity: 0, "margin-left": "-80px"}, 400)
		}
	)
	$('.sp2 .imgProduct').hover(
		function() {
			$(this).animate({opacity: 0.1}, 400);
			$('.sp2 .xem').animate({ opacity: 1}, 400)
			$('.sp2 .title').animate({ opacity: 1, "margin-left": 0}, 400)
			$('.sp2 .sub-title').animate({ opacity: 1, "margin-left": 0}, 400)
		},
		function() {
			$(this).animate({opacity: 1}, 400);
			$('.sp2 .xem').animate({ opacity: 0}, 400)
			$('.sp2 .title').animate({ opacity: 0, "margin-left": "170px"}, 400)
			$('.sp2 .sub-title').animate({ opacity: 0, "margin-left": "-80px"}, 400)
		}
	)
	$('.sp3 .imgProduct').hover(
		function() {
			$(this).animate({opacity: 0.1}, 400);
			$('.sp3 .xem').animate({ opacity: 1}, 400)
			$('.sp3 .title').animate({ opacity: 1, "margin-left": 0}, 400)
			$('.sp3 .sub-title').animate({ opacity: 1, "margin-left": 0}, 400)
		},
		function() {
			$(this).animate({opacity: 1}, 400);
			$('.sp3 .xem').animate({ opacity: 0}, 400)
			$('.sp3 .title').animate({ opacity: 0, "margin-left": "170px"}, 400)
			$('.sp3 .sub-title').animate({ opacity: 0, "margin-left": "-80px"}, 400)
		}
	)
	$('.sp4 .imgProduct').hover(
		function() {
			$(this).animate({opacity: 0.1}, 400);
			$('.sp4 .xem').animate({ opacity: 1}, 400)
			$('.sp4 .title').animate({ opacity: 1, "margin-left": 0}, 400)
			$('.sp4 .sub-title').animate({ opacity: 1, "margin-left": 0}, 400)
		},
		function() {
			$(this).animate({opacity: 1}, 400);
			$('.sp4 .xem').animate({ opacity: 0}, 400)
			$('.sp4 .title').animate({ opacity: 0, "margin-left": "170px"}, 400)
			$('.sp4 .sub-title').animate({ opacity: 0, "margin-left": "-80px"}, 400)
		}
	)
	$('.sp5 .imgProduct').hover(
		function() {
			$(this).animate({opacity: 0.1}, 400);
			$('.sp5 .xem').animate({ opacity: 1}, 400)
			$('.sp5 .title').animate({ opacity: 1, "margin-left": 0}, 400)
			$('.sp5 .sub-title').animate({ opacity: 1, "margin-left": 0}, 400)
		},
		function() {
			$(this).animate({opacity: 1}, 400);
			$('.sp5 .xem').animate({ opacity: 0}, 400)
			$('.sp5 .title').animate({ opacity: 0, "margin-left": "170px"}, 400)
			$('.sp5 .sub-title').animate({ opacity: 0, "margin-left": "-80px"}, 400)
		}
	)
	$('.sp6 .imgProduct').hover(
		function() {
			$(this).animate({opacity: 0.1}, 400);
			$('.sp6 .xem').animate({ opacity: 1}, 400)
			$('.sp6 .title').animate({ opacity: 1, "margin-left": 0}, 400)
			$('.sp6 .sub-title').animate({ opacity: 1, "margin-left": 0}, 400)
		},
		function() {
			$(this).animate({opacity: 1}, 200);
			$('.sp6 .xem').animate({ opacity: 0}, 400)
			$('.sp6 .title').animate({ opacity: 0, "margin-left": "170px"}, 400)
			$('.sp6 .sub-title').animate({ opacity: 0, "margin-left": "-80px"}, 400)
		}
	)
})  
 