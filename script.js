document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // You can add your authentication logic here
  if (username === "keyboarder-57wuh" && password === "74ce7") {
    window.location.href = "https://deecoyz.github.io/keyboarding-games/";
  }
  if (username === "keyboarder-7lx7n" && password === "5b0ty") {
    window.location.href = "https://deecoyz.github.io/keyboarding-practice/";
  } 
  if (username === "keyboarder-q5x8s" && password === "4zw68") {
    window.location.href = "https://deecoyz.github.io/keyboarding-settings/";
  } else {
    document.getElementById("message").textContent = "Invalid credentials. Sign up for Keyboarding Practice now for only $4.99 a month.";
  }
});
