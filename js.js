$(document).ready(function(){
    $("footer").load("files/footer.html");
    $("nav").load("files/nav.html");

    $("audio").before("<i class=\"far fa-play-circle\"></i>");
    $('.botao').not('.botaoD').children('div').after("<br><a><button class=\"baixar btn btn-block btn-default\"><i class='glyphicon glyphicon-download-alt'></i> Baixar</button></a>");
    
    $("audio").on('ended', function(){
        $(this).siblings("i").toggleClass("fa-pause-circle fa-play-circle");
    });

    var botoes = $(".botao").not(".botaoD");

    for(var i = 0; i < botoes.length; i++){
        var b = $(botoes[i]);
        b.children("a").attr("href", b.children("audio").attr('src'));
        b.children("a").attr("download",'');
    }

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

    $.ajax({
        url: "https://api.twitch.tv/kraken/streams/" + 'thehydrogen',
        dataType: 'json',
        headers: {
          'Client-ID': '8as214cog5fxuqjdawgty1cn68ywjv'
        },
        success: function(channel){
          if (channel["stream"] == null) {
              $('#stream').html("<b>Stream</b> <b style='color: red'>OFFLINE</b>");
            } else {
                $('#stream').html("<b>Stream</b> <b style='color: lightgreen'>ONLINE</b>");
          }
        }
      });

        $('.exit').click(function(){
            $(this).parent().toggle('slide', { direction: 'right' }, 400);
            $('.toggleComentar').toggle('slide', { direction: 'right' }, 400);
            $('.naoCarregando').toggle('slide', { direction: 'right' }, 400);
        });

        $('.toggleComentar').click(function(){
            $(this).toggle('slide', { direction: 'right' }, 400);
            $('.comentar').toggle('slide', { direction: 'right' }, 400);
            $('.naoCarregando').toggle('slide', { direction: 'right' }, 400);
        });
});