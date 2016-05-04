module.exports = function (context, message) {
    context.log('Node.js queue trigger function processed message', message);
    context.done();
}