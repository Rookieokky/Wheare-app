steroids.view.navigationBar.show("Profile");
  // Initialize the left drawer

  var leftDrawer = new steroids.views.WebView("/views/drawer/drawer.html");

  leftDrawer.preload({},{
    onSuccess: initGesture  // When the view has loaded, enable finger tracking/
  });

  function initGesture() {
    steroids.drawers.enableGesture(leftDrawer);
  }


// Helper functions

  function openDrawer() {
    steroids.drawers.show(leftDrawer);
  }

//navigation bar

//var button = new steroids.buttons.NavigationBarButton();
//button.title = "Back"
//button.onTap = function(){
//    var previousView = new steroids.views.WebView("/views/homefeed/index.html");
//    steroids.layers.pop(previousView);
//};

//steroids.view.navigationBar.setButtons({
//  left: [button],
//  overrideBackButton: true
//});
