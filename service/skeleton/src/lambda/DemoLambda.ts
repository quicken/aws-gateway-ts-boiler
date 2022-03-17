import { APIGatewayProxyHandler, APIGatewayProxyEvent, Context } from "aws-lambda";
import { ApiGatewayAdapter } from "../lib/ApiGatewayAdapter";
import { Demo, DemoRequestBody } from "../lib/Demo";
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context: Context) => {
	try {
		const response = ApiGatewayAdapter.createApiGatewayResponse();
		const demo = new Demo();

		if (event.requestContext.httpMethod === "POST") {
			const requestBody = ApiGatewayAdapter.parseApiGatewayEventBody<DemoRequestBody>(event);

			response.body = JSON.stringify({
				greeting: demo.greeting(requestBody.username)
			});
		} else {
			response.body = JSON.stringify({
				message: demo.helloWorld()
			});
		}

		return response;
	} catch (err: unknown) {
		console.log(err);

		const response = ApiGatewayAdapter.createApiGatewayResponse();
		response.statusCode = 500;
		response.body = JSON.stringify({ error: err });
		return response;
	}
};
