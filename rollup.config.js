import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'assets/typescript/main.ts',
  output: {
    file: 'public/build/js/main.min.js',
    format: 'esm',
    inlineDynamicImports: true,
    sourcemap: true,
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.rollup.json' }),
    commonjs(),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    terser(),
  ],
};
