$(document).ready(function(){
    $("footer").load("files/footer.html");
    $("nav").load("files/nav.html");
    
    // ADBLOCKER 
    // setInterval(function(){
    //     if($('.fundoPreto').length == 0){
    //         $.get("adblockon.html", function (html) {
    //             $("body").append(html);
    //         });
    //     }
    //     if(!document.getElementById('TEOpIRMaDNmn') || !document.getElementById('TfDLiAEVOJSI')){
    //         $('.fundoPreto').show();
    //     }
    // }, 300);

    // AUDIOS

    $("audio").before("<i class=\"far fa-play-circle\"></i>");
    // $('.botao').not('.botaoD').children('div').after("<br><a><button class=\"baixar btn btn-block btn-default\"><i class='glyphicon glyphicon-download-alt'></i> Baixar</button></a>");
    
    
    $("audio").on('ended', function(){
        $(this).siblings("i").toggleClass("fa-pause-circle fa-play-circle");
    });
    
    $('.ativarTodos').click(function(){
        $('audio').click();
    });
    
    // var botoes = $(".botao").not(".botaoD");
    
    // for(var i = 0; i < botoes.length; i++){
    //     var b = $(botoes[i]);
    //     b.children("a").attr("href", b.children("audio").attr('src'));
    //     b.children("a").attr("download",'');
    // }
    
    $(".botao").click(function (e) {
        if($(e.target).hasClass("baixar")) return;
        
        var play = $(this).children("audio")[0];
        
        var toggle = $(this).children("i")[0];
        $(toggle).toggleClass("fa-pause-circle fa-play-circle");
        if(play.paused == true){
            play.play();
        } else {
            play.pause();
            play.load();
        }
    });
    
    // GIFS
    // $('.gif').children('div').after("<br><a><button class=\"baixar btn btn-block btn-default\"><i class='glyphicon glyphicon-download-alt'></i> Baixar</button></a>");
    
    // var gifs = $(".gif");
    
    // for(var i = 0; i < gifs.length; i++){
    //     var b = $(gifs[i]);
    //     b.children("a").attr("href", b.children("img").attr('src'));
    //     b.children("a").attr("download",'');
    // }
    
    // 
    setTimeout(function () {
        $.ajax({
            url: "https://api.twitch.tv/kraken/streams/" + 'thehydrogen',
            dataType: 'json',
            headers: {
              'Client-ID': '8as214cog5fxuqjdawgty1cn68ywjv'
            },
            success: function(channel){
                if (channel["stream"] == null) {
                    $('#stream').html("<b>Stream <b style='color: red'>OFFLINE</span></b>");
                } else {
                    $('#stream').html("<b>Stream <span style='color: lightgreen'>ONLINE</span></b>");
                }
            }
        });
    }, 1500);
        
    $('.exit').click(function(){
        if($(this).parent().hasClass('comentar')){
            $(this).parent().toggle('slide', { direction: 'right' }, 400);
            $('.naoCarregando').toggle('slide', { direction: 'right' }, 400);
            $('.toggleComentar').toggle('slide', { direction: 'right' }, 400);
        } else if($(this).hasClass('toggleBaloes')){
            $('.baloes').css({'width':410, 'height':510});
            $('.baloes').toggle('slide', { direction: 'right' }, 330);
            if($(this).css('right') == '190px'){
                $(this).css('right', 5);
            } else {
                $(this).css('right', 190);
            }
            $(this).toggleClass('fa-arrow-right fa-arrow-left');
            setTimeout(function() {
                $('.baloes').css({'width':165, 'height':200});
            }, 401);
        }
    });

    $('.toggleComentar').click(function(){
        $(this).toggle('slide', { direction: 'right' }, 400);
        $('.naoCarregando').toggle('slide', { direction: 'right' }, 400);
        $('.comentar').toggle('slide', { direction: 'right' }, 400);
    });
    
    setTimeout(function() {
        $('#collapse').click(function(){
            $('#MenuC').slideToggle();
            $('#MenuC').empty();
            $('#MenuC').html($('<ul></ul>').append($('nav > ul').html()));
        });
        updateNav();
    }, 300);
    
    $(window).on('resize', function(){
        updateNav();
    });
    }
);
function updateNav(){
    if($(window).width() <= 600){
        $('nav > ul').hide();
        $('#collapse').show();
    } else {
        $('#collapse').hide();
        $('nav > ul').show();
        $('#MenuC').hide();
    }
}
