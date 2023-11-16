document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // You can add your authentication logic here
  if (username === "incremental-mass-rewritten" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-games/";
  }
  if (username === "really-gci" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-practice/";
  } 
  if (username === "calculator-evolution" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-settings/";
  } 
  if (username === "luck-incremental" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-stats/";
  }
  if (username === "stonemental" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-summary/";
  } 
  if (username === "universal-time" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-info/";
  } 
  if (username === "retro-bowl" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-class-game1/";
  }
  if (username === "ifm" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-class-homerow/";
  }
  if (username === "omega-layers" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-practice-pace/";
  }
  if (username === "universe-shrinker" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-class-test/";
  }
  if (username === "yamg" && password === "2012") {
    window.location.href = "https://deecoyz.github.io/keyboarding-class-test2/";
  }
  if (username === "metallic" && password === "2012") {
    window.location.href = "https://metallic.zc.al/";
  }
  else {
    document.getElementById("message").textContent = "Invalid credentials. Sign up for Keyboarding Practice now for only $9.99 a year!";
  }
});
