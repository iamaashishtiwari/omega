
//Loose TYPING
string="\t Online Order Tracking Details:";
number=1;
console.log("\n\t"+number+string+"\n");

//Function  using named expression
var call=require('./callback');
var order=function order(item)
{
	call(item,(err,callback)=>{
		if(err)
		{
		console.log("\nERROR:",err.message);	
		}
	
	else{
console.log("/nItem:"+item+"\nOrder:"+order+"\nTracking:"+tracking+"\nDispatch:"+dispatch+"\n"+callback.orderonline(item));	
	}
	
});

   }


//Object Literal Notation
var obj = {
                item:"earphone",
				order: 115126,
				tracking: "delhi",
				dispatch:"arriving_today"
			}

//Array
//conventions , names, 
var array = [obj.item,obj.order,obj.tracking,obj.dispatch,order(),250,"ambala","monday"];
order(array[4]);

