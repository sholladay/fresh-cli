# fresh-cli [![Build status for fresh-cli on Circle CI.](https://img.shields.io/circleci/project/sholladay/fresh-cli/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/fresh-cli "Fresh CLI Builds")

> Remove and reinstall your dependencies.

## Why?

 - Cross platform support.
 - More reliable than `npm update`.
 - Useful as a shortcut to reduce typing.

[npm](https://github.com/npm/npm) does a much better job creating a dependency tree from scratch than modifying an existing one without breaking anything. By reinstalling `node_modules`, you put yourself in a more well-known, consistent state.

This project works around many bugs:

 - [sindresorhus/find-up#16](https://github.com/sindresorhus/find-up/issues/16)
 - [npm/npm#17805](https://github.com/npm/npm/issues/17805)

Please add your own bugs to the list!

## Install

```sh
npm install fresh-cli --global
```

## Usage

```console
$ fresh --help

  Usage
    $ fresh [cwd]

  Example
    $ fresh
    $ fresh my-project
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/fresh-cli/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/fresh-cli/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/fresh-cli/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/fresh-cli/blob/master/LICENSE "The license for fresh-cli.") © [Seth Holladay](http://seth-holladay.com "Author of fresh-cli.")

Go make something, dang it.
