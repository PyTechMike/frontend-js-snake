let prodRun = (process.env.NODE_ENV === 'production');

module.exports = {
	use: [
		// ['@neutrinojs/eslint', {
		// 	eslint: {
		// 		extends: 'eslint:recommended',
		// 		rules: {
		// 			'comma-dangle': [
		// 				'error',
		// 				'never'
		// 			],
		// 			'indent': [
		// 				'error',
		// 				'tab',
		// 				{
		// 					'MemberExpression': 'off',
		// 					'SwitchCase': 1
		// 				}
		// 			],
		// 			'linebreak-style': [
		// 				'error',
		// 				'unix'
		// 			],
		// 			'quotes': [
		// 				'error',
		// 				'single'
		// 			],
		// 			'semi': [
		// 				'error',
		// 				'always'
		// 			],
		// 			'no-unused-vars': [
		// 				'error'
		// 			],
		// 			'no-console': [
		// 				prodRun ? 'error' : 0,
		// 				{
		// 					'allow': [
		// 						'error'
		// 					]
		// 				}
		// 			],
		// 			'eqeqeq': [
		// 				'error',
		// 				'always'
		// 			],
		// 			'getter-return': [
		// 				'error',
		// 				{
		// 					'allowImplicit': true
		// 				}
		// 			],
		// 			'id-length': [
		// 				2,
		// 				{
		// 					'min': 2,
		// 					'properties': 'never',
		// 					'exceptions': [
		// 						'i', 'x', 'y', 'z'
		// 					]
		// 				}
		// 			],
		// 			'no-eval': 'error',
		// 			'no-trailing-spaces': 'error',
		// 			'no-with': 'error',
		// 			'no-unused-expressions': [
		// 				'error',
		// 				{
		// 					'allowShortCircuit': true,
		// 					'allowTernary': true,
		// 					'allowTaggedTemplates': true
		// 				}
		// 			],
		// 			'curly': [
		// 				'error',
		// 				'multi-line'
		// 			],
		// 			'unicode-bom': [
		// 				'error',
		// 				'never'
		// 			],
		// 			'vars-on-top': 'error',
		// 			'max-len': [
		// 				1,
		// 				120,
		// 				2,
		// 				{
		// 					'ignoreComments': true
		// 				}
		// 			],
		// 			'quote-props': [
		// 				1,
		// 				'consistent-as-needed'
		// 			],
		// 			'no-cond-assign': [
		// 				2,
		// 				'except-parens'
		// 			],
		// 			'space-infix-ops': 0,
		// 			'default-case': 0,
		// 			'no-else-return': 0,
		// 			'no-param-reassign': 0,
		// 			'new-cap': 2,
		// 			'eol-last': [
		// 				'error',
		// 				'always'
		// 			]
		// 		}
		// 	}
		// }],
		'neutrino-preset-svelte',
		'@neutrinojs/jest'
	]
}
