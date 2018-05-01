var rect=require('./new');

function solveRect(l,b){
	console.log("Values:"+l+" and "+b);
	if(l<=0||b<=0)
	{
		console.log("Rectangle dimensions are negative.");
	}
	else{
		console.log ("Area:"+rect.area(l,b));
		console.log ("Perimeter:"+rect.perimeter(l,b));
	}
}
solveRect(2,4);
solveRect(3,5);
solveRect(5,-4);
solveRect(0,6);