/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */
export function assign(obj, props) {
	for (let i in props) {
		// WKWebView throws TypeError: Attempted to assign to readonly property
		// when you do ({}).constructor = undefined
		// (AppleWebKit/605.1.15)
		if (i !== 'constructor') {
			// @ts-ignore We change the type of `obj` to be `O & P`
			obj[i] = props[i];
		}
	}
	return /** @type {O & P} */ (obj);
}
