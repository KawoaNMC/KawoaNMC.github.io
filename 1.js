﻿ $(function(){
 	 	 
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

	// Game Rò mìn
	$('.sp1 .imgProduct').click(
		function() {
			$('#thongTinGameRoMin').css({"z-index": "2000", opacity: 1})
		},
	)

	$('#thongTinGameRoMin .thongTinSP .thongTinSPRight .cancleThongTinSP').click (
		function() {
			$('#thongTinGameRoMin').css({"z-index": "-1", opacity: 0})
		}
	)

	$('.sp4 .imgProduct').click(
		function() {
			$('#thongTinGameRoMin').css({"z-index": "2000", opacity: 1})
		},
	)

	$('#thongTinGameRoMin .thongTinSP .thongTinSPRight .cancleThongTinSP').click (
		function() {
			$('#thongTinGameRoMin').css({"z-index": "-1", opacity: 0})
		}
	)

	// Game rắn Săn Mồi
	$('.sp5 .imgProduct').click(
		function() {
			$('#thongTinGameRanSanMoi').css({"z-index": "2000", opacity: 1})
		},
	)

	$('#thongTinGameRanSanMoi .thongTinSP .thongTinSPRight .cancleThongTinSP').click (
		function() {
			$('#thongTinGameRanSanMoi').css({"z-index": "-1", opacity: 0})
		}
	)

   // Shop basketball
	$('.sp3 .imgProduct').click(
		function() {
			$('#thongTinShopBasketball').css({"z-index": "2000", opacity: 1})
		},
	)

	$('#thongTinShopBasketball .thongTinSP .thongTinSPRight .cancleThongTinSP').click (
		function() {
			$('#thongTinShopBasketball').css({"z-index": "-1", opacity: 0})
		}
	)

	$('.sp6 .imgProduct').click(
		function() {
			$('#thongTinShopBasketball').css({"z-index": "2000", opacity: 1})
		},
	)

	$('#thongTinShopBasketball .thongTinSP .thongTinSPRight .cancleThongTinSP').click (
		function() {
			$('#thongTinShopBasketball').css({"z-index": "-1", opacity: 0})
		}
	)

	// Website
	$('.sp2 .imgProduct').click(
		function() {
			$('#thongTinWebsite').css({"z-index": "2000", opacity: 1})
		},
	)

	$('#thongTinWebsite .thongTinSP .thongTinSPRight .cancleThongTinSP').click (
		function() {
			$('#thongTinWebsite').css({"z-index": "-1", opacity: 0})
		}
	)

	// chuyển ảnh sang trái sang phải cho project website
	var listImgWebsite = [
		"images/imgProject/Shop1.PNG ",
		"images/imgProject/Shop2.PNG",
		"images/imgProject/Shop3.PNG ",
		"images/imgProject/Shop4.PNG",
		"images/imgProject/Shop5.PNG ",
		"images/imgProject/Shop6.PNG",
		"images/imgProject/Shop7.PNG ",
		"images/imgProject/Shop8.PNG",
		"images/imgProject/Shop9.PNG ",
		"images/imgProject/Shop10.PNG",
		"images/imgProject/Shop11.PNG ",
		"images/imgProject/Shop12.PNG",
		"images/imgProject/Shop13.PNG ",
		"images/imgProject/Shop14.PNG",
		"images/imgProject/Shop15.PNG ",
		"images/imgProject/Shop16.PNG"
	]
	var id = 0;
	$('#thongTinShopBasketball .thongTinSP .thongTinSPRight .sangTrai').click(
		function() {
			var slider = document.getElementById("imgSPShopBasketball");
			id--;
			if(id < 0) {
				id = listImgWebsite.length - 1;
			}
			slider.src = listImgWebsite[id];
		}
	)
	$('#thongTinShopBasketball .thongTinSP .thongTinSPRight .sangPhai').click(
		function() {
			var slider = document.getElementById("imgSPShopBasketball");
			id++;
			if(id >= listImgWebsite.length) {
				id = 0;
			}
			slider.src = listImgWebsite[id];
		}
	)

	// chuyển ảnh sang trái sang phải cho project Rắn Săn Mồi
	var listImgRanSanMoi = [
		"images/imgProject/Snake1.PNG",
		"images/imgProject/Snake2.PNG",
		"images/imgProject/Snake3.PNG",
		"images/imgProject/Snake4.PNG",
		"images/imgProject/Snake5.PNG",
	]
	var id = 0;
	$('#thongTinGameRanSanMoi .thongTinSP .thongTinSPRight .sangTrai').click(
		function() {
			var slider = document.getElementById("imgSPRanSanMoi");
			id--;
			if(id < 0) {
				id = listImgRanSanMoi.length - 1;
			}
			slider.src = listImgRanSanMoi[id];
		}
	)
	$('#thongTinGameRanSanMoi .thongTinSP .thongTinSPRight .sangPhai').click(
		function() {
			var slider = document.getElementById("imgSPRanSanMoi");
			id++;
			if(id >= listImgRanSanMoi.length) {
				id = 0;
			}
			slider.src = listImgRanSanMoi[id];
		}
	)

	
	// chuyển ảnh sang trái sang phải cho project Rò Mìn
	var listImgRoMin = [
		"images/imgProject/RoMin1.PNG",
		"images/imgProject/RoMin2.PNG",
		"images/imgProject/RoMin3.PNG",
		"images/imgProject/RoMin4.PNG",
		"images/imgProject/RoMin5.PNG",
		"images/imgProject/RoMin6.PNG",
	]
	var id = 0;
	$('#thongTinGameRoMin .thongTinSP .thongTinSPRight .sangTrai').click(
		function() {
			var slider = document.getElementById("imgSPRoMin");
			id--;
			if(id < 0) {
				id = listImgRoMin.length - 1;
			}
			slider.src = listImgRoMin[id];
		}
	)
	$('#thongTinGameRoMin .thongTinSP .thongTinSPRight .sangPhai').click(
		function() {
			var slider = document.getElementById("imgSPRoMin");
			id++;
			if(id >= listImgRoMin.length) {
				id = 0;
			}
			slider.src = listImgRoMin[id];
		}
	)
})  
 