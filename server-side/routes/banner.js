const express = require('express');
const { readStaff , createStaff, deleteStaff, updateStaff } = require('../models/staff');
const router = express.Router();


//Add new

router.get('/addnew', async (req, res) => {

    res.render('staffform')
})

//router for characters

router.get('/:name', async (req, res) => {
    var name = req.params.name;

    const person = await readStaff({'name': name})

    if (!person) {
        console.log('404 because person doesn\'t exist');
        res.render('404');
    }
    else {
        res.render('person', { person: person });
    }
})

// Delete router

router.get('/:name/delete', async (req, res) => {
    var name = req.params.name;

    await deleteStaff(name);

    req.session.flash =    
    { type: 'success', intro: 'Data Deleted:', message:  "Data for <strong>" +
     name + "</strong> has been updated"};
    

    res.redirect(303, '/banner');

});



// Edit router

router.get('/:name/edit', async (req, res) => {

    var name = req.params.name;

    const person = await readStaff({'name': name})
    
    res.render('staffeditform', { person: person });
    
})

router.post('/:name/edit', async (req,res) =>{

    await updateStaff(req.body);

    req.session.flash =    
    { type: 'success', intro: 'Data Updated:', message:  "Data for <strong>" +
     req.body.name+ "</strong> has been updated"};
    
    res.redirect(303, '/banner')

})

router.post('/addnew', async (req, res) => {

        await createStaff(req.body);
        req.session.flash =    
        { type: 'success', intro: 'Data Saved:', message:  "Data for <strong>" +
         req.body.name+ "</strong> has been added"};
 
        res.redirect(303, '/banner')
       
    
    })
    
router.get('/', async (req, res) =>
{
    const staff = await readStaff();

    if (req.session.staffdata){
        var newName = req.session.staffdata.name;
    }
    else {
        var newName = ""
    }

    res.render('listing', { personlist: staff, newName : newName })
    
})



module.exports = router;