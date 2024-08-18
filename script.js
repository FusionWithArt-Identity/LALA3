document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const correctPassword = '12345';
    if (password === correctPassword) {
        document.getElementById('heading').innerHTML = 'Hello Madhu';
        document.getElementById('heading').classList.add('loggedIn');
        document.getElementById('Madhu').src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXYgGq7a-kWpsDQUbIi1xfeWv7T05oMZrjFjkI7UwNF_BvB-e7uDe5xSoZyWrBwoIAjOxX9nsF8qxobrF9IBHWpa7EDhkANzF-iyUkIIG4DzEOX8X7fx2syENCv6AdZtWwufk8IxUPiJKsduAdGCc_c1xAsFy2xs50o9sNKdZXfbAEcuhMAr6-9ZPqB4Q0/s1600/paris-games-artistic-gymnastics-day-2-6753651837110526-la202124.gif';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
        document.getElementById('name').classList.add('animate');
        document.getElementById('subheading').style.display = 'block';
    } else {
        alert('Incorrect... Write Your Exact Name as You Provided While Ordering This Printed T-Shirt!');
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});