/*Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept two parameters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as "Welcome, Ada. You are number 1 in line.". And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
*/

// currentLineofPeopleArray is array of names of everyone in line
// newPersonsName  is name of the most recent person to wanting to join currentLineofPeople-Array


function takeANumber(currentLineofPeopleArray, newPersonsName){
    //add newPersonsName to end of currentLineofPeople-Array
  currentLineofPeopleArray.push(newPersonsName)

    //write welcomeMessage using newPersonsName & newPersonsName position in line by knowing new person is always the last person to join which is the length of the array
  let welcomeMessage = `Welcome, ${newPersonsName}. You are number ${currentLineofPeopleArray.length} in line.`

    //return the welcomeMessage
  return welcomeMessage

} //end takeANumber()

///////////////////////////////
///////////////////////////////
/*Build a function nowServing. This function should accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
*/

//currentLineofPeople is array of who is now in line waiting to get served

function nowServing(currentLineofPeopleArray){
    //purpose of If statement
    //if currentLineofPeople array has no one in line, return a message of "no one waiting"
  if (currentLineofPeopleArray.length === 0){
    return "There is nobody waiting to be served!"
  }

  else{
    //Puprose of else statement:
    //put array[0] person into firstPersoninLine and return it with a greeting
    //remove or  'shift' the first person off the currentLineofPeople array

  let firstPersoninLine = currentLineofPeopleArray[0]  //get the name of the first person in line
  currentLineofPeopleArray.shift()   //remove the first person in line

  return `Currently serving ${firstPersoninLine}.`
  }
} // end nowServing()

///////////////////////////////
///////////////////////////////
/*Build a function currentLine that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". You don't have to use katzDeliLine as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return "The line is currently empty."
*/

//currentlyWaitingInLineArray is a list of names of people waiting

function currentLine(currentLineofPeopleArray){
      //if no one in line, return message 'The line is currently empty.'
    if (currentLineofPeopleArray.length === 0){
      return "The line is currently empty."
    }

      //else return message with names of people and their position in line
    else{
      //loop through array starting at [0] to get name and turn counter+1 into IRL position and store name and IRLPosition innew variable. Once done looping, return message about who is in what position.
      var namesAndPositionsInLine = []

      for (let position = 0; position < currentLineofPeopleArray.length; position+= 1){
          let IRLposition = position + 1    //to get the IRL postion, need to add 1 to array position

          namesAndPositionsInLine.push(` ${IRLposition}. ${currentLineofPeopleArray[position]}`)
          // console.log(position)    used to debug code and see what is happening
        }

        //  console.log(`The line is currently:${namesAndPositionsInLine}`) used to debug code and see what is happening

        return `The line is currently:${namesAndPositionsInLine}`
    }
} //end currentLine()
