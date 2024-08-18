
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('heading').innerHTML = 'Hello Madhu';
    document.getElementById('heading').classList.add('loggedIn');
    document.getElementById('Madhu').src = 'https://img.freepik.com/free-photo/2d-graphic-wallpaper-with-colorful-grainy-gradients_23-2151001557.jpg?t=st=1723460589~exp=1723464189~hmac=ae0f6526d69e0640563439b0cbf56f38f247685fde8d4452e81c60b122068af6&w=360';
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('protected-content').style.display = 'block';
    document.getElementById('name').classList.add('animate');
    document.getElementById('subheading').style.display = 'block';
  }, 2000); // 2 seconds
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});
