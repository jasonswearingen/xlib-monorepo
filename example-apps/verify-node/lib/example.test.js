"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xlib = require("xlib");
describe("Example Test", () => {
    it("correctly runs a test", () => {
        const result = xlib.hello;
        console.log(`xlib result hello=${result}`);
        expect(result.length > 0).toBeTruthy();
    });
});
//# sourceMappingURL=example.test.js.map