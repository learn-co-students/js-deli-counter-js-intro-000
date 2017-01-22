var katzDeli = [];

var takeANumber = function (katzDeliLine, customerName) {
	katzDeliLine.push(customerName);
	return(`Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`)
}

takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");


var nowServing = function (katzDeliLine) {
	if (katzDeliLine.length === 0) {
		return("There is nobody waiting to be served!") }

	var nowServingCustomer = katzDeliLine[0];
	katzDeliLine.shift();
	return(`Currently serving ${nowServingCustomer}.`);
}

nowServing(katzDeli);

var currentLine = function (katzDeliLine) {
var line = []; //sets up empty array to push to
var i = 0;

	while (i < katzDeliLine.length) {
		line.push(' ' + [i+1] + '. ' + katzDeliLine[i]) // creates an array with 3 parts: 1) a preceding empty space ' ' . The white space makes it easier to read. It is a styling/presentation decision. Note: Double quote marks " " would have worked just as fine. 2) an index number [i + 1] to denote customer line number 3) the customer's name, which comes from the original array katzDeliLine. NOTE: the while loop (via [i] index number) ensures that each index of the new array  - line [ ] - has the following: A) One White Space ' ' B) Customer Number C) Customer Name. The [i] index ensures order for every item in the new array.
		i++;
	}
	if (katzDeliLine.length === 0) {  // checks to see if the original array katzDeliLine[] is empty. If it is, an appropriate message is returned and this function ends because - really - what's the point? Ha!
		return "The line is currently empty.";
	} else
	return(`The line is currently:` + line); // returns a message bound to the array line [ ]
}
