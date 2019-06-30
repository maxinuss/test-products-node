# test-products-node

## Task BACK
Realizar una app en node que sea intermediaria entre el front y las API's.

#### Requirements
In order to run this project you will need:

* NODE JS

#### First time instructions:
* Install NodeJs
* Clone this repository
* In the project root run ``` npm i ```
* In the project root run ``` node app.js ``` 
(for automatic reloads on code change nodemon usage is recommended. Install https://nodemon.io, then ```nodemon app.js```)

#### Endpoints

Base url: ``` http://localhost:{port}/api/v1 ```

Default port in ENV file: 3047

Postman collection: ``` https://www.getpostman.com/collections/be5a645872ff422b6943 ```

###### Get Products
[GET] ```/products```

Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "Arroz",
            "price": 45.00,
            "dollarPrice": 1.00
        },
        {
              "id": 2,
              "name": "Cereal",
              "price": 45.00,
              "dollarPrice": 1.00
        },
        ...
    ],
    "options": {},
    "files": {}
}
```

###### Add Product
[POST] ```/products```

Body:
```json
{
    "name": "Arroz",
    "price": 45.00
}
```

###### Update Product
[PUT] ```/products/{id}```

Body:
```json
{
    "name": "Arroz",
    "price": 45.00
}
```

###### Delete Product
[DELETE] ```/products/{id}```

Body:
```json
```

#### Running test
This project includes a unit test suite:
```
npm test
```