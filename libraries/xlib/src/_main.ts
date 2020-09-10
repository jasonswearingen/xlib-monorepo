console.log( "Hello, worlds" )

export const hello = "world wtf?!!"

export const goodbye = "world rebuild 42s"

export const shmaybe = "iz good?"


/** a test func returning hello name */
export function f( name: string ): string {

	return `hello ${ name }`

}


//import * as kyu from "ky-universal"

//type TestKY = typeof<kyu>;

//export const _ky = kyu as ( typeof( kyu ));



import ky from "ky-universal"
export { ky }




//export import ky = require( "ky-universal" )

//export const _ky = ky


// const call = ( async (): Promise<void> => {

// 	const res = await ky( "https://httpbin.org/bytes/16" )


// } )

// void call()







// 	( async () => {
// 		const { body } = await ky( 'https://httpbin.org/bytes/16' );
// 		const { value } = await body.getReader().read();
// 		const result = new TextDecoder( 'utf-8' ).decode( value );

// 		// …
// 	} )();




