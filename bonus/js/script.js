/*
DESCRIZIONE:
    RI-Creare lo slideshow / carousel base come fatto in live coding a lezione stamattina.
BONUS:
    navigare tramite tastiera;
    generare contenuti / img(tipo da array nome imgs) + pallini;
    aggiungere transizioni;
    thumbnails / miniature(navigabili o meno);
    varie ed eventuali che vi possono venire in mente.*/
    //@ts-check

$(document).ready(function () {

    $(".next").on({

        click: function(){
            var posizioneimg = $(".slider-wrapper .images  img.active");
            var posizionenav = $(".nav i.active");

            posizioneimg.removeClass("active");
            posizionenav.removeClass("active");
            if (posizioneimg.hasClass("last")) {
                $(".slider-wrapper .images  img.first").addClass("active");
                $(".nav i.first").addClass("active");
            } else {
                //altrimenti passa semplicemente l'active alla prossima
                posizioneimg.next("img").addClass("active");
                posizionenav.next("i").addClass("active");
            }

        },
        mouseenter: function () {
            $(this).css("color", "orange")
        },
        mouseleave: function () {
            $(this).css("color", "#565a5c")
        }
    
    });
    
    

    $(".prev").on({

        click :function() {
        var posizioneimg = $(".slider-wrapper .images  img.active");
        var posizionenav = $(".nav i.active");

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");

        // se siamo alla prima img dello slider, ritorna ad essere attiva l'ultima
        if (posizioneimg.hasClass("first")) {
            $(".slider-wrapper .images  img.last").addClass("active");
            $(".nav i.last").addClass("active");
        } else {
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.prev("img").addClass("active");
            posizionenav.prev("i").addClass("active");
        }
    },
    mouseenter : function(){
        $(this).css("color","orange")
    },
    mouseleave : function(){
        $(this).css("color","#565a5c")
    }



    });
})
