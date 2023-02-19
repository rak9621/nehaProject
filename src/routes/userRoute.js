const express = require('express')
const User = require('../models/user')

const router = express.Router()


router.route('/user/signup').post( async (req,res) => {

     const data = {
            name:"nehammm",
             email:"neha123@gmail.com",
            password:"neha@12345"
        }

    const user = await new User(data)

    try {
          await user.save()
          res.status(200).send(user)
    } catch (error) {
        res.status(400).send("Email already exist")
    }
        
})

router.route('/user/users').get(async (req,res) => {

    const users =  await User.find()
    try {
        res.status(200).send(users)

    } catch (error) {
        
         res.status(400).send("user not found")
    }
})


module.exports =  router