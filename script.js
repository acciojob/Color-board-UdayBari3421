document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  // Create 800 boxes
  for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("square");

    // Add event listener for hover effect
    box.addEventListener("mouseover", function () {
      // Change color on hover
      box.style.backgroundColor = "rgb(255,25,255)";
    });

    // Add event listener for smooth transition after 1 second
    box.addEventListener("mouseleave", function () {
      setTimeout(() => {
        box.style.backgroundColor = "#3498db";
      }, 1000);
    });

    container.appendChild(box);
  }
});
