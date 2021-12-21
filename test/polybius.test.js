// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    describe("encoding", () => {
        it("should return a string consisting of numbers that are translated from the message", () => {
            const input = "hello";
            const expected = "3251131343";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces", () => {
            const input = "hello world";
            const expected = "3251131343 2543241341";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters", () => {
            const input = "Hello World";
            const expected = "3251131343 2543241341";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });

        it("should return the same value for both 'i' and 'j'", () => {
            const input = "junior";
            const expected = "425433424324";
            const actual = polybius(input);
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding", () => {
        it("should return a string given a string of number coordinates", () => {
            const input = "3251131343";
            const expected = "hello";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces", () => {
            const input = "3251131343 2543241341";
            const expected = "hello world";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });

        it("should return i/j if the value 42 is given", () => {
            const input = "425433424324";
            const expected = "i/juni/jor";
            const actual = polybius(input, false);
            expect(actual).to.equal(expected);
        });

        it("should return false if the total numbers are odd", () => {
            const input = "285";
            const actual = polybius(input, false);
            expect(actual).to.be.false;
        });
    })
})