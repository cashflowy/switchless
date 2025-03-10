import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
            interop: 'auto',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
            exports: 'named',
        }
    ],
    plugins: [
        peerDepsExternal({
            includeDependencies: true,
        }),
        resolve({
            extensions: ['.js', '.jsx'],
            preferBuiltins: true,
        }),
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: 'auto',
        }),
        babel({
            exclude: 'node_modules/**',
            presets: [
                '@babel/preset-env',
                ['@babel/preset-react', {
                    runtime: 'automatic'
                }]
            ],
            babelrc: false,
            runtimeHelpers: true,
        }),
        terser(),
    ],
    external: [
        'react', 
        'react-dom', 
        '@mui/joy', 
        '@mui/material', 
        '@mui/icons-material', 
        '@emotion/react', 
        '@emotion/styled', 
        '@react-hook/resize-observer', 
        'next', 
        'next-nprogress-bar',
        /^@mui\/.*/,
    ],
};