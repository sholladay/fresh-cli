#!/usr/bin/env node

'use strict';

const meow = require('meow');
const fresh = require('.');

const cli = meow(`
    Usage
      $ fresh [cwd]

    Example
      $ fresh
      $ fresh my-project
`);

fresh(cli.input[0]);
