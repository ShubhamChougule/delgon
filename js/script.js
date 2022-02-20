$(document).ready(function(){
    $(".fa-bars").click(function (){
        $(".navbar").toggleClass("active");
    })

    $(window).bind("resize", function () {
        if ($(this).width() > 768) {
            $('.navbar').removeClass('active')
        }
    }).trigger('resize');

    $('.btn.login-btn').click(function(){
        $('.aside-btn').addClass('off');
        $('.login').addClass('active');
    })

    $('.btn.signup-btn').click(function(){
        $('.aside-btn').addClass('off');
        $('.signup').addClass('active');
    })

    $('#user').click(function(){
        $('.aside').toggleClass('on');
        $('.signup').removeClass('active');
        $('.login').removeClass('active');
        $('.aside-btn').removeClass('off');
    })


    $(".h").click(function(){
        window.location.href = "#progress"
    })
})

