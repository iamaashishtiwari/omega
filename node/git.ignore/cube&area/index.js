var cube=require('./new');

function solveCube(a){
	console.log("Values:"+a);
	if(a<=0)
	{
		console.log("Dimensions are -negative");
	}
	else{
		console.log ("Surface Area:"+cube.area(a));
		console.log ("Volume:"+cube.vol(a));
	}
}
solveCube(3)
solveCube(-7)



var sphere=require('./new');

function solveSphere(b){
	console.log("Values:"+b);
	if(b<=0)
	{
		console.log("Sphere Dimensions are -negative");
	}
	else{
		
		console.log ("Volume:"+sphere.volume(b));
	}
}
solveSphere(6)
solveSphere(0)
