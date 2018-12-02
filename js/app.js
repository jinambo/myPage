$('.btn').click(function(){
    $('.portfolio').show();
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 600);
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
            'width': '70%',
            'height': '45vh'
        },0);
        setTimeout(function(){
            box.hide();
            $('.clickedBox').show();
        });        
    } else {
        $(this).removeClass('clickedBox');
        $(this).css({
            'position': 'relative',
        });
        $(this).animate({
            'width': '31.77%',
            'height': '24vh'
        },0);
        setTimeout(function(){
            box.show();
        });  
    }

    if(box.hasClass('clickedBox')) {
        $('.layer').show();
        $('.upper').css({
            'margin-top': '220px'
        });
    } else {
        $('.layer').hide();
        $('.upper').css({
            'margin-top': '40px'
        });
    }
});

