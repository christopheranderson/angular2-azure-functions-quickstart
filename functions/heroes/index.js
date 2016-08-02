var heroes = require('./heroes.js');

module.exports = function(context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
    context.log(JSON.stringify(heroes));
    if(req.method == 'GET') {
        context.res = {
            body: {
                data: heroes.getHeroes()
            }
        }
    } else if(req.method == 'POST') {
        heroes.addHero({name: req.body.name});
    }
    
    context.done();
};