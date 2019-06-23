var express     = require('express');
var router      = express.Router();
var Controller  = require('./Course.Controller');


router.post('/add', (req, res) => {
    Controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});


router.post('/update/:cid', (req, res) => {
    Controller.update(req.params.cid, req.body).then(data => {
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

/*
router.get('/:id', (req, res) => {
    Controller.search(req.params.id).then(data => {
        res.json(data.data);
        //res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});
*/

router.get('/:cid', (req, res) => {
    console.log(req.params);
    Controller.findcourse(req.params.cid).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:cid/:enrollkey/:accepted', (req, res) => {
    console.log(req.params);
    Controller.checkenroll(req.params.cid,req.params.enrollkey,req.params.accepted).then(data => {
        res.status(data.status).send({data: data.data});
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