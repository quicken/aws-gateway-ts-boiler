/**
 * The shape of the expected payload when making a post request to the demo api.
 */
export type DemoRequestBody = {
	/**
	 * The name of the user that should be greeted.
	 */
	username: string;
};

/**
 * This class demonstrates moving business logic outside of the lambda function handler.
 */
export class Demo {
	/**
	 * Returns a standard hello world message.
	 *
	 * @returns
	 */
	public helloWorld = () => `Hello World`;

	/**
	 * A canonical way of greeting a user.
	 *
	 * @param username The name of the user that should be greeted.
	 * @returns A greeting message.
	 */
	public greeting = (username: string) => `Hello ${username}`;
}

export default Demo;
