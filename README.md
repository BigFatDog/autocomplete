A reference implementation of autocomplete using react, rxjs, apollo, redis and mongodb
![Architecture](https://github.com/BigFatDog/autocomplete/blob/master/screenshots/architecture.jpeg)
![Search Result](https://github.com/BigFatDog/autocomplete/blob/master/screenshots/search-res.png)

## Web application front-end
- React: Search page is pure function component. Component is written in react hooks
- CSS: Material-ui
- RxJS: dom event stream. It handles:
  - Debounce user input in 250ms
  - Filter out invalid input
  - Avoid duplicate query in a short time frame (user types 'a', then 'ab', then back to 'a')
  - Allow only single one effective http request 
- Axios: http requests contain JWT tokens
## Web application back-end
- Apollo: GraphQL service layer
- Express: a node server
- Search service: pure ES6 functions that are exposed as REST api
## DataBase
- Redis: In-memory cache, will sync with mongodb in case of cache miss, suggestion score increment, etc.
- MongoDB
## Data Structure: Prefix Hash Tree
> Images are from [prefixy](https://prefixy.github.io)

![Prefix Hash Tree](https://github.com/BigFatDog/autocomplete/blob/master/screenshots/prefix-hash-tree.png)
Big-O summary
![Big O Summary](https://github.com/BigFatDog/autocomplete/blob/master/screenshots/big-o-summary.png)
## Data MapReduce
N/A


# Quick Reference
* Search backend: [https://github.com/BigFatDog/autocomplete/tree/master/server/api/search](https://github.com/BigFatDog/autocomplete/tree/master/server/api/search)
* Search frontend [https://github.com/BigFatDog/autocomplete/blob/master/app/containers/Search/index.js](https://github.com/BigFatDog/autocomplete/blob/master/app/containers/Search/index.js)


# Installation
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

# Credits
- [Prefixy](https://prefixy.github.io/)
- [Wreck the Web with Observables: How to make an Autocomplete Search with RxJS](https://medium.com/@rachel.poulos/wreck-the-web-with-observables-how-to-make-an-autocomplete-search-with-rxjs-bd588ad91b1b)
- [Learn-RxJS: Typeahead](https://www.learnrxjs.io/recipes/type-ahead.html)
