// Filename: isluhn.spec.js  
// Timestamp: 2014.04.20-20:45:38 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
//
// http://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm

var isluhn = require('../isluhn');

describe("isluhn (valid)", function () {
  it("should return `true` for `378282246310005`", function () {
    expect( isluhn(378282246310005) ).toBe(true);
  });

  it("should return `true` for `371449635398431`", function () {
    expect( isluhn(371449635398431) ).toBe(true);
  });

  it("should return `true` for `378734493671000`", function () {
    expect( isluhn(378734493671000) ).toBe(true);	
  });

  it("should return `true` for `5610591081018250`", function () {
    expect( isluhn(5610591081018250) ).toBe(true);
  });

  it("should return `true` for `30569309025904`", function () {
    expect( isluhn(30569309025904) ).toBe(true);
  });

  it("should return `true` for `38520000023237`", function () {
    expect( isluhn(38520000023237) ).toBe(true);
  });

  it("should return `true` for `6011111111111117`", function () {
    expect( isluhn(6011111111111117) ).toBe(true);
  });

  it("should return `true` for `6011000990139424`", function () {
    expect( isluhn(6011000990139424) ).toBe(true);
  });

  it("should return `true` for `3530111333300000`", function () {
    expect( isluhn(3530111333300000) ).toBe(true);
  });

  it("should return `true` for `3566002020360505`", function () {
    expect( isluhn(3566002020360505) ).toBe(true);	
  });

  it("should return `true` for `5555555555554444`", function () {
    expect( isluhn(5555555555554444) ).toBe(true);
  });

  it("should return `true` for `5105105105105100`", function () {
    expect( isluhn(5105105105105100) ).toBe(true);
  });

  it("should return `true` for `4111111111111111`", function () {
    expect( isluhn(4111111111111111) ).toBe(true);
  });

  it("should return `true` for `4012888888881881`", function () {
    expect( isluhn(4012888888881881) ).toBe(true);
  });
});


describe("isluhn (invalid)", function () {
  it("should return `false` for `378282246310305`", function () {
    expect( isluhn(378282246310305) ).toBe(false);
  });

  it("should return `false` for `371449636398431`", function () {
    expect( isluhn(371449636398431) ).toBe(false);
  });

  it("should return `false` for `378764493671000`", function () {
    expect( isluhn(378764493671000) ).toBe(false);	
  });

  it("should return `false` for `5610591061018250`", function () {
    expect( isluhn(5610591061018250) ).toBe(false);
  });

  it("should return `false` for `30569306025904`", function () {
    expect( isluhn(30569306025904) ).toBe(false);
  });

  it("should return `false` for `38520600023237`", function () {
    expect( isluhn(38520600023237) ).toBe(false);
  });

  it("should return `false` for `6011116111111117`", function () {
    expect( isluhn(6011116111111117) ).toBe(false);
  });

  it("should return `false` for `6011000690139424`", function () {
    expect( isluhn(6011000690139424) ).toBe(false);
  });

  it("should return `false` for `3530111633300000`", function () {
    expect( isluhn(3530111633300000) ).toBe(false);
  });

  it("should return `false` for `3566002620360505`", function () {
    expect( isluhn(3566002620360505) ).toBe(false);	
  });

  it("should return `false` for `5555555655554444`", function () {
    expect( isluhn(5555555655554444) ).toBe(false);
  });

  it("should return `false` for `5105105605105100`", function () {
    expect( isluhn(5105105605105100) ).toBe(false);
  });

  it("should return `false` for `4111111611111111`", function () {
    expect( isluhn(4111111611111111) ).toBe(false);
  });

  it("should return `false` for `4012888688881881`", function () {
    expect( isluhn(4012888688881881) ).toBe(false);
  });

  it("should return `false` for `3530111333300001`", function () {
    expect( isluhn(3530111333300001) ).toBe(false);
  });

  it("should return `false` for `goober`", function () {
    expect( isluhn('goober') ).toBe(false);
  });

  it("should return `false` for ``", function () {
    expect( isluhn('') ).toBe(false);
  });

});
