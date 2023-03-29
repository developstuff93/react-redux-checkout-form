export const isRequired = (value) => (value ? undefined : "Required");
export const isEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
  
export const validateExpiration = (value) => {
  const [month, year] = value.split("/");
  if (!Number(month) || Number(month) > 12) return "Invalid Month";
  if (new Date(`20${year}`, Number(month) - 1) < new Date())
    return "Should be in the future";
  return undefined;
};

export const normalizeCVV = (value) => {
  const numbers = value.replace(/[^\d]/g, "");
  return numbers.slice(0, 4);
};

export const normalizeZipCode = (value, previousValue) => {
  if (!value) {
    return value;
  }
  const numbers = value.replace(/[^\d]/g, "");
  if (!previousValue || value.length > previousValue.length) {
    return numbers.length < 5
      ? numbers
      : `${numbers.slice(0, 5)}-${numbers.slice(5, 9)}`;
  }

  return numbers.length <= 5
    ? numbers
    : `${numbers.slice(0, 5)}-${numbers.slice(5, 9)}`;
};

export const normalizeExpiration = (value, previousValue) => {
  if (!value) {
    return value;
  }
  const numbers = value.replace(/[^\d]/g, "");
  if (!previousValue || value.length > previousValue.length) {
    return numbers.length < 2
      ? numbers
      : `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
  }

  return numbers.length <= 2
    ? numbers
    : `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
};

export const normalizeCardNumber = (value) => {
  const numbers = value.replace(/[^\d]/g, "").slice(0, 19);
  return numbers;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const currencyFormatter = formatter.format;
