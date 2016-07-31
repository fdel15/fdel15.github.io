var images;
var index = 0;
var pic;
var cruise = new Date(2016, 8, 9, 17)
var today;

cruise = cruise.valueOf();

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

$(document).ready(function(){
  images = $('#carousel img')
  pic = $(images[index])
  nextPic()
  countDown()

  // $('#btn').click(function(){
  //   pic.addClass('animated fadeOutLeft')
  //   pic.removeClass()
  //   pic.addClass('pic')
  //   if(index < 5){ index++ } else { index = 0 }
  //   pic = $(images[index])
  //   pic.addClass('animated fadeInRight active')
  // })
})