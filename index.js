var cpr = require('cpr');

module.exports = function cprPromise(src, dest, options) {
    return new Promise(function (resolve, reject) {
        cpr(src, dest, options || {}, function (err, files) {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
};
