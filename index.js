function takeANumber(people, name) {
    people.push (name)
    return `Welcome, ${name}. You are number ${people.length} in line.`
}

function nowServing(katzDeliLine) {
   if (katzDeliLine.length > 0){
    let  name = katzDeliLine[0]
    katzDeliLine.shift()
    return (`Currently serving ${name}.`)
   }
   else if (katzDeliLine.length ===  0){
     return "There is nobody waiting to be served!"
   }
}
