const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/Midb';
const connect = mongoose.connect(url,{
useMongoClient: true
});
connect.then((db)=>{
	console.log('connected correctly to server');
	var newDish = Dishes({
		name: 'Ganesh',
		description: 'Student'
	});
	newDish.save()
	.then((dish)=> {
		console.log(dish);
		return Dishes.find({}).exec();
	})
	
	.catch((err)=> {
		console.log(err);
	});
});