const { expect } = require('chai');
const { fibonacci, isFibonnaci} = require('../src');
const _max = 350;

describe('fibonacci', () => {
    it('should get sequence...', () => {
        const result = fibonacci();
        expect(result).to.be.an('array');
    });
    it(`should get fibonacci sequence until it passes ${_max}`, () => {
        const result = fibonacci().slice(-1);
        expect(result[0]).to.be.lessThan(_max);
    });
});

describe('isFibonacci', () => {
    it('should return true when the number is a fibonacci', () => {
        const result = !fibonacci().map(isFibonnaci).includes(false);
        expect(result).to.be.true;
    });

    it('should return false when the number isn\'t a fibonacci', () => {
        const result = [4, 15, 33, 90, 2337].map(isFibonnaci).includes(true);
        expect(result).to.be.false;
    });
});