import fs from 'fs';
import path from 'path';
import util from 'util';
import childProcess from 'child_process';
import test from 'ava';
import readPkg from 'read-pkg';
import writePkg from 'write-pkg';
import mkdirtemp from 'mkdirtemp';
import fresh from '.';

const readdir = util.promisify(fs.readdir);
const exec = util.promisify(childProcess.exec);

test('fresh() updates dependencies', async (t) => {
    const oldVersion = '0.1.0';
    const newVersion = '0.1.1';
    const dir = await mkdirtemp();
    await writePkg(dir, {
        dependencies : {
            'build-path' : oldVersion
        }
    });
    await exec('npm install', {
        cwd : dir
    });

    await writePkg(dir, {
        dependencies : {
            'build-path' : newVersion
        }
    });

    const oldPaths = await readdir(dir);
    t.true(['node_modules', 'package.json'].every(oldPaths.includes.bind(oldPaths)));
    const oldDep = await readPkg(path.join(dir, 'node_modules', 'build-path'));
    t.is(oldDep.version, oldVersion);

    await fresh(dir);

    const newPaths = await readdir(dir);
    t.true(['node_modules', 'package.json'].every(newPaths.includes.bind(newPaths)));
    const newDep = await readPkg(path.join(dir, 'node_modules', 'build-path'));
    t.is(newDep.version, newVersion);
});
