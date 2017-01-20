module.exports = function (context, timerInfo) {
    var timeStamp = new Date().toISOString();
    context.log('Node.js timer trigger function ran!', timeStamp);

    context.log('PastDue:', timerInfo.isPastDue);
    context.log('Last:', timerInfo.last);
    context.log('Next:', timerInfo.next);

    context.done();
}