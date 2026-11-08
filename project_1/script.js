function playAudio() {
      var x = document.getElementById("myAudio");
      x.play();
    }
 function playAudioTwo() {
      var x = document.getElementById("HoverSound");
      x.play();
    }
 const sound = document.getElementById('HoverSound');

document.querySelectorAll('.sound-button, a').forEach(element => {
  element.addEventListener('mouseenter', () => {
    sound.currentTime = 0;
    sound.play();
  });
});

