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

/**
 * Check if two objects have a different shape
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */
export function shallowDiffers(a, b) {
	for (let i in a) if (i !== '__source' && !(i in b)) return true;
	for (let i in b) if (i !== '__source' && a[i] !== b[i]) return true;
	return false;
}

export function removeNode(node) {
	let parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}
