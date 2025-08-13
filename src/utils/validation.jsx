export const checkvalidData = (email, password, name = null) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is invalid.";
  if (!isPasswordValid) return "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";

  if (name !== null) {
    const isNameValid = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);
    if (!isNameValid) return "Entered name is invalid.";
  }

  return null;
};
