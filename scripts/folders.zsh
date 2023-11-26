#!/bin/zsh

# Create the directory structure
mkdir -p src/clients
mkdir -p src/config
mkdir -p src/models
mkdir -p src/services
mkdir -p src/utils
mkdir -p cypress/final_tests
mkdir -p test

# Creating a .gitlab-ci.yml file
touch .gitlab-ci.yml

# Creating necessary files in each directory
touch src/clients/gitLabClient.ts
touch src/clients/microfocusAlmClient.ts
touch src/config/index.ts
touch src/models/testModel.ts
touch src/services/authService.ts
touch src/services/testService.ts
touch src/utils/yamlParser.ts
touch src/index.ts

echo "Project folder structure created successfully."
