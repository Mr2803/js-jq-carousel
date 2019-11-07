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

    //navigazione da tastiera
    $(window).on({
        keyup: function (j) {

            //console.log(k.keyCode); // Utilizzo questo log per intercettare il keyCode del tasto premuto

            if (j.keyCode == "39") {
                //console.log("Vado a destra");
                nextImg();
            }
            if (j.keyCode == "37") {
                //console.log("Vado a sinistra");
                prevImg();
            }
        }
    });
    

    //Attivo funzione navigazione con click
    $(".next").click(nextImg);
    $(".prev").click(prevImg);

    //Aggiungo dettagli sull'hover con funzione on su Next
    $(".next").on({

        mouseenter: function () {
            $(this).css("color", "orange")
        },
        mouseleave: function () {
            $(this).css("color", "#565a5c")
        }
    });
    
    
    //Aggiungo dettagli sull'hover con funzione on su Next
    $(".prev").on({

    mouseenter : function(){
        $(this).css("color","orange")
    },
    mouseleave : function(){
        $(this).css("color","#565a5c")
    }



    });
   
   //FUNZIONI ESTERNE
    function nextImg(){
        var posizioneimg = $(".slider-wrapper .images  img.active");
        var posizionenav = $(".nav img.active");
        ;

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");
        posizionenav.removeClass("border");


        if (posizioneimg.hasClass("last")) {
            $(".slider-wrapper .images  img.first").addClass("active");
            $(".nav img.first").addClass("active border");
        } else {
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.next("img").addClass("active");
            posizionenav.next("img").addClass("active border");

        }
    }

    function prevImg(){
        var posizioneimg = $(".slider-wrapper .images  img.active");
        var posizionenav = $(".nav img.active");

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");
        posizionenav.removeClass("border");

        // se siamo alla prima img dello slider, ritorna ad essere attiva l'ultima
        if (posizioneimg.hasClass("first")) {
            $(".slider-wrapper .images  img.last").addClass("active");
            $(".nav img.last").addClass("active border");
        } else {
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.prev("img").addClass("active");
            posizionenav.prev("img").addClass("active border");
        }
    }

    
})
