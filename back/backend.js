// kintoneの設定
const { KintoneRestAPIClient } = require('@kintone/rest-api-client');
const clientCode = new KintoneRestAPIClient({
    baseUrl: 
    auth: {
        apiToken: 
    }
});

const clientTag = new KintoneRestAPIClient({
    baseUrl: 
    auth: {
        apiToken: 
    }
});

const fastify = require('fastify')();
fastify.register(require('fastify-cors'));




