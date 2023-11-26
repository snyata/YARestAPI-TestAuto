```mermaid
graph TD
    CI[CI/CD Pipeline] -->|Triggers| AUT[Automation Tool]
    AUT -->|Authenticates with| GL[GitLab API]
    AUT -->|Authenticates with| MF[Microfocus ALM API]
    GL -->|Fetch Tests| TC[Test Cases in Cypress]
    AUT -->|Formats Tests| FT[Formatted Tests]
    FT -->|Posts to| MF
    MF -->|Stores Tests| TS[Test Suite in Microfocus ALM]
