// kintoneの設定
const { KintoneRestAPIClient } = require('@kintone/rest-api-client');
const clientCode = new KintoneRestAPIClient({
    baseUrl: 'https://p0fnbkqr15dz.cybozu.com/',
    auth: {
        apiToken: '3zzZ9hEpCuOAoDWBKX6WcsnqQ0JqHEU3Or9uZRX4'
    }
});

const clientTag = new KintoneRestAPIClient({
    baseUrl: 'https://p0fnbkqr15dz.cybozu.com/',
    auth: {
        apiToken: 'VIg1sGnEH5gvAhBBbOPnFlGzqZLrAT1lyJU8UPRA'
    }
});

const fastify = require('fastify')();
fastify.register(require('fastify-cors'));




