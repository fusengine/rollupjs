import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import rootImport from 'rollup-plugin-root-import'
import image from '@rollup/plugin-image'

// path to start js
const sources = [ 'src/index' ]

export default sources.map((source) => ({
	input: `${source}.js`,
	output: {
		dir: 'public/assets',
		format: 'es',
	},

	preserveEntrySignatures: false,

	plugins: [
		rootImport({
			root: 'src',
		}),
		resolve(),
		commonjs(),
		postcss({
			extract: true,
		}),
		image(),
		babel({
			babelHelpers: 'bundled',
			exclude: [ 'node_modules/**' ],
		}),
	],
}))
