A reference implementation of autocomplete using react, rxjs, apollo, redis and mongodb

## Features
![Search Result](https://github.com/BigFatDog/autocomplete/blob/develop/screenshots/search-res.png)

## Quick Reference
* Search backend: [https://github.com/BigFatDog/autocomplete/tree/master/server/api/search](https://github.com/BigFatDog/autocomplete/tree/master/server/api/search)
* Search frontend [https://github.com/BigFatDog/autocomplete/blob/master/app/containers/Search/index.js](https://github.com/BigFatDog/autocomplete/blob/master/app/containers/Search/index.js)

## 


## Installation
This instructions are based on MacOS
1. install mongodb and redis 
2. start mongo server
```
mongod
```
3. start redis server
```
redis-server
```
4. clone this project from
```
https://github.com/BigFatDog/autocomplete.git
```

5. Modify ``setting.json`` to make sure connections to mongo and redis are correct
6. Start server, application will be available on port `3010`
```
npm install
npm run start
```

6. Register a user in register page

7. seed sample data to mongodb and redis by clicking the battery button at the bottom right of search page
