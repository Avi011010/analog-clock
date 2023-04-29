function updateClock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
  
    //adjust the time to India Standard Time (GMT+05:30)
    var offset = date.getTimezoneOffset(); //get the difference in minutes between local time and UTC
    var ist = new Date(date.getTime() + (offset + 330) * 60000); //add the offset in milliseconds to the date
    hour = ist.getHours();
    minute = ist.getMinutes();
    second = ist.getSeconds();
  
    var hourAngle = (hour % 12) * 30 + minute * 0.5; //30 degrees per hour, plus half a degree per minute
    var minuteAngle = minute * 6; //6 degrees per minute
    var secondAngle = second * 6; //6 degrees per second
  
    var hourHand = document.querySelector(".hour");
    var minuteHand = document.querySelector(".minute");
    var secondHand = document.querySelector(".second");
  
    hourHand.style.transform = "rotate(" + hourAngle + "deg)";
    minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
    secondHand.style.transform = "rotate(" + secondAngle + "deg)";
  }
  
  function toggleTheme() {
    var body = document.querySelector("body");
    var toggle = document.querySelector(".toggle");
    body.classList.toggle("dark");
    toggle.classList.toggle("active");
  }
  
  updateClock(); //update the clock once at the beginning
  setInterval(updateClock,1000); //update the clock every second