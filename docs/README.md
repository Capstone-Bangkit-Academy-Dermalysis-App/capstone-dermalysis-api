# capstone-dermalysis-api

## User Authentication API

### Register a new user

**Endpoint:** `/api/register`

**Method:** `POST`

**Description:** Registers a new user using the Firebase Authentication service.

**Request Body:**

- `email` as `string`, must be unique
- `password` as `string`, must be at least 8 characters

**Response:**

- `201 OK`
```json
{
    success: true,
    message: "Verification email sent! User created successfully!",
    data: [userCredential]
}
```
- `422 Bad Request`
```json
{
    email: "Email is required",
    password: "Password is required"
}
```
- `500 Internal Server Error`
```json
{
    success: false,
    message: "Error sending email verification"
}
```

### Login

**Endpoint:** `/api/login`

**Method:** `POST`

**Description:** User login using the Firebase Authentication service.

**Request Body:**

- `email` as `string`, must be Registed
- `password` as `string`, must be Correct

**Response:**
- `200 OK`
```json
{
    success: true,
    message: "User logged in successfully",
    data: [userCredential]
}
```
- `422 Bad Request`
```json
{
    success: false,
    message: "Email and Password are required"
}
```
- `500 Internal Server Error`
```json
{
    success: false, 
    message: errorMessage
}
```

### Logout

**Endpoint:** `/api/logout`

**Method:** `POST`

**Description:** User logout using the Firebase Authentication service.

**Request Cookies:**

- `access_token` as `string`, must be Filled

**Response:**
- `200 OK`
```json
{
    success: true, 
    message: "User logged out successfully"
}
```
- `422 Bad Request`
```json
{
    success: false, 
    message: "Access token is missing"
}
```
- `500 Internal Server Error`
```json
{
    success: false, 
    message: "Internal Server Error"
}
```

### Reset Password

**Endpoint:** `/api/reset-password`

**Method:** `POST`

**Description:** User reset password using the Firebase Authentication service.

**Request Body:**

- `email` as `string`, must be Registed

**Response:**
- `200 OK`
```json
{
    success: true, 
    message: "Password reset email sent successfully!"
}
```
- `422 Bad Request`
```json
{
    success: false,
    message: "Email is required"
}
```
- `500 Internal Server Error`
```json
{
    success: false, 
    message: "Internal Server Error"
}
```
