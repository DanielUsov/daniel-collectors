import path from 'path';

export default {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(new URL('.', import.meta.url).pathname, 'dist'),
  },
};
