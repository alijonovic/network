$(window).on('scroll', function() {

    if ($(window).scrollTop() >= 200 ) {
        $('.body__btn').addClass('show')
    }else {
        $('.body__btn').removeClass('show')
    }
})

$('.body__btn').on('click', function () {

    $('html').animate({
        scrollTop: 0
    },1200)

})

// $('.active-btn').on('click', function () {
//     $('.modal').addClass('active')
//     console.log(this);
// })
 

