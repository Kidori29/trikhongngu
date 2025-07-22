// assets/js/include.js
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('../../partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('include-header').innerHTML = data;
    });

  // Load footer
  fetch('../../partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('include-footer').innerHTML = data;
    });
});