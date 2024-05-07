'use strict';

const { isUrl } = require('check-valid-url');

/**
 * Add a query string parameter to the URL
 * @param   {string}   url     The URL to modify
 * @param   {object}   params  Object containing query parameters to add
 * @returns {string|Error}     URL with added query parameters or an Error if the URL is invalid
 */
module.exports.queryString = function (url, params) {
    const uri = (url || '').trim();

    if (isUrl(uri)) {
        const queryString = Object.keys(params).map(key => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
        }).join('&');

        return `${uri}${uri.includes('?') ? '&' : '?'}${queryString}`;
    } else {
        return new Error('Invalid URL!');
    }
};
