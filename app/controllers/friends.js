steroids.view.navigationBar.show("Friends");

var backView = new steroids.views.WebView("/views/drawer/drawer.html");

backView.preload({},{
  onSuccess: backButton
});

function backButton(){
  steroids.layers.replace(backView);

}
