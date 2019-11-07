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
    $(document).keyup(function (j){
        if (j.keyCode == "39") {
            nextImg();
            $(".next").css("color", "orange").fadeOut(200).fadeIn(1,function(){
                $(this).css("color", "#565a5c")
            })
            
        }
        if (j.keyCode == "37") {
            prevImg();
            $(".prev").css("color", "orange").fadeOut(200).fadeIn(1, function () {
                $(this).css("color", "#565a5c")
            });
        }
    })  


           
    

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
        var posizioneimg = $(".col-12 .images  img.active");
        var posizionenav = $(".nav img.active");
        ;

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");
        posizionenav.removeClass("border");


        if (posizioneimg.hasClass("last")) {
            $(".col-12 .images  img.first").addClass("active");
            $(".nav img.first").addClass("active border");
        } else {
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.next("img").addClass("active");
            posizionenav.next("img").addClass("active border");

        }
    }

    function prevImg(){
        var posizioneimg = $(".col-12 .images  img.active");
        var posizionenav = $(".nav img.active");

        posizioneimg.removeClass("active");
        posizionenav.removeClass("active");
        posizionenav.removeClass("border");

        // se siamo alla prima img dello slider, ritorna ad essere attiva l'ultima
        if (posizioneimg.hasClass("first")) {
            $(".col-12 .images  img.last").addClass("active");
            $(".nav img.last").addClass("active border");
        } else {
            //altrimenti passa semplicemente l'active alla prossima
            posizioneimg.prev("img").addClass("active");
            posizionenav.prev("img").addClass("active border");
        }
    }

     /* $(".nav img").click(function(){
         var posizioneimg = $(".col-12 .images  img.active");
         var posizionenav = $(".nav img.active");

         posizioneimg.removeClass("active");
         posizionenav.removeClass("active");

         $(this).addClass("active");

           

       
         
     })  */
        

    

    
})
