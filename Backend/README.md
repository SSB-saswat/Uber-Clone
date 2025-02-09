# User Registration Endpoint

## Endpoint
**POST /users/register**

## Description
This endpoint registers a new user. It validates the incoming data and creates a user record with a hashed password. On successful registration, it returns an authentication token and the created user.

## Request Data
- **email** (string): A valid email address.
- **fullName** (object):
  - **firstName** (string): At least 3 characters long.
  - **lastName** (string, optional): At least 3 characters if provided.
- **password** (string): At least 6 characters long.

**Sample Request Body:**
```json
{
  "email": "user@example.com",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "password": "yourpassword"
}
```

## Response

### Success (201 Created)
```json
{
  "token": "jwt.token.here",
  "user": {
    "_id": "userId",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "user@example.com",
    "socketId": ""
  }
}
```

### Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Validation error message",
      "param": "fieldName",
      "location": "body"
    }
  ]
}
```

## Notes
- Ensure that the request Content-Type is set to `application/json`.
- The endpoint validates the incoming data and performs password hashing before creating the user.

# User Login Endpoint

## Endpoint
**POST /users/login**

## Description
This endpoint authenticates a user. It validates the provided credentials and returns an authentication token along with user information upon successful login.

## Request Data
- **email** (string): A valid email address.
- **password** (string): At least 6 characters long.

**Sample Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

## Response

### Success (200 OK)
```json
{
  "token": "jwt.token.here",
  "user": {
    "_id": "userId",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "user@example.com",
    "socketId": ""
  }
}
```

### Error (401 Unauthorized)
```json
{
  "errors": [
    {
      "msg": "Invalid credentials",
      "param": "email",
      "location": "body"
    }
  ]
}
```

## Notes
- Ensure that the request Content-Type is set to `application/json`.
- The endpoint validates the provided credentials and returns an authentication token upon successful login.

# User Profile Endpoint

## Endpoint
**GET /users/profile**

## Description
This endpoint returns the profile details of the authenticated user. It requires a valid authentication token.

## Response

### Success (200 OK)
```json
{
  "user": {
    "_id": "userId",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "user@example.com",
    "socketId": ""
  }
}
```

### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```
