import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export class ApiGatewayAdapter {
	/**
	 * Return a canonical API gateway response. The returned response body can then
	 * be modified as required. By default the response is for a successful page respons.
	 *
	 * @returns
	 */
	public static createApiGatewayResponse = (): APIGatewayProxyResult => {
		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*"
			},
			body: "",
			isBase64Encoded: false
		};
	};

	/**
	 * Parses an incoming event and decodes the event considering
	 * the specified encoding of the event body.
	 *
	 * @param event An incoming event from the AWS HTTP API Gateway.
	 * @returns The event body converted to an object.
	 */
	public static parseApiGatewayEventBody = <T>(event: APIGatewayProxyEvent): T => {
		let body: string = event.body ? event.body : "";
		if (event.isBase64Encoded) {
			body = Buffer.from(body, "base64").toString();
		}

		if (!body) {
			throw new Error("Error parsing event body. Perhaps this was a GET request?");
		}

		return JSON.parse(body) as T;
	};
}
