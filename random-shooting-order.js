var names = ["Frank", "Eric", "Dan", "Warren", "Vinny", "Andrea", "Joe", "Minder", "Mesisca", "Chris", "Dom", "Mike"]
// var names = ["Frank", "Eric"]
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function nextShooter() {
  i = Math.floor(Math.random() * 20 + 10)
  flashName(i)
}

function flashName(i) {
  setTimeout(function() {
    if (i > 0) {
      var j = i
      while (j > 0) {
        shuffle(names)
        j--
      }
      $(".names h1").text(names.reverse()[0])
      setTimeout(function(){
        $(".names h1").text(names.reverse()[0])
      }, 300);
      flashName(i-1)
    } else {
      $(".order ol").append("<li><h2>" + names[0] + "</h2></li>")
      names.shift()
      if (names.length === 0) {
        $(".names h1").text("Go Eagles!")
      }
    }
  }, 500)
}
$(document).ready(function(){
  $(".btn").click(function() {
    nextShooter();
  })

})