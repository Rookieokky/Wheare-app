steroids.view.navigationBar.show("Sign Up");

// initialize a profile page
function showProfile(){
  var webView = new steroids.views.WebView("/views/homepage/index.html");
  steroids.layers.push(webView);
}
//
