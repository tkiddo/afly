import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import pkgInfo from './package.json'

const is_product = process.env.NODE_ENV === 'production'

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkgInfo.main,
      format: 'cjs',
    },
    {
      file: pkgInfo.module,
      format: 'es',
    },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    typescript(),
    commonjs(),
    babel({
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [['import', { libraryName: 'antd', style: true }]],
    }),
    postcss({
      extensions: ['.css', '.less'],
      use: [['less', { javascriptEnabled: true }]],
      extract: true,
      minimize: is_product,
    }),
  ],
  external: ['react', 'antd'],
}

export default config
