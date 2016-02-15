// by default ESLint will lint .js files, except those matched by the .eslintignore file
// no ES6 rules

module.exports = {
	'root': true,
	'globals': {
		'angular': false,
		'moment': false,
		'_': false,
		'IN_TEST': false,
		'IN_PROD': false,
		'CG_UI_AUTH': false,
		'CG_UI_API': false
	},
	'env': {
		'node': true,
		'browser': true,
		'commonjs': true,
		'mocha': true,	// TODO: separate config file for tests
		'jasmine': true	// TODO: if Jasmine goes, this goes with it
	},
	// TODO: separate config file for tests:
	// see https://github.com/eslint/eslint/issues/3611
	'ecmaFeatures': {
		'modules': true
	},
	'rules': {
		'no-alert': 1,	// TODO: fix this and switch to 2
		'no-array-constructor': 2,
		'no-arrow-condition': 2,
		'no-bitwise': 2,
		'no-caller': 2,
		'no-case-declarations': 2,
		'no-cond-assign': 2,
		'no-console': 2,
		'no-constant-condition': 2,
		'no-continue': 2,
		'no-control-regex': 2,
		'no-debugger': 2,
		'no-delete-var': 2,
		'no-dupe-keys': 2,
		'no-dupe-args': 2,
		'no-duplicate-case': 2,
		'no-else-return': 2,
		'no-empty': 2,	// also checked by JSCS
		'no-empty-character-class': 2,
		'no-empty-pattern': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-ex-assign': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-boolean-cast': 2,	// TODO: fix and switch to 2
		'no-extra-semi': 2,
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-func-assign': 2,
		'no-implicit-coercion': [	// also checked by JSCS
			2,
			{
				'boolean': false,
				'string': false,
				'number': true
			}
		],
		// 'no-implicit-globals': 2,	// TODO: not yet supported
		'no-implied-eval': 2,
		'no-inner-declarations': [
			2,
			'functions'
		],
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-iterator': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-lonely-if': 2,
		'no-loop-func': 2,
		'no-mixed-spaces-and-tabs': 2,	// also checked by JSCS
		'linebreak-style': [	// also checked by JSCS
			2,
			'unix'
		],
		'no-multi-spaces': 2,	// also checked by JSCS
		'no-multi-str': 2,	// also checked by JSCS
		'no-multiple-empty-lines': 2,	// also checked by JSCS
		'no-native-reassign': 2,
		'no-negated-condition': 1,	// TODO: fix and switch to 2
		'no-negated-in-lhs': 2,
		'no-nested-ternary': 2,
		'no-new': 2,
		'no-new-func': 2,
		'no-new-object': 2,
		'no-new-require': 2,
		'no-new-wrappers': 2,
		'no-obj-calls': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-param-reassign': 2,
		'no-path-concat': 2,
		'no-plusplus': [
			2,
			{
				'allowForLoopAfterthoughts': true
			}
		],
		'no-proto': 2,
		'no-redeclare': 2,
		'no-regex-spaces': 2,
		'no-return-assign': 2,
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-shadow': 1,	// TODO: fix and switch to 2
		'no-shadow-restricted-names': 2,
		// 'no-whitespace-before-property': 2,	// TODO: not yet supported
		'no-spaced-func': 2,	// also checked by JSCS
		'no-sparse-arrays': 2,
		'no-trailing-spaces': 2,	// also checked by JSCS
		'no-throw-literal': 2,
		'no-undef': 2,
		'no-undef-init': 2,
		'no-undefined': 2,
		'no-unexpected-multiline': 2,
		// 'no-unmodified-loop-condition': 2,	// TODO: not yet supported
		'no-unneeded-ternary': 2,
		'no-unreachable': 2,
		'no-unused-expressions': 2,
		'no-unused-vars': [
			1,
			{
				'vars': 'all',
				'args': 'after-used'
			}
		],
		'no-useless-call': 2,
		'no-useless-concat': 2,
		'no-void': 2,
		'no-warning-comments': [
			1,
			{
				'terms': [
					'todo',
					'fixme'
				],
				'location': 'start'
			}
		],
		'no-with': 2,	// also checked by JSCS
		'no-magic-numbers': 1,	// TODO: fix as many as possible and remove
		'array-bracket-spacing': [	// also checked by JSCS
			2,
			'always'
		],
		// 'array-callback-return': 2,	// TODO: not yet supported
		'accessor-pairs': 2,
		'block-scoped-var': 2,
		'brace-style': [	// also checked by JSCS
			2,
			'1tbs',
			{
				'allowSingleLine': false
			}
		],
		'camelcase': [	// also checked by JSCS
			2,
			{
				'properties': 'never'
			}
		],
		'comma-dangle': [	// also checked by JSCS
			2,
			'never'
		],
		'comma-spacing': 2,	// also checked by JSCS
		'comma-style': [	// also checked by JSCS
			2,
			'last'
		],
		'complexity': [	// TODO: fix as much as possible
			1,
			5
		],
		'consistent-return': 2,
		'consistent-this': [	// also checked by JSCS
			2,
			'vm'
		],
		'curly': [	// also checked by JSCS
			2,
			'all'
		],
		'default-case': 2,
		'dot-location': [
			2,
			'property'
		],
		'eol-last': 2,	// also checked by JSCS
		'eqeqeq': 2,
		'func-style': [
			2,
			'declaration'
		],
		'guard-for-in': 2,
		'indent': [	// also checked by JSCS
			0,	// TODO: switch to 2, once our format gets support
			'tab',
			{
				'VariableDeclarator': {
					'var': 2
				}
			}
		],
		'key-spacing': [	// also checked by JSCS
			2,
			{
				'beforeColon': false,
				'afterColon': true
			}
		],
		'lines-around-comment': 0,	// also checked by JSCS, TODO
		'max-depth': [
			1,
			3
		],
		'max-len': [	// also checked by JSCS
			2,
			120,
			2,
			{
				'ignoreUrls': true
			}
		],
		'max-nested-callbacks': [
			1,
			4	// TODO: need separate config file for Jasmine tests that typically trigger this warning
		],
		'max-params': [
			1,	// TODO: switch to $inject style DI
			3
		],
		'max-statements': [
			1,	// TODO: this indicates functions that could use some split up / refactor
			15
		],
		'new-cap': 2,	// also checked by JSCS
		'new-parens': 2,
		'newline-after-var': [	// also checked by JSCS
			2,
			'always'
		],
		'object-curly-spacing': [
			2,
			'always'
		],
		'one-var': [	// also checked by JSCS
			2,
			'always'
		],
		'operator-assignment': [
			2,
			'never'
		],
		'operator-linebreak': [
			2,
			'before',
			{
				'overrides': {
					'=': 'after'
				}
			}
		],
		'padded-blocks': [	// also checked by JSCS
			2,
			'never'
		],
		'quote-props': [	// also checked by JSCS
			2,
			'always'
		],
		'quotes': [	// also checked by JSCS
			2,
			'single'
		],
		'radix': 2,
		'semi': [	// also checked by JSCS
			2,
			'always'
		],
		'semi-spacing': 2,	// also checked by JSCS
		'space-after-keywords': [	// also checked by JSCS
			2,
			'always'
		],
		'space-before-keywords': [
			2,
			'always'
		],
		'space-before-blocks': [	// also checked by JSCS
			2,
			'always'
		],
		'space-before-function-paren': [	// also checked by JSCS
			2,
			{
				'anonymous': 'always',
				'named': 'never'
			}
		],
		'space-in-parens': 0,	// doesn't support what we need yet :[
		'space-infix-ops': 2,	// also checked by JSCS
		'space-return-throw-case': 2,	// also checked by JSCS
		'space-unary-ops': [	// also checked by JSCS
			2,
			{
				'words': true,
				'nonwords': false
			}
		],
		'spaced-comment': [
			2,
			'always'
		],
		// TODO: conflicts with 'ecmaFeatures/modules' settings
		// need to refactor, so unit tests have separate config file
		'strict': [
			0,
			'global'
		],
		'use-isnan': 2,
		'valid-typeof': 2,
		'vars-on-top': 2,
		'wrap-iife': 2,	// also checked by JSCS
		'yoda': [	// also checked by JSCS
			2,
			'never'
		]
	}
};
