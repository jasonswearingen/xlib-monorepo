import * as xlib from "xlib"



describe( "Example Test", () => {
	it( "correctly runs a test", () => {


		let result = xlib.hello
		console.log( `xlib result hello==${ result }` )
		expect( result.length > 0 ).toBeTruthy()
	} )
} )