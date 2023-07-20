document.addEventListener("DOMContentLoaded", function () {
    // Get the radio group and number of days field elements
    const radioGroup = document.querySelector('.cryptoradio-group');
    const customCryptoDurationField = document.querySelector('.custom-duration-field-stocks-crypto');
  
    // Add event listener to the radio group
    radioGroup.addEventListener('change', function () {
      // Check if the "Custom time duration" option is selected
      const customCryptoDurationOption = document.querySelector(
        'input[name="cryptomonitor"][value="cryptocustom-duration"]'
      );
      if (customCryptoDurationOption.checked) {
        // Show the number of days field
        customCryptoDurationField.classList.add('show');
      } else {
        // Hide the number of days field
        customCryptoDurationField.classList.remove('show');
      }
    });
  });
  