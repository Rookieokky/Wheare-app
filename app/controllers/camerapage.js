var button = new steroids.buttons.NavigationBarButton();
button.title = "Back"
button.onTap = function(){
    var nextView = new steroids.views.WebView("/views/profile/index.html");
    steroids.layers.pop(nextView);
};

steroids.view.navigationBar.setButtons({
  left: [button],
  overrideBackButton: true
});

//Get Picture
 checkForLocalhost();

    // Define our image and spinner elements and latest image URI
    var imgElement = null;
    var spinner = null;
    var latestURI = null;

    document.addEventListener("DOMContentLoaded", function(){
      imgElement = document.querySelector('#photo');
      spinner = document.querySelector('#spinner');
    });

    function showSpinner() {
      spinner.style.display = "block";
      imgElement.style.display = "none";
    }

    function showImage() {
      imgElement.style.display = "block";
      spinner.style.display = "none";
    }

    // Show the selected image
    function imageURIReceived(imageURI) {
      imgElement.src = latestURI = imageURI;
      showImage();
    }

    // Show the Base64-encoded image
    function imageDataReceived(imageData) {
      imgElement.src = latestURI = "data:image/jpeg;base64," + imageData;
      showImage();
    }

    // Camera failure callback
    function cameraError(message) {
      navigator.notification.alert('Cordova says: ' + message, null, 'Capturing the photo failed!');
      imgElement.src = latestURI;
      showImage();

      // If no previous image URI exists, hide the image element
      if (latestURI == null) {
        imgElement.style.display = "none";
      }
    }

    // Choose an image from the device's photo library, the callback receives the image's file URI
    function chooseImage() {
      checkForLocalhost();
      navigator.camera.getPicture(imageURIReceived, cameraError, { quality: 40,
        destinationType: navigator.camera.DestinationType.IMAGE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
        correctOrientation: true, // Let Cordova correct the picture orientation (WebViews don't read EXIF data properly)
        targetWidth: 1000,
        popoverOptions: { // iPad camera roll popover position
          width : 768,
          height : 190,
          arrowDir : Camera.PopoverArrowDirection.ARROW_UP
        }
      });
      showSpinner();
    }

    // Take a photo using the device's camera, the callback receives the image as a Base64-encoded string
    function capturePhoto() {
      navigator.camera.getPicture(imageURIReceived, cameraError, { quality: 40,
        destinationType: navigator.camera.DestinationType.IMAGE_URI,
        correctOrientation: true,
        targetWidth: 1000
       });
       showSpinner();
    }

    //local host
    function checkForLocalhost() {
      if (window.location.href.indexOf("http://localhost/cordova.js") == 0) {
        navigator.notification.alert("", null, "You're on localhost!")
      }
    }
