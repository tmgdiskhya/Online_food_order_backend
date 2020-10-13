const express = require('express')
const router = express.Router();
const userModel = require('../models/index')
const jwt = require('jsonwebtoken')
const jwtMiddle = require('express-jwt-middleware')

router.route('/signup')
    .get(async(req,res)=>{
        const data = await userModel.find({})
        res.send(data)
    })
    .post(async(req,res)=>{
        console.log(req.body)
        const post = new userModel({
            fullname:req.body.fullname,
            address:req.body.address,
            phone:req.body.phone,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            
        })
        try{
        const data = await post.save();
        if(data!=null){
            res.send({
                status:true,
                message:'Register Successful',
                data:data
            })
        }
        else{
            res.send({
                status:false,
                message:'Register UnSuccessful'
            })
        }
    }
    catch(err){
        res.send({
            status:false,
            message:'Something is wrong'
        })
    }
    })
    .delete(async (req, res) => {
        try {
            const data = await userModel.deleteMany()
            res.json(data)
        }
        catch (err) {
            res.json({ message: err })
        }
    })
router.route('/login')
    .post( async (req,res)=>{
        const username = req.body.username
        const password = req.body.password
        console.log(req.body)
        const data = await userModel.findOne({username:username})
        console.log(data)
        if(data!=null){
            const token = jwt.sign({ username: data.username }, 'secret');
            if(data.password===password){
                res.send({
                    status:true,
                    message:'Login Successful',
                    _id : data._id,
                    token:token
                })
            }
            else{
                res.send({
                    status:false,
                    message:'Password Wrong'
                })
            }
        }
        else{
            res.send({
                status:false,
                message:'User Not Found'
            })
        }
    })

    module.exports = router