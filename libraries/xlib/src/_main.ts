console.log( "Hello, worlds" )

export const hello = "world wtf?!!"

/** the world always says
 * @public
 */
export const goodbye = "world rebuild 42s"

/** does it exist? 
 * @beta */
export const shmaybe = "iz good?"


/** a test func returning hello name */
export function f( name: string ): string {

	return `hellos ${ name }`

}


import * as net from "./net"
export { net }


import * as _imports from "./_imports"
export { _imports }