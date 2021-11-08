module.exports = {
  pages: [
    {
      scripts: {
        index: './src/index/scripts.js'
      },
      markup: {
        template: './src/index/tmpl.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
      }
    }
  ]
};
