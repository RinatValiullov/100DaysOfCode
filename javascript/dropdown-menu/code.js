document.addEventListener("click", (event) => {
  const isDropDownButton = event.target.matches("[data-dropdown-button");

  if (!isDropDownButton && event.target.closest("[data-dropdown]") !== null) {
    // console.log("outside dropdown button and dropdown menu exists");
    return;
  }

  let currentDropdown;
  if (isDropDownButton) {
    currentDropdown = event.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) {
      return;
    }
    dropdown.classList.remove("active");
  });

  // console.log(isDropDownButton);
});
