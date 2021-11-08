
$(document).ready(function(){

    //menu bars header
    $('#menu').on('click',function(){
        $(this).toggleClass('fa-times')
        if($(this).hasClass('fa-bars')){
            $(this).addClass('active')
        }
        $('header nav').toggleClass('active')
    })
        // scroll top scrollTo
        $('.scroll-top').on('click',function(){
            $('html,body'). scrollTop(0);
            
        })
    
    //a go to offset
    $('header nav a').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('html,body').animate({

            scrollTop :$('#'+ $(this).data('scroll')).offset().top - 150

        },500)
    })

    $(window).on('scroll load',function(){
        $('header nav').removeClass('active')
        $('#menu').removeClass('fa-times')
        //scroll top fade in
        if($(window).scrollTop() >= 1800){
            $('.scroll-top').fadeIn(400)
        }else{
            $('.scroll-top').fadeOut(400)

        }

        
        $("section").each(function(){
         if($(window).scrollTop() >= $(this).offset().top -150){
             var id = $(this).attr('id')
             $('nav a').removeClass('active');
             $('nav  a[data-scroll ="' + id +'"]').addClass('active');

         }
        })
        
    
    })

//featured add class active
    $('.featured .row .image-container .small-image img').each(function(){
        $(this).on('click',function(){
            $(this).addClass('active').siblings().removeClass('active')
        })
    })
})

    











//home slide owlCarousel
$('.home .box-container').owlCarousel({
    items:1,
    autoplay:true,
    dots:false,
    //autoplayHoverPause:true,
    autoPlaySpeed: 1000,
    loop:true,
    autoplayTimeout:3000,

});




























/*
//scrollreveal
ScrollReveal().reveal('.heading', {
    delay: 375,
    duration: 500,
    reset: true,
    scale: 0.85 
});
*/



let sr = ScrollReveal({
    distance :'6rem',
    duration :2500,
    delay:400
})

sr.reveal('section',{delay:100})
sr.reveal('footer',{delay:100})
sr.reveal('.heading',{origin:'top',interval:100})