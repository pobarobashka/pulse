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
//табы
function hide(){
    tab.forEach((item)=>{
        item.classList.remove('catalog__tab_active');
    });
    content.forEach(item=>{
        item.classList.remove('catalog__content_active');
    });
}
function toggleCard(i){
    front[i].classList.toggle('catalog__front_active');
    back[i].classList.toggle('catalog__back_active');
}
function show(i){
    tab[i].classList.add('catalog__tab_active');
    content[i].classList.add('catalog__content_active');
}
const tab = document.querySelectorAll(".catalog__tab"),
    content = document.querySelectorAll('.catalog__content'),
    catalog = document.querySelector('.catalog'),
    front = document.querySelectorAll('.catalog__front'),
    back = document.querySelectorAll('.catalog__back');
catalog.addEventListener('click',(event)=>{
    event.preventDefault();
    const target = event.target;
    if (target && target.classList.contains('catalog__link')){
        document.querySelectorAll('.catalog__link').forEach((item,i)=>{
            if (target==item){
                toggleCard(i);
            }

        })
    } else if (target && target.classList.contains('catalog__return')){
        document.querySelectorAll('.catalog__return').forEach((item,i)=>{
            if (target==item){
                toggleCard(i);
            }
        })
    }else if (target && target.classList.contains('catalog__tab')){
        tab.forEach((item,i)=>{
            if (target==item){
                hide();
                show(i);
            }
        });
    }
})
//jquery
// $(document).ready(function(){
//     //табы
//     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
//         $(this)
//
//             .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
//             .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active ');
//     });
//     function toggleSlide(item){
//         $(item).each(function (i){
//             $(this).on('click',function(e){
//                 e.preventDefault();
//                 $('.catalog__front').eq(i).toggleClass('catalog__front_active');
//                 $('.catalog__back').eq(i).toggleClass('catalog__back_active');
//             })
//         });
//     };
//     toggleSlide('.catalog__link');
//     toggleSlide('.catalog__return')
// });