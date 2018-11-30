$('.btn').click(function(){
    $('.portfolio').show();
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 1000);
});

$('.upper').click(function(){
    $('html, body').animate({
        scrollTop: $(".intro").offset().top
    }, 350);
    setTimeout(function(){
        $('.portfolio').hide();
    }, 350);
});

let box = $('.box');
let clickCount = 0;
box.click(function(){
    clickCount++;
    if(clickCount % 2) {
        $(this).addClass('clickedBox');
        $(this).animate({
            'width': '100%',
            'height': '520px'
        }, 200);
        setTimeout(function(){
            box.hide();
            $('.clickedBox').show();
        }, 200);        
    } else {
        $(this).removeClass('clickedBox');
        $(this).animate({
            'width': '31.77%',
            'height': '180px'
        }, 100);
        setTimeout(function(){
            box.show();
        }, 100);  
    }
    if(box.hasClass('clickedBox')) {
        $('.layer p').show(100);
        $('.layer h1').animate({
            'margin-top': '5%'
        },100);
    } else {
        $('.layer p').hide(100);
        $('.layer h1').animate({
            'margin-top': '20%'
        },100);
    }
});

