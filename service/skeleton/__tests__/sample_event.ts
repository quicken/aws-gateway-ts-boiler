import { expect, test } from "@jest/globals";
import { APIGatewayProxyEventV2, Context } from "aws-lambda";

test("noop", () => {
	expect(1).toBe(1);
});

export const CONTEXT: Context = {
	callbackWaitsForEmptyEventLoop: true,
	functionName: "blah",
	functionVersion: "string",
	invokedFunctionArn: "string",
	memoryLimitInMB: "string",
	awsRequestId: "string",
	logGroupName: "string",
	logStreamName: "string",
	getRemainingTimeInMillis: () => 10,
	done: (error?: Error, result?: any) => {
		console.log("error", error, result);
	},
	fail: (error: Error | string) => {
		console.log("fail", error);
	},
	succeed: (messageOrObject) => {
		console.log("success", messageOrObject);
	}
};

/**
 * A real APIGatewayProxyEventV2 captured from a Bitbucket Webhook (Push Event).
 *
 * Some more background on received events:
 *
 * An APIGatewayProxyEventV2 is only sent when using the AWS HTTP Api and explicitly setting
 * the format to version2. The "event" of a AWS Rest API is the deserialised body unless the method
 * is configured to PROXY in which the received event is again slightly different but
 * includes the body and isBase64Encode properties.
 *
 *  */
export const API_GATEWAY_POST_EVENT: APIGatewayProxyEventV2 = {
	version: "2.0",
	routeKey: "POST /ci/bitbucket/webhook",
	rawPath: "/ci/bitbucket/webhook",
	rawQueryString: "",
	headers: {
		accept: "*/*",
		"content-length": "8937",
		"content-type": "application/json",
		host: "aaaaaaaaaa.execute-api.ap-southeast-2.amazonaws.com",
		"user-agent": "Bitbucket-Webhooks/2.0",
		"x-amzn-trace-id": "Root=1-6170c360-0c30bad9410db7fd70181d5f",
		"x-attempt-number": "1",
		"x-b3-sampled": "1",
		"x-b3-spanid": "97adb9ff2aca4daf",
		"x-b3-traceid": "97adb9ff2aca4daf",
		"x-event-key": "repo:push",
		"x-event-time": "Thu, 21 Oct 2021 01:33:18 GMT",
		"x-forwarded-for": "127.0.0.1",
		"x-forwarded-port": "443",
		"x-forwarded-proto": "https",
		"x-hook-uuid": "some-data",
		"x-request-uuid": "some-other-data"
	},
	requestContext: {
		accountId: "000000000000",
		apiId: "aaaaaaaaaa",
		domainName: "xxxxxxxxxx.execute-api.ap-southeast-2.amazonaws.com",
		domainPrefix: "xxxxxxxxxx",
		http: {
			method: "POST",
			path: "/ci/bitbucket/webhook",
			protocol: "HTTP/1.1",
			sourceIp: "127.0.0.1",
			userAgent: "Bitbucket-Webhooks/2.0"
		},
		requestId: "ABcDEW3737=",
		routeKey: "POST /ci/bitbucket/webhook",
		stage: "$default",
		time: "21/Oct/2021:01:33:20 +0000",
		timeEpoch: 1634780000046
	},
	body: '{"foo":"bar"}',
	isBase64Encoded: false
};
