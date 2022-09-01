export const validateNumber = (number) => {
  const regex = /^[0-9]*$/;
  return regex.test(number);
};

export const validateEmptyField = (value) => {
  return value === null ||
    value === "" ||
    value === 0 ||
    value === undefined ||
    value === false
    ? true
    : false;
};
