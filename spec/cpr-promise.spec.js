/*global jasmine, expect*/
var cprp = require('../index.js');
var rimraf = require('rimraf');
var fs = require('fs');
var fileMatcher = require('node-jasmine-file-matcher');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
var tmpDir = process.env.TMPDIR || '/tmp';
var tempDir = tmpDir + '/cpr-promise_spec_' + process.pid;

describe('cpr-promise', function () {
    beforeEach(function () {
        jasmine.addMatchers(fileMatcher);
        fs.mkdirSync(tempDir);
    });
    describe('When the copy succeeds', function () {
        it('resolves', function (done) {
            cprp('spec/test/', tempDir)
            .then(() => expect(tempDir + '/testfolder/test.txt').toEqualFile('spec/test/testfolder/test.txt'))
            .then(done)
            .catch(done.fail);
        });
    });

    describe('When the copy fails', function () {
        it('rejects', function (done) {
            cprp('spec/doesntexist/', tempDir)
            .then(done.fail)
            .catch(function () {
                done();
            });
        });
    });

    afterEach(function () {
        rimraf.sync(tempDir);
    });

});
