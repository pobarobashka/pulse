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