function reportGenerator(){
	console.log("Report Generator")
	return;
}
function eventRoutine(){
	console.log("Event Routine")
	return;
}
function timingFunction(){
	console.log("Timing Function")
	return;
}
function initializationFunction(){
	console.log("Initialization Function")
	return;
}
const val = 5;
let simulationNotOver = true;
const mainFunction =()=>{
	initializationFunction();
	for(let i=0 ;i<=5; i++){
		timingFunction();
		eventRoutine();
		if(i==5){
			simulationNotOver = false;
			reportGenerator();
			break;
		}
	}
}
mainFunction()
