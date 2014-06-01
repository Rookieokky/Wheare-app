steroids.view.navigationBar.show("Home");
  // Initialize the left drawer

  var leftDrawer = new steroids.views.WebView("/views/drawer/drawer.html");

  leftDrawer.preload({},{
    onSuccess: initGesture  // When the view has loaded, enable finger tracking
  });

  function initGesture() {
    steroids.drawers.enableGesture(leftDrawer);
  }


  // Helper functions

  function openDrawer() {
    steroids.drawers.show(leftDrawer);
  }

//Navigation Button
var button = new steroids.buttons.NavigationBarButton();
button.title = "Back"
button.onTap = function(){
  var previousView  = new steroids.views.WebView("/views/login/index.html");
    steroids.layers.push(previousView);
};

steroids.view.navigationBar.setButtons({
  left: [button],
  overrideBackButton: true
});

//right Button
var rightButton = new steroids.buttons.NavigationBarButton();
    rightButton.title = "Next"
    rightButton.onTap = function(){
      var nextView = new steroids.views.WebView("/views/profile/index.html");
      steroids.layers.push(nextView);
    };


  steroids.view.navigationBar.setButtons({
    right: [rightButton]
  });
