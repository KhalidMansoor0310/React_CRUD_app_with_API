const express = require('express');
const Route = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');


Route.post('register',async(req,res)=>{
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send('Already registered user')
        }
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            work:req.body.work
        })
        res.json(user);
    } catch (error) {
        return res.status(400).send(error.message)
    }
});


// now login route 
Route.post('/login',async(req,res)=>{
    
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(422).json({error:'Please fill the fields'});
        }
        let userlogin = await User.findOne({ email: req.body.email });

        if (userlogin) {
            const isMatch = await bcrypt.compare(password,userlogin.password);
            const token = await userlogin.generateAuthToken();
            res.cookie("JWTOKEN",token,{
                expires:new Date(Date.now()+2589000000),
                httpOnly:true
            });
            res.json(token);
        }
        if(!userlogin){
            return res.status(422).json({error:'Please your credientials are wrong'})
        }

    } catch (error) {
        return res.status(400).send(error.message)
    }

});

module.exports = Route;