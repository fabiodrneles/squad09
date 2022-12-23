export const validateEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

export const validatePassword = new RegExp("^(?=.*?[0-9]).{5,}$")