


jQuery(document).ready(function($){

    // multistep form step
    // step one
    $('.yglblk-next-btn.next-two').click(function(){

        $('.yglblk-form-step-one').addClass('disable');
        $('.yglblk-form-step-two').addClass('enable');
        $('.yglblk-header-step.step-two').addClass('active');

    });


    // step two
    $('.yglblk-prev-btn.back-one').click(function(){

        $('.yglblk-form-step-one').removeClass('disable');
        $('.yglblk-form-step-two').removeClass('enable');
        $('.yglblk-header-step.step-two').removeClass('active');
    });

    $('.yglblk-next-btn.next-three').click(function(){

        $('.yglblk-form-step-two').removeClass('enable');
        $('.yglblk-form-step-three').addClass('enable');
        $('.yglblk-header-step.step-three').addClass('active');
    });

    // step three
    $('.yglblk-prev-btn.back-two').click(function(){
        $('.yglblk-form-step-three').removeClass('enable');
        $('.yglblk-form-step-two').addClass('enable');
        $('.yglblk-header-step.step-three').removeClass('active');
    });


});





// File Upload Preview, Loading and uploaded file remover
jQuery(document).ready(function ($) {

     // flatpkr
    var optional_config = {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
      };
  
      $(".datepkr").flatpickr(optional_config);

    $('.file-input').on('change', function () {

        var fileInput = $(this);
        var file = fileInput.prop('files')[0];

        // Get related elements based on the current file input
        var container = fileInput.closest('.yglblk-single-file-upload');
        var loader = container.find('.file-loader');
        var fileDetails = container.find('.file-details');
        var fileMeta = container.find('.file-meta');
        var fileDetailsWrapper = container.find('.file-upload-details');
        var fileName = fileDetails.find('.file-name');
        var fileSize = fileDetails.find('.file-size');
        var imagePreview = fileDetails.find('.image-preview');
        var fileTypeHint = fileDetailsWrapper.find('.file-type-hint');
        var removeBtn = fileDetailsWrapper.find('.file-remove-btn');

        // Check if the file type is allowed
        var allowedTypes = ['pdf', 'jpg', 'jpeg', 'png', 'tiff', 'mov', 'mp4', 'heic'];
        var fileType = file.type.split('/')[1].toLowerCase();


        if (allowedTypes.includes(fileType)) {
            // Display loader
            loader.removeClass('hidden');

            // Simulate file upload delay (you can replace this with actual upload logic)
            setTimeout(function () {
                // Hide loader
                loader.addClass('hidden');

                // Display file details
                fileDetails.removeClass('hidden');
                fileMeta.removeClass('hidden');
                fileName.text('File Name: ' + file.name);
                fileSize.text('File Size: ' + formatBytes(file.size));

                // Display image preview if it's an image file
                if (file.type.startsWith('image/')) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        imagePreview.attr('src', e.target.result);
                        imagePreview.removeClass('hidden');
                        removeBtn.removeClass('hidden');
                    };
                    reader.readAsDataURL(file);
                }

            }, 2000); // Replace 2000 with the actual time it takes to upload the file
        } else {
            // Display file type hint message
            fileTypeHint.text('Invalid file type. Allowed types: ' + allowedTypes.join(', '));

            // Reset file input
            fileInput.val('');

            // Hide file details and image preview
            fileDetails.removeClass('hidden');
            imagePreview.attr('src', '').addClass('hidden');
            removeBtn.removeClass('hidden');
        }
    });

    $('.file-input.style-two').on('change', function () {

        var fileInput = $(this);
        var file = fileInput.prop('files')[0];

        // Get related elements based on the current file input
        var container = fileInput.closest('.yglblk-single-file-upload');
        var loader = container.find('.file-loader');
        var fileDetails = container.find('.file-details');
        var fileMeta = container.find('.file-meta');
        var fileDetailsWrapper = container.find('.file-upload-details');
        var fileName = fileDetails.find('.file-name');
        var fileSize = fileDetails.find('.file-size');
        var imagePreview = fileDetails.find('.image-preview');
        var fileTypeHint = fileDetailsWrapper.find('.file-type-hint');
        var removeBtn = fileDetailsWrapper.find('.file-remove-btn');

        // Check if the file type is allowed
        var allowedTypes = ['pdf', 'jpg', 'jpeg', 'png', 'tiff', 'mov', 'mp4', 'heic'];
        var fileType = file.type.split('/')[1].toLowerCase();


        if (allowedTypes.includes(fileType)) {
            // Display loader
            loader.removeClass('hidden');

            // Simulate file upload delay (you can replace this with actual upload logic)
            setTimeout(function () {
                // Hide loader
                loader.addClass('hidden');

                // Display file details
                fileDetails.removeClass('hidden');
                fileMeta.removeClass('hidden');
                fileName.text('File Name: ' + file.name);
                fileSize.text('File Size: ' + formatBytes(file.size));

                // Display image preview if it's an image file
                if (file.type.startsWith('image/')) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        imagePreview.attr('src', e.target.result);
                        imagePreview.removeClass('hidden');
                        removeBtn.removeClass('hidden');
                    };
                    reader.readAsDataURL(file);
                }

            }, 0); // Replace 2000 with the actual time it takes to upload the file
        } else {
            // Display file type hint message
            fileTypeHint.text('Invalid file type. Allowed types: ' + allowedTypes.join(', '));

            // Reset file input
            fileInput.val('');

            // Hide file details and image preview
            fileDetails.removeClass('hidden');
            imagePreview.attr('src', '').addClass('hidden');
            removeBtn.removeClass('hidden');
        }
    });

    $('.file-remove-btn').on('click', function (e) {

        e.preventDefault();
        var container = $(this).closest('.yglblk-single-file-upload');
        var fileInput = container.find('.file-input');
        var fileDetails = container.find('.file-details');
        var fileMeta = container.find('.file-meta');
        var fileDetailsWrapper = container.find('.file-upload-details');
        var imagePreview = fileDetails.find('.image-preview');
        var fileTypeHint = fileDetailsWrapper.find('.file-type-hint');
        var removeBtn = fileDetailsWrapper.find('.file-remove-btn');

        // Reset file input
        fileInput.val('');

        // Hide file details, image preview, file type hint, and remove button
        removeBtn.addClass('hidden');
        fileMeta.addClass('hidden');
        fileDetails.addClass('hidden');
        imagePreview.attr('src', '').addClass('hidden');
        fileTypeHint.text('');
        
    });

});

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}





$(document).ready(function () {

// File upload enable disable switch toggle
    $('.radio-option').change(function () {

        var radioInput = $(this);
        var switchContainer = radioInput.closest('.ylgblk-file-switcher');
        var fileUploader = switchContainer.find('.yglblk-single-file-upload');
        var switchBlock = switchContainer.find('.switched-block');
        
        if( radioInput.val() == 'yes'){

            fileUploader.removeClass('hidden');
            switchBlock.removeClass('hidden');

        }else {
            fileUploader.addClass('hidden');
            switchBlock.addClass('hidden');
        }

    });


    // File upload enable disable switch toggle
    $('.radio-option.radio-style-two').change(function () {

        var radioInput = $(this);
        var switchContainer = radioInput.closest('.ylgblk-file-switcher');
        var fileUploader = switchContainer.find('.yglblk-single-file-upload');
        var switchBlock = switchContainer.find('.switched-block');
        
        if( radioInput.val() == 'yes'){

            switchBlock.addClass('hidden');

        }else {
            switchBlock.removeClass('hidden');
        }

    });

// File Upload Enable disable checkbox

$('#obi-study-certificate').on('change', function () {
    // If the checkbox is checked, show the div; otherwise, hide it
    if ($(this).is(':checked')) {
        $('.academic-certificate-uploader').removeClass('hidden');
    } else {
        $('.academic-certificate-uploader').addClass('hidden');
    }
});


// File Upload Enable disable checkbox

$('#obi-bs-addr-diff').on('change', function () {
    // If the checkbox is checked, show the div; otherwise, hide it
    if ($(this).is(':checked')) {
        $('.obi-diff-addresses-uploader').removeClass('hidden');
    } else {
        $('.obi-diff-addresses-uploader').addClass('hidden');
    }
});


// Checkout Form Accordion
$('.accordion-toggle-btn').click(function(){
    $('.accordion-text').slideToggle(300);
});




// Service Checkout


$('.service-items').click(function(){
    $('.service-area').addClass('hidden');
});

$('.service-capital-statement').click(function(){
    $('.checkout-capital-statement').removeClass('hidden')
});

$('.service-open-business-incometax').click(function(){
    $('.checkout-open-business-incometax').removeClass('hidden')
});
$('.service-annual-report').click(function(){
    $('.checkout-annual-report').removeClass('hidden')
});

$('.service-withholding-tax').click(function(){
    $('.checkout-withholding-tax').removeClass('hidden')
});

$('.service-change-business-name').click(function(){
    $('.checkout-change-business-address').removeClass('hidden')
});

$('.service-declaration-turnover-vat').click(function(){
    $('.checkout-declaration-turnover-vat').removeClass('hidden')
});

$('.service-change-business-address').click(function(){
    $('.checkout-change-business-address').removeClass('hidden')
});

$('.service-up-incometax-advance').click(function(){
    $('.checkout-update-cancel-incometax-advance').removeClass('hidden')
});

$('.service-close-vat-tax-case').click(function(){
    $('.checkout-closing-vat-incometax').removeClass('hidden')
});

$('.service-national-ins-case').click(function(){
    $('.checkout-national-insurance-case').removeClass('hidden')
});

$('.service-expected-payments').click(function(){
    $('.checkout-expected-payments-2024').removeClass('hidden')
});



});



