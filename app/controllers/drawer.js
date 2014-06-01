//navbar button
steroids.view.navigationBar.show("Menu");



var profileView = new steroids.views.WebView("/views/profile/index.html");
profileView.preload({},
  {
    onSuccess: showProfile
  }
);

function showProfile(){
  steroids.drawers.hide({
    center: profileView
  });
}



function showFriends(){
  var friendsView = new steroids.views.WebView("/views/friends/index.html");
  steroids.drawers.show(friendsView);
}
