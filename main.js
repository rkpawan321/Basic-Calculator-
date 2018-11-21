function calc(){
	
	var a = parseInt(document.querySelector("#value1").value);
	
	var b = parseInt(document.querySelector("#value2").value);
	
	
	var op = document.querySelector("#operator").value;
	
	var calculate;
	if (op === "add"){
		var calculate = a+b;	//if you don't put var here,then value gets changed
	}else if(op ==="min"){
		var calculate = a-b;
	}else if(op ==="div"){
		var calculate = a/b;
	}else if(op ==="mul"){
		var calculate = a*b;
	}
	
	//console.log(calculate);
	document.querySelector("#result").innerHTML = calculate;
}