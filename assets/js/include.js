document.addEventListener("DOMContentLoaded", () => {
  // Include header
  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-header").innerHTML = data;
    });

  // Include footer
  fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    });
});
