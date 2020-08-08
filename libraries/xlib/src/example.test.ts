import * as xlib from "./_main"



describe( "Example Test", () => {
	it( "correctly runs a test", () => {
		expect( xlib.f.length > 0 ).toBeTruthy()
	} )
	it( "returns string", () => {
		expect( xlib.f( "papa" ).includes( "papa" ) ).toBeTruthy()
	} )
} )