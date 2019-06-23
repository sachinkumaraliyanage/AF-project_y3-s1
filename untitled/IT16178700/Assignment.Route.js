var express     = require('express');
var router      = express.Router();
var Controller  = require('./Assignment.Controller');


router.post('/add', (req, res) => {
    console.log("sachinppppppppp");

    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


router.post('/update/:aid', (req, res) => {
    Controller.update(req.params.aid, req.body).then(data => {
        res.status(data.status).send({data: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/', (req, res) => {
    Controller.searchAll().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});


router.get('/:aid', (req, res) => {
    console.log(req.params);
    Controller.findassignment(req.params.aid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});



router.delete('/:aid', (req, res) => {
    Controller.delete(req.params.aid).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});



router.get('/search/:iemail/:cid', (req, res) => {
    console.log(req.params.iemail+'------'+req.params.cid);
    Controller.search(req.params.iemail,req.params.cid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    });
});


router.get('/searchStudent/:cid', (req, res) => {
    console.log(req.params.cid);
    Controller.searchStudent(req.params.cid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    });
});

router.get('/searchAssignment/:cid', (req, res) => {
    console.log(req.params.cid);
    Controller.searchAssignments(req.params.cid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    });
});

router.get('/checkassignment/:aid/:cid', (req, res) => {
    console.log(req.params.aid+'------'+req.params.cid);
    Controller.search12(req.params.aid,req.params.cid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    });
});



module.exports = router;