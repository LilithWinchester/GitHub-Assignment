// Simple backend-style validation for login form

function validateLogin(username, password) {
  if (!username || !password) {
    return "Username and password are required.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }

  // Here we would usually check the database
  return "OK"; // login data looks valid
}
