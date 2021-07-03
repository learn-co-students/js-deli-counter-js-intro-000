function takeANumber(katzDeliLine, name){
	//accept current line of people and names
	//adds new person to the line
	// katzDeli.push(katzDeliLine)
	//return their position in line
	katzDeliLine.push(name);
	
	return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length +' in line.';
	}
	//This function should return the next person in line and then remove them from the line. 
	//If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing(katzDeliLine){
		if (katzDeliLine.length === 0){
			return "There is nobody waiting to be served!";
		}
		else {
			var shift = katzDeliLine.shift(0);
			return 'Currently serving '+ shift + '.';
		}
}

function currentLine (katzDeliLine, name){
	if (katzDeliLine.length === 0){
		return "The line is currently empty.";
	}
	else{
		while (katzDeliLine.length != 0)
		return "The line is currently: 1. " + katzDeliLine[0] +", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2];
	}
}
