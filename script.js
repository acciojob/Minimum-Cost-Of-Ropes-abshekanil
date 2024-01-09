function calculateMinCost() {
  //your code here
  
    let ropeLengthInput = document.getElementById('rope-lengths');
	let ropeLengthsValue = ropeLengthInput.value;

	let ropeLengths = ropeLengthsValue.split(',').map(function(length){
		return parseInt(length.trim());
	});

	ropeLengths.sort(function(a,b){
		return a - b;
	});

	let totalCost = 0;

	while(ropeLengths.length > 1)
		{
			let currentCost = ropeLengths[0] + ropeLengths[1];
			totalCost+=currentCost;
			ropeLengths.splice(0,2,currentCost);

			ropeLengths.sort(function(a,b){
				return a - b;
			});
		}
	
  let results = document.getElementById('result');
	results.innerHTML = totalCost;
}  
