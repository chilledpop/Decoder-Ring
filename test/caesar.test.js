// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe ("caesar", () => {
    describe ("errors", () => {
        it("should return false if the shift value is 0", () => {
            const input = "encode this"
            const shift = 0;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        });

        it("should return false if the shift value is below -25", () => {
            const input = "encode this"
            const shift = -26;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        });

        it("should return false if the shift value is above 25", () => {
            const input = "encode this"
            const shift = 26;
            const actual = caesar(input, shift);
            expect(actual).to.be.false;
        });

        it("should return false if the shift value doesn't exist", () => {
            const input = "encode this";
            const actual = caesar(input);
            expect(actual).to.be.false;
        });
    });

    describe("encoding", () => {
        it("should shift the letters by the given value", () => {
            const input = "thinkful";
            const shift = 3;
            const expected = "wklqnixo";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and nonalphabetic symbols throughout the message", () => {
            const input = "here it is!";
            const shift = 4;
            const expected = "livi mx mw!";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const input = "Here it is!";
            const shift = 4;
            const expected = "livi mx mw!";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should loop around back to the front of the alphabet if a letter is shifted off the alphabet", () => {
            const input = "you and a xylophone";
            const shift = 4;
            const expected = "csy erh e bcpstlsri";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });

        it("should shift backward in the alphabet if the shift value is negative", () => {
            const input = "thinkful";
            const shift = -3;
            const expected = "qefkhcri";
            const actual = caesar(input, shift);
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding", () => {
        it("should decode the message by shifting the letters in the opposite direction of the shift value", () => {
            const input = "wklqnixo";
            const shift = 3;
            const expected = "thinkful";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and nonalphabetic symbols throughout the message", () => {
            const input = "bpqa qa i amkzmb umaaiom!";
            const shift = 8;
            const expected = "this is a secret message!";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const input = "BPQA qa I amkzmb umaaiom!";
            const shift = 8;
            const expected = "this is a secret message!";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        });

        it("should loop around back to the front of the alphabet if a letter is shifted off the alphabet", () => {
            const input = "csy erh e bcpstlsri";
            const shift = 4;
            const expected = "you and a xylophone";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        });

        it("should shift in the opposite direction in the alphabet if the shift value is negative", () => {
            const input = "abzlab qefp";
            const shift = -3;
            const expected = "decode this";
            const actual = caesar(input, shift, false);
            expect(actual).to.equal(expected);
        });
    });
})