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

# User Logout Endpoint

## Endpoint
**GET /users/logout**

## Description
This endpoint logs out the authenticated user by clearing the authentication token and adding it to the blacklist. A valid token is required.

## Response

### Success (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

# Captain Registration Endpoint

## Endpoint
**POST /captains/register**

## Description
This endpoint registers a new captain. It validates the incoming data including vehicle details, hashes the password, and creates a captain record. On successful registration, it returns an authentication token and the captain details.

## Request Data
- **email** (string): A valid email address.
- **fullName** (object):
  - **firstName** (string): At least 3 characters long.
  - **lastName** (string, optional): At least 3 characters if provided.
- **password** (string): At least 6 characters long.
- **vehicle** (object):
  - **color** (string): At least 3 characters long.
  - **plate** (string): At least 3 characters long.
  - **capacity** (number): Must be at least 1.
  - **vehicleType** (string): Must be one of 'car', 'motorcycle', 'auto'.

**Sample Request Body:**
```json
{
  "email": "captain@example.com",
  "fullName": {
    "firstName": "Jane",
    "lastName": "Doe"
  },
  "password": "yourpassword",
  "vehicle": {
    "color": "blue",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Response

### Success (201 Created)
```json
{
  "token": "jwt.token.here",
  "captain": {
    "_id": "captainId",
    "fullName": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "captain@example.com",
    "socketId": "",
    "status": "inactive",
    "vehicle": {
      "color": "blue",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
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
