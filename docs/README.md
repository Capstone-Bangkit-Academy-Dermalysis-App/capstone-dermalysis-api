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
- `201 OK`: Registration Succesfull! Verification email has been sent!
- `422 Bad Request` : Invalid input or email already exists.
- `500 Internal Server Error` : Error registering user.

### Login

**Endpoint:** `/api/login`

**Method:** `POST`

**Description:** User login using the Firebase Authentication service.

**Request Body:**

- `email` as `string`, must be Registed
- `password` as `string`, must be Correct

**Response:**
- `200 OK`: User logged in successfully!
- `422 Bad Request` : Invalid input.
- `500 Internal Server Error` : Error login user.

### Logout

**Endpoint:** `/api/logout`

**Method:** `POST`

**Description:** User logout using the Firebase Authentication service.

**Request Cookies:**

- `access_token` as `string`, must be Filled

**Response:**
- `200 OK`: User logged out successfully!
- `400 Bad Request` : Invalid input.
- `500 Internal Server Error` : Error logout user.

### Reset Password

**Endpoint:** `/api/reset-password`

**Method:** `POST`

**Description:** User reset password using the Firebase Authentication service.

**Request Body:**

- `email` as `string`, must be Registed

**Response:**
- `200 OK`: Password Reset Email sent successfully!
- `400 Bad Request` : Invalid input.
- `500 Internal Server Error` : Error sending email.