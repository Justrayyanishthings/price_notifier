document.addEventListener("DOMContentLoaded", function () {
    // Get all the heading links
    
  
    /////////////////logo carousel//////////////
    const formContainer = document.querySelector('.form-container');
    const logoImages = document.querySelectorAll('.logo-image img');
  
    function handleLogoSelection(event) {
      const selectedImage = event.target.closest('.logo-image');
      const logoImages = document.querySelectorAll('.logo-image');
  
      logoImages.forEach((image) => {
        image.classList.remove('selected');
      });
  
      selectedImage.classList.add('selected');
  
      // Clear previously added classes
      formContainer.className = 'form-container';
  
      // Apply specific styles based on the selected logo
      if (selectedImage) {
        const logoId = selectedImage.getAttribute('data-logo-id');
        formContainer.classList.add(`logo-${logoId}`);
      }
    }
  
    // Attach click event listener to logo images
    logoImages.forEach((image) => {
      image.addEventListener('click', handleLogoSelection);
    });
  
    /////////////// Button and Section Functionality ///////////////
  
    const changeLogoButton = document.getElementById('hide-logo');
    const logoSection = document.getElementById('logo-section');
  
    // Hide the change logo button initially
    changeLogoButton.style.display = 'none';
  
    // Function to show the change logo button and hide the logo section
    function showChangeLogoButton() {
      changeLogoButton.style.display = 'flex';
      logoSection.style.display = 'none';
    }
  
    // Function to show the logo section and hide the change logo button
    function showLogoSection() {
      changeLogoButton.style.display = 'none';
      logoSection.style.display = 'block';
    }
  
    // Attach click event listener to the change logo button
    changeLogoButton.addEventListener('click', showLogoSection);
  
    //////////////////changes according to image selected///////////////////
    // Get the form element
    var form = $('.form-section');
    var labeltext = $('label');
    var buttons = $('.radio-group span');
    var submitbutton = $('.submit-button');
    var changewebsite = $('.change-logo-button');//for changeing logo button
    var logoheading= $('.logo-heading');
  
    // Create the top middle image element
    var topMiddleImage = $('<div class="top-middle-image"></div>');
    var hiddenimagelogo = document.getElementById("top-hidden-logo");
  
    function showImage(imagePath) {
      hiddenimagelogo.innerHTML = '';
      var img = $('<img>').attr('src', imagePath).addClass('top-middle-image');
      hiddenimagelogo.appendChild(img[0]);
    }
  
    topMiddleImage.hide(); // Hide the top middle image initially
    form.find('.form-section').append(topMiddleImage);
  
    // Function to handle logo image click event
    $('.logo-image').click(function () {
      // Get the data-logo-id attribute value
      var logoId = $(this).data('logo-id');
  
      // Update the form based on the selected logo
      if (logoId === 'amazon') {
        // Update the form for Amazon logo
        form.css('background-color', '#131921');
        form.css('border', '5px solid orange');
        labeltext.css('color', '#ea9533');
        buttons.css('background-color', '#ea9533');
        buttons.css('color', '#131921');
        buttons.css('border', 'none');
        submitbutton.css('background-color', '#ea9533');
        submitbutton.css('color', '#121921');
        logoheading.css('color','#ffffff');
    
        showChangeLogoButton()
        // Set the image path for Amazon logo
        var imagePath = './images/amazon-round-circle-logo-symbol-button-19641.png';
        showImage(imagePath);
      } else if (logoId === 'flipkart') {
        // Update the form for Flipkart logo
        form.css('background-color', '#0076f8');
        form.css('border', '5px solid #fae700');
        buttons.css('background-color', '#fae700');
        buttons.css('color', '#0076f8');
        buttons.css('border', 'none');
        submitbutton.css('background-color', '#fae700');
        submitbutton.css('color', '#0076f8');
        labeltext.css('color', '#fae700');
        showChangeLogoButton()
        // Set the image path for Flipkart logo
        var imagePath = './images/[CITYPNG.COM]HD Flipkart Round Logo Icon Transparent PNG - 2968x3114.png';
        showImage(imagePath);
      } else if (logoId === 'nykaa') {
        // Update the form for Nykaa logo
        form.css('border', '5px solid #ffffff');
        buttons.css('background-color', '#ffffff');
        buttons.css('color', '#fc2678');
        buttons.css('border', 'none');
        submitbutton.css('background-color', '#ffffff');
        submitbutton.css('color', '#fc2678');
        form.css('background-color', '#fc2678');
        labeltext.css('color', '#ffffff');
        showChangeLogoButton()
        // Set the image path for Nykaa logo
        var imagePath = './images/nykaapnground.png';
        showImage(imagePath);
      } else if (logoId === 'shopclues') {
        // Update the form for Shopclues logo
        form.css('background-color', '#17a2b3');
        labeltext.css('color', '#fdfefe');
        form.css('border', '5px solid #ffffff');
        buttons.css('background-color', '#ffffff');
        buttons.css('color', '#17a2b3');
        buttons.css('border', 'none');
        submitbutton.css('background-color', '#ffffff');
        submitbutton.css('color', '#17a2b3');
        showChangeLogoButton()
        // Set the image path for Shopclues logo
        var imagePath = './images/1220307_shopclues_icon.png';
        showImage(imagePath);
      } else if (logoId === 'snapdeal') {
        // Update the form for Snapdeal logo
        form.css('background-color', '#e40046');
        labeltext.css('color', '#ffffff');
        form.css('border', '5px solid #ffffff');
        buttons.css('background-color', '#ffffff');
        buttons.css('color', '#e40046');
        buttons.css('border', 'none');
        submitbutton.css('background-color', '#ffffff');
        submitbutton.css('color', '#e40046');
        showChangeLogoButton()
        // Set the image path for Snapdeal logo
        var imagePath = './images/snapdeal-logo-35C2DB3916-seeklogo.com.png';
        showImage(imagePath);
      }
      //path for hidden logo
      topMiddleImage.html('<img class="top-middle-image" src="' + imagePath + '" alt="Logo">'); var formWidth = form.outerWidth();
      var imageWidth = topMiddleImage.find('img').outerWidth();
      var offsetLeft = (formWidth / 2) - (imageWidth / 2);
  
      // Position the image at the top middle of the form
      topMiddleImage.css({
        position: 'absolute',
        top: 0,
        left: offsetLeft
      });
  
      // Scroll the form to the top middle
      $('html, body').animate({
        scrollTop: form.offset().top - ($(window).height() / 2) + (form.height() / 2)
      }, 500);
  
      // Show the top middle image
      topMiddleImage.show();
    });
   //radio button
   const radioButtons = document.querySelectorAll('.radio-group input[type="radio"]');
   const customDurationField = document.querySelector('.custom-duration-field');
 
   radioButtons.forEach((radio) => {
     radio.addEventListener('change', () => {
       radioButtons.forEach((otherRadio) => {
         otherRadio.parentElement.querySelector('span').classList.remove('selected');
       });
 
       radio.parentElement.querySelector('span').classList.add('selected');
 
       if (radio.value === 'custom-duration') {
         console.log("customselected")
         customDurationField.style.display = 'block';
       } else {
         customDurationField.style.display = 'none';
       }
     });
   });



    // Lock and fade submit button until all form fields are filled
    $(document).ready(function () {
      // Get all the form fields
      var formFields = $('.form-section input, .form-section textarea');
  
      // Disable the submit button initially
      submitbutton.attr('disabled', 'disabled');
      submitbutton.addClass('disabled');
  
      // Check form fields on keyup event
      formFields.keyup(function () {
        // Check if all form fields are filled
        var allFieldsFilled = true;
        formFields.each(function () {
          if ($(this).val() === '') {
            allFieldsFilled = false;
            return false; // Exit the loop if a field is empty
          }
        });
  
        // Enable or disable the submit button based on the form fields
        if (allFieldsFilled) {
          submitbutton.removeAttr('disabled');
          submitbutton.removeClass('disabled');
        } else {
          submitbutton.attr('disabled', 'disabled');
          submitbutton.addClass('disabled');
        }
      });
    });
      
})
  