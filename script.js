document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('heading').innerHTML = 'Hello Madhu';
    document.getElementById('heading').classList.add('loggedIn');
    document.getElementById('Madhu').src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXYgGq7a-kWpsDQUbIi1xfeWv7T05oMZrjFjkI7UwNF_BvB-e7uDe5xSoZyWrBwoIAjOxX9nsF8qxobrF9IBHWpa7EDhkANzF-iyUkIIG4DzEOX8X7fx2syENCv6AdZtWwufk8IxUPiJKsduAdGCc_c1xAsFy2xs50o9sNKdZXfbAEcuhMAr6-9ZPqB4Q0/s1600/paris-games-artistic-gymnastics-day-2-6753651837110526-la202124.gif';
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('protected-content').style.display = 'block';
    document.getElementById('name').style.display = 'block';
    document.getElementById('name').classList.add('animate');
    document.getElementById('subheading').style.display = 'block';
    document.getElementById('audio').style.fontFamily = 'initial';
    document.getElementById('audio').style.fontSize = 'initial';

    // Add audio functionality
    document.getElementById("audio").style.display = "block";
    var audio = document.getElementById("audio");
    audio.controls = true;
    audio.style.pointerEvents = "auto";

    // Advanced features
    audio.style.transition = "border-color 0.5s ease-in-out, transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out, border-radius 0.5s ease-in-out";
    audio.style.borderRadius = "40px";
    audio.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

    // Random color changing border
    setInterval(function() {
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      audio.style.borderColor = randomColor;
      audio.style.borderStyle = "solid";
      audio.style.borderWidth = "4px";

      // Add a wave effect
      audio.style.transform = "translateX(10px)";
      setTimeout(function() {
        audio.style.transform = "translateX(-10px)";
        setTimeout(function() {
          audio.style.transform = "translateX(0px)";
        }, 200);
      }, 200);
    }, 1000); // Change color every 1 second
  }, 2000); // wait for 2 seconds
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.getElementById('name').addEventListener('input', function(e) {
  e.preventDefault();
  return false;
});

document.getElementById('name').addEventListener('keydown', function(e) {
  e.preventDefault();
  return false;
});

document.getElementById('name').addEventListener('focus', function(e) {
  this.readOnly = true;
});
