// import typescript from '@rollup/plugin-typescript';
// import babel from 'rollup-plugin-babel'
// import resolve from '@rollup/plugin-node-resolve'
// import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss'
// import index from './src/index.tsx'

// // export default [
// //     {
// //         input : index,
// //         output : [
// //             // {
// //             //     dir: 'output',
// //             //     format: 'cjs',
// //             // }
// //             {
// //                 file : 'dist/index.js',
// //                 format : 'cjs'
// //             },
// //             {
// //                 file : 'dist/index.es.js',
// //                 format : 'es',
// //                 exports : 'named',
// //             }
// //         ],
// //         Plugins: [
// //             postcss({
// //                 plugins: [],
// //                 minimize: true,
// //             }),
// //             babel({
// //                 exclude: 'node_modules/**',
// //                 presets: ['@babel/preset=react']
// //             }),
// //             external(),
// //             resolve({
// //                 moduleDirectories: ['node_modules/', 'src/js/'],
// //                 extensions:        ['.js', '.ts', '.jsx', '.tsx'],
// //             }),
// //             [typescript({ module: "ESNext" })],
// //         ]
// //     }
// // ];


// export default {
//   input: 'src/index.ts',
//   output: {
//     dir: 'output',
//     format: 'cjs',
//   },
//   plugins: [typescript()],
// };

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import postcss from "rollup-plugin-postcss";
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import { getFiles } from './getFiles';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: [
    './src/index.tsx',
    // ...getFiles('./src/containers', extensions),
    // ...getFiles('./src/components', extensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    postcss(),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
  ],
  external: ['react', 'react-dom'],
};