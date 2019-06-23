var express     = require('express');
var router      = express.Router();
var Controller  = require('./InstructorsAssign.Controller');


router.post('/add', (req, res) => {
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({data: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


router.post('/update/:cid/:iemail', (req, res) => {
    Controller.update(req.params.cid,req.params.iemail, req.body).then(data => {
        res.json(data.data);
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

router.get('/:iemail', (req, res) => {
    Controller.search(req.params.iemail).then(data => {
        res.json(data.data);
        //res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:iemail/:notified', (req, res) => {
    console.log(req.params);
    Controller.search2(req.params.iemail,req.params.notified).then(data => {
        res.json(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/checkdup/:iemail/:cid', (req, res) => {
    console.log(req.params);
    Controller.search3(req.params.iemail,req.params.cid).then(data => {
        res.json(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.delete('/:cid', (req, res) => {
    Controller.delete(req.params.cid).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;