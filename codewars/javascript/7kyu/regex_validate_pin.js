function validatePIN(pin) {
  let regex = /^([0-9]{4}|[0-9]{6})$/;
  if (pin.search(regex) === -1) return false;
  else return true;
}
