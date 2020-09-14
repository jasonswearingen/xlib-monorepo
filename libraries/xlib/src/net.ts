


/**right now, ```ky``` has a bug where ReadableStreams do not work in NodeJs.
 * For example, you can not call ```body.GetReader()```.
 * A bug has been filed and accepted in the ```ky``` project for this, but if
 * we need an alternatie project, can consider:
 * - https://www.npmjs.com/package/isomorphic-unfetch
 * - https://github.com/lquixada/cross-fetch
 * - https://github.com/googleapis/gaxios
 * - https://github.com/sindresorhus/ky
 * 
 * ideas from this thread:  https://github.com/request/request/issues/3142
 */
export const _README = null;


if ( !global.ReadableStream ) {
	//pollyfill for ky, though it seems to not work:  https://github.com/sindresorhus/ky-universal/issues/25#issuecomment-691611572
	void require( "web-streams-polyfill/es2018" )
}

import ky from "ky-universal"
export { ky }

import * as gaxios from "gaxios"
export { gaxios }


