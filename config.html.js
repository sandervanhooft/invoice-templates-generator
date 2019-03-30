module.exports = {
  build: {
    destination: {
      path: 'build_html',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
      uglifyClassNames: true,
    },
    preferBgColorAttribute: true,
  },

  minify: {
    minifyCSS: true,
    maxLineLength: 500,
    collapseWhitespace: false,
    processConditionalComments: true,
  },
}
