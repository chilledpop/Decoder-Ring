// Write your tests here!
const expect = require("chai").expect
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if there is no given alphabet", () => {
        const input = "message";
        const actual = substitution(input);
    });

    it("should return false is the given alphabet isn't exactly 26 characters long", () => {
        const input = "message";
        const alphabet = "alphabet";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });

    it("should correctly translate the given phrase based on the given alphabet", () => {
        const input = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const expected = "ykrrpik";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should return false if there are any duplicate characters in the given alphabet", () => {
        const input = "message";
        const alphabet = "ppmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });

    it("should maintain spaces in the message", () => {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const input = "You";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });

})