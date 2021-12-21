// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    if (encode === false) shift = shift * -1;

    let inputArray = input.toLowerCase().split("");

    let result = inputArray.map((character) => {
      let charNum = character.charCodeAt();
      if (charNum < 97 || charNum > 122) return String.fromCharCode(charNum);
      let shifted = charNum + shift;
      if (shifted < 97) shifted += 26;
      if (shifted > 122) shifted -= 26;
      return String.fromCharCode(shifted);
    });    

    return result.join("");

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

