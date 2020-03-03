function stringToBoolean(str) {
  switch ((str || '').toLowerCase()) {
    case 'yes':
    case 'y':
    case '1':
    case 'true':
    case 't':
      return true;
    default:
    return false;
  }
}

function stringToInteger(str, defaultValue = 0) {
  return parseInt(str || `${defaultValue}`, 10);
}

module.exports = {
  toBoolean: stringToBoolean,
  toInt: stringToInteger,
};
