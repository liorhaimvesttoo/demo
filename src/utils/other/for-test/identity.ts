/* eslint-disable jsdoc/require-returns-description */
/* eslint-disable jsdoc/require-param-description */
/**
 * Returns whatever is passed into it
 *
 * @export
 * @template T
 * @param {T} [value]
 * @returns {T}
 */
export function identity<T = any>(value?: T): T {
  return value as T;
}

export default identity;
