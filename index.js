const { parse } = require('path')
const { execSync } = require('child_process')

class webpackNoodlePlugin {
  constructor({filename, command}) {
    this.filename = filename;
    this.command = command;
  }

  apply(compiler) {
    compiler.plugin('invalid', (filePath) => {
      if (parse(filePath).base.indexOf(this.filename) !== -1) {
        execSync(this.command, { stdio: 'inherit', shell: true })
      }
    })
  }
}

module.exports = webpackNoodlePlugin;
