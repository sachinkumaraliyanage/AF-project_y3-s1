var express     = require('express');
var router      = express.Router();
var Controller  = require('./AssignmentUpload.Controller');


router.post('/add', (req, res) => {
    console.log("uploaded");

    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


router.get('/search/:cid/:aid', (req, res) => {
    console.log(req.params.cid+'------'+req.params.aid);
    Controller.search1(req.params.cid,req.params.aid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    });
});





module.exports = router;