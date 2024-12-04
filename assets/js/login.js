document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input");
  
    inputs.forEach(input => {
      // Handle focus
      input.addEventListener("focus", () => {
        input.placeholder = "";  // Remove placeholder when focused
      });
  
      // Handle blur (when the input loses focus)
      input.addEventListener("blur", () => {
        if (input.value === "") {
          input.placeholder = " ";  // Restore placeholder if the input is empty
        }
      });
    });
  });
  



  document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.custom-dropdown');
    const dropdownSelected = dropdown.querySelector('.dropdown-selected');
    const dropdownOptions = dropdown.querySelector('.dropdown-options');
    const hiddenInput = document.querySelector('#role');
  
    // Toggle dropdown when the selected item is clicked
    dropdownSelected.addEventListener('click', (event) => {
      // Prevent event from bubbling up to document
      event.stopPropagation();
      dropdown.classList.toggle('open');
    });
  
    // Select an option from the dropdown
    dropdownOptions.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        const selectedValue = event.target.dataset.value;
        const selectedText = event.target.textContent;
  
        // Update the display of the selected item
        dropdownSelected.textContent = selectedText;
  
        // Set the hidden input value to the selected option
        hiddenInput.value = selectedValue;
  
        // Close the dropdown
        dropdown.classList.remove('open');
      }
    });
  
    // Close dropdown if clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.custom-dropdown')) {
        dropdown.classList.remove('open');
      }
    });
  });
  