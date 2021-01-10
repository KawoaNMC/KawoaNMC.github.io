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
})  
 