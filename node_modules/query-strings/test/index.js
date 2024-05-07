const { expect } = require('chai');
const { queryString } = require('../index.js');

describe('queryString function', () => {
    it('should add query parameters to the URL', () => {
        const url = 'https://your-domain-name.com/path';
        const params = {
            param1: 'value1',
            param2: 'value2'
        };
        const result = queryString(url, params);
        expect(result).to.equal('https://your-domain-name.com/path?param1=value1&param2=value2');
    });

    it('should handle URLs with existing query strings', () => {
        const url = 'https://your-domain-name.com/path?existingParam=123';
        const params = {
            newParam: 'newValue'
        };
        const result = queryString(url, params);
        expect(result).to.equal('https://your-domain-name.com/path?existingParam=123&newParam=newValue');
    });

    it('should handle URL without query parameters', () => {
        const url = 'https://your-domain-name.com/path';
        const params = {
            param: 'value'
        };
        const result = queryString(url, params);
        expect(result).to.equal('https://your-domain-name.com/path?param=value');
    });

    it('should return an Error for an invalid URL', () => {
        const url = 'invalidurl';
        const params = {
            param: 'value'
        };
        const result = queryString(url, params);
        expect(result).to.be.an('error');
        expect(result.message).to.equal('Invalid URL!');
    });

    it('should return an Error when URL is empty', () => {
        const url = '';
        const params = {
            param: 'value'
        };
        const result = queryString(url, params);
        expect(result).to.be.an('error');
        expect(result.message).to.equal('Invalid URL!');
    });
});
