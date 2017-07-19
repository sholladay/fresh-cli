#!/usr/bin/env node

'use strict';

const ora = require('ora');
const meow = require('meow');
const fresh = require('.');

const cli = meow(`
    Usage
      $ fresh [cwd]

    Example
      $ fresh
      $ fresh my-project
`);

const spinner = ora({
    text : 'Removing and reinstalling dependencies'
});
spinner.start();
fresh(cli.input[0]).then(
    () => {
        spinner.succeed('Installed dependencies');
    },
    (err) => {
        spinner.fail(err.message);
        process.exit(1);
    }
);
