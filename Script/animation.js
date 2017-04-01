  $(function(){
$("ul #li1").hover(function(){
    $(this).html('<a href="#">مرحباً بكم</a>').css("color","#4d4d4d");
    },function(){
    $(this).html('عربي').css("color","white");
})
$("ul #li2").hover(function(){
    $(this).html('<a href="#">欢迎</a>').css("color","#4d4d4d");
    },function(){
    $(this).html('中文').css("color","white");
})
$("ul #li3").hover(function(){
    $(this).html('<a href="#">Welcome</a>').css("color","#4d4d4d");
    },function(){
    $(this).html('English').css("color","white");
})
$("ul #li4").hover(function(){
    $(this).html('<a href="#">Bienvenue</a>').css("color","#4d4d4d");
    },function(){
    $(this).html('Français').css("color","white");
})
$("ul #li5").hover(function(){
    $(this).html('<a href="#">Добро пожаловать</a>').css("color","#4d4d4d");
    },function(){
    $(this).html('Русский').css("color","white");
})
$("ul #li6").hover(function(){
    $(this).html('<a href="#">Bienvenidos</a>').css("color","#4d4d4d");
    },function(){
    $(this).html('Español').css("color","white");
})
        });
        
           $(function(){
       $("#button").click(
  function() {
	  if($("#u2").hasClass('fadeInRight90')) {
		$("#u2").removeClass('animated fadeInRight90').addClass('animated fadeOutRight90');
               
	  } else {
		$("#u2").removeClass('animated fadeOutRight90').addClass('animated fadeInRight90');
             
	  }		  
  });
   });
   
      $(function(){
           $("#snav").hide();
       $("#snav").slideDown();          
             $("#ul1 li").animate({margin:"22px -60px"},1500);
   });
   
   $(function(){
       $("#button").animate({top:"35px",right:"35px"},1500);
   });
