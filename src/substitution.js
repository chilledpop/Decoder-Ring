// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length < 26) return false;
    
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const alphabetArray = alphabet.split("");
    
    const checkAlphabet = alphabetArray.filter((char, index, array) => array.indexOf(char) === index)
    if (checkAlphabet.length !== alphabetArray.length) return false;

    let translated = [];

    if (encode) {
      for (i=0; i < 26; i++) {
        translated[realAlphabet[i]] = alphabet[i];
      }
    }

    if(!encode) {
      for (i=0; i < 26; i++) {
        translated[alphabet[i]] = realAlphabet[i]
      }
    }

    return input.toLowerCase().split("").map((char) => {
      if (char === " ") return " ";
      return translated[char];
    }).join("")


  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
