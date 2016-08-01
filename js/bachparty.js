var images;
var index = 0;
var pic;
var cruise = new Date(2016, 8, 9, 17)
var today;
var audio = new Audio('the-final-countdown.mp3')

cruise = cruise.valueOf();

function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

function nextPic() {
  pic.addClass('animated fadeOutLeft')
  pic.removeClass()
  pic.addClass('pic')
  if(index < 5){ index++ } else { index = 0 }
  pic = $(images[index])
  pic.addClass('animated fadeInRight active')
  setTimeout(nextPic, 5500)
}


function countDown() {
  today = Date.now();
  var t = cruise - today
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  $('#days').text(days)
  $('#hours').text(hours)
  $('#minutes').text(minutes)
  $('#seconds').text(seconds)
  setTimeout(countDown, 1000)
}

function displayModal() {
  var modal = document.getElementById('myModal');

  $('#carousel').hide();

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

 $("#yes").click(function(){
    audio.play();
    modal.style.display = "none";
    $('#carousel').show();
    $('#music').show()
    $('#music').text('Play')
 })

 $("#no").click(function(){
    modal.style.display = "none";
    $('#carousel').show();
    $('#music').show()
    $('#music').text('Stop')
 })

}

$(document).ready(function(){
  if( detectmob() || isFacebookApp() ) { displayModal() } else { audio.play()}
  images = $('#carousel img')
  pic = $(images[index])
  nextPic();
  countDown();
  $('#music').click(function(){
    if( $(this).text() === 'Play') { audio = new Audio('the-final-countdown.mp3'; audio.play();) } else { audio.pause() }
  })



  // $('#btn').click(function(){
  //   pic.addClass('animated fadeOutLeft')
  //   pic.removeClass()
  //   pic.addClass('pic')
  //   if(index < 5){ index++ } else { index = 0 }
  //   pic = $(images[index])
  //   pic.addClass('animated fadeInRight active')
  // })
})