
const productsRouter = require('./productsRouter');
const homeRouter = require('./homeRouter');

function routerApi(app) {
    app.use("/home", homeRouter);
    app.use('/products', productsRouter);
}

module.exports = routerApi;