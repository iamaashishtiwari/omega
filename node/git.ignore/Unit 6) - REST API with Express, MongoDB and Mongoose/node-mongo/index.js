const MongoClient=require('mongodb').MongoClient;
const assert =require('assert');
const url='mongodb://localhost:27017/Midb';

MongoClient.connect(url,(err,database)=> {
     assert.equal(err,null);
	 console.log('Connected correctly to server');
	   
	   const dbs=database.db("Midb");
	   const collection=dbs.collection("dishes");
	   
	   collection.insertOne({"name":"Suraj","description":"testing mongo with node"},
	   (err,result)=> {
	       assert.equal(err,null);
		   console.log("After Insert:\n");
		   console.log(result.ops);
		   collection.find({}).toArray((err,docs)=> {
		     assert.equal(err,null);
			 console.log("Found:\n");
			 console.log(docs);
			 dbs.dropCollection("dishes",(err,result)=> {
			 assert.equal(err,null);
			 database.close();
			 });
		  });	 
		});	
});	
		