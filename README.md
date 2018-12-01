# Timestamp service

Translates a timestamp into its date and vice versa. If no parameter is provided, return the current datetime. 

For instance :
- "localhost:8080/api/timestamp" = {"unix":<Date.now()>, "utc":<Date.toUTCString()>}
- "localhost:8080/api/timestamp/2018-12-01" = {"unix":1543622400000, "utc":"Sat, 01 Dec 2018 00:00:00 GMT"}}
- "localhost:8080/api/timestamp/1543622400000 = {"unix":1543622400000, "utc":"Sat, 01 Dec 2018 00:00:00 GMT"}}
- "localhost:8080/api/timestamp/invalid_string = {"error":"Invalid Date"}


## Getting Started

* Clone the repository
* Try


## Built With

* [Node.js](https://nodejs.org/) - Server
* [Express.js](https://expressjs.com/) - Web Framework


## Authors

* **Nicolas AMBRY** - *Initial work* - [AmbryN](https://github.com/AmbryN)