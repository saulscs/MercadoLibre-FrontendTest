# Mercado Libre - Frontend Test


## Stack

* React.js 
* Node.js
* Express
* Axios
 
### Implemented:
React hooks
Grid & Flexbox
Fluid Design
    


## Frontend

Go to this route  -> MercadoLibre-FrotendTest/client 

Install node modules
```
npm i 
```
Create a .env file at root and add this constant

```
PORT=3000
REACT_APP_AUTHOR_NAME = "Saul"
REACT_APP_LAST_NAME = "Corona"
```


Run client

```
npm start
```
Open your browser in http://localhost:3000/

## Backed 

Go to this route  -> MercadoLibre-FrotendTest/server

Install node modules
```
npm i 
```

Create a .env file at root and add this constant

```
PORT=5000
API="https://api.mercadolibre.com"
AUTHOR_NAME ="Saul"
LAST_NAME = "Corona"
ITEMS_LIMIT = 4
```


Run server 

```
npm run server
```
Open your browser in http://localhost:5000/

## Sumary

### Routes
* Search box: `'/'`
* Result list: `/items?q=`
* Detail view: `/items/:id`

### EndPoints
* Search 

`https://api.mercadolibre.com/sites/MLA/search?q=:query`
* Product detail
`https://api.mercadolibre.com/items/:id`

`https://api.mercadolibre.com/items/:id/description`

`https://api.mercadolibre.com/categories/:category_id`

https://i.imgur.com/Lnp5PFD.gif
