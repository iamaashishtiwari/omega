const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Student = require('./schema/StudentSchema');
const url = 'mongodb://localhost:27017/surajDB';
const connect = mongoose.connect(url,{
useMongoClient: true
});
connect.then((db)=>{
	console.log('connected correctly to server');
	var newStudent = Student({
		name: 'Suraj',
		ug:'BCA',
		pg:'pursuing_bca',
		previous_experiance:'summer_training_internship'	
	}
	
	);
	newStudent.save()
	.then((student)=> {
		console.log(student);
		return Student.find({}).exec();
	})
	
	.catch((err)=> {
		console.log(err);
	});
});