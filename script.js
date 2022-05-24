let i = 0;
let typewriter = document.querySelector('.typewriter');
let msg = 'Lorem ipsum dolor sit adipisicing elit.';

document.addEventListener('DOMContentLoaded', function typewriter() {
  if (i < msg.length) {
    document.querySelector('.typewriter').innerHTML += msg.charAt(i);
    i++;
  }
  setTimeout(typewriter, 80);
});

setInterval(function () {
  let txt = document.getElementById('blink');
  txt.style.visibility = txt.style.visibility == 'hidden' ? '' : 'hidden';
}, 500);
