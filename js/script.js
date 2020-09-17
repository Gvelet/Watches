$(document).ready(function(){
    $('.slider__header').slick({
        arrows: false,
        dots: true,
        autoplay:true,
        autoplaySpeed:2500,
    });
    $('.slider__services').slick({
        arrows: true,
        slidesToShow: 1,
        infinite: false,
        touchThreshold: 10,
    });
    $('.slider__collections').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay:true,
        autoplaySpeed:1500,
        touchThreshold: 10,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2
                }
            },{
                breakpoint: 767,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    });
    $('.slider__faqs').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        touchThreshold: 10,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });

    $('.nav__burger').click(function(event){
       $('.nav__burger,.nav__menu,.nav__list,.nav__phone,.nav__body').toggleClass('active');
       $('body').toggleClass('lock');
    });

    $('.footer__burger').click(function(event){
       $('.footer__burger,.footer__menu,.footer__list,').toggleClass('active');
    });

});


