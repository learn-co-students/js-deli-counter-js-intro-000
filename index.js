function takeANumber(theLine, newCustomer){

    var placeInLine = theLine.length + 1 // evaluates the current length of line and assigns the place in line to the back of the line

    theLine.push (newCustomer) // adds the new customer to the end of the queue
    return ("Welcome, " + newCustomer + ". You are number " + placeInLine + " in line.")

}

function nowServing(theLine){

  if (theLine.length == 0) {

    return ("There is nobody waiting to be served!")

  } else {

    var customerBeingServed = theLine[0] // the first customer in the array is the customer being served
    theLine.shift() // once the customer being served is establish the line goes down
    theLine

    return ("Currently serving " + customerBeingServed + ".")
  }


}

function currentLine(theLine){

  if (theLine.length == 0) {

    return ("The line is currently empty.")

  } else {

    var i = 0
    var theQueue = []
    var whosInLine = "The line is currently: " // start of concat

    while (i < (theLine.length -1)) { // continues the loop until the penulitmate customer in the line is reached

      theQueue.push([i+1] + ". " + theLine[i]) // adds the customer into the queue and their position
      whosInLine = whosInLine + theQueue[i] + ", " // adds to list who's in the queue apart from the last person
      i++

    }

    theQueue.push([i+1] + ". " + theLine[i]) // adds the last customer into the queue

    whosInLine = whosInLine + theQueue[i] // makes sure there is no comma at the end

    return (whosInLine)
  }

}
