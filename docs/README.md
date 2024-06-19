# capstone-dermalysis-api

**Base url**: https://capstone-dermalysis-api-zwu3htolhq-et.a.run.app/

## User Authentication API

### Register a new user

**Endpoint:** `/api/register`

**Method:** `POST`

**Description:** Registers a new user using the Firebase Authentication service.

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`
- `Content-Type` : `application/json`

**Request Body:**

- `email` as `string`, must be unique
- `password` as `string`, must be at least 8 characters
- `name` as `string`, must be at least 3 characters

```json
{
  "email": "youremail@email.com",
  "password": "password",
  "name": "Your Name"
}
```

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

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`
- `Content-Type` : `application/json`

**Request Body:**

- `email` as `string`, must be Registed
- `password` as `string`, must be Correct

```json
{
  "email": "youremail@email.com",
  "password": "password"
}
```

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
          "refreshToken": "AMf-vBwt1smzud1P9bcVO-5nTkdkdsDTyY37e_vPasDtpmMoadVmJALa2JbHNv-xinmUoEx1nZlBjXe7fWF03BDGBjQ4oWiXCi8cRrqLn0vm2tcP2djscXXX2rVSxqTRPugZG2I0kPOtDlVS5v5XhP4iaY19ALrPfc-mu-X-isg7cZlH3xq2s5CBgOzsyhZiEkLVW-Wu1kPFR5Lg08UHFOZwK0FLsRXDf8wexFo0NHtCNVYRHMVMyA2qc",
          "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzMDUxMThiZTBmNTZkYzA4NGE0NmExN2RiNzU1NjVkNzY4YmE2ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2Fwc3RvbmUtZGVybWFseXNpcyIsImF1ZCI6ImNhcHN0b25lLWRlcm1hbHlzaXMiLCJhdXRoX3RpbWUiOjE3MTc4NDcyMDEsInVzZXJfaWQiOiJ6MVZBaWtTclNEU3Z5WjJ4U09scm54bE9xWE8yIiwic3ViIjoiejFWQWlrU3JTRFN2eVoyeFNPbHJueGxPcVhPMiIsImlhdCI6MTcxNzg0NzIwMSwiZXhwIjoxNzE3ODUwODAxLCJlbWFpkdkdImt1Y2luZ29yZW40QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJrdWNpbmdvcmVuNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HMftVIg-Mu6t-BMpqZ13bSFNP-9TjoDa2k4mBUrGGZofRZUyrEPwtbVTKHr-LYJ2aipi6_j26lMV1WIsMTM3cQXsletvpHTaI4STyEEzT3bHQ1t5k0D057jGTsFwPvXp88jmmw-RjJ4TY7jNFnmnm7BCrRsosQeLKRJUu3aDI_J3QaVBhvCp-Jt2XP8lg7pK5mjmRV5pZ266UkwXwFyxfX8t2oXRvo6pMX9ZGrSsJzdBpzq30YmUUXhIl5bgYTXlBON1jHD3Ad72OK4Scx9gNKifEDfLe7s2WMbXHKJsMqkSS77pabu0fSATuEweUc7Rqx7AwDzuSlQy_5san2WAQg",
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
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzMDUxMThiZTBmNTZkYzA4NGE0NmExN2RiNzU1NjVkNzY4YmE2ZmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2Fwc3RvbmUtZGVybWFseXNpcyIsImF1ZCI6ImNhcHN0b25lLWRlcm1hbHlzaXMiLCJhdXRoX3RpbWUiOjE3MTc4NDcyMDEsInVzZXJfaWQiOiJ6MVZBaWtTclNEU3Z5WjJ4U09scm54bE9xWE8yIiwic3ViIjoiejFWQWlrU3245llda2eVoyeFNPbHJueGxPcVhPMiIsImlhdCI6MTcxNzg0NzIwMSwiZXhwIjoxNzE3ODUwODAxLCJlbWFpbCI6Imt1Y2luZ29yZW40QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJrdWNpbmdvcmVuNEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HMftVIg-Mu6t-BMpqZ13bSFNP-9TjoDa2k4mBUrGGZofRZUyrEPwtbVTKHr-LYJ2aipi6_j26lMV1WIsMTM3cQXsletvpHTaI4STyEEzT3bHQ1t5k0D057jGTsFwPvXp88jmmw-RjJ4TY7jNFnmnm7BCrRsosQeLKRJUu3aDI_J3QaVBhvCp-Jt2XP8lg7pK5mjmRV5pZ266UkwXwFyxfX8t2oXRvo6pMX9ZGrSsJzdBpzq30YmUUXhIl5bgYTXlBON1jHD3Ad72OK4Scx9gNKifEDfLe7s2WMbXHKJsMqkSS77pabu0fSATuEweUc7Rqx7AwDzuSlQy_5san2WAQg",
        "email": "kucingoren4@gmail.com",
        "refreshToken": "AMf-vBwt1smzud1P9bcVO-5nkakaDTyY37e_vPasDtpmMoadVmJALa2JbHNv-xinmUoEx1nZlBjXe7fWF03BDGBjQ4oWiXCi8cRrqLn0vm2tcP2djscXXX2rVSxqTRPugZG2I0kPOtDlVS5v5XhP4iaY19ALrPfc-mu-X-isg7cZlH3xq2s5CBgOzsyhZiEkLVW-Wu1kPFR5Lg08UHFOZwK0FLsRXDf8wexFo0NHtCNVYRHMVMyA2qc",
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

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`

**Request Cookies:**

- `access_token` as `string`, must be set

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

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`
- `Content-Type` : `application/json`

**Request Body:**

- `email` as `string`, must be Registed

```json
{
  "email": "yourmail@mail.com"
}
```

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

### Store a new user

**Endpoint:** `/api/users`

**Method:** `POST`

**Description:** Store a new user using to database directly.

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`
- `Content-Type` : `application/json`

**Request Body:**

- `id` as `string`, This is userUid in firebase and should be unique
- `name` as `string`, This is displayName in firebase
- `email` as `string`, This is identifier aka email in firebase and should be unique

```json
{
  "id": "yourUserUid",
  "name": "Your Name",
  "email": "youremail@email.com"
}
```

**Response:**

- `200 OK`

```json
{
  "success": true,
  "message": "Success to store user"
}
```

- `409 Conflict`

```json
{
  "success": false,
  "message": "User already exists"
}
```

- `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Error to store users to database. Please check again the attributes"
}
```

### Update User Display Name

**Endpoint:** `/api/users/:userId/name`

**Method:** `PUT`

**Description:** Change the display name of user.

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`
- `Content-Type` : `application/json`

**Request Cookies:**

- `access_token` as `string`, must be set

**Request Body:**

- `name` as `string`, The new display name

```json
{
  "name": "Your New Name"
}
```

**Response:**

- `200 OK`

```json
{
  "success": true,
  "message": "Success to update user name"
}
```

- `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Error to update user name: (error message)"
}
```

### Get all registered user from database

**Endpoint:** `/api/users`

**Method:** `GET`

**Description:** Get All users from database (not from firebase).

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`

**Response:**

- `200 OK`

```json
{
  "success": true,
  "message": "Fetching all user from database was successfully",
  "data": [
    {
      "id": "z1VAikSrSDSvyZ2xSOlrnxlOqXO2",
      "identifier": "example@mail.com",
      "name": "Example name"
    }
  ]
}
```

- `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Error fetching users: (error message)"
}
```

## Machine Learning API

### Predict the image with user

**Endpoint:** `/api/predict/:userId`

**Example endpoint** `/api/predict/z1VAikgewfESDSvyZ2xSOlrnxlOqXO2`

**Method:** `POST`

**Description:** Predict the image using machine learning model to get skin disease and the history is SAVED to user.

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`
- `Content-Type`: `multipart/form-data`

**Request Cookies:**

- `access_token` as `string`, must be set

**Request Body:**

- `file` as `file` must be a valid image file, max size 1MB,

**Response:**

- `201 OK`

```json
{
  "success": true,
  "message": "Model is predicted successfuly",
  "data": {
    "id": "clx76kkff3ff003drpd5mtj4zft",
    "userId": "jdUl23tylq7SISU4LyXjl7kTgFzm2",
    "name": "Kutu Air",
    "label": "kutu-air",
    "latinName": "Athlete's foot",
    "uploadedImage": "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/predictions/6321992e645eb.jpg",
    "skinDiseaseImage": "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/assets/Kutu%20Air/6321992e645eb.jpg",
    "confidenceScore": 99.62306618690491,
    "description": "Kutu air atau kerap juga disebut athlete’s foot merupakan penyakit tinea pedis yang disebabkan dermatofita terutama Trichophyton rubrum, Trichophyton mentagrophytes dan Epidermophyton floccosum. Penyakit ini dapat menyebabkan ruam kemerahan yang bersisik dan gatal di kulit kaki. Penyakit ini dapat menular dan dapat dipengaruhi oleh faktor kaki yang sering basah atau lembab akibat berkeringat akibat memakai sepatu boots atau sepatu ketat.",
    "cause": {
      "section1": "Penyebab kutu air atau tinea pedis adalah berbagai jenis jamur. Namun, penyebab yang paling umum ditemui adalah jenis dermatophytes, yaitu jenis jamur yang juga menjadi penyebab kurap. Jenis jamur ini hidup di lingkungan yang bersuhu hangat dan lembap, seperti kamar mandi dan kolam renang. Penularan jamur ini dapat melalui sentuhan langsung dengan kulit yang terinfeksi atau benda yang terkontaminasi. Selanjutnya, jamur kutu air akan menetap dan berkembang biak pada permukaan kulit, dan dapat masuk ke dalam kulit dan menimbulkan infeksi, jika terdapat celah pada kulit. Berikut tiga jamur dermatofit yang paling umum menyebabkan kutu air:",
      "section2": [
        "Trichophyton (T.) rubrum.",
        "T. interdigitale, sebelumnya disebut T. mentagrophytes var. Interdigital.",
        "Epidermophyton floccosum."
      ]
    },
    "symptom": {
      "section1": "Beberapa gejala kutu air yang umum terjadi, antara lain: ",
      "section2": [
        "Iritasi seperti gatal, sensasi panas, terbakar, dan menyengat di antara jari-jari kaki.",
        "Area kulit kaki yang terkena tampak berwarna kemerahan.",
        "Bagian samping dan telapak kaki juga terasa sangat gatal.",
        "Kuku kaki mengalami perubahan warna, menjadi lebih tebal, dan mudah rapuh.",
        "Kuku kaki terluka bahkan tampak lepas tempatnya semula.",
        "Kulit kaki terlihat pecah-pecah dan mengelupas, terutama di antara jari kaki dan pada telapak kaki.",
        "Kulit melepuh dan lecet akibat gatal pada kaki.",
        "Kulit tampak lebih kering pada area telapak atau sisi samping kaki.",
        "Timbul cairan dari area kulit kaki yang ditumbuhi jamur."
      ]
    },
    "treatment": [
      {
        "merk": ["Zoralin", "Mycoral", "Anfuhex"],
        "tipe": "Bentuk sediaan: Salep/Krim",
        "zatAktif": "Zat aktif: Ketokonazol"
      },
      {
        "merk": ["Thecart", "Kalpanax", "Fungares"],
        "tipe": "Bentuk sediaan: Salep/Krim",
        "zatAktif": "Zat aktif: Miconazole"
      },
      {
        "merk": ["Fungiderm", "Bernesten", "Hufaderm"],
        "tipe": "Bentuk sediaan: Salep/Krim",
        "zatAktif": "Zat aktif: Clotrimazole"
      }
    ],
    "createdAt": "2024-06-09T06:46:03.713Z",
    "updatedAt": "2024-06-09T06:46:03.713Z"
  }
}
```

- `400 Bad Request`

```json
{
  "success": false,
  "message": "Please upload a file"
}
```

```json
{
  "success": false,
  "message": "Error, No token provided"
}
```

- `403 Forbidden`

```json
{
  "success": false,
  "message": "Error, No token provided"
}
```

- `403 Forbidden`

```json
{
  "success": false,
  "message": "Error, Unauthorized"
}
```

- `404 Not found`

```json
{
  "success": false,
  "message": "User not found"
}
```

- `413 Internal Server Error`

```json
{
  "success": false,
  "message": "Model is failed to predicted"
}
```

- `422 Unprocessable Content`

```json
{
  "success": false,
  "message": "Model is predicted successfully, but the confidence score is low: 57%. Please try again with another image."
}
```

### Predict the image without user

**Endpoint:** `/api/predict`

**Method:** `POST`

**Description:** Predict the image using machine learning model to get skin disease and history is NOT SAVED to user

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`
- `Content-Type`: `multipart/form-data`

**Request Body:**`

- `file` as `file` must be a valid image file, max size 1MB,

**Response:**

- `201 OK`

```json
{
  "success": true,
  "message": "Model is predicted successfuly",
  "data": {
    "id": "clx76kkff3ff003drpd5mtj4zft",
    "userId": null,
    "name": "Kutu Air",
    "label": "kutu-air",
    "latinName": "Athlete's foot",
    "uploadedImage": "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/predictions/6321992e645eb.jpg",
    "skinDiseaseImage": "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/assets/Kutu%20Air/6321992e645eb.jpg",
    "confidenceScore": 99.62306618690491,
    "description": "Kutu air atau kerap juga disebut athlete’s foot merupakan penyakit tinea pedis yang disebabkan dermatofita terutama Trichophyton rubrum, Trichophyton mentagrophytes dan Epidermophyton floccosum. Penyakit ini dapat menyebabkan ruam kemerahan yang bersisik dan gatal di kulit kaki. Penyakit ini dapat menular dan dapat dipengaruhi oleh faktor kaki yang sering basah atau lembab akibat berkeringat akibat memakai sepatu boots atau sepatu ketat.",
    "cause": {
      "section1": "Penyebab kutu air atau tinea pedis adalah berbagai jenis jamur. Namun, penyebab yang paling umum ditemui adalah jenis dermatophytes, yaitu jenis jamur yang juga menjadi penyebab kurap. Jenis jamur ini hidup di lingkungan yang bersuhu hangat dan lembap, seperti kamar mandi dan kolam renang. Penularan jamur ini dapat melalui sentuhan langsung dengan kulit yang terinfeksi atau benda yang terkontaminasi. Selanjutnya, jamur kutu air akan menetap dan berkembang biak pada permukaan kulit, dan dapat masuk ke dalam kulit dan menimbulkan infeksi, jika terdapat celah pada kulit. Berikut tiga jamur dermatofit yang paling umum menyebabkan kutu air:",
      "section2": [
        "Trichophyton (T.) rubrum.",
        "T. interdigitale, sebelumnya disebut T. mentagrophytes var. Interdigital.",
        "Epidermophyton floccosum."
      ]
    },
    "symptom": {
      "section1": "Beberapa gejala kutu air yang umum terjadi, antara lain: ",
      "section2": [
        "Iritasi seperti gatal, sensasi panas, terbakar, dan menyengat di antara jari-jari kaki.",
        "Area kulit kaki yang terkena tampak berwarna kemerahan.",
        "Bagian samping dan telapak kaki juga terasa sangat gatal.",
        "Kuku kaki mengalami perubahan warna, menjadi lebih tebal, dan mudah rapuh.",
        "Kuku kaki terluka bahkan tampak lepas tempatnya semula.",
        "Kulit kaki terlihat pecah-pecah dan mengelupas, terutama di antara jari kaki dan pada telapak kaki.",
        "Kulit melepuh dan lecet akibat gatal pada kaki.",
        "Kulit tampak lebih kering pada area telapak atau sisi samping kaki.",
        "Timbul cairan dari area kulit kaki yang ditumbuhi jamur."
      ]
    },
    "treatment": [
      {
        "merk": ["Zoralin", "Mycoral", "Anfuhex"],
        "tipe": "Bentuk sediaan: Salep/Krim",
        "zatAktif": "Zat aktif: Ketokonazol"
      },
      {
        "merk": ["Thecart", "Kalpanax", "Fungares"],
        "tipe": "Bentuk sediaan: Salep/Krim",
        "zatAktif": "Zat aktif: Miconazole"
      },
      {
        "merk": ["Fungiderm", "Bernesten", "Hufaderm"],
        "tipe": "Bentuk sediaan: Salep/Krim",
        "zatAktif": "Zat aktif: Clotrimazole"
      }
    ],
    "createdAt": "2024-06-09T06:46:03.713Z",
    "updatedAt": "2024-06-09T06:46:03.713Z"
  }
}
```

- `400 Bad Request`

```json
{
  "success": false,
  "message": "Please upload a file"
}
```

- `413 Internal Server Error`

```json
{
  "success": false,
  "message": "Model is failed to predicted"
}
```

- `422 Unprocessable Content`

```json
{
  "success": false,
  "message": "Model is predicted successfully, but the confidence score is low: 57%. Please try again with another image."
}
```

### Get All user prediction history

**Endpoint:** `/api/predictions/:userId`

**Example endpoint** `/api/predictions/z1VAikgewadfgvyZ2xSOlrnxlOqXO2`

**Method:** `GET`

**Description:** Get all user prediction history

**Headers**

- `X-Dermalysis-Signature` : `(Secret hash)`

**Request Cookies:**

- `access_token` as `string`, must be set

**Response:**

- `200 OK`

```json
{
  "success": true,
  "message": "Fetching all predictions was successfully",
  "data": [
    {
      "id": "clx75tqpr000113radcx51kgi",
      "userId": "jdUlpexLq7SISU4LyXjl7kTgFzm2",
      "name": "Kutu Air",
      "label": "kutu-air",
      "latinName": "Athlete's foot",
      "uploadedImage": "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/predictions/6321992e645eb.jpg",
      "skinDiseaseImage": "https://storage.googleapis.com/bangkit-capstone-dermalysis-prod/assets/Kutu%20Air/6321992e645eb.jpg",
      "confidenceScore": 99.62306618690491,
      "description": "Kutu air atau kerap juga disebut athlete’s foot merupakan penyakit tinea pedis yang disebabkan dermatofita terutama Trichophyton rubrum, Trichophyton mentagrophytes dan Epidermophyton floccosum. Penyakit ini dapat menyebabkan ruam kemerahan yang bersisik dan gatal di kulit kaki. Penyakit ini dapat menular dan dapat dipengaruhi oleh faktor kaki yang sering basah atau lembab akibat berkeringat akibat memakai sepatu boots atau sepatu ketat.",
      "cause": {
        "section1": "Penyebab kutu air atau tinea pedis adalah berbagai jenis jamur. Namun, penyebab yang paling umum ditemui adalah jenis dermatophytes, yaitu jenis jamur yang juga menjadi penyebab kurap. Jenis jamur ini hidup di lingkungan yang bersuhu hangat dan lembap, seperti kamar mandi dan kolam renang. Penularan jamur ini dapat melalui sentuhan langsung dengan kulit yang terinfeksi atau benda yang terkontaminasi. Selanjutnya, jamur kutu air akan menetap dan berkembang biak pada permukaan kulit, dan dapat masuk ke dalam kulit dan menimbulkan infeksi, jika terdapat celah pada kulit. Berikut tiga jamur dermatofit yang paling umum menyebabkan kutu air:",
        "section2": [
          "Trichophyton (T.) rubrum.",
          "T. interdigitale, sebelumnya disebut T. mentagrophytes var. Interdigital.",
          "Epidermophyton floccosum."
        ]
      },
      "symptom": {
        "section1": "Beberapa gejala kutu air yang umum terjadi, antara lain: ",
        "section2": [
          "Iritasi seperti gatal, sensasi panas, terbakar, dan menyengat di antara jari-jari kaki.",
          "Area kulit kaki yang terkena tampak berwarna kemerahan.",
          "Bagian samping dan telapak kaki juga terasa sangat gatal.",
          "Kuku kaki mengalami perubahan warna, menjadi lebih tebal, dan mudah rapuh.",
          "Kuku kaki terluka bahkan tampak lepas tempatnya semula.",
          "Kulit kaki terlihat pecah-pecah dan mengelupas, terutama di antara jari kaki dan pada telapak kaki.",
          "Kulit melepuh dan lecet akibat gatal pada kaki.",
          "Kulit tampak lebih kering pada area telapak atau sisi samping kaki.",
          "Timbul cairan dari area kulit kaki yang ditumbuhi jamur."
        ]
      },
      "treatment": [
        {
          "merk": ["Zoralin", "Mycoral", "Anfuhex"],
          "tipe": "Bentuk sediaan: Salep/Krim",
          "zatAktif": "Zat aktif: Ketokonazol"
        },
        {
          "merk": ["Thecart", "Kalpanax", "Fungares"],
          "tipe": "Bentuk sediaan: Salep/Krim",
          "zatAktif": "Zat aktif: Miconazole"
        },
        {
          "merk": ["Fungiderm", "Bernesten", "Hufaderm"],
          "tipe": "Bentuk sediaan: Salep/Krim",
          "zatAktif": "Zat aktif: Clotrimazole"
        }
      ],
      "createdAt": "2024-06-09T06:25:12.064Z",
      "updatedAt": "2024-06-09T06:25:12.064Z"
    }
  ]
}
```

-- `400 Bad Request`

```json
{
  "success": false,
  "message": "User id is required. Please provide a user id in query parameter and make sure you are logged in."
}
```

- `403 Forbidden`

```json
{
  "success": false,
  "message": "Error, No token provided"
}
```

- `403 Forbidden`

```json
{
  "success": false,
  "message": "Error, Unauthorized"
}
```

- `404 Not found`

```json
{
  "success": false,
  "message": "User not found"
}
```
