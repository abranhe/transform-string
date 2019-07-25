declare namespace transformString {
	interface Options {
		/**
     * String transform type
     * @default 'title'
     * 
     */
		readonly type?: string;
	}

	/**
   *  Capitalizes first letter of string
   * 
   * @param input - the input to be transformed
   * @returns the string with the first letter capitalized
   * 
   * @example
   * ```
   * import { title } from 'transform-string';
   * 
   * title('hello world')
   * // => 'Hello world'
   * ```
  */
	export function title(input: string): string;

	/**
   *  Capitalizes first letter of each word in string
   * 
   * @param input - the input to be transformed
   * @returns the capitalized string
   * 
   * @example
   * ```
   * import { capitalize } from 'transform-string';
   * 
   * capitalize('hello world')
   * // => 'Hello World'
   * ```
  */
	export function capitalize(input: string): string;

	/**
   * Converts all to lowercase
   * 
   * @param input - the input to be transformed
   * @returns the lowercase string
   * 
   * @example
   * ```
   * import { lowercase } from 'transform-string';
   * 
   * lowercase('Hello World')
   * // => 'hello world'
   * ```
  */
	export function lowercase(input: string): string;

	/**
   *  Converts all to uppercase
   * 
   * @param input - the input to be transformed
   * @returns the uppercase string
   * 
   * @example
   * ```
   * import { uppercase } from 'transform-string';
   * 
   * uppercase('hello world')
   * // => 'Hello World'
   * ```
  */
	export function uppercase(input: string): string;
}

/**
 * Transform any string using properties CSS like
 *
 *
 * @param input - the input to be transformed
 * @returns the transformed string
 *
 * @example
 * ```
 * import transformString from 'transform-string';
 *
 * transformString('hello')
 * // => 'Hello'
 *
 * capitalize('hello world', { type: 'capitalize' })
 * // => 'Hello World'
 * ```
 */
declare function transformString(input: string, options?: transformString.Options): string

export = transformString;
