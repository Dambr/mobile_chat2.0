function passwordVisible() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
(() => {
	document.getElementById("imgPasswordVisible").width = 30;
	document.getElementById("imgPasswordVisible").height = 30;
})();