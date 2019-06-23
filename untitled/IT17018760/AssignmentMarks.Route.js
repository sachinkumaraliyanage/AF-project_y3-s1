var express     = require('express');
var router      = express.Router();
var Controller  = require('./AssignmentMarks.Controller');


router.post('/add', (req, res) => {
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({data: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


router.post('/update/:id', (req, res) => {
    Controller.update(req.params.id, req.body).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});
router.get('/edit/:id', (req, res) => {
    Controller.searchedit(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
        //res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:cid/:aid', (req, res) => {
    console.log("Log is"+req.params.cid);
    Controller.searchAll(req.params.cid,req.params.aid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});



router.get('/:sid/:cid/:aid', (req, res) => {
    console.log(req.params.sid+'------'+req.params.cid);
   Controller.search(req.params.sid,req.params.cid,req.params.aid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    });
});



router.delete('/:id', (req, res) => {
    Controller.delete(req.params.id).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;