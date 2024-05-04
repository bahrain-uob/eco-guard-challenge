import { Api, Cognito, StackContext, StaticSite } from "sst/constructs";
 
export function AuthStack({ stack, app }: StackContext) {
  // Create User Pool
  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
  });
 
  // Create Api
  const apiAuth = new Api(stack, "ApiAuth", {
    authorizers: {
      jwt: {
        type: "user_pool",
        userPool: {
          id: auth.userPoolId,
          clientIds: [auth.userPoolClientId],
        },
      },
    },
    defaults: {
      authorizer: "jwt",
    },
    routes: {
      "GET /private": "packages/functions/src/private.main",
      "GET /public": {
        function: "packages/functions/src/public.main",
        authorizer: "none",
      },
    },
  });
 
  // allowing authenticated users to access API
  auth.attachPermissionsForAuthUsers(stack, [apiAuth]);
 
  // Show the API endpoint and other info in the output
  stack.addOutputs({
    ApiAuthEndpoint: apiAuth.url,
    UserPoolId: auth.userPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });
 
  return{
    apiAuth,
    auth
  }
}