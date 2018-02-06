# Webpack Noodle Plugin

This plugin allows you to run a shell command when a specfic file was changed, at the end of the build process.

## Installation
```bash
yarn add webpack-noodle-plugin -D
```
or

```bash
npm i webpack-noodle-plugin -D
```

## Development
Go to `webpack.config.js`:

```js
const webpackNoodlePlugin = require('webpack-noodle-plugin');

"plugins": [
    new webpackNoodlePlugin({
      filename: '<FILE-NAME>',
      command: '<SHELL-COMMAND>'
    })
```

### Options
* `filename: string`: The name of the file to watch. Example: `myfile.ts`
* `command`: The shell command that will run once this file was changed. Example: `yarn process`
