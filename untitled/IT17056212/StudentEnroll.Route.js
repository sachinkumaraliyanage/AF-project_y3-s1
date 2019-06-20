var express     = require('express');
var router      = express.Router();
var Controller  = require('./StudentEnroll.Controller');


router.post('/add', (req, res) => {
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


router.post('/update/:id', (req, res) => {
    Controller.update(req.params.id, req.body).then(data => {
        res.status(data.status).send({message: data.message});
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

router.get('/:semail', (req, res) => {
    Controller.search(req.params.semail).then(data => {
        res.json(data.data);
        //res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/confirm/:cid/:semail', (req, res) => {
    console.log(req.params);
    Controller.search3(req.params.cid,req.params.semail).then(data => {
        res.json(data.data);
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:semail/:enrolled', (req, res) => {
    console.log(req.params);
    Controller.search2(req.params.semail,req.params.enrolled).then(data => {
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