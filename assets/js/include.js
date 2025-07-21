document.addEventListener("DOMContentLoaded", () => {
  // Header
  fetch("partial/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("include-header").innerHTML = data;
    })
    .catch(error => console.error("Không load được header:", error));

  // Footer
  fetch("partials/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    })
    .catch(error => console.error("Không load được footer:", error));
});
