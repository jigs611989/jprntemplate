const EMAIL_REGEX = /[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}/;

export const isValidEmail = (email: any) => {
  if (typeof email !== 'string') {
    return false;
  }
  return EMAIL_REGEX.test(email);
};

const Validator = {
  isValidEmail,
};

export default Validator;
