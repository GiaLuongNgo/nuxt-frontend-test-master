# nuxt-frontend-test

Welcome to the take home assignment. This assignment should take approximately 3-4 hours. The aim of the assignment is for Smartbox to assess a few areas of your knowledge around Vue and Nuxt, core pieces of software that you would be using within the company should you be successful.

There are no trick answers here, all information can be found in the  [official documentation](https://nuxtjs.org).

## Requirements Summary
What are hoping to see -

- A familiarity with Nuxt directory structure + built in components
- How to make API calls with Axios built in to Nuxt
- How to write an API 
- How to create Vue components
- Ability to write unit tests
- Write using TypeScript and use typings

## Requirements details

### API
- create an endpoint GET to retrieve a list of products
- This is a protected endpoint and should check for authorised access in query string "auth"
- Auth = "sbx-auth-12345"
- If request with authorised access return the json from ~/data/getProductIds.json.
- If request unathorised, return request with suitable error code.

### Pages
- Create a vue page which goes to "/product" route
- Axios call your newly created GET API with token returned from querystring
- If successful call, render results in a table.
- If unsuccessfull call, throw Nuxt error page
- ** Note ** - pages will be rendered SSR, to need to ensure call can be made server side not client side ( per our SEO requirements) 
- On index page, have two links to the valid and invalid pages. 

### Highly Encouraged
- Write sufficient unit tests
- Write using TypeScript and typings where possible
### Bonus
- Stylings / SCSS / Media Queries

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

