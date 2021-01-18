const NAME = "localhost:5000",
      DOMAIN = `http://${NAME}`,
      SEARCH = `${DOMAIN}/items?q=`,
      ITEM = `${DOMAIN}/items/:id`;
      

export default {
    NAME,
    DOMAIN,
    SEARCH,
    ITEM
}

