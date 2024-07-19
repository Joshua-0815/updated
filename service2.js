/**
 * Filter function
 */

// Select all filter buttons and filter items
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

// Initialize the last clicked filter button to the first one
let lastClickedFilterBtn = filterBtns[0];

// Filter function
const filter = function () {
  // Remove 'active' class from the last clicked filter button
  lastClickedFilterBtn.classList.remove("active");
  // Add 'active' class to the current filter button
  this.classList.add("active");
  // Update last clicked filter button to current one
  lastClickedFilterBtn = this;

  // Loop through all filter items
  for (let i = 0; i < filterItems.length; i++) {
    // Check if the current filter button matches the filter item or if it's 'all'
    if (this.dataset.filterBtn === filterItems[i].dataset.filter || this.dataset.filterBtn === "all") {
      // Show matching items
      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
    } else {
      // Hide non-matching items
      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");
    }
  }
};

// Add event listeners to all filter buttons
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", filter);
});
