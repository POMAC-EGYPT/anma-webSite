export const specialCharacter =
  /^[áàâäæèéêëîïíôóœùûüúÿçñ¿ÁÀÂÄÆÈÉÊËÎÏÍÔÓŒÙÛÜÚŸÇÑ A-Za-z0-9-'%]*$/;
  export const allowedPhoneChar =
  /^[a-zA-Z0-9-_ _.+()]*$/;
  export const allowedSpaceChar =
  /^[_ _]*$/;
  export const FrenchSpanishChars =
  /^[áàâäæèéêëîïíôóœùûüúÿçñ¿ÁÀÂÄÆÈÉÊËÎÏÍÔÓŒÙÛÜÚŸÇÑ_ _]*$/;
export const allowedAlphanumericAndSpecialChar =
  /^[áàâäæèéêëîïíôóœùûüúÿçñ¿ÁÀÂÄÆÈÉÊËÎÏÍÔÓŒÙÛÜÚŸÇÑ A-Za-z0-9-_'&\\/|"_ ]*$/;
  export const allowedAlphanumericAndSpecialChars =
  /^[áàâäæèéêëîïíôóœùûüúÿçñ¿ÁÀÂÄÆÈÉÊËÎÏÍÔÓŒÙÛÜÚŸÇÑ A-Za-z0-9-_'&\\/|%!@#$^*()+,.]*$/;
export const allowedCharAndSymbol =
  /^[áàâäæèéêëîïíôóœùûüúÿçñÁÀÂÄÆÈÉÊËÎÏÍÔÓŒÙÛÜÚŸÇÑ¿ A-Za-z0-9-_'\\/|&_ ]*$/;

export const disAllowedSpecialChar = /[~!@#$%^*()+}{":?*-_&|\/]/;

export const allowedAlphanumeric = /^[a-zA-Z0-9]*$/;

export const allowedPostiveNumbersAnddecimal =
  /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/;

export const allowedPostiveIntegerNumbers = /^[1-9]\d*$/;

export const validWebsite =
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-zA-Z0-9]+(\.[a-zA-Z]{2,}){1,3}(#?\/?[a-zA-Z0-9#._=])*\/?(\?[a-zA-Z0-9-_]+[a-zA-Z0-9-%]+&?)?$/;

export const allowNumbersOnly = /^[0-9]*$/;

export const emailValid =
  /^([a-zA-Z0-9._-])+@[a-zA-Z0-9._-]+\.(?:[a-zA-Z0-9-]+)*$/;

  export const allowImageFile = /^[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/;

  //only letters
  export const onlyLetters= /[A-Za-z]/;

export const dateTime = [];
