const express = require('express');
const router = express.Router();

var data = {"foile" : { "name": "PORO",
    "dob": "29/07/2002",
    "imageurl": "/images/image.png",
    "hobbies": ["sleeping", "eating"]},

"arms" :  { "name": "arms",
     "dob": "03/05/1995",
    "imageurl": "/images/logo.jpg"},

"hog" : { "name": "",
        "dob": "29/07/2002",
        "imageurl": "/images/image.png",
        "hobbies": ["sleeping", "eating"],}
}

router.get('/addnew', (req, res) =>
    res.render('personform')
)

router.get('/:name', (req, res) => {
    var name = req.params.name;
    res.render('person', { person: data[name] })
})





module.exports = router;