# capstone-dermalysis-api

## User Authentication API

### Register a new user

**Endpoint:** `/api/register`

**Method:** `POST`

**Description:** Registers a new user using the Firebase Authentication service.

**Request Body:**

- `email` as `string`, must be unique
- `password` as `string`, must be at least 8 characters
- `name` as `string`, must be at least 3 characters

**Response:**

- `201 OK`

```json
{
  "success": true,
  "message": "Verification email sent! User created successfully!",
  "data": [
    {
      "user": {
        "uid": "z1VAikSrSDSvyZ2xSOlrnxlOqXO2",
        "email": "kucingoren4@gmail.com",
        "emailVerified": false,
        "displayName": "Kucing Oren",
        "isAnonymous": false,
        "providerData": [
          {
            "providerId": "password",
            "uid": "kucingoren4@gmail.com",
            "displayName": "Kucing Oren",
            "email": "kucingoren4@gmail.com",
            "phoneNumber": null,
            "photoURL": null
          }
        ],
        "stsTokenManager": {
          "refreshToken": "AMf-vBwt1smzud1P9bcVO-5nTmGsDTyY37e_vPasDtpmMoadVmJALa2JbHNv-xinmUoEx1nZlBjXe7fWF03BDGBjQ4oWiXCi8cRrqLn0vm2tcP2djscXXX2rVSxqTRPugZG2I0kPOtDlVS5v5XhP4iaY19ALrPfc-mu-X-isg7cZlH3xq2s5CBgOzsyhZiEkLVW-Wu1kPFR5Lg08UHFOZwK0FLsRXDf8wexFo0NHtCNVYRHMVMyA2qc",
          "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzMDUxMThiZTBmNTZkYzA4NGE0NmExN2RiNzU1NjVkNzY4YmE2ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2Fwc3RvbmUtZGVybWFseXNpcyIsImF1ZCI6ImNhcHN0b25lLWRlcm1hbHlzaXMiLCJhdXRoX3RpbWUiOjE3MTc4NDcyMDEsInVzZXJfaWQiOiJ6MVZBaWtTclNEU3Z5WjJ4U09scm54bE9xWE8yIiwic3ViIjoiejFWQWlrU3JTRFN2eVoyeFNPbHJueGxPcVhPMiIsImlhdCI6MTcxNzg0NzIwMSwiZXhwIjoxNzE3ODUwODAxLCJlbWFpbCI6Imt1Y2luZ29yZW40QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJrdWNpbmdvcmVuNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HMftVIg-Mu6t-BMpqZ13bSFNP-9TjoDa2k4mBUrGGZofRZUyrEPwtbVTKHr-LYJ2aipi6_j26lMV1WIsMTM3cQXsletvpHTaI4STyEEzT3bHQ1t5k0D057jGTsFwPvXp88jmmw-RjJ4TY7jNFnmnm7BCrRsosQeLKRJUu3aDI_J3QaVBhvCp-Jt2XP8lg7pK5mjmRV5pZ266UkwXwFyxfX8t2oXRvo6pMX9ZGrSsJzdBpzq30YmUUXhIl5bgYTXlBON1jHD3Ad72OK4Scx9gNKifEDfLe7s2WMbXHKJsMqkSS77pabu0fSATuEweUc7Rqx7AwDzuSlQy_5san2WAQg",
          "expirationTime": 1717850802090
        },
        "createdAt": "1717847201768",
        "lastLoginAt": "1717847201768",
        "apiKey": "AIzaSyDMjwlqs32201kByKgR1xkjVp2QZeosMm4",
        "appName": "[DEFAULT]"
      },
      "providerId": null,
      "_tokenResponse": {
        "kind": "identitytoolkit#SignupNewUserResponse",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzMDUxMThiZTBmNTZkYzA4NGE0NmExN2RiNzU1NjVkNzY4YmE2ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2Fwc3RvbmUtZGVybWFseXNpcyIsImF1ZCI6ImNhcHN0b25lLWRlcm1hbHlzaXMiLCJhdXRoX3RpbWUiOjE3MTc4NDcyMDEsInVzZXJfaWQiOiJ6MVZBaWtTclNEU3Z5WjJ4U09scm54bE9xWE8yIiwic3ViIjoiejFWQWlrU3JTRFN2eVoyeFNPbHJueGxPcVhPMiIsImlhdCI6MTcxNzg0NzIwMSwiZXhwIjoxNzE3ODUwODAxLCJlbWFpbCI6Imt1Y2luZ29yZW40QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJrdWNpbmdvcmVuNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HMftVIg-Mu6t-BMpqZ13bSFNP-9TjoDa2k4mBUrGGZofRZUyrEPwtbVTKHr-LYJ2aipi6_j26lMV1WIsMTM3cQXsletvpHTaI4STyEEzT3bHQ1t5k0D057jGTsFwPvXp88jmmw-RjJ4TY7jNFnmnm7BCrRsosQeLKRJUu3aDI_J3QaVBhvCp-Jt2XP8lg7pK5mjmRV5pZ266UkwXwFyxfX8t2oXRvo6pMX9ZGrSsJzdBpzq30YmUUXhIl5bgYTXlBON1jHD3Ad72OK4Scx9gNKifEDfLe7s2WMbXHKJsMqkSS77pabu0fSATuEweUc7Rqx7AwDzuSlQy_5san2WAQg",
        "email": "kucingoren4@gmail.com",
        "refreshToken": "AMf-vBwt1smzud1P9bcVO-5nTmGsDTyY37e_vPasDtpmMoadVmJALa2JbHNv-xinmUoEx1nZlBjXe7fWF03BDGBjQ4oWiXCi8cRrqLn0vm2tcP2djscXXX2rVSxqTRPugZG2I0kPOtDlVS5v5XhP4iaY19ALrPfc-mu-X-isg7cZlH3xq2s5CBgOzsyhZiEkLVW-Wu1kPFR5Lg08UHFOZwK0FLsRXDf8wexFo0NHtCNVYRHMVMyA2qc",
        "expiresIn": "3600",
        "localId": "z1VAikSrSDSvyZ2xSOlrnxlOqXO2"
      },
      "operationType": "signIn"
    }
  ]
}
```

- `422 Bad Request`

```json
{
  "success": false,
  "message": "Email, password, and name are required."
}
```

- `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Error sending email verification"
}
```

- `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Error updating displayName"
}
```

- `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Error storing user in database"
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
  "success": true,
  "message": "User logged in successfully",
  "data": [
    {
      "user": {
        "uid": "z1VAikSrSDSvyZ2xSOlrnxlOqXO2",
        "email": "kucingoren4@gmail.com",
        "emailVerified": false,
        "displayName": "Kucing Oren",
        "isAnonymous": false,
        "providerData": [
          {
            "providerId": "password",
            "uid": "kucingoren4@gmail.com",
            "displayName": "Kucing Oren",
            "email": "kucingoren4@gmail.com",
            "phoneNumber": null,
            "photoURL": null
          }
        ],
        "stsTokenManager": {
          "refreshToken": "AMf-vBwt1smzud1P9bcVO-5nTmGsDTyY37e_vPasDtpmMoadVmJALa2JbHNv-xinmUoEx1nZlBjXe7fWF03BDGBjQ4oWiXCi8cRrqLn0vm2tcP2djscXXX2rVSxqTRPugZG2I0kPOtDlVS5v5XhP4iaY19ALrPfc-mu-X-isg7cZlH3xq2s5CBgOzsyhZiEkLVW-Wu1kPFR5Lg08UHFOZwK0FLsRXDf8wexFo0NHtCNVYRHMVMyA2qc",
          "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzMDUxMThiZTBmNTZkYzA4NGE0NmExN2RiNzU1NjVkNzY4YmE2ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2Fwc3RvbmUtZGVybWFseXNpcyIsImF1ZCI6ImNhcHN0b25lLWRlcm1hbHlzaXMiLCJhdXRoX3RpbWUiOjE3MTc4NDcyMDEsInVzZXJfaWQiOiJ6MVZBaWtTclNEU3Z5WjJ4U09scm54bE9xWE8yIiwic3ViIjoiejFWQWlrU3JTRFN2eVoyeFNPbHJueGxPcVhPMiIsImlhdCI6MTcxNzg0NzIwMSwiZXhwIjoxNzE3ODUwODAxLCJlbWFpbCI6Imt1Y2luZ29yZW40QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJrdWNpbmdvcmVuNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HMftVIg-Mu6t-BMpqZ13bSFNP-9TjoDa2k4mBUrGGZofRZUyrEPwtbVTKHr-LYJ2aipi6_j26lMV1WIsMTM3cQXsletvpHTaI4STyEEzT3bHQ1t5k0D057jGTsFwPvXp88jmmw-RjJ4TY7jNFnmnm7BCrRsosQeLKRJUu3aDI_J3QaVBhvCp-Jt2XP8lg7pK5mjmRV5pZ266UkwXwFyxfX8t2oXRvo6pMX9ZGrSsJzdBpzq30YmUUXhIl5bgYTXlBON1jHD3Ad72OK4Scx9gNKifEDfLe7s2WMbXHKJsMqkSS77pabu0fSATuEweUc7Rqx7AwDzuSlQy_5san2WAQg",
          "expirationTime": 1717850802090
        },
        "createdAt": "1717847201768",
        "lastLoginAt": "1717847201768",
        "apiKey": "AIzaSyDMjwlqs32201kByKgR1xkjVp2QZeosMm4",
        "appName": "[DEFAULT]"
      },
      "providerId": null,
      "_tokenResponse": {
        "kind": "identitytoolkit#SignupNewUserResponse",
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzMDUxMThiZTBmNTZkYzA4NGE0NmExN2RiNzU1NjVkNzY4YmE2ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2Fwc3RvbmUtZGVybWFseXNpcyIsImF1ZCI6ImNhcHN0b25lLWRlcm1hbHlzaXMiLCJhdXRoX3RpbWUiOjE3MTc4NDcyMDEsInVzZXJfaWQiOiJ6MVZBaWtTclNEU3Z5WjJ4U09scm54bE9xWE8yIiwic3ViIjoiejFWQWlrU3JTRFN2eVoyeFNPbHJueGxPcVhPMiIsImlhdCI6MTcxNzg0NzIwMSwiZXhwIjoxNzE3ODUwODAxLCJlbWFpbCI6Imt1Y2luZ29yZW40QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJrdWNpbmdvcmVuNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HMftVIg-Mu6t-BMpqZ13bSFNP-9TjoDa2k4mBUrGGZofRZUyrEPwtbVTKHr-LYJ2aipi6_j26lMV1WIsMTM3cQXsletvpHTaI4STyEEzT3bHQ1t5k0D057jGTsFwPvXp88jmmw-RjJ4TY7jNFnmnm7BCrRsosQeLKRJUu3aDI_J3QaVBhvCp-Jt2XP8lg7pK5mjmRV5pZ266UkwXwFyxfX8t2oXRvo6pMX9ZGrSsJzdBpzq30YmUUXhIl5bgYTXlBON1jHD3Ad72OK4Scx9gNKifEDfLe7s2WMbXHKJsMqkSS77pabu0fSATuEweUc7Rqx7AwDzuSlQy_5san2WAQg",
        "email": "kucingoren4@gmail.com",
        "refreshToken": "AMf-vBwt1smzud1P9bcVO-5nTmGsDTyY37e_vPasDtpmMoadVmJALa2JbHNv-xinmUoEx1nZlBjXe7fWF03BDGBjQ4oWiXCi8cRrqLn0vm2tcP2djscXXX2rVSxqTRPugZG2I0kPOtDlVS5v5XhP4iaY19ALrPfc-mu-X-isg7cZlH3xq2s5CBgOzsyhZiEkLVW-Wu1kPFR5Lg08UHFOZwK0FLsRXDf8wexFo0NHtCNVYRHMVMyA2qc",
        "expiresIn": "3600",
        "localId": "z1VAikSrSDSvyZ2xSOlrnxlOqXO2"
      },
      "operationType": "signIn"
    }
  ]
}
```

- `422 Bad Request`

```json
{
  "success": false,
  "message": "Email and Password are required"
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
  "success": true,
  "message": "User logged out successfully"
}
```

- `422 Bad Request`

```json
{
  "success": false,
  "message": "Access token is missing"
}
```

- `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Internal Server Error"
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
  "success": true,
  "message": "Password reset email sent successfully!"
}
```

- `422 Bad Request`

```json
{
  "success": false,
  "message": "Email is required"
}
```

- `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```
