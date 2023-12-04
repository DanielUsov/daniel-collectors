import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';
import image from 'rollup-plugin-image';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: ['.js'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    copy({
      targets: [{ src: 'src/image', dest: 'dist' }],
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: '.',
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: 'dist' }),
    svgr(),
    image(),
  ],
};
