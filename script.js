// Ensure the DOM is fully loaded before executing script
$(document).ready(function() {

    // 1. Toggle Project Details
    const $projectDetails = $('#project-details');
    const $toggleButton = $('#toggle-details');

    $toggleButton.on('click', function() {
        // Toggle the visibility of the project details section
        $projectDetails.slideToggle(400, function() {
            // Change the button text based on the current visibility
            if ($projectDetails.is(':visible')) {
                $toggleButton.text('Hide Details');
            } else {
                $toggleButton.text('Show Details');
            }
        });
    });

    // 2. Reveal Contact Info (Security through Obscurity)
    const $contactSpan = $('#contact-info');
    const actualContact = 'youremail@example.com / +91-9876543210';

    $contactSpan.on('click', function() {
        if ($contactSpan.text() === 'Click to Reveal') {
            $contactSpan.text(actualContact);
            $contactSpan.css({
                'cursor': 'default',
                'color': '#2980b9',
                'font-weight': 'bold'
            });
        }
    });

    // Make the initial 'Click to Reveal' look like a link
    $contactSpan.css({
        'cursor': 'pointer',
        'text-decoration': 'underline'
    });

});