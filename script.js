$(function(){
    $('.button').click(function(){
        var listaMenu = $('.nav-mobile')
        var x = listaMenu.css('display')
        if(x == 'none'){
        listaMenu.fadeIn();
        document.getElementById('botao').src ="estilos/images/icon-close.svg"
        }
        else{
        listaMenu.fadeOut();
        document.getElementById('botao').src ="estilos/images/icon-hamburger.svg"
        }
    })
    $('.product').click(function(){
        var sub1 = $('.sub-list1')
        var sub2 = $('.sub-list2')
        var sub3 = $('.sub-list3')
        var x = sub1.css('display')
        if(x =='none'){
        sub2.fadeOut()
        sub3.fadeOut()
        sub1.fadeIn()
        }
        if (x == 'block'){
            sub1.fadeOut();
        }

    })
    $('.company').click(function(){
        var sub1 = $('.sub-list1')
        var sub2 = $('.sub-list2')
        var sub3 = $('.sub-list3')
        var x = sub2.css('display')
        if(x =='none'){
        sub2.fadeIn()
        sub3.fadeOut()
        sub1.fadeOut()
        }
        if (x == 'block'){
            sub2.fadeOut();
        }

    })
    $('.connect').click(function(){
        var sub1 = $('.sub-list1')
        var sub2 = $('.sub-list2')
        var sub3 = $('.sub-list3')
        var x = sub3.css('display')
        if(x =='none'){
        sub2.fadeOut()
        sub3.fadeIn()
        sub1.fadeOut()
        }
        if (x == 'block'){
            sub3.fadeOut();
        }
    })
    $('.container-mobile1').click(function(){
        var sub1 = $('.sub-list1-mobile')
        var sub2 = $('.sub-list2-mobile')
        var sub3 = $('.sub-list3-mobile')
        var x = sub1.css('display')
        if(x =='none'){
        sub3.fadeOut()
        sub1.fadeIn()
        sub2.fadeOut()
        }
        else{
            sub1.fadeOut();
        }
    })
    $('.container-mobile2').click(function(){
        var sub1 = $('.sub-list1-mobile')
        var sub2 = $('.sub-list2-mobile')
        var sub3 = $('.sub-list3-mobile')
        var x = sub2.css('display')
        if(x =='none'){
        sub1.fadeOut()
        sub2.fadeIn()
        sub3.fadeOut()
        }
        else{
            sub2.fadeOut();
        }
    })
    $('.container-mobile3').click(function(){
        var sub1 = $('.sub-list1-mobile')
        var sub2 = $('.sub-list2-mobile')
        var sub3 = $('.sub-list3-mobile')
        var x = sub3.css('display')
        if(x =='none'){
        sub1.fadeOut()
        sub3.fadeIn()
        sub2.fadeOut()
        }
        else{
            sub3.fadeOut();
        }
    })
})

