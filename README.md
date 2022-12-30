# 371Digital oAuth NodeJS Client 

## Description
371Digital bünyesinde üretilen ürünlerin, yönetim ve üretim parçalarının API servislerinde auth işemleri için kullanılması gereken pakettir. 

## Methods

### verifyToken
Endpointlerdeki auth middlewarelerde kullanılır. Bir endpoint yönetim veya üretim noktasında bir değişiklik yapacak ise authenticationa ihtiyaç duyar. Client tarafında [oAuth Request Client](https://www.npmjs.com/package/oauth-request-client) paketini kullanarak elde edilen tokenları verify etmek için kullanılır. 

```js
const result = await verifyToken("jwtToken");
```

#####  Success Response
```json
{
    "message": String,
    "code": Number,
    "data": {
       "userId": "Token User ID"
    }
}
```

### getUserData
Endpointlerde kullanıcı verisine ihiyacamız olabilir. Bu tip durumlarda getUserData methodu kullanılmadılır

```js
const result = await getUserData(userId);
```

#####  Success Response
```json
{
    "message": String,
    "code": Number,
    "data": {
        "_id": String,
        "mail": String,
        "fullName": String,
    }
}
```
