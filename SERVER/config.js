const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);
// 8b9ef8635a2e4ce2b040a878dc3bec557b9c4468af91eb94b2b43df31507982b