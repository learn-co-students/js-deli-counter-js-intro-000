///////////////////////////////////////////////////////////////////////////////
/*
1)
describe('takeANumber', () => {
  var katzDeli;
  var otherDeli;

  beforeEach(() => {
    katzDeli = [];
    otherDeli = ["Steven", "Blake", "Avi"];
  });

  it('adds a person to the line', () => {
    expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
    expect(katzDeli).toEqual(['Ada']);
  });

  it('appends the person the end of the line if there are already people on it', () => {
    expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
    expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
  });

  it("properly handles multiple people being added", () => {
    takeANumber(katzDeli, 'Ada');
    takeANumber(katzDeli, 'Grace');
    takeANumber(katzDeli, 'Kent');

    expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
  });
});

*/
var katzDeli = [] ;
//var katzDeliLine = [];

 function takeANumber(arrLine, strNewName) {
    arrLine.push(strNewName) ;
    var intPeopleAMT = arrLine.length ;
    return `Welcome, ${strNewName}. You are number ${ intPeopleAMT } in line.` ;
 }

/*

*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
2)
describe('nowServing', () => {
  it('returns the line is empty when no one is on line', () => {
    expect(nowServing([])).toEqual("There is nobody waiting to be served!");
  });

  it('returns an announcement about the person it is serving, and shifts the line', () => {
    const deliLine = ["Steven", "Blake", "Avi"]
    expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
    expect(deliLine).toEqual(["Blake", "Avi"]);
  });
});

*/
function nowServing(arrLine) {

var strCurLine = "Currently serving " ;
var intArrSize = arrLine.length  ;

if  (intArrSize == 0) {
    strCurLine = "There is nobody waiting to be served!" ;
} else {
    strCurLine = strCurLine  +  arrLine.shift() + "." ;
}


   return  strCurLine ;
}

/*

*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
3)
describe('currentLine(line)', () => {
  it('returns "The line is currently empty." if no one is in line', () => {
    expect(currentLine([])).toEqual("The line is currently empty.");
  });

  it('says who is in line when there are people waiting', () => {
    expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
  });
});
*/
function currentLine(arrLine) {

var strCurLine = "The line is currently: " ;
var intArrSize = arrLine.length  ;

if  (intArrSize == 0) {
    strCurLine =  "The line is currently empty." ;
} else {

                                        for ( var i = 0 ; i <= intArrSize - 1 ; i++ ){
                                            strCurLine = strCurLine + `${i+1}. ${arrLine[i]}${i<intArrSize-1? ", " : ""}`;
                                        } //end for
} //end else
   return  strCurLine ;
}

/*

*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
