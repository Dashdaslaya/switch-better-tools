// Get references to the button and iframe
const openEshopButton = document.getElementById('openEshopButton');
const eshopIframe = document.getElementById('eshopIframe');

// Add an event listener to the button
openEshopButton.addEventListener('click', function () {
    // Toggle the iframe's visibility
    if (eshopIframe.style.display === 'none' || eshopIframe.style.display === '') {
        eshopIframe.style.display = 'block';
        // Set the iframe source (URL)
        eshopIframe.src = 'https://www.nintendo.com/';
    } else {
        eshopIframe.style.display = 'none';
        // Clear the iframe source to stop loading
        eshopIframe.src = '';
    }
});
