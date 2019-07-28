A reference implementation of autocomplete using react, rxjs, apollo, redis and mongodb
![Architecture](https://github.com/BigFatDog/autocomplete/blob/develop/screenshots/architecture.jpeg)

## Features
![Search Result](https://github.com/BigFatDog/autocomplete/blob/develop/screenshots/search-res.png)

## Use Cases
Front-end 
End user get suggestions
- Debounce user input in 250ms
- Filter out invalid input
- Avoid duplicate query in a short time frame (user types 'a', then 'ab', then back to 'a')
- Allow only single one effective http request 


End user removes a 


### Front-end
1. Stream events from the search input are processed via `RxJS` to achieve
*
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
