const validateName = (name: string) => {
  return name.length > 2;
};

const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
};

const validatePassword = (password: string) => {
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
};

const validateConfirmPassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};
