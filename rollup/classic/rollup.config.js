// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  input: './src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/index.js',
    name: 'build',
  },
  plugins: [
    resolve(),
    copy({
      targets: [
        { src: 'src/*.html', dest: 'dist' },
        { src: 'src/*.css', dest: 'dist' },
        { src: 'src/image', dest: 'dist' },
      ],
    }),
  ],
};
