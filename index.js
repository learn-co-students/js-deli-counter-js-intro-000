var katzDeli = [];

function takeANumber(line, costumer) {
	// body...
	if(!(line.length)){
	   //Adds a person to the line.
       line.push(costumer);
      return `Welcome, ${costumer}. You are number 1 in line.`;
    }else{
      //Appends the person the end of the line if there are already people on it.
      line.push(costumer);
      return `Welcome, ${costumer}. You are number ${line.length} in line.`;
    };
};

function nowServing(line) {
	// body...
	if (!(line.length)) {
	  //The line is empty when no one is on line.
	  return "There is nobody waiting to be served!";
	}else{
	  //An announcement about the person it is serving, and shifts the line.
	  return `Currently serving ${line.shift()}.`;

	};
};

function currentLine(line) {
	// body...
    if (!(line.length)) {
    	//The line is empty when no one is on line.
    	return "The line is currently empty.";
    }else{
    	 //Says who is in line when there are people waiting
         var currentLine = [];
        
         for (var i = 0; i < line.length ; i++) {
         	currentLine.push(`${i + 1}. ${line[i]}`);
         };
         return `The line is currently: ${currentLine.join(", ")}`;

    };
};







