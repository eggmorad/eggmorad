// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(window).scroll(function(){
	var moradLogo = $(".logo-morad");
	var moradLogoWidth = $(".logo-morad").css("width");
	if ($('body').scrollTop() > 0) {
        if (moradLogoWidth === '200px') {
            moradLogo.animate({
                marginTop:-20, marginLeft:'-90px', width:'60px',height:'60px'
            }, 600);
        }
		else if(moradLogoWidth === '100px') {
            moradLogo.animate({
                marginTop:-10, marginLeft:'-30px', width:'45px',height:'45px'
            }, 600);			
		}
    } else {
		moradLogoWidth = $(".logo-morad").css("width");
        if (moradLogoWidth === '60px') {
            moradLogo.animate({
                marginTop:-30,marginLeft:'-120px', width:'200px',height:'200px'
            }, 600);
        } else if(moradLogoWidth === '45px') {
            moradLogo.animate({
                marginTop:-10, marginLeft:'-40px', width:'100px',height:'100px'
            }, 600);			
		}
    }	
});

function blickDown(){
	window.setInterval(function(){
		var color = $(".btn-transparent").css("background-color"); 
		$(".btn-transparent").css("background-color",color ==='rgb(0, 255, 255)'? 'transient' : 'rgba(0,255,255,255)');			
	},500);
}

 $(document).ready(function(){
	blickDown();
  });

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

