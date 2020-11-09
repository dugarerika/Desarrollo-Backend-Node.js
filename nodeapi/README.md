<h1 align="center">Welcome to nodeapi 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/nodeapi" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/nodeapi.svg">
  </a>
</p>

## Install

```sh
npm install
```

## Load initial data

 you can load the database initial data using this:

```sh
npm run init-db
```

**Warning! this script deletes the database data before starts the load.**

Use in production onliy in first deployment.

## Usage

```sh
npm run start
```
## Development start

```sh
npm run dev
```

## API Methods

GET /api/agentes

[
  {
    "_id": "5fa58e56fb049a189288b37d",
    "name": "Smith",
    "age": 48
  }
]

## retrieves one agent

/* GET /api/agentes/_id */

{
"result": {
"_id": "5fa957aa5567db11b483ca97",
"name": "Smith",
"age": 36,
"__v": 0
}
}

### Create agent

POST /api/agentes { name:'name', age: 00}

{
    "result": {
        "_id": "5fa967c40b35bb19e7995fa5",
        "name": "Erika",
        "age": 35,
        "__v": 0
    }
}

### Update agent

POST /api/agentes/<_id> body: { name:'name', age: 00}


{
    "result": {
        "_id": "5fa957aa5567db11b483ca97",
        "name": "Smith",
        "age": 2,
        "__v": 0
    }
}

### Delete agent

DELETE /api/agentes/<_id> 

Return: HTTPCode 200


## How to start a local mongodb instance for development

```sh
// ./bin/mongod --dbpath ./data/db --directoryperdb
// ./bin/mongo
```

## Author

👤 **Erika Tavera**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_