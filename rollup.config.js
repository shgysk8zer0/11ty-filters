import { getConfig } from '@shgysk8zer0/js-utils/rollup';

export default getConfig('./index.js', {
	external: [
		'@shgysk8zer0/npm-utils/fs', '@shgysk8zer0/npm-utils/hash',
		'@shgysk8zer0/npm-utils/yaml', '@shgysk8zer0/npm-utils/importmap',
		'@shgysk8zer0/npm-utils/json', '@shgysk8zer0/importmap',
		'@shgysk8zer0/npm-utils/utils', 'nunjucks/src/filters',
	],
	format: 'cjs',
	minify: false,
	sourcemap: false,
});
