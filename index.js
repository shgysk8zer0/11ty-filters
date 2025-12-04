/* eslint-env node */
import { imports, scopes } from '@shgysk8zer0/importmap';
import { readFile } from '@shgysk8zer0/npm-utils/fs';
import { isBare } from '@shgysk8zer0/npm-utils/utils';
import { resolveImport, objectToMap } from '@shgysk8zer0/npm-utils/importmap';
import { readJSONFile, isJSONFile } from '@shgysk8zer0/npm-utils/json';
import { readYAMLFile, isYAMLFile } from '@shgysk8zer0/npm-utils/yaml';
import {
	hash, MD5, SHA256, SHA384, SHA512, SRI_ALGO, HEX, BASE64,
} from '@shgysk8zer0/npm-utils/hash';

const ESCAPED_PATTERN = /&(?![a-zA-Z\d]{2,5};|#\d{1,3};)/g;

const escape = str => str.toString()
	.replaceAll(ESCAPED_PATTERN, '&amp;')
	.replaceAll('<', '&lt;')
	.replaceAll('>', '&gt;')
	.replaceAll('"', '&quot;');

const sriCache = new Map();

// Use both versions until mistake is fixed everywhere
export const importmap = objectToMap({ imports, scope: scopes, scopes });
export const escape_xml = input => escape(input);
export const read_file = file => readFile(file);
export const date_to_iso = input => new Date(input).toISOString();
export const jsonify = input => JSON.stringify(input);
export const is_array = input => Array.isArray(input);
export const is_string = input => typeof input === 'string';
export const fetch_json = url => fetch(url).then(resp => resp.json());
export const fetch_text = url => fetch(url).then(resp => resp.text());
export const is_null = input => typeof input === 'object' && Object.is(input, null);
export const resolve_specifier = input => isBare(input) ? resolveImport(input, importmap) : input;
export const sha256 = input => hash(input, { algo: SHA256, output: HEX });
export const sha384 = input => hash(input, { algo: SHA384, output: HEX });
export const sha512 = input => hash(input, { algo: SHA512, output: HEX });
export const md5 = input => hash(input, { algo: MD5, output: HEX });

export async function sri(input) {
	if (sriCache.has(input)) {
		return sriCache.get(input);
	} else {
		const result = `${SRI_ALGO}-${await hash(input, { algo: SRI_ALGO, output: BASE64 })}`;
		sriCache.set(input, result);
		return result;
	}
}

export function absolute_url(input) {
	if (typeof process.env.URL === 'string') {
		return new URL(input, process.env.URL).href;
	} else {
		return input;
	}
}

export async function loadImportmapFile(file) {
	if (isJSONFile(file)) {
		const { imports } = await readJSONFile(file);
		Object.entries(imports).forEach((key, value) => importmap.set(key, value));
	} else if (isYAMLFile(file)) {
		const { imports } = await readYAMLFile(file);
		Object.entries(imports).forEach((key, value) => importmap.set(key, value));
	} else {
		throw new TypeError(`Could not parse ${file}`);
	}
}
