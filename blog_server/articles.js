var ARTICLES = require("./mock-articles");

module.exports = (app)=>{
    app.get("/articles",(req,res)=>{
        res.send(ARTICLES);
    });

    app.get("/articles/:id",(req,res)=>{
        //res.send(req.params.id);
        res.send(ARTICLES.filter(va => va.id==req.params.id)[0]);
    })
}