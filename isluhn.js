// Filename: isluhn.js  
// Timestamp: 2014.04.20-20:45:27 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
//
// http://en.wikipedia.org/wiki/Luhn_algorithm
// http://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm

var isluhn = ((typeof module === 'object') ? module : {}).exports = function (num, ca) {
  var numStr = String(num),
      len = numStr.length,
      sum = 0, 
      mul = 1;

  if (typeof num === 'number') {
    while (len--) {
      ca = parseInt(numStr.charAt(len), 10) * mul;

      if (ca > 9) {
        ca -= 9;
      }

      sum += ca;
      mul ^= 3; 
    };
  }

  return sum % 10 === 0 && sum > 0;
};
