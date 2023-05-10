const path = require('path')
const CracoLessPlusgin = require('craco-less')

// __dirname：当前目录，当前目录拼接上dir
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlusgin
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
