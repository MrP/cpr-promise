/*global jasmine*/
var cprp = require('../index.js');
var rimraf = require('rimraf');
var fs = require('fs');
var compareFiles = require('./compareFiles.helper.js').compareFiles;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
var tmpDir = process.env.TMPDIR || '/tmp';
var tempDir = tmpDir + '/cpr-promise_spec_' + process.pid;

describe('cpr-promise', function () {
    beforeEach(function () {
        fs.mkdirSync(tempDir);
    });
    describe('When the copy succeeds', function () {
        it('resolves', function (done) {
            cprp('spec/test/', tempDir)
            .then(() => compareFiles(tempDir + '/testfolder/test.txt', 'spec/test/testfolder/test.txt'))
            .then(done)
            .catch(done.fail);
        });
    });

    describe('When the copy fails', function () {
        it('rejects', function (done) {
            cprp('spec/doesntexist/', tempDir)
            .then(done.fail)
            .catch(done);
        });
    });

    afterEach(function () {
        rimraf.sync(tempDir);
    });

});
