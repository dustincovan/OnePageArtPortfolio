
var aboutHolder = "<div id='aboutRow1' class='row'>"+
                    "<div id='aboutBlurb' class='col-sm-7'>"+
                      "<div id='yellow'>"+
                        "<br>"+
                        "<p>"+
                          "<a href='#' class='red contactLink'>Dustin Covan</a> wants you to understand the way he feels "+
                          "inside, but talking about his feelings makes him "+
                          "uncomfortable."+
                        "</p>"+
                        "<p>"+
                          "This is why he creates art."+
                        "</p>"+
                        "<p>"+
                          "Using primarily cut paper, ink, and colored pencils, "+
                          "Dustin makes pictures of colorful characters in "+
                          "questionable situations to show you how happy, fat, "+
                          "scared, angry, sexy, or pathetic he feels at any "+
                          "given moment in his day."+
                        "</p>"+
                        "<p>"+
                          "Dustin would also love to talk to you about the way "+
                          "he sees the creative process and the effect it has on "+
                          "the chemicals in his brain, but once again, he "+
                          "cannot."+
                        "</p>"+
                        "<p>"+
                          "So he continues making pictures and he hopes you "+
                          "understand."+
                        "</p>"+
                        "<br>"+
                      "</div> <!-- end yellow -->"+
                    "</div> <!-- end aboutBlurb -->"+
                    "<div class='col-sm-5'>"+
                        "<blockquote id='aboutPictureBlock'>"+
                          "<img id='aboutPicture' class='img-responsive img-rounded' src='img/About-Picture.png'>"+
                          "<footer class='red'>Portrait of the artist under infrared light.</footer>"+
                        "</blockquote>"+ 
                    "</div>"+
                  "</div> <!-- end aboutRow1 -->"+
                  "<br>";

document.getElementById('about').innerHTML = aboutHolder;

$('.contactLink').click(function(event){

            event.preventDefault();

            $('#contact').slideDown('fast').fadeIn('fast');

            setTimeout(function(){
              
              $('#contact').scrollintoview();
            
            }, 400);

        });

$('#aboutPicture').css('border', '2px solid red');
