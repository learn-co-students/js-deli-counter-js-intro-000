function takeANumber (katzDeliLine, name) {
katzDeliLine.push (name)
return ("Welcome, "+ name +". You are number "+katzDeliLine.length + " in line.")
}


function nowServing (katzDeliLine){
if (katzDeliLine.length ==0){
return "There is nobody waiting to be served!"
}
else {
return ("Currently serving " + katzDeliLine.shift ()+".")
}
}


function currentLine (katzDeliLine){
if (katzDeliLine.length ==0){
return "The line is currently empty."
}
else {
var line ="";
for (var i=1;i<katzDeliLine.length; i++)
{line = line + i + ". " + katzDeliLine [(i-1)] + ", "}
return ("The line is currently: " + line +i + ". " + katzDeliLine [(i-1)] )
}
}
