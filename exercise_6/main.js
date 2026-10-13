document.addEventListener("DOMContentLoaded", function () {

  const elements = document.querySelectorAll('.burst-8');
  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      this.classList.toggle('play');
    });
  });

  const toggleButton = document.getElementById('btn');
  toggleButton.addEventListener('click', function() {
    elements.forEach(function(element) {
      element.classList.toggle('play');
    });
  });

});
