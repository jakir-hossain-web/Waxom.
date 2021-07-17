$(function(){
    // slick slider banner ============
    $('.banner_item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<i class="fa fa-angle-left left-arrow"></i>',
        nextArrow: '<i class="fa fa-angle-right right-arrow"></i>',
        });

    // venobox ========================
    $('.venobox').venobox();

    // counter us js ==================
    $('.counter').counterUp({
    delay: 50,
    time: 2000
    });

    // mixitup js ==================
    var mixer = mixitup('.our_project');
})