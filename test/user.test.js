const userModel = require('../models/index');
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/onlinefoodstore';
beforeAll(async () =>{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () =>{
    await mongoose.connection.close();
});

describe('User Schema test anything', () => {
    it('Add user testing anything', ()=> {
        const user ={
            'fullname':'Anjeela Thapa',
            'address':'Kathmandu',
            'phone':'9803904612',
            'email':'anjeela12@gmail.com',
            'username':'Anjeela',
            'password':'anjeela12'
        };
    });


    it('to test the delete user is working or not', async() =>{
        const status = await userModel.deleteMany();
        expect(status.ok).toBe(1);
    });
});