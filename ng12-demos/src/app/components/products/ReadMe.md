# Products Sample Application

## API using products.json and json-server

### Install json-server
```
npm i -g json-server

```

### products.json file
products.json file exists under **data** folder inside the products

### Products local json-server API

Execute the below mentioned command to execute the json-server
```
json-server --watch products.json

```

Products will be hosted and can be accessed from URL: http://localhost:3000/products

http://localhost:3000/products/026eca47-c9b9-41f6-863a-fbf3a0121c92

http://localhost:3000/products?productId=10
