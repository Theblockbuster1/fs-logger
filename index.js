const fs = require('fs');

/**
 * Logs/appends data into a file asynchronously.
 * @async
 * @function
 * @param {string} path The path of the file to be appended
 * @param {string} data Data to be appended to the file (automatically appended with a new-line)
 * @param {(Object|string)} [options=utf8] fs.appendFile options or string representing encoding ('utf8' by default)
 * @example log('log.txt', 'hello world');
 */
module.exports = async function(path, data, options='utf8') {
    return await fs.promises.appendFile(path, data+'\n', options);
}

/**
 * Logs/appends data into a file synchronously.
 * @function
 * @param {string} path The path of the file to be appended
 * @param {string} data Data to be appended to the file (automatically appended with a new-line)
 * @param {(Object|string)} [options=utf8] fs.appendFile options or string representing encoding ('utf8' by default)
 * @example log.sync('log.txt', 'hello world');
 */
module.exports.sync = function(path, data, options='utf8') {
    return fs.appendFileSync(path, data+'\n', options);
}
