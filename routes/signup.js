
import express from 'express'
// import database Model
import User from '../models/User.js'
import dotenv from 'dotenv'
dotenv.config()
import validator from 'validator'
import ValidationError from '../errors/validation-error.js'

// controller for sign up
const router = express.Router();
router.post('/api/v1/auth/signup', async (req,res)=>{

    const {email, password, lastName, firstName, phoneNumber, dob} = req.body

    /*
      check database for availability
      if already exists, throw error and message "account already exists"
      else create new user and add info to database
    */

    if (!email || !password ||  !lastName || !firstName || !phoneNumber || !dob) {
        throw new ValidationError('Please provide all values');
    }

    // check the format of the email
    if (!validator.isEmail(email)) {
        throw new ValidationError("not an email ")
    }

    // Check if the user already exist
    const userExisted = await User.findOne({email});
    if (userExisted) {
        throw new ValidationError('Email already in User');
    }

    // try {
    //     const salt = await bcrpyt.genSalt()
    //     const hashedPassword = await bcrpyt.hash(password, salt)
    // } catch {
    //     res.status(500).send()
    // }
    //encrypt password

    //adding to database
    const user = await User.create({ email, hashedPassword, lastName, firstName, phoneNumber, dob} );

    await user.save()

    res.status(201).send({user});
    console.log("here");
})


export {router as SignupRouter}

// setup the router
