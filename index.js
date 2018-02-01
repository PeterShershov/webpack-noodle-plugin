const { parse } = require('path')
const { execSync } = require('child_process')

class webpackNoodlePlugin {
  constructor({filename, command}) {
    this.filename = filename;
    this.command = command;
  }

  apply(compiler) {
    compiler.plugin('invalid', (filePath) => {
      if (parse(filePath).base === this.filename) {
        execSync(this.command, { stdio: 'inherit', shell: true })
      }
    })
  }
}

module.exports = webpackNoodlePlugin;
