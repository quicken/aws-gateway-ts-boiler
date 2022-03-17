import { expect, test } from "@jest/globals";
import "dotenv/config";
import { Demo } from "../src/lib/Demo";

test("greeting", () => {
	const demo = new Demo();
	expect(demo.greeting("Jack Bauer")).toBe("Hello Jack Bauer");
});

test("hello_world", () => {
	const demo = new Demo();
	expect(demo.helloWorld()).toBe("Hello World");
});
