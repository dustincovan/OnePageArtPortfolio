
var digitalIllustrationHolder = "<div id='links'>"+
                                  "<div id='digitalIllustrationRow1' class='row'>"+
                                  "<div class='col-sm-3'><a href='img/BubbleSun.png' title='Bubble Sun' data-gallery><img src='img/BubbleSun.png' class='img-responsive img-circle img-thumbnail'></a></div>"+
                                  "<div class='col-sm-3'><a href='img/Blueboy.png' title='Blue Boy' data-gallery><img src='img/Blueboy.png' class='img-responsive img-circle img-thumbnail'></a></div>"+
                                  "<div class='col-sm-3'><a href='img/AndTheSun.png' title='And The Sun' data-gallery><img src='img/AndTheSun.png' class='img-responsive img-circle img-thumbnail'></a></div>"+
                                  "<div class='col-sm-3'><a href='img/AndTheMoon.png' title='And The Moon' data-gallery><img src='img/AndTheMoon.png' class='img-responsive img-circle img-thumbnail'></a></div>"+
                                "</div>"+
                                "<br>"+
                                "<div id='digitalIllustrationRow2' class='row'>"+
                                  "<div class='col-sm-3'><a href='img/AndStories.png' title='And Stories' data-gallery><img src='img/AndStoriesThumbnail.png' class='img-responsive img-circle img-thumbnail'></a></div>"+
                                  "<div class='col-sm-3'><a href='img/TheSheep.png' title='The Sheep' data-gallery><img src='img/TheSheep.png' class='img-responsive img-circle img-thumbnail'></a></div>"+
                                  "<div class='col-sm-3'><a href='img/Snowflake2.png' title='Snowflake' data-gallery><img src='img/Snowflake2.png' class='img-responsive img-circle img-thumbnail'></a></div>"+
                                  "<div class='col-sm-3'><a href='img/DonkeyBoy.png' title='Donkey Boy' data-gallery><img src='img/DonkeyBoy.png' class='img-responsive img-circle img-thumbnail'></a></div>"+
                                "</div>"+
                                "<br>"+
                                "</div>";

document.getElementById('digitalIllustration').innerHTML = digitalIllustrationHolder;

$('.img-thumbnail').hover(function(){
            $(this).css({'opacity': '0.8', 'border-color': 'yellow'});
          }, function(){
            $(this).css({'opacity': '1.0', 'border-color': '#00FFFF'});
          });
