document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // hardcoded credentials
  const VALID_USERNAME = "sumanth";
  const VALID_PASSWORD = "sumanth@123";

  if (!username || !password) {
    alert("Enter username and password");
    return;
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    // store login flag
    sessionStorage.setItem(
      "photoUser",
      JSON.stringify({ user: username, ts: Date.now() })
    );

    // redirect on success
    location.href = "birthday.html";
  } else {
    alert("Invalid username or password");
  }
});

// If already logged in, redirect to birthday page
try {
  const s = sessionStorage.getItem("photoUser");
  if (s && (location.pathname.endsWith("index.html") || location.pathname.endsWith("/"))) {
    location.href = "birthday.html";
  }
} catch (e) {}
