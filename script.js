document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('heading').innerHTML = 'Hello Madhu';
        document.getElementById('heading').classList.add('loggedIn');
        document.getElementById('Madhu').src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXYgGq7a-kWpsDQUbIi1xfeWv7T05oMZrjFjkI7UwNF_BvB-e7uDe5xSoZyWrBwoIAjOxX9nsF8qxobrF9IBHWpa7EDhkANzF-iyUkIIG4DzEOX8X7fx2syENCv6AdZtWwufk8IxUPiJKsduAdGCc_c1xAsFy2xs50o9sNKdZXfbAEcuhMAr6-9ZPqB4Q0/s1600/paris-games-artistic-gymnastics-day-2-6753651837110526-la202124.gif';
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
        const nameField = document.getElementById('name');
        nameField.style.display = 'block';
        nameField.classList.add('animate');
        document.getElementById('subheading').style.display = 'block';
        document.getElementById('audio').style.fontFamily = 'initial';
        document.getElementById('audio').style.display = 'block';

        // Random color-changing border with wave effect
        setInterval(function() {
            const audio = document.getElementById("audio");
            audio.style.borderColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            audio.style.transform = "translateX(10px)";
            setTimeout(() => {
                audio.style.transform = "translateX(-10px)";
                setTimeout(() => {
                    audio.style.transform = "translateX(0)";
                }, 200);
            }, 200);
        }, 1000);
    }, 2000);
});

// Prevent context menu
document.addEventListener('contextmenu', event => event.preventDefault());
