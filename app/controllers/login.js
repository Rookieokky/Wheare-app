steroids.view.navigationBar.show("Log In");

function showHome(){
  var webView = new steroids.views.WebView("/views/homefeed/index.html");
  steroids.layers.push(webView);
}


var signUpView = new steroids.views.WebView("/views/signup/index.html");
    signUpView.preload();

function showSignUp(){
    steroids.layers.push(signUpView);
}
