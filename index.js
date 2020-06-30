function takeANumber(currentLineArray,name){
    currentLineArray.push(name)
	return `Welcome, ${name}. You are number ${currentLineArray.length} in line.`;
}

function nowServing(currentLineArray){
    if(currentLineArray.length>0){
        return `Currently serving ${currentLineArray.shift()}.`;
    }
    else{
        return "There is nobody waiting to be served!";
    }
}

function currentLine(currentLineArray){
let astring=""
if(currentLineArray.length>0){
       astring=astring.concat("The line is currently: ");
        for (let i=0;i<currentLineArray.length;i++){
            if(i<currentLineArray.length-1){
                astring = astring.concat(`${i+1}. ${currentLineArray[i]}, `);}
            else{
                astring = astring.concat(`${i+1}. ${currentLineArray[i]}`);
            }
            }
       return astring;
    }
    else{
        return "The line is currently empty.";
    }}
