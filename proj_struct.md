microfocus-rest
├─.env
├─.env.example
├─.gitignore
├─.gitlab-ci.yml
├─Dockerfile
├─README.md
├─config.yaml
├─package.json
├─test
├─src
|  ├─index.ts
|  ├─wrappers
|  |    └APIWrapper.ts
|  ├─utils
|  |   ├─constant.ts
|  |   └yamlParser.ts
|  ├─types
|  ├─routes
|  |   ├─index.ts
|  |   └user-route.ts
|  ├─config
|  |   └config.ts
|  ├─clients
|  |    ├─gitLabClient.ts
|  |    └microfocusAlmClient.ts
├─scripts
|    └folders.zsh
├─documentation
|       ├─API.md
|       ├─CHANGELOG.md
|       ├─brs_testauto_api.md
|       └guide_v1.0.0.md
├─dev_cypress
|      ├─final_tests
├─.docs
|   ├─outline.md
|   ├─references.md
|   ├─requirements.md
|   ├─restapi_plan.md
|   ├─restapi_reqs.md
|   ├─system.md
|   ├─api_docs
|   |    ├─ALM.md
|   |    ├─ALM_optimisations.md
|   |    ├─Gitlab_auth.md
|   |    ├─Gitlab_v4.md
|   |    ├─exceptions.md
|   |    └get_fields.md
├─.arc
|  ├─src
|  |  ├─index.ts
|  |  ├─utils
|  |  |   └yamlParser.ts
|  |  ├─services
|  |  |    └authService.ts
|  |  ├─routes
|  |  |   ├─index.ts
|  |  |   └user-route.ts
|  |  ├─models
|  |  |   ├─Users.ts
|  |  |   └testCases.ts
|  |  ├─controllers
|  |  |      ├─test-controllers.ts
|  |  |      └user-controllers.ts
|  |  ├─config
|  |  |   └config.ts
|  |  ├─clients
|  |  |    ├─gitLabClient.ts
|  |  |    └microfocusAlmClient.ts