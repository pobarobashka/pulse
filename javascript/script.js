const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls:false,
    nav:false,
    /*responsive: {
        800: {
            edgePadding: 20,
            gutter: 20,
            items: 3
        }}*/
});
document.querySelector('.prev').addEventListener('click',function () {
    slider.goTo("prev");
});
document.querySelector('.next').addEventListener('click',function () {
    slider.goTo("next");
});
//jquery
$(document).ready(function(){
    //табы
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)

            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active ');
    });
    function toggleSlide(item){
        $(item).each(function (i){
            $(this).on('click',function(e){
                e.preventDefault();
                $('.catalog__front').eq(i).toggleClass('catalog__front_active');
                $('.catalog__back').eq(i).toggleClass('catalog__back_active');
            })
        });
    };
    toggleSlide('.catalog__link');
    toggleSlide('.catalog__return')
});