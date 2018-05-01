  
  
  module.exports=(a,callback)=>{
		if(a!="earphone")
		{
			setTimeout(()=>callback(new Error("Invalid Order ID"),null),1000);
		}
		else{
			
			setTimeout(()=>
			callback(null,{orderonline:(a)=>("Order Id Tracking Details")}),1000);
		}
	
	}
	