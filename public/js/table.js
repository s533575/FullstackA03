$("#totalTable").hide()
var Table = {
    launch: launch
}

function launch()
{
   
   $("#printtable tr").remove()
   var v1=$("#tableNumber").val()
   const check1 = getTableNumber(v1)
   console.log(v1)
   var v2=$("#endnumber").val()
   console.log(v2)
   const check2 = getTillWhere(v2)
    getTable(check1,check2)
}

function getTableNumber(v1) {
    const DEFAULT_NUMBER = 0;
    const MAX_NUMBER = 100;
    const MIN_NUMBER = 0;
    //const answer = prompt("What is the width of your farm in miles", DEFAULT_WIDTH)
    let number = parseFloat(v1)

    if (Number.isNaN(number)) {
        //alert('The given argument is not a number. Using ' + DEFAULT_NUMBER + '.')
        //number = DEFAULT_NUMBER
        throw Error('The given argument is not a number')
    }
    else if (number > MAX_NUMBER) {
        alert('The given argument is greater than ' + MAX_NUMBER + '. Using ' + MAX_NUMBER + '.')
        number = MAX_NUMBER
    }
    else if (number < MIN_NUMBER) {
        alert('The given argument is less than ' + MIN_NUMBER + '. Using ' + MIN_NUMBER + '.')
        number = MIN_NUMBER
    }
    return number
}

function getTillWhere(v2) {
    const DEFAULT_NUMBER = 0;
    const MAX_NUMBER = 20;
    const MIN_NUMBER = 0;
    //const answer = prompt("What is the length of your farm in miles", DEFAULT_LENGTH)
    let number = parseFloat(v2)

    if (Number.isNaN(number)) {
        //alert('The given argument is not a number. Using ' + DEFAULT_NUMBER + '.')
        //number = DEFAULT_NUMBER
        throw Error('The given argument is not a number')
    }
    else if (number > MAX_NUMBER) {
        alert('The given argument is greater than ' + MAX_NUMBER + '. Using ' + MAX_NUMBER + '.')
        number = MAX_NUMBER
    }
    else if (number < MIN_NUMBER) {
        alert('The given argument is less than ' + MIN_NUMBER + '. Using ' + MIN_NUMBER + '.')
        number = MIN_NUMBER
    }
    return number
}

function getTable(number1,tillValue)
{
    const MIN_VALUE = 1
    var printTable = ""
    if (typeof number1 !== 'number' || typeof tillValue !== 'number') {
        throw Error('The given argument is not a number')
    }
    if (number1 < MIN_VALUE) {
        number1 = MIN_VALUE
    }
    if (tillValue < MIN_VALUE) {
        tillValue = MIN_VALUE
    }
    // if(number1>0 && number1<=100)
    // {
    //     if(tillValue>=0 && tillValue<=20)
    //     {
       for(var i=0;i<=tillValue;i++)
         {
    //      //$("#id1").html(number1)
    //      //$("#id2").html(i)
    //      //$("#id3").html(number1*i)
        printTable+="<tr><td>"+number1+"</td><td>*</td><td>"+i+"</td><td>=</td><td>"+number1*i+"</td></tr>"
        console.log(printTable)
       
         }
    //     }
    //     else
    //     {
    //      alert("You need to enter the table value from 0 to 20 only")
         
    //     }
    // }
    // else
    // {
    //     alert("The numbers should be between 0 to 100")
    // }

    $("#printtable").append(printTable)
    $("#totalTable").show()
}