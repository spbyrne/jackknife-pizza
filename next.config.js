const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
})
