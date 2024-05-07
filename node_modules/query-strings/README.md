# `query-strings` URL Query String Appender

A Node.js package for appending query parameters to URLs.

## Installation

Install the package via npm:

```bash
npm install query-strings --save
```

## Usage

```js
const { queryString } = require('query-strings');

// Example usage:
const url = 'http://www.example.com';
const params = {
    test1: 'hello',
    test2: 'world'
};
const result = queryString(url, params);
console.log(result);
// Output: http://www.example.com?test1=hello&test2=world
  

```


