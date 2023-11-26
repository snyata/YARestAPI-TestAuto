API documentation: version number included in the URL of each endpoint. Ensureing backward compatibility and helps manage changes over time. Here's how you can update the API documentation to reflect API versioning:

```markdown
---
title: "API Client Project - API Documentation"
version: "1.0.0"
api_version: "v1"
last_updated: "2023-11-26"
author: "AHM992"
---

# API Client Project - API Documentation (Version 1)

## Overview
This document provides a basic overview of the API functionalities for the API Client Project, Version 1. It's designed to interface with GitLab and Microfocus ALM for test automation, covering the primary endpoints, their usage, and expected responses.

## Table of Contents
1. [Authentication](#authentication)
   1. [GitLab Authentication](#gitlab-authentication)
   2. [Microfocus ALM Authentication](#microfocus-alm-authentication)
2. [Test Retrieval](#test-retrieval)
3. [Test Posting](#test-posting)

## Authentication

### GitLab Authentication
- **Endpoint**: `/api/v1/gitlab/auth`
- **Method**: `POST`
- **Description**: Authenticates the user with the GitLab API for Version 1.
- **Request Body**:
  ```json
  {
    "username": "string",
    "apiToken": "string"
  }
  ```
- **Response**:
  - `200 OK`: Authentication successful with returned session details.
  - `401 Unauthorized`: Authentication failed.

### Microfocus ALM Authentication
- **Endpoint**: `/api/v1/microfocus/alm/auth`
- **Method**: `POST`
- **Description**: Authenticates the user with the Microfocus ALM API for Version 1.
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  - `200 OK`: Authentication successful with returned session details.
  - `401 Unauthorized`: Authentication failed.

## Test Retrieval

### Get Final Tests from Cypress
- **Endpoint**: `/api/v1/tests/final`
- **Method**: `GET`
- **Description**: Retrieves final tests from the Cypress `final_tests` subfolder for Version 1.
- **Response**:
  - `200 OK`: Successfully retrieved tests.
  - `404 Not Found`: No tests found in the specified location.

## Test Posting

### Post Tests to Microfocus ALM
- **Endpoint**: `/api/v1/microfocus/alm/post`
- **Method**: `POST`
- **Description**: Posts formatted tests to a specified folder in Microfocus ALM for Version 1.
- **Request Body**:
  ```json
  {
    "tests": "array of test objects"
  }
  ```
- **Response**:
  - `200 OK`: Tests successfully posted.
  - `400 Bad Request`: Invalid test data format.
