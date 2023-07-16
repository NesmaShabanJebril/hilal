$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 10);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

// Set the date we're counting down to
var countDownDate = new Date("Jun 21, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
    
    
      document.getElementById("days").innerHTML = days +":";
      document.getElementById("hours").innerHTML = hours +":";
      document.getElementById("minutes").innerHTML = minutes +":";
      document.getElementById("seconds").innerHTML = seconds +":";
    
 
}, 1000);


$(document).ready(function(){
    $(".next1").click(function(){
      $(".link1").addClass("d-block");
	  
    });
});
$(document).ready(function(){
    $(".next2").click(function(){
      $(".link2").addClass("d-block");
	  
    });
});