'use strict';

const util = require('util');
const childProcess = require('child_process');
const pkgDir = require('pkg-dir');
const del = require('del');

const exec = util.promisify(childProcess.exec);

const fresh = async (cwd) => {
    const dir = await pkgDir(cwd);
    if (!dir) {
        throw new Error('Unable to find package root.');
    }
    await del(['package-lock.json', 'node_modules'], {
        cwd : dir
    });
    await exec('npm install', {
        cwd : dir
    });
};

module.exports = fresh;
