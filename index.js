var katzDeli = [];
var otherDeli = [];

function takeANumber(line, people){
	if (typeof people === 'string'){ //determines if people is a string or array
		line.push(people);
	}else {
		for (var i=0; i < people.length; i++){
			line.push(people[i]);
		}
	}
	var num = line.length; //return the number the person is in line
	var lastPerson = line[line.length-1]; //find the last person in line
  var statement = 'Welcome, ' + lastPerson + '. You are number ' + num + ' in line.';
  return statement;
}

function nowServing(line){
  if(line.length > 0){
    var statement = 'Currently serving ' + line[0] + '.';
  	line.shift();
	return statement;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line){
  if(line.length > 0){
    var statement = 'The line is currently:'
    for(var i = 0; i < line.length; i++){
  	  var index = i + 1;
  	  var name = line[i];
  	  var person = ` ${index}. ${name}` + (index === line.length ? "" : ",");
  	  statement += person;
      }
    return statement;
  } else {
    return 'The line is currently empty.'
  }
}
