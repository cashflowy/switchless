import { defineConfig } from 'cypress'
import webpackConfig from './_webpack.config.js'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig
    },
    experimentalSingleTabRunMode: true
  },
})
