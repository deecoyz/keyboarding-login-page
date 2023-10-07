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
  } 
  if (username === "keyboarder-y04eg" && password === "o4o1u") {
    window.location.href = "https://deecoyz.github.io/keyboarding-stats/";
  }
  if (username === "keyboarder-vb1ot" && password === "7xchz") {
    window.location.href = "https://deecoyz.github.io/keyboarding-summary/";
  } 
  if (username === "keyboarder-6sp0d" && password === "i21hp") {
    window.location.href = "https://deecoyz.github.io/keyboarding-info/";
  } else {
    document.getElementById("message").textContent = "Invalid credentials. Sign up for Keyboarding Practice now for only $9.99 a year!";
  }
});
