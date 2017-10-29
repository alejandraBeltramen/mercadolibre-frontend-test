var axios = require('axios');

var search = {
    getAll: function(req, res, next) {
        var queryString = req.query.q;
        axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + queryString)
        .then(function(response) {
            //data almacenara el objeto que se enviara como response
            var data = {
                author: {
                    name: "Alejandra",
                    lastname: "Beltramen"
                },
                categories: [],
                items: []
            };

            //procesar todos los datos para que queden con el formato que deben tener
            var meliRes = response.data;
            var categories;

            if(meliRes.filters[0] != undefined) {
                categories = meliRes.filters[0].values[0].path_from_root;
                for(var i=0 in categories) {
                    data.categories.push(categories[i].name);
                }
            }
            else {
                data.categories.push('Otros');
            }

            var items =  meliRes.results;
            for(var i=0 in items) {
                var item = {};
                item.id = items[i].id;
                item.title = items[i].title;
                item.price = {
                    currency: items[i].currency_id,
                    amount: items[i].price,
                    decimals: 00
                };
                item.picture = items[i].thumbnail;
                item.condition = items[i].condition;
                item.free_shipping = items[i].shipping.free_shipping;
                data.items.push(item);
            }
            res.json(data);
        })
        .catch(function(error) {
            console.log("Error on requesting list of products - Meli API:" + error);
        });
    },
    read: function(req, res, next) {
        var productId = req.params.id;
        axios.get('https://api.mercadolibre.com/items/' + productId)
        .then(function(response) {
            //data almacenara el objeto que se enviara como response
            var data = {
                author: {
                    name: "Alejandra",
                    lastname: "Beltramen"
                },
                item: {}
            };
            //procesar todos los datos para que queden con el formato que deben tener
            var meliRes = response.data;

            var item = {};
            item.id = meliRes.id;
            item.title = meliRes.title;
            item.price = {
                currency: meliRes.currency_id,
                amount: meliRes.price,
                decimals: 00
            };
            item.picture = meliRes.pictures[0].url;
            item.condition = meliRes.condition;
            item.free_shipping = meliRes.shipping.free_shipping;
            item.sold_quantity = meliRes.sold_quantity;
            
            axios.get('https://api.mercadolibre.com/items/' + productId + '/description')
            .then(function(response) {
                var meliResDescription = response.data;
                item.description = meliResDescription.plain_text;
                data.item = item;

                res.json(data);
            })
            .catch(function(error) {
                console.log("Error on requesting product description ID:" + productId + " - Meli API:" + error);            
            })
        })
        .catch(function(error) {
            console.log("Error on requesting product ID:" + productId + " - Meli API:" + error);
        });
    }
};

module.exports = search;