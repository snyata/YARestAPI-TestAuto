# Gitlab <> Microfocus ALM API Plan
Develop a general purpose RESTFUL API Client that will GET NEW test cases finalized in the repository and POST them to Microfocus ALM. The complexity of this project is undetermined and will become clearer with research.

## Tech Stack (For Approval)
1. Node.js (Express)
2. Typescript
3. SOAP UI (Endpoint testing)


## Optional Libraries (Nexus availability and compatibility with UI5 automation suite TBC)
1. AXIOS for Async
2. @types/JsonSchema
3. Dotenv for .env files usage
4. jsonwebtoken for secure data transfer (maybe? TBC with Edwin)
5. bcryptjs (if authentication requires user/pass and avoid transmitting in plaintext)
   1. Alternatively the "user" is hardcoded for production usage. TBC
6. Cypress
7. ESLint typescript-eslint
8. Winston (Logging)
9. helmet
10. nodemon - keeps alive on code changes.

## Research

0. Contact Brisbane team for their solution using the uploader. Find any similar examples of RESTful Clients
   1. Speak with development team regarding any existing RESTFul clients for consumption of API endpoints
   2. 

1. Determine endpoints: SoapUI
   1. GET from Gitlab (Assumption)
   2. POST to ALM Microfocus

2. Evaluate structure of payload required at each stage.
   1. Auth
   2. Retrieve New Test Cases (Format?)
   3. Store in Data Structure or Object
   4. POST what to ALM?


## Plan v0.1

1. Test endpoints to validate routes and data structures (SOAP UI)
2. Implement AUTH in Microfocus ALM
3. Develop a POST endpoint for Microfocus ALM based on the ALM uploader file and folder structures.
   1. ALEX NOTE: Thinking vars will be stored in a boiler plate yaml file on each users account along with calls to .env for AUTH
4. Implement AUTH in Gitlab Cypress for retrieving test cases
   1. ALEX NOTE: Must include validation and confirmation that files have not been added already
   2. ALEX NOTE: Do we want to copy the cypress files across for processing or access directly?