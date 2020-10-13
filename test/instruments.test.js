const instrumentsModel = require('../models/instruments');
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

describe('Instrument Schema test anything', () => {
    it('Add instrument testing anything', ()=> {
        const instrument ={
            'categoryid':'5e4bf57054cf0a0c0c004eec',
            'name':'Banjo',
            'price':'40000',
            'description':'Banjoo',
            'photo':'imageFile-1582454634798.jpg'
        };
    });


    it('to test the delete instrument is working or not', async() =>{
        const status = await instrumentsModel.deleteMany();
        expect(status.ok).toBe(1);
    });
});