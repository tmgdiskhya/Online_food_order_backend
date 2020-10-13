const categoryModel = require('../models/category');
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

describe('Category Schema test anything', () => {
    it('Add category testing anything', ()=> {
        const category ={
            'name':'banjo',
            'imageName':'imageFile-1582454634798.jpg'
        };
    });


    it('to test the delete category is working or not', async() =>{
        const status = await categoryModel.deleteMany();
        expect(status.ok).toBe(1);
    });
});