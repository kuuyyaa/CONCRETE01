window.addEventListener('load', function() {
    // Create a new Image object
    let bgImage = new Image();
    
    // Set the source of the image to match the background image
    bgImage.src = 'path/to/your/image.jpg'; // Replace with your image path

    // When the image is loaded, set the height of the jumbotron
    bgImage.onload = function() {
        // Get the height of the image
        let imgHeight = bgImage.height;

        // Set the height of the jumbotron to the height of the image
        document.getElementById('myJumbotron').style.height = imgHeight + 'px';
    }
});