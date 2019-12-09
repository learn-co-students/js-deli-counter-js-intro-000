let katzDeliLine = []

function takeANumber(line,name) {
    line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
    if(Array.isArray(line) && line.length){
    let guest = line[0]
    line.shift()
    return `Currently serving ${guest}.` 
    }
    return "There is nobody waiting to be served!"
}

function currentLine(line) {
    if(Array.isArray(line) && line.length) {
        let places = line.length
        let str = "The line is currently:"
        for (let i = 0; i < places; i++) {
            str += ` ${i+1}. ${line[i]},`
        }
        
        return str.substring(0,str.length - 1)
    } else {
        return "The line is currently empty."
    }
}