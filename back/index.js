const { KintoneRestAPIClient } = require('@kintone/rest-api-client');
const clientCode = new KintoneRestAPIClient({
    baseUrl: 'https://p0fnbkqr15dz.cybozu.com/',
    auth: {
        username: "kenta.int.tech@gmail.com",
        password: "1bjzhcct"
    }
});
const clientTag = new KintoneRestAPIClient({
    baseUrl: 'https://p0fnbkqr15dz.cybozu.com/',
    auth: {
        username: "kenta.int.tech@gmail.com",
        password: "1bjzhcct"
    }
});
const fastify = require('fastify')();
fastify.register(require('fastify-cors'));
fastify.get('/test', async (request, reply) => {
    // ここに外部APIへのリクエストを書く

    // 引数のreplyを使ってWeb側へデータを渡す
    reply.send({ message: JSON.stringify(clientCodeId)});
});

fastify.get('/getAllCode', async (request, reply) => {
    // ここに外部APIへのリクエストを書く
    const data = await clientCode.record.getAllRecords(
        {
            app:2
        }
    );
    console.log(data);
    reply.send({ message: JSON.stringify(data) });
    // 引数のreplyを使ってWeb側へデータを渡す
});
fastify.post('/getCode', async (request, reply) => {
    // ここに外部APIへのリクエストを書く
    console.log(request.body);
    const data = await clientCode.record.getRecords(
        {
            app: 2,
            fields:["code"],
            query:`createrName="${request.body.createrName}" and codeName="${request.body.codeName}"`,
            //query: 'createrName="kojima" and codeName="test.cpp"',
        }
    );
    reply.send({ message: JSON.stringify(data) });
    // 引数のreplyを使ってWeb側へデータを渡す

});
fastify.post('/postCode', async (request, reply) => {
    // ここに外部APIへのリクエストを書く
    console.log(request.body);
    var recordTemp = {};
   
    for (var k in request.body) {
        recordTemp[k] = {value:request.body[k]};
    }
    console.log(recordTemp);
    await clientCode.record.addRecord(
        {
            app: 2,
            record:recordTemp,
        }
    );
    //reply.send({ message: JSON.stringify(data) });
});
fastify.listen(3000,"0.0.0.0");
