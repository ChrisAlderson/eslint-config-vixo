// Import the necessary modules.
const { CLIEngine } = require('eslint')
const { expect } = require('chai')

const config = require('..')
const { name } = require('../package')

const code = `
/**
 * Foo description.
 * @type {Foo}
 */
module.exports = class Foo {

  /**
   * bar description.
   * @return {string} - value of baz.
   */
  bar() {
    const baz = 'qux'

    return baz
  }

}
`

describe(name, () => {
  it('should test the properties of the configuration', () => {
    const { parser, env, plugins, rules } = config

    expect(parser).to.be.a('string')
    expect(config.extends).to.be.an('array')
    expect(env).to.be.an('object')
    expect(plugins).to.be.an('array')
    expect(rules).to.be.an('object')
  })

  it('should load config in eslint to validate all rule syntax is correct', () => {
    const cli = new CLIEngine({
      useEslintrc: false,
      configFile: 'eslintrc.json'
    })

    expect(cli.executeOnText(code).errorCount).to.equal(0)
  })
})
