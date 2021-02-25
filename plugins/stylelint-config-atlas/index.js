'use strict';

module.exports = {
	plugins: ['stylelint-scss', 'stylelint-order'],
	rules: {
		'number-leading-zero': 'never',
		'selector-list-comma-newline-after': 'always',
		'rule-empty-line-before': ['always', { ignore: ['after-comment'] }],
		'comment-empty-line-before': ['always', { except: ['first-nested'] }],
		'block-opening-brace-space-before': 'always',
		'declaration-colon-space-after': 'always',
		'declaration-colon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
		'scss/at-extend-no-missing-placeholder': true,
		indentation: 'tab',
		'declaration-property-value-blacklist': null,
		'declaration-property-value-disallowed-list': { '/^border/': ['none'] },
		'max-nesting-depth': 3,
		'font-family-name-quotes': 'always-where-recommended',
		'function-url-quotes': 'always',
		'selector-attribute-quotes': 'always',
		'string-quotes': 'double',
		'order/order': [
			[
				{
					type: 'at-rule',
					hasBlock: false
				},
				'custom-properties',
				'declarations'
			],
			{
				unspecified: 'ignore',
				disableFix: true
			}
		],
		'order/properties-order': [
			'display',
			'position',
			'top',
			'right',
			'bottom',
			'left',
			'flex',
			'flex-basis',
			'flex-direction',
			'flex-flow',
			'flex-grow',
			'flex-shrink',
			'flex-wrap',
			'align-content',
			'align-items',
			'align-self',
			'justify-content',
			'order',
			'box-sizing',
			'width',
			'min-width',
			'max-width',
			'height',
			'min-height',
			'max-height',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'float',
			'clear',
			'resize',
			'columns',
			'column-count',
			'column-gap',
			'column-fill',
			'column-rule',
			'column-span',
			'column-width',
			'grid-gap',
			'grid-template-columns',
			'animation',
			'animation-name',
			'animation-timing-function',
			'transform',
			'transform-box',
			'transform-origin',
			'transform-style',
			'transition',
			'transition-delay',
			'transition-duration',
			'transition-property',
			'transition-timing-function',
			'border',
			'border-top',
			'border-right',
			'border-bottom',
			'border-left',
			'border-width',
			'border-top-width',
			'border-right-width',
			'border-bottom-width',
			'border-left-width',
			'border-style',
			'border-top-style',
			'border-right-style',
			'border-bottom-style',
			'border-left-style',
			'border-radius',
			'border-top-left-radius',
			'border-top-right-radius',
			'border-bottom-left-radius',
			'border-bottom-right-radius',
			'border-color',
			'border-top-color',
			'border-right-color',
			'border-bottom-color',
			'border-left-color',
			'outline',
			'outline-color',
			'outline-offset',
			'outline-style',
			'outline-width',
			'background',
			'background-attachment',
			'background-clip',
			'background-color',
			'background-image',
			'background-repeat',
			'background-position',
			'background-size',
			'fill',
			'opacity',
			'color',
			'font',
			'font-family',
			'font-size',
			'font-smoothing',
			'font-style',
			'font-variant',
			'font-weight',
			'letter-spacing',
			'line-height',
			'list-style',
			'text-align',
			'text-decoration',
			'text-indent',
			'text-overflow',
			'text-rendering',
			'text-shadow',
			'text-transform',
			'text-wrap',
			'white-space',
			'word-spacing',
			'cursor',
			'pointer-events',
			'user-select',
			'appearance',
			'border-collapse',
			'border-spacing',
			'box-shadow',
			'caption-side',
			'content',
			'empty-cells',
			'overflow',
			'overflow-x',
			'overflow-y',
			'quotes',
			'speak',
			'table-layout',
			'vertical-align',
			'visibility',
			'will-change',
			'z-index'
		],
		'declaration-property-unit-allowed-list': {
			'font-size': ['rem', 'em']
		},
		'at-rule-no-vendor-prefix': true,
		'media-feature-name-no-vendor-prefix': true,
		'selector-no-vendor-prefix': true,
		'value-no-vendor-prefix': true,
		'selector-max-compound-selectors': 4,
		'selector-max-specificity': '0,4,1',
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'use',
					'at-root',
					'content',
					'each',
					'else',
					'error',
					'for',
					'function',
					'include',
					'if',
					'mixin',
					'return',
					'warn'
				]
			}
		],
		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['contain']
			}
		],
		'selector-max-id': 0,
		'selector-no-qualifying-type': true,
		'function-url-no-scheme-relative': true,
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-blockless', 'first-nested'],
				ignore: ['after-comment'],
				ignoreAtRules: ['else']
			}
		],
		'declaration-empty-line-before': [
			'always',
			{
				except: ['after-declaration', 'first-nested'],
				ignore: ['after-comment']
			}
		],
		'block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: ['if', 'else']
			}
		],
		'scss/selector-no-redundant-nesting-selector': true,
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': 'always-intermediate'
	}
};